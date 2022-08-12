import {Component, ViewChild} from '@angular/core';
import {Product} from '../../components/main-cards/models/product';
import {Products} from '../../components/main-cards/sample-data';
import {ProfileService} from '../../services/profile.service';
import {User} from '../../models/user.model';
import {AuthService} from '../../services/auth.service';
import {ResultMessageService} from '../../services/result-message.service';
import {ProductNew} from "../../models/productNew.model";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
    public cards: ProductNew[] = [];
    public favorites: boolean = true;
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
