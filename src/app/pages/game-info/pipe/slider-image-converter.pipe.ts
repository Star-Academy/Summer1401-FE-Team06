import {Pipe, PipeTransform} from '@angular/core';
import {GameImage} from '../../../models/game.model';

@Pipe({
    name: 'sliderImageConverter',
})
export class SliderImageConverterPipe implements PipeTransform {
    private giveCompleteUrl(imageUrl: string): string {
        return `https://images.igdb.com/igdb/image/upload/t_720p/${imageUrl}.jpg`;
    }
    private defualtImage = ['../../../../assets/images/not-found-image.webp'];
    public transform(sliderUrlList: string[] | GameImage | string, ...args: unknown[]): string[] {
        let convertedImageUrl;
        if (Array.isArray(sliderUrlList) && sliderUrlList.length < 1) {
            return this.defualtImage;
        } else if (Array.isArray(sliderUrlList)) {
            convertedImageUrl = sliderUrlList.map((url) => {
                return this.giveCompleteUrl(url);
            });
        } else if (typeof sliderUrlList === 'string') {
            convertedImageUrl = [this.giveCompleteUrl(sliderUrlList)];
        } else if (!sliderUrlList) {
            return this.defualtImage;
        } else {
            convertedImageUrl = [this.giveCompleteUrl(sliderUrlList.id)];
        }
        return convertedImageUrl;
    }
}
