import {Component, ViewEncapsulation, ViewChild} from '@angular/core';
import {SwiperComponent} from 'swiper/angular';
import SwiperCore, {Keyboard, Pagination, Navigation} from 'swiper';
// install Swiper modules
SwiperCore.use([Keyboard, Pagination, Navigation]);

@Component({
    selector: 'app-slidebar',
    templateUrl: './slidebar.component.html',
    styleUrls: ['./slidebar.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class SlidebarComponent {}
