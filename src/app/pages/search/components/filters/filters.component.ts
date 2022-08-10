import {Component} from '@angular/core';
import {GameService} from '../../../../services/game.service';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
    public displayRemoveBtn: boolean = false;

    public constructor(public gameService: GameService) {
    }
}
