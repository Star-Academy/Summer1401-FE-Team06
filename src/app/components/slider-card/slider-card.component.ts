import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {IconType} from '../../enum/icon-type.enum';
import {Product} from '../main-cards/models/product';
import {IconColor} from '../../enum/icon-color.enum';
import {ProductNew} from '../../models/productNew.model';
import {GameService} from '../../services/game.service';
import {AuthService} from '../../services/auth.service';
import {FavoriteWishlistService} from '../../services/favorite-wishlist.service';

@Component({
    selector: 'app-slider-card',
    templateUrl: './slider-card.component.html',
    styleUrls: ['./slider-card.component.scss'],
})
export class SliderCardComponent {
    @Input() public product!: ProductNew;
    public IconType = IconType;
    public IconColor = IconColor;

    public constructor(
        private gameService: GameService,
        private authService: AuthService,
        private favoriteWishlistService: FavoriteWishlistService
    ) {}
    public addAndRemoveFavorite(gameId: number): void {
        this.product.isFavorite = this.favoriteWishlistService.addAndRemoveFavorite(this.product.isFavorite, gameId);
    }

    public addAndRemoveWishlist(gameId: number): void {
        this.product.isWishList = this.favoriteWishlistService.addAndRemoveWishlist(this.product.isWishList, gameId);
    }
}
