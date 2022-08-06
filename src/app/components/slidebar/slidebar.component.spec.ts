import {ComponentFixture, fakeAsync, TestBed, tick, flush} from '@angular/core/testing';

import {SlidebarComponent} from './slidebar.component';

describe('SlidebarComponent', () => {
    let component: SlidebarComponent;
    let fixture: ComponentFixture<SlidebarComponent>;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SlidebarComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SlidebarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should change active index - 0->2', function () {
        component.activeIndex = 0;
        component.changeActiveIndex(2);
        fixture.detectChanges();
        expect(component.activeIndex).toEqual(2);
    });

    it('should change active index - 2->5->0', function () {
        component.activeIndex = 2;
        component.changeActiveIndex(5);
        fixture.detectChanges();
        expect(component.activeIndex).toEqual(0);
    });

    it('should change active index - 1->-5->2', function () {
        component.activeIndex = 1;
        component.changeActiveIndex(-5);
        fixture.detectChanges();
        expect(component.activeIndex).toEqual(2);
    });

    it('should resetInterval', fakeAsync(() => {
        component.activeIndex = 1;
        component.resetInterval();
        expect(component.activeIndex).toEqual(1);
        tick(component.INTERVAL_DELAY / 2);
        expect(component.activeIndex).toEqual(1);
        tick(component.INTERVAL_DELAY / 2);
        expect(component.activeIndex).toEqual(2);
        clearInterval(component.interval);
        flush();
    }));

    it('should activeWithClickBullet', fakeAsync(() => {
        component.activeIndex = 1;
        component.activeWithClickBullet(2);
        fixture.detectChanges();
        expect(component.activeIndex).toEqual(2);
        clearInterval(component.interval);
        flush();
    }));
});
