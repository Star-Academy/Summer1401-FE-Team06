import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainCardsComponent} from './main-cards.component';
import {PrimaryTitleModule} from '../primary-title/primary-title.module';
import {MoreButtonModule} from '../more-button/more-button.module';
import {SliderCardModule} from '../slider-card/slider-card.module';

@NgModule({
    declarations: [MainCardsComponent],
    exports: [MainCardsComponent],
    imports: [CommonModule, PrimaryTitleModule, MoreButtonModule, SliderCardModule],
})
export class MainCardsModule {}
