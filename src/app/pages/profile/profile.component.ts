import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from '../../components/main-cards/models/product';
import {Products} from '../../components/main-cards/sample-data';
import {ProfileService} from '../../services/profile.service';
import {User} from '../../models/user.model';
import {AuthService} from '../../services/auth.service';
import {ResultMessageService} from '../../services/result-message.service';
import {ProductNew} from '../../models/productNew.model';
import {GameService} from '../../services/game.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    private subscription!: Subscription;
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
        private resultMessageService: ResultMessageService,
        private gameService: GameService
    ) {
        this.profileService.getUserInfo().then();
        this.user = {...this.profileService.user} as User;
    }

    public ngOnInit(): void {
        this.subscription = this.gameService.favoriteList.subscribe((favoriteList: ProductNew[]) => {
            this.cards = favoriteList;
        });
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
