import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SlidebarComponent} from './slidebar.component';
import {SwiperModule} from 'swiper/angular';

@NgModule({
    declarations: [SlidebarComponent],
    imports: [CommonModule, SwiperModule],
    exports: [SlidebarComponent],
})
export class SlidebarModule {}
