import {Component, Input} from '@angular/core';
import {ProductNew} from '../../../models/productNew.model';

@Component({
    selector: 'app-wish-list',
    templateUrl: './wish-list.component.html',
    styleUrls: ['./wish-list.component.scss'],
})
export class WishListComponent {
    @Input() cards: ProductNew[] = [];
}
