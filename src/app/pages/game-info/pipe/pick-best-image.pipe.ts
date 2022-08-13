import {Pipe, PipeTransform} from '@angular/core';
import {GameImage} from '../../../models/game.model';

@Pipe({
    name: 'pickBestImage',
})
export class PickBestImagePipe implements PipeTransform {
    public transform(sliderUrlList: string[], ...args: unknown[]): string {
        return sliderUrlList[0];
    }
}
