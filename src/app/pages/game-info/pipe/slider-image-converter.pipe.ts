import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name: 'sliderImageConverter',
})
export class SliderImageConverterPipe implements PipeTransform {
    private giveCompleteUrl(imageUrl: string): string {
        return `https://images.igdb.com/igdb/image/upload/t_720p/${imageUrl}.jpg`;
    }

    public transform(sliderUrlList: string[], ...args: unknown[]): string[] {
        const convertedImageUrl = sliderUrlList.map((url) => {
            return this.giveCompleteUrl(url);
        });
        return convertedImageUrl;
    }
}
