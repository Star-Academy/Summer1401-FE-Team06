import {Component, Input, OnInit} from '@angular/core';
import {detailListModel} from '../../game-details.model';

@Component({
    selector: 'app-game-detail',
    templateUrl: './game-detail.component.html',
    styleUrls: ['./game-detail.component.scss'],
})
export class GameDetailComponent {
    @Input() public detailList!: detailListModel;

    public convertDetailNameToList(): string {
        const convertedList = this.detailList.list.map((gameList) => gameList.name);
        const convertToString = convertedList.join(', ');
        return convertToString;
    }
}
