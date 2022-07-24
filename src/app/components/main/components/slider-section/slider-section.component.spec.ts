import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SliderSectionComponent} from './slider-section.component';
import {CommonModule} from '@angular/common';
import {CardModule} from '../../../main-cards/card/card.module';
import {PrimaryTitleModule} from '../../../primary-title/primary-title.module';
import {MoreButtonModule} from '../../../more-button/more-button.module';
import {SliderCardModule} from '../../../slider-card/slider-card.module';
import {BannerModule} from '../../../banner/banner.module';
import {MainCardsModule} from '../../../main-cards/main-cards.module';

describe('SliderSectionComponent', () => {
    let component: SliderSectionComponent;
    let fixture: ComponentFixture<SliderSectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SliderSectionComponent],
            imports: [CommonModule, SliderCardModule, PrimaryTitleModule, BannerModule, MainCardsModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SliderSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
