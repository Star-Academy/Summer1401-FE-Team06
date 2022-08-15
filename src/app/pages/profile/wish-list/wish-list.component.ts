import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductNew} from '../../../models/productNew.model';
import {Subscription} from 'rxjs';
import {GameService} from '../../../services/game.service';

@Component({
    selector: 'app-wish-list',
    templateUrl: './wish-list.component.html',
    styleUrls: ['./wish-list.component.scss'],
})
export class WishListComponent implements OnInit, OnDestroy {
    public wishlistList!: ProductNew[];

    public subscription!: Subscription;

    public constructor(private gameService: GameService) {}
    public ngOnInit(): void {
        this.wishlistList = this.gameService.currentWishlistList;
        this.subscription = this.gameService.wishlistList.subscribe((wishlistList: ProductNew[]) => {
            this.wishlistList = wishlistList;
        });
    }
    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
