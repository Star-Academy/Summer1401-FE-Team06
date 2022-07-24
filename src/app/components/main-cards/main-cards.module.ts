import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainCardsComponent} from './main-cards.component';
import {CardModule} from './card/card.module';
import {PrimaryTitleModule} from '../primary-title/primary-title.module';
import {MoreButtonModule} from '../more-button/more-button.module';

@NgModule({
    declarations: [MainCardsComponent],
    exports: [MainCardsComponent],
    imports: [CommonModule, CardModule, PrimaryTitleModule, MoreButtonModule],
})
export class MainCardsModule {}
