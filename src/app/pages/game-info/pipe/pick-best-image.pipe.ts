import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'pickBestImage',
})
export class PickBestImagePipe implements PipeTransform {
    public transform(sliderUrlList: string[], ...args: unknown[]): string {
        return sliderUrlList[0];
    }
}
