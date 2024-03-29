import {Component, OnInit, Input, Output} from '@angular/core';
import {Product} from './models/product';
import {Products} from './sample-data';

@Component({
    selector: 'app-main-cards',
    templateUrl: './main-cards.component.html',
    styleUrls: ['./main-cards.component.scss'],
})
export class MainCardsComponent {
    public cards: Product[] = Products;
}
