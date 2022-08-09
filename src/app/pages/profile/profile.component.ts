import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
    public constructor(private authService: AuthService) {}

    public async logoutButtonClickHandler(): Promise<void> {
        await this.authService.logout();
    }
}
