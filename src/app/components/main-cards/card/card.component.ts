import {Component, Input, OnInit, Output} from '@angular/core';
import {Product} from '../models/product';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent {
    @Input() public product!: Product;
}
