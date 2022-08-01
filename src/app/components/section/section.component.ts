import {Component, Input} from '@angular/core';
import {PrimaryTitleDirection} from '../../enum/primary-title-direction.enum';

@Component({
    selector: 'app-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.scss'],
})
export class SectionComponent {
    @Input() public primaryTitle: string = '';
    @Input() public backgroundColorClassName: string = '';
    @Input() public placeComponent: string = '';
    @Input() public titleDirection: PrimaryTitleDirection = PrimaryTitleDirection.RIGHT;
}
