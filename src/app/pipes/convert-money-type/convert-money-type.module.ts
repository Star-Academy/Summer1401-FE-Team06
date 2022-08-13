import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoneyFormatPipe} from './convert-money-type.pipe';

@NgModule({
    declarations: [MoneyFormatPipe],
    imports: [CommonModule],
    exports: [MoneyFormatPipe],
})
export class ConvertMoneyTypeModule {}
