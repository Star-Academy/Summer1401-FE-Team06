import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'percentPipe',
})
export class PercentPipe implements PipeTransform {
    public transform(discount: number): string {
        console.log(Math.trunc(discount));
        return `-${Math.trunc(discount)}%`;
    }
}
