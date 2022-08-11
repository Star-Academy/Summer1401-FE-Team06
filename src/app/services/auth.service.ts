import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {User} from '../models/user.model';
import {API_USER_ALTER, API_USER_AUTH, API_USER_LOGIN, API_USER_ONE, API_USER_REGISTER} from '../utils/api.utils';
import {TokenObject} from '../models/token-object.model';
import {Router} from '@angular/router';
import {UserLoginData} from '../models/api/user-login-data.model';
import {UserRegisterData} from '../models/api/user-register-data.model';
import {ApiError} from '../models/api-error.model';
import {ProfileService} from './profile.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public cachedIsLoggedIn: boolean | null = null;
    public cachedUserId: number | null = null;
    public cachedUser: User | null = null;
    public userInfo: User | null = null;
    public constructor(private router: Router, private apiService: ApiService) {
        this.auth().then();
    }

    public get token(): string {
        return localStorage.getItem('token') || '';
    }

    public async isLoggedIn(): Promise<boolean> {
        if (this.cachedIsLoggedIn !== null) return this.cachedIsLoggedIn;
        return await this.auth();
    }

    public async login(user: UserLoginData): Promise<boolean> {
        const response = await this.apiService.postRequest<TokenObject>({url: API_USER_LOGIN, body: user});
        if (!response) return false;

        await this.saveCache(response.token, true, response.id ?? null);
        return true;
    }

    public async singUp(user: UserRegisterData): Promise<boolean> {
        const response = await this.apiService.postRequest<TokenObject>({url: API_USER_REGISTER, body: user});
        if (!response) return false;

        await this.saveCache(response.token, true, response.id ?? null);
        return true;
    }

    public async fetchLoggedInUserInfo(): Promise<User | null> {
        const response = await this.apiService.getRequest<{user: User}>({url: `${API_USER_ONE}/${this.cachedUserId}`});
        this.userInfo = response?.user || null;
        if (this.userInfo?.dateOfBirth)
            this.userInfo.dateOfBirth = new Date(this.userInfo?.dateOfBirth).toLocaleDateString();
        return response?.user || null;
    }

    public async logout(): Promise<void> {
        await this.saveCache(null, false, null);
        await this.router.navigateByUrl('/');
    }

    private async auth(): Promise<boolean> {
        const response = await this.apiService.postRequest<TokenObject>({
            url: API_USER_AUTH,
            body: {token: this.token},
            showError: false,
        });

        await this.saveCache(this.token, !!response, response?.id ?? null);
        return !!this.cachedIsLoggedIn;
    }

    public async alter(user: User): Promise<ApiError | null> {
        const response = await this.apiService.postRequest<ApiError | null>({
            url: API_USER_ALTER,
            body: user,
        });
        if (!response) await this.fetchLoggedInUserInfo();
        return response;
    }

    private async saveCache(token: string | null, isLoggedIn: boolean, userId: number | null): Promise<void> {
        if (!!token) localStorage.setItem('token', token);
        else localStorage.removeItem('token');

        this.cachedIsLoggedIn = isLoggedIn;
        this.cachedUserId = userId;

        if (this.cachedUserId) this.cachedUser = await this.fetchLoggedInUserInfo();
    }
}
