import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FooterComponent} from './footer.component';

describe('FooterComponent', () => {
    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FooterComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create - container footer', () => {
        expect(host.querySelector('footer')?.classList.contains('container')).toBeTruthy();
    });

    it('should create - wrapper div', () => {
        expect(host.querySelector('.wrapper')).toBeTruthy();
    });

    it('should create - img', () => {
        expect(host.querySelector('img')).toBeTruthy();
    });

    it('should create - social-media div', () => {
        expect(host.querySelector('.social-media')).toBeTruthy();
    });

    it('should create - hr', () => {
        expect(host.querySelector('hr')).toBeTruthy();
    });

    it('should create - copyright div', () => {
        expect(host.querySelector('.copyright')).toBeTruthy();
    });

    it('should create - spans in copyright div', () => {
        expect(host.querySelector('.copyright')?.querySelectorAll('span').length).toEqual(3);
    });

    it('should create - a in social-media div', () => {
        expect(host.querySelector('.social-media')?.querySelectorAll('i').length).toEqual(4);
    });
});
