import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SecondNavbarComponent} from './second-navbar.component';
describe('SecondNavbarComponent', () => {
    let component: SecondNavbarComponent;
    let fixture: ComponentFixture<SecondNavbarComponent>;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SecondNavbarComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SecondNavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
