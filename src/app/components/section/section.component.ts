import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.scss'],
})
export class SectionComponent {
    @Input() public primaryTitle: string = '';
    @Input() public backgroundColorClassName: string = '';
    @Input() public placeComponent: string = '';
    @Input() public titleDirection: string = '';
}
