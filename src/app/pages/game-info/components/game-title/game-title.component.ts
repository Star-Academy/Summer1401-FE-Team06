import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-game-title',
    templateUrl: './game-title.component.html',
    styleUrls: ['./game-title.component.scss'],
})
export class GameTitleComponent {
    @Input() public title: string = '';
    @Input() public description: string = '';
}
