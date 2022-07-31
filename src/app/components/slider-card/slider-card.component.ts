import {Component, Input, OnInit} from '@angular/core';
import {IconType} from '../../enum/icon-type.enum';
import {Product} from '../main-cards/models/product';

@Component({
    selector: 'app-slider-card',
    templateUrl: './slider-card.component.html',
    styleUrls: ['./slider-card.component.scss'],
})
export class SliderCardComponent {
    @Input() public product!: Product;
    public iconType = IconType;
}
