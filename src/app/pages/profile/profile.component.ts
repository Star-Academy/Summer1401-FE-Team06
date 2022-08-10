import {Component} from '@angular/core';
import {Product} from '../../components/main-cards/models/product';
import {Products} from '../../components/main-cards/sample-data';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
    public active: number = 1;
    public cards: Product[] = Products;

    public changingClickHandler(_active: number): void {
        this.active = _active;
    }
}
