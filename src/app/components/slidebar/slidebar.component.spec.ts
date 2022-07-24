import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SlidebarComponent} from './slidebar.component';
import {CommonModule} from '@angular/common';
import {SwiperModule} from 'swiper/angular';

describe('SlidebarComponent', () => {
    let component: SlidebarComponent;
    let fixture: ComponentFixture<SlidebarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SlidebarComponent],
            imports: [CommonModule, SwiperModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SlidebarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
