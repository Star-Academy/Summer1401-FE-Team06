import {Pipe, PipeTransform} from '@angular/core';
import {GameImage} from '../../../models/game.model';

@Pipe({
    name: 'sliderImageConverter',
})
export class SliderImageConverterPipe implements PipeTransform {
    private giveCompleteUrl(imageUrl: string): string {
        return `https://images.igdb.com/igdb/image/upload/t_720p/${imageUrl}.jpg`;
    }

    public transform(sliderUrlList: string[] | GameImage, ...args: unknown[]): string[] {
        let convertedImageUrl;
        if (Array.isArray(sliderUrlList)) {
            convertedImageUrl = sliderUrlList.map((url) => {
                return this.giveCompleteUrl(url);
            });
        } else {
            convertedImageUrl = [this.giveCompleteUrl(sliderUrlList.id)];
        }
        return convertedImageUrl;
    }
}
