import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeaderModule} from '../../components/header/header.module';
import {FooterModule} from '../../components/footer/footer.module';
import {SectionModule} from '../../components/section/section.module';
import {GameInfoComponent} from './game-info.component';
import {GameSliderComponent} from './components/game-slider/game-slider.component';
import {GameTitleComponent} from './components/game-title/game-title.component';
import {GameDetailComponent} from './components/game-detail/game-detail.component';
import {PrimaryTitleModule} from '../../components/primary-title/primary-title.module';
import {MainModule} from '../../components/main/main.module';
import {SliderImageConverterPipeModule} from './pipe/slider-image-converter.pip.module';
import {GameBusinessComponent} from './components/game-business/game-business.component';
import {IconModule} from '../../components/icon/icon.module';
import {ConvertMoneyTypeModule} from '../../pipes/convert-money-type/convert-money-type.module';
import {PercentPipeModule} from '../../pipes/percent-pipe/percent-pipe.module';

@NgModule({
    declarations: [
        GameInfoComponent,
        GameSliderComponent,
        GameTitleComponent,
        GameDetailComponent,
        GameBusinessComponent,
    ],
    imports: [
        CommonModule,
        HeaderModule,
        FooterModule,
        SectionModule,
        PrimaryTitleModule,
        MainModule,
        SliderImageConverterPipeModule,
        IconModule,
        ConvertMoneyTypeModule,
        PercentPipeModule,
    ],
    exports: [GameInfoComponent],
})
export class GameInfoModule {}
