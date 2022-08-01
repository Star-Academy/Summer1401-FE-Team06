import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CardComponent} from './card.component';

describe('CardComponent', () => {
    let component: CardComponent;
    let fixture: ComponentFixture<CardComponent>;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CardComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render card - product', () => {
        component.product = {
            oldPrice: 60_000,
            newPrice: 46_000,
            imageUrl: 'assets/images/card1.webp',
            gameName: 'The Witcher',
        };
        fixture.detectChanges();
        expect(host?.querySelector('.wrapper')).toBeTruthy();
    });

    it('should not render card - product', () => {
        component.product = null;
        fixture.detectChanges();
        expect(host?.querySelector('.wrapper')).not.toBeTruthy();
    });
});
