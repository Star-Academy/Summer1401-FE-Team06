import {Component, Input} from '@angular/core';
import {User} from '../../../models/user.model';
import {ProfileService} from '../../../services/profile.service';
import {AuthService} from '../../../services/auth.service';
import {ResultMessageService} from '../../../services/result-message.service';

@Component({
    selector: 'app-edit-profile',
    templateUrl: './edit-profile.component.html',
    styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent {
    public user: User = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        gender: true,
    };

    public constructor(
        public profileService: ProfileService,
        private authService: AuthService,
        private resultMessageService: ResultMessageService
    ) {
        this.profileService.getUserInfo().then();
        this.user = {...this.profileService.user} as User;
    }

    public async formSubmitHandler(): Promise<void> {
        const response = await this.authService.alter(this.user);
        if (!response?.message) {
            await this.profileService.getUserInfo();
            this.resultMessageService.show('تغییرات با موفقیت انجام شد', 'success');
            return;
        }
        this.resultMessageService.show(response.message, 'error');
    }
}
