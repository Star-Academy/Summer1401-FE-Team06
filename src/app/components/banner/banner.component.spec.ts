import {ComponentFixture, TestBed} from '@angular/core/testing';
import {BannerComponent} from './banner.component';

describe('BannerComponent', () => {
    let component: BannerComponent;
    let fixture: ComponentFixture<BannerComponent>;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BannerComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BannerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create - banner div', () => {
        expect(host.querySelector('.banner')).toBeTruthy();
    });

    it('should create - wrapper div', () => {
        expect(host.querySelector('.wrapper')).toBeTruthy();
    });

    it('should create - img', () => {
        expect(host.querySelector('img')).toBeTruthy();
    });

    it('should create - h2', () => {
        expect(host.querySelector('h2')).toBeTruthy();
    });

    it('should create - app-more-button', () => {
        expect(host.querySelector('app-more-button')).toBeTruthy();
    });
});
