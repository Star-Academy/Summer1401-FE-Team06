import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-slider-section',
    templateUrl: './slider-section.component.html',
    styleUrls: ['./slider-section.component.scss'],
})
export class SliderSectionComponent {
    @Input() public primaryTitle: string = ' ';
    @Input() public bgColor: string = '';
}
