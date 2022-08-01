import {Component, Input, OnInit} from '@angular/core';
import {IconType} from '../../enum/icon-type.enum';
import {Product} from '../main-cards/models/product';
import {IconColor} from '../../enum/icon-color.enum';

@Component({
    selector: 'app-slider-card',
    templateUrl: './slider-card.component.html',
    styleUrls: ['./slider-card.component.scss'],
})
export class SliderCardComponent {
    @Input() public product!: Product;
    public iconType = IconType;
    public iconColor = IconColor;
}
