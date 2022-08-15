import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SliderCardComponent} from './slider-card.component';
import {IconModule} from '../icon/icon.module';
import {SliderImageConverterPipeModule} from '../../pages/game-info/pipe/slider-image-converter.pip.module';
import {RouterModule} from "@angular/router";
import {ConvertMoneyTypeModule} from "../../pipes/convert-money-type/convert-money-type.module";

@NgModule({
    declarations: [SliderCardComponent],
    imports: [CommonModule, IconModule, SliderImageConverterPipeModule, RouterModule, ConvertMoneyTypeModule],
    exports: [SliderCardComponent],
})
export class SliderCardModule {}
