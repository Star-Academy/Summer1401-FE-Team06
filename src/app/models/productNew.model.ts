import {GameImage} from './game.model';

export interface ProductNew {
    id: number;
    cover: GameImage;
    name: string;
    price: number;
    priceOnSale: number;
    isFavorite: boolean;
}
