import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GameService} from '../../../../services/game.service';

@Component({
    selector: 'app-range',
    templateUrl: './range.component.html',
    styleUrls: ['./range.component.scss'],
})
export class RangeComponent {
    @Input() public title: string = '';
    @Input() public value: number | null = 0;

    @Output() public valueChange = new EventEmitter<number>();
}
