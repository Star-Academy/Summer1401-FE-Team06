import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MainCardsComponent} from './main-cards.component';
import {CommonModule} from '@angular/common';
import {CardModule} from './card/card.module';
import {PrimaryTitleModule} from '../primary-title/primary-title.module';
import {MoreButtonModule} from '../more-button/more-button.module';
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
        //for (let {card, i} of appCards as any) {
        //expect(card.querySelector('img').src).toEqual(component.cards[i].imageUrl);
        //expect(+card.querySelector('.old-price').textContent).toEqual(component.cards[i].oldPrice);
        //expect(+card.querySelector('.new-price').textContent).toEqual(component.cards[i].newPrice);
        //}
    });
});
