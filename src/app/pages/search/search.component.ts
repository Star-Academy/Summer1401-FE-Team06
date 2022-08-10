import {Component, OnInit} from '@angular/core';
import {Product} from '../../components/main-cards/models/product';
import {Products} from '../../components/main-cards/sample-data';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
    public cards: Product[] = Products;
}
