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
import {SliderImageConverterPipe} from './pipe/slider-image-converter.pipe';
import {SliderImageConverterPipeModule} from "./pipe/slider-image-converter.pip.module";

@NgModule({
    declarations: [
        GameInfoComponent,
        GameSliderComponent,
        GameTitleComponent,
        GameDetailComponent,
        // SliderImageConverterPipe,
    ],
    imports: [CommonModule, HeaderModule, FooterModule, SectionModule, PrimaryTitleModule, MainModule, SliderImageConverterPipeModule],
    exports: [GameInfoComponent],
})
export class GameInfoModule {}
