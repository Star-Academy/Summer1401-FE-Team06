import {Component, Input, OnInit} from '@angular/core';
import {IconType} from '../../../../enum/icon-type.enum';
import {Game} from '../../../../models/game.model';

@Component({
    selector: 'app-game-business',
    templateUrl: './game-business.component.html',
    styleUrls: ['./game-business.component.scss'],
})
export class GameBusinessComponent {
    public IconType = IconType;
    @Input() gameInfo!: Game;
}
