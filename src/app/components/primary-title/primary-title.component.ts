import {Component, Input} from '@angular/core';
import {PrimaryTitleDirection} from '../../enum/primary-title-direction.enum';

@Component({
    selector: 'app-primary-title',
    templateUrl: './primary-title.component.html',
    styleUrls: ['./primary-title.component.scss'],
})
export class PrimaryTitleComponent {
    @Input() public title: string = '';
    @Input() public direction: PrimaryTitleDirection = PrimaryTitleDirection.RIGHT;
}
