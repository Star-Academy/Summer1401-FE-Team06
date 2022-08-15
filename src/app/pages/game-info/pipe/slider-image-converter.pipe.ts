import {Pipe, PipeTransform} from '@angular/core';
import {GameImage} from '../../../models/game/game-interface/game-image.model';

@Pipe({
    name: 'sliderImageConverter',
})
export class SliderImageConverterPipe implements PipeTransform {
    private defualtImage = ['assets/images/not-found-image.webp'];
    public transform(sliderUrlList: string[] | GameImage | string, format?: string): string[] {
        let convertedImageUrl;
        // console.log(format);
        if (Array.isArray(sliderUrlList) && sliderUrlList.length < 1) {
            return this.defualtImage;
        } else if (Array.isArray(sliderUrlList)) {
            console.log(`1: ${format}`);
            convertedImageUrl = sliderUrlList.map((url) => {
                return this.giveCompleteUrl(url, format);
            });
        } else if (typeof sliderUrlList === 'string') {
            console.log(`2: ${format}`);
            convertedImageUrl = [this.giveCompleteUrl(sliderUrlList, format)];
        } else if (!sliderUrlList) {
            return this.defualtImage;
        } else {
            console.log(`3: ${format}`);
            convertedImageUrl = [this.giveCompleteUrl(sliderUrlList.id)];

        }
        return convertedImageUrl;
    }
    private giveCompleteUrl(imageUrl: string, format?: string): string {
        console.log(format);
        if (format) `https://images.igdb.com/igdb/image/upload/t_${format}/${imageUrl}.jpg`;
        return `https://images.igdb.com/igdb/image/upload/t_720p/${imageUrl}.jpg`;
    }
}
