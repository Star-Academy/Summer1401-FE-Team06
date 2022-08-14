import {Pipe, PipeTransform} from '@angular/core';
import {GameImage} from '../../../models/game/game-interface/game-image.model';

@Pipe({
    name: 'sliderImageConverter',
})
export class SliderImageConverterPipe implements PipeTransform {
    private giveCompleteUrl(imageUrl: string, format?: string): string {
        if (format) `https://images.igdb.com/igdb/image/upload/t_${format}/${imageUrl}.jpg`;
        return `https://images.igdb.com/igdb/image/upload/t_720p/${imageUrl}.jpg`;
    }
    private defualtImage = ['../../../../assets/images/not-found-image.webp'];
    public transform(sliderUrlList: string[] | GameImage | string, format?: string): string[] {
        let convertedImageUrl;
        if (Array.isArray(sliderUrlList) && sliderUrlList.length < 1) {
            return this.defualtImage;
        } else if (Array.isArray(sliderUrlList)) {
            convertedImageUrl = sliderUrlList.map((url) => {
                return this.giveCompleteUrl(url, format);
            });
        } else if (typeof sliderUrlList === 'string') {
            convertedImageUrl = [this.giveCompleteUrl(sliderUrlList, format)];
        } else if (!sliderUrlList) {
            return this.defualtImage;
        } else {
            convertedImageUrl = [this.giveCompleteUrl(sliderUrlList.id)];
        }
        return convertedImageUrl;
    }
}
