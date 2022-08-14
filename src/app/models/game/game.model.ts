import {AgeRating} from './game-interface/age-rating.model';
import {GameImage} from './game-interface/game-image.model';
import {Item} from './game-interface/item.model';
import {InvolvedCompany} from './game-interface/involved-company.model';
import {Website} from './game-interface/website.model';

export interface Game {
    id: number;
    ageRatings: AgeRating[];
    artworks: GameImage[];
    cover: GameImage;
    gameModes: Item[];
    genres: Item[];
    involvedCompanies: InvolvedCompany[];
    keywords: Item[];
    name: string;
    platforms: Item[];
    playerPerspectives: Item[];
    rating: number;
    ratingCount: number;
    releaseDate: number;
    screenshots: GameImage[];
    storyline: string;
    summary: string;
    themes: Item[];
    videos: Item[];
    websites: Website[];
    price: number;
    priceOnSale: number;
}
