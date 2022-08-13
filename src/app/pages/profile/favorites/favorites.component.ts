import {Component, Input} from '@angular/core';
import {ProductNew} from '../../../models/productNew.model';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
    @Input() cards: ProductNew[] = [];
}
