import {Website} from './website.model';
import {GameImage} from './game-image.model';

export interface Company {
    id: number;
    country: number;
    description: string;
    logo: GameImage;
    name: string;
    url: string;
    websites: Website[];
}
