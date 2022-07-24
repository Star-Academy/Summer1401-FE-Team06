import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MainComponent} from './main.component';
import {SliderSectionComponent} from './components/slider-section/slider-section.component';
import {CommonModule} from '@angular/common';
import {SliderCardModule} from '../slider-card/slider-card.module';
import {PrimaryTitleModule} from '../primary-title/primary-title.module';
import {BannerModule} from '../banner/banner.module';
import {MainCardsModule} from '../main-cards/main-cards.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('MainComponent', () => {
    let component: MainComponent;
    let fixture: ComponentFixture<MainComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MainComponent, SliderSectionComponent],
            imports: [
                CommonModule,
                RouterTestingModule,
                SliderCardModule,
                PrimaryTitleModule,
                BannerModule,
                MainCardsModule,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
