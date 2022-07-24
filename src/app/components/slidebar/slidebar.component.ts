import {Component, ViewEncapsulation} from '@angular/core';
import SwiperCore, {Keyboard, Pagination, Navigation} from 'swiper';
SwiperCore.use([Keyboard, Pagination, Navigation]);

@Component({
    selector: 'app-slidebar',
    templateUrl: './slidebar.component.html',
    styleUrls: ['./slidebar.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class SlidebarComponent {}
