import {Component, Input, OnInit} from '@angular/core';
import {IconType} from '../../enum/icon-type.enum';
import {Product} from '../main-cards/models/product';
import {IconColor} from '../../enum/icon-color.enum';
import {ProductNew} from '../../models/productNew.model';
import {GameService} from '../../services/game.service';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-slider-card',
    templateUrl: './slider-card.component.html',
    styleUrls: ['./slider-card.component.scss'],
})
export class SliderCardComponent {
    @Input() public product!: ProductNew;
    public IconType = IconType;
    public IconColor = IconColor;

    public constructor(private gameService: GameService, private authService: AuthService) {}
    public addAndRemoveFavorite(gameId: number): void {
        if (this.authService.token) {
            if (!this.product.isFavorite) this.addFavorite(gameId);
            else this.removeFavorite(gameId);
        }
    }
    private addFavorite(gameId: number): void {
        this.gameService.addGameToFavoriteList(gameId);
        this.product.isFavorite = true;
    }
    private removeFavorite(gameId: number): void {
        this.gameService.removeGameFromFavoriteList(gameId);
        this.product.isFavorite = false;
    }

    public addAndRemoveWishlist(gameId: number): void {
        if (this.authService.token) {
            if (!this.product.isWishList) this.addWishlist(gameId);
            else this.removeWishlist(gameId);
        } else {
            //    TODO / resultMessage begim sabt nam kone
        }
    }
    private addWishlist(gameId: number): void {
        this.gameService.addGameToWishlistList(gameId);
        this.product.isWishList = true;
    }
    private removeWishlist(gameId: number): void {
        this.gameService.removeGameFromWishlistList(gameId);
        this.product.isWishList = false;
    }
}
