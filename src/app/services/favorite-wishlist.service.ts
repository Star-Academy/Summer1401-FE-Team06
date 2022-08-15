import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {GameService} from './game.service';
import {BehaviorSubject} from 'rxjs';
import {ProductNew} from '../models/productNew.model';

@Injectable({
    providedIn: 'root',
})
export class FavoriteWishlistService {
    public constructor(private authService: AuthService, private gameService: GameService) {}
    public addAndRemoveFavorite(isFavorite: boolean, gameId: number): boolean {
        if (this.authService.token) {
            let status: boolean;
            if (!isFavorite) status = this.addFavorite(gameId);
            else status = this.removeFavorite(gameId);
            return status;
        }
        //message
        return isFavorite;
    }
    private addFavorite(gameId: number): boolean {
        this.gameService.addGameToFavoriteList(gameId);
        return true;
    }

    private removeFavorite(gameId: number): boolean {
        this.gameService.removeGameFromFavoriteList(gameId);
        return false;
    }

    public addAndRemoveWishlist(isWishList: boolean, gameId: number): boolean {
        if (this.authService.token) {
            let status: boolean;
            if (!isWishList) status = this.addWishlist(gameId);
            else status = this.removeWishlist(gameId);
            return status;
        }
        //message
        return isWishList;
    }

    private addWishlist(gameId: number): boolean {
        this.gameService.addGameToWishlistList(gameId);
        return true;
    }

    private removeWishlist(gameId: number): boolean {
        this.gameService.removeGameFromWishlistList(gameId);
        return false;
    }
}
