import {Injectable} from '@angular/core';
import {GameImage} from '../models/game/game-interface/game-image.model';

@Injectable({
    providedIn: 'root',
})
export class UtilityService {
    public gameImageGenerate(artWork: GameImage[], screenShots: GameImage[], cover?: GameImage): string[] {
        let mergedImages = [
            ...this.convertGameImageToId(artWork),
            ...this.convertGameImageToId(screenShots),
        ];
        if (mergedImages.length < 1 && cover) {
            mergedImages = [...this.convertGameImageToId([cover])];
        }

        return mergedImages;
    }
    private convertGameImageToId(gameImages: GameImage[]): string[] {
        const extractedId = gameImages.map((image) => image.id);
        return extractedId;
    }
}
