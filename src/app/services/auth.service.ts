import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {User} from '../models/user.model';
import {API_USER_AUTH, API_USER_LOGIN, API_USER_REGISTER} from '../utils/api.utils';
import {TokenObject} from '../models/token-object.model';
import {IdObject} from '../models/id-object.model';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public constructor(private apiService: ApiService) {}

    public async login(user: User): Promise<boolean> {
        const data = await this.apiService.post<TokenObject>(API_USER_LOGIN, user);

        if (data?.token) {
            localStorage.setItem('token', data?.token);
        }
        return !!data;
    }

    public async isLoggedIn(): Promise<boolean> {
        const token = localStorage.getItem('token') || '';

        const data = await this.apiService.post<IdObject>(API_USER_AUTH, {token});
        return !!data;
    }
    public async singUp(user: User): Promise<boolean> {
        const data = await this.apiService.post<TokenObject>(API_USER_REGISTER, user);
        console.log(data);
        if (data?.token && data?.id) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('id', data.id.toString());
        }
        return !!data;
    }
}
