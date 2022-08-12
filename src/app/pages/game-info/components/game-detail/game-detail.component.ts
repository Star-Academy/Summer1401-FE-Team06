import {Component, Input, OnInit} from '@angular/core';
import {listModel} from '../../game-details.model';

@Component({
    selector: 'app-game-detail',
    templateUrl: './game-detail.component.html',
    styleUrls: ['./game-detail.component.scss'],
})
export class GameDetailComponent {
    @Input() public list: listModel[] = [];
    @Input() public title: string = '';

    public convertDetailNameToList(): string {
        const convertedList = this.list.map((gameList) => gameList.name).slice(0, 5);
        const convertToString = convertedList.join(', ');
        return convertToString;
    }
}
