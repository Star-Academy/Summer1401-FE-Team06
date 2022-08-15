import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ProductNew} from '../../../models/productNew.model';
import {GameService} from '../../../services/game.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit, OnDestroy {
    public favoriteList: ProductNew[] = [];
    public subscription!: Subscription;

    public constructor(private gameService: GameService) {}
    public ngOnInit(): void {
        this.favoriteList = this.gameService.currentFavoriteList;
        this.subscription = this.gameService.favoriteList.subscribe((favoriteList: ProductNew[]) => {
            this.favoriteList = favoriteList;
        });
    }
    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
