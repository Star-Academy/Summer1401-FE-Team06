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

export interface AgeRating {
    id: number;
    category: number;
    rating: number;
}

export interface Company {
    id: number;
    country: number;
    description: string;
    logo: GameImage;
    name: string;
    url: string;
    websites: Website[];
}

export interface InvolvedCompany {
    id: number;
    developer: boolean;
    porting: boolean;
    publisher: boolean;
    supporting: boolean;
    company: Company;
}

export interface GameImage {
    id: string;
    width: number;
    height: number;
}

export interface Item {
    id: number;
    name: string;
}

export interface Website {
    id: number;
    category: number;
    trusted: boolean;
    url: string;
}
