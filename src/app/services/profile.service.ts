import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {User} from '../models/user.model';

@Injectable({
    providedIn: 'root',
})
export class ProfileService {
    public user: User | null = this.authService.userInfo;

    public constructor(public authService: AuthService) {}

    public async getUserInfo(): Promise<void> {
        await this.authService.fetchLoggedInUserInfo();
    }
}
