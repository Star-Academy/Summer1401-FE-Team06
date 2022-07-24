import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {SliderSectionComponent} from './components/slider-section/slider-section.component';
import {SliderCardModule} from '../slider-card/slider-card.module';
import {PrimaryTitleModule} from '../primary-title/primary-title.module';
import {BannerModule} from '../banner/banner.module';
import {MainCardsModule} from '../main-cards/main-cards.module';

@NgModule({
    declarations: [MainComponent, SliderSectionComponent],
    imports: [CommonModule, SliderCardModule, PrimaryTitleModule, BannerModule, MainCardsModule],
    exports: [MainComponent],
})
export class MainModule {}
