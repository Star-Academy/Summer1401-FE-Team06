import {AfterViewInit, Component, Input} from '@angular/core';

@Component({
    selector: 'app-game-rating',
    templateUrl: './game-rating.component.html',
    styleUrls: ['./game-rating.component.scss'],
})
export class GameRatingComponent implements AfterViewInit {
    @Input() public ratePoint: number = 0;
    public ngAfterViewInit(): void {
        this.ratePoint = this.ratePoint / 20;
    }
    public createStars(count: number, ratePoint: number): number[] {
        return new Array(count).fill(0).map((n, index) => {
            if (ratePoint >= index + 1) {
                return 1;
            }
            return n;
        });
    }
}
