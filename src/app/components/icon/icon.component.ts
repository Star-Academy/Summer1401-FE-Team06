import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IconType} from '../../enum/icon-type.enum';
import {IconColor} from '../../enum/icon-color.enum';
import {Subscription} from 'rxjs';
import {GameService} from '../../services/game.service';

@Component({
    selector: 'app-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit, OnDestroy {
    @Input() public iconClass: IconType = IconType.SHOP;
    @Input() public iconColor: IconColor = IconColor.WHITE;
    @Input() public haveBackgroundColor: boolean = true;
    @Input() public count: number = 0;

    public subscription!: Subscription;

    public constructor(private gameService: GameService) {}

    public ngOnInit(): void {
        if (this.iconClass === IconType.SHOP) {
            this.count = this.gameService.wishlistListCount.value;

            this.subscription = this.gameService.wishlistListCount.subscribe((count: number) => {
                this.count = count;
            });
        } else if (this.iconClass === IconType.WISH_LIST) {
            this.count = this.gameService.favoriteListCount.value;
            this.subscription = this.gameService.favoriteListCount.subscribe((count: number) => {
                this.count = count;
            });
        }
    }

    public ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
}
