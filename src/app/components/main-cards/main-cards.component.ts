import {Component, OnInit, Input, Output} from '@angular/core';
import {Product} from './models/product';
import {Products} from './sample-data';

@Component({
    selector: 'app-main-cards',
    templateUrl: './main-cards.component.html',
    styleUrls: ['./main-cards.component.scss'],
})
export class MainCardsComponent implements OnInit {
    public cards: Product[] = Products;
    @Input() public bgColor: string = '';
    constructor() {}

    ngOnInit(): void {}
}
