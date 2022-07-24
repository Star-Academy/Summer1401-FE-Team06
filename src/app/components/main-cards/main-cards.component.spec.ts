import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MainCardsComponent} from './main-cards.component';
import {CommonModule} from '@angular/common';
import {CardModule} from './card/card.module';
import {PrimaryTitleModule} from '../primary-title/primary-title.module';
import {MoreButtonModule} from '../more-button/more-button.module';

describe('MainCardsComponent', () => {
    let component: MainCardsComponent;
    let fixture: ComponentFixture<MainCardsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MainCardsComponent],
            imports: [CommonModule, CardModule, PrimaryTitleModule, MoreButtonModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MainCardsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
