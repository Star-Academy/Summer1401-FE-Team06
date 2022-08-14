import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProfileService} from '../../services/profile.service';
import {AuthService} from '../../services/auth.service';
import {ResultMessageService} from '../../services/result-message.service';
import {ProductNew} from '../../models/productNew.model';
import {GameService} from '../../services/game.service';
import {Subscription} from 'rxjs';
import {UtilityService} from '../../services/utility.service';
import {LoadingService} from '../../services/loading.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
    private DEFAULT_PROFILE_COVER: string = 'wawcacqxh2nmc39nbia2';

    private subscription!: Subscription;
    public favoriteList: ProductNew[] = [];
    public profileCover: string | string[] = this.DEFAULT_PROFILE_COVER;

    public constructor(
        public profileService: ProfileService,
        private authService: AuthService,
        private resultMessageService: ResultMessageService,
        private gameService: GameService,
        private utilityService: UtilityService,
        private loadingService: LoadingService
    ) {}

    public ngOnInit(): void {
        this.loadingService.show();
        this.subscription = this.gameService.favoriteList.subscribe((favoriteList: ProductNew[]) => {
            this.favoriteList = favoriteList;
            const generatedRandomNumber = ProfileComponent.generateRandomNumber(this.favoriteList.length);
            const cardSelected: ProductNew = this.favoriteList[generatedRandomNumber];

            if (this.favoriteList.length < 1) {
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
    private static generateRandomNumber(maxValue: number): number {
        return Math.floor(Math.random() * maxValue);
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
