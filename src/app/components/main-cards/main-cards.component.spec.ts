import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MainCardsComponent} from './main-cards.component';
import {CardComponent} from './card/card.component';

describe('MainCardsComponent', () => {
    let component: MainCardsComponent;
    let fixture: ComponentFixture<MainCardsComponent>;
    let host: HTMLElement;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MainCardsComponent, CardComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MainCardsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should - cards', () => {
        let appCards = host.querySelectorAll('app-card');
        fixture.detectChanges();
        console.log(appCards[0].querySelector('img'));
        expect(appCards).toBeTruthy();
    });
});
