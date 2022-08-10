export interface Game {
    id: number;
    cover?: GameImage;
    releaseDate: number | null;
    genres: string[];
    name: string;
    platforms: string[];
    rating: number | null;
    ratingCount?: number;
    screenshots?: GameImage[];
    storyline?: string;
    summary?: string;
}

export interface GameImage {
    id: string;
    width: number;
    height: number;
}
