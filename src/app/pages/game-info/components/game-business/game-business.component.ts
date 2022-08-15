import {Component, Input, OnInit} from '@angular/core';
import {IconColor} from 'src/app/enum/icon-color.enum';
import {IconType} from '../../../../enum/icon-type.enum';
import {GameInfo} from '../../../../models/game/game-info.model';
import {FavoriteWishlistService} from '../../../../services/favorite-wishlist.service';

@Component({
    selector: 'app-game-business',
    templateUrl: './game-business.component.html',
    styleUrls: ['./game-business.component.scss'],
})
export class GameBusinessComponent {
    public IconType = IconType;
    public IconColor = IconColor;
    @Input() gameInfo!: GameInfo;

    public constructor(private favoriteWishlistService: FavoriteWishlistService) {}

    public addAndRemoveFavorite(gameId: number): void {
        this.gameInfo.isFavorite = this.favoriteWishlistService.addAndRemoveFavorite(this.gameInfo.isFavorite, gameId);
    }

    public addAndRemoveWishlist(gameId: number): void {
        this.gameInfo.isWishList = this.favoriteWishlistService.addAndRemoveWishlist(this.gameInfo.isWishList, gameId);
    }
}
