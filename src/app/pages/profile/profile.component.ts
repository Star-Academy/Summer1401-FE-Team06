import {Component, ViewChild} from '@angular/core';
import {Product} from '../../components/main-cards/models/product';
import {Products} from '../../components/main-cards/sample-data';
import {ProfileService} from '../../services/profile.service';
import {User} from '../../models/user.model';
import {AuthService} from '../../services/auth.service';
import {ResultMessageService} from '../../services/result-message.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
    public cards: Product[] = Products;
    public favorites: boolean = true;
    public user: User = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
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
        response
            ? this.resultMessageService.show(response.message, 'error')
            : (this.user = {...this.profileService.user} as User);
    }
}
