import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FirstNavbarComponent} from './first-navbar.component';

describe('FirstNavbarComponent', () => {
    let component: FirstNavbarComponent;
    let fixture: ComponentFixture<FirstNavbarComponent>;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FirstNavbarComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FirstNavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have container', () => {
        const container = host.querySelector('.container');

        expect(container).toBeTruthy();
    });
});
