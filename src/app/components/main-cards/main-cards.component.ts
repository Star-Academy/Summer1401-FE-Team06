import {Component, OnInit, Input, Output} from '@angular/core';
import {Product} from './models/product';
import {Products} from './sample-data';
import {ProductNew} from '../../models/productNew.model';
import {Router} from '@angular/router';
import {SearchService} from '../../services/search.service';

@Component({
    selector: 'app-main-cards',
    templateUrl: './main-cards.component.html',
    styleUrls: ['./main-cards.component.scss'],
})
export class MainCardsComponent {
    @Input() public cards: ProductNew[] = [];
    @Input() public queryParamsFilter: object = {};
    public constructor(private searchService: SearchService) {}
    public async searchWithFilter(): Promise<void> {
        await this.searchService.searchWithFilter(this.queryParamsFilter);
    }
}
