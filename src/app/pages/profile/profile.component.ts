import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProfileService} from '../../services/profile.service';
import {User} from '../../models/user.model';
import {AuthService} from '../../services/auth.service';
import {ResultMessageService} from '../../services/result-message.service';
import {ProductNew} from '../../models/productNew.model';
import {GameService} from '../../services/game.service';
import {Subscription} from 'rxjs';
import {Game, GameImage} from '../../models/game.model';
import {UtilityService} from '../../services/utility.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
    private DEFAULT_PROFILE_COVER: string = 'wawcacqxh2nmc39nbia2';

    private subscription!: Subscription;
    public cards: ProductNew[] = [];
    public profileCover: string | string[] = this.DEFAULT_PROFILE_COVER;
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
        private gameService: GameService,
        private utilityService: UtilityService
    ) {
        this.profileService.getUserInfo().then();
        this.user = {...this.profileService.user} as User;
    }

    public ngOnInit(): void {
        this.subscription = this.gameService.favoriteList.subscribe((favoriteList: ProductNew[]) => {
            this.cards = favoriteList;
            const generatedRandomNumber = this.generateRandomNumber(this.cards.length);
            const cardSelected: ProductNew = this.cards[generatedRandomNumber];

            if (this.cards.length < 1) {
                console.log('man dakhellam');
                this.profileCover = this.DEFAULT_PROFILE_COVER;
            } else {
                this.profileCover = this.utilityService.gameImageGenerate(
                    cardSelected.artworks,
                    cardSelected.screenshots,
                    cardSelected.cover
                );
            }
        });
    }
    private generateRandomNumber(maxValue: number): number {
        return Math.floor(Math.random() * maxValue);
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

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
