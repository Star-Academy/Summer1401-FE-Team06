import {Component} from '@angular/core';
import {GameService} from '../../../../services/game.service';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
    public displayRemoveBtn: boolean = false;

    public constructor(public gameService: GameService) {}

    public async BtnHandler(situation: string): Promise<void> {
        if (situation === 'action') {
            this.displayRemoveBtn = true;
            await this.gameService.search();
        } else if (situation === 'remove') {
            this.displayRemoveBtn = false;
            this.gameService.platforms.forEach((x) => (x.isEnabled = false));
            this.gameService.genres.forEach((x) => (x.isEnabled = false));
            this.gameService.maximumRating = 100;
            this.gameService.minimumRating = 0;
            this.gameService.onlyPublishedGames = false;
        }
    }
}
