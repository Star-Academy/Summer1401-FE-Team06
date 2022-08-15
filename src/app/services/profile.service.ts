import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {User} from '../models/user.model';
import {ApiService} from './api.service';
import {API_FAVORITES_ADD, API_FAVORITES_ALL, API_FAVORITES_REMOVE} from '../utils/api.utils';
import {Game} from '../models/game/game.model';
import {ApiError} from '../models/api-error.model';

@Injectable({
    providedIn: 'root',
})
export class ProfileService {
    public user: User | null = this.authService.userInfo;
    public birthday: string | null = null;
    public constructor(public authService: AuthService, private apiService: ApiService) {}

    public async getUserInfo(): Promise<void> {
        await this.authService.fetchLoggedInUserInfo();
        this.user = this.authService.userInfo;
        if (this.user?.dateOfBirth) this.birthday = new Date(this.user?.dateOfBirth).toLocaleDateString();
    }

    public async allFavorites(): Promise<Game[] | ApiError | null> {
        let option = {url: API_FAVORITES_ALL, body: {token: this.authService.token}};
        return await this.apiService.postRequest<Game[] | ApiError>(option);
    }

    public async addFavorite(id: number): Promise<ApiError | {} | null> {
        let option = {url: API_FAVORITES_ADD, body: {token: this.authService.token, id}};
        return await this.apiService.postRequest<ApiError | {}>(option);
    }

    public async removeFavorite(id: number): Promise<ApiError | {} | null> {
        let option = {url: API_FAVORITES_REMOVE, body: {token: this.authService.token, id}};
        return await this.apiService.postRequest<ApiError | {}>(option);
    }
}
