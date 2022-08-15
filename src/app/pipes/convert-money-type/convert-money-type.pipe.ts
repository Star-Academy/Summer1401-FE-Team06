import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'moneyFormat',
})
export class MoneyFormatPipe implements PipeTransform {
    private formatToMoney(price: number): string {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    public transform(price: number): string {
        return this.formatToMoney(price);
    }
}
