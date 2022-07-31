import {Component, Input, OnInit} from '@angular/core';
import {Products} from '../../../main-cards/sample-data';
import {Product} from '../../../main-cards/models/product';

@Component({
    selector: 'app-slider-section',
    templateUrl: './slider-section.component.html',
    styleUrls: ['./slider-section.component.scss'],
})
export class SliderSectionComponent {
    public cards: Product[] = Products;
}
