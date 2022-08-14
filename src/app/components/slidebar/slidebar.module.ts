import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SlidebarComponent} from './slidebar.component';
import {SwiperModule} from 'swiper/angular';
import {SliderImageConverterPipeModule} from "../../pages/game-info/pipe/slider-image-converter.pip.module";

@NgModule({
    declarations: [SlidebarComponent],
    imports: [CommonModule, SwiperModule, SliderImageConverterPipeModule],
    exports: [SlidebarComponent],
})
export class SlidebarModule {}
