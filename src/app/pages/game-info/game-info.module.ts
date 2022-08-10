import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeaderModule} from '../../components/header/header.module';
import {FooterModule} from '../../components/footer/footer.module';
import {SectionModule} from '../../components/section/section.module';
import {GameInfoComponent} from './game-info.component';
import { GameSliderComponent } from './components/game-slider/game-slider.component';

@NgModule({
    declarations: [GameInfoComponent, GameSliderComponent],
    imports: [CommonModule, HeaderModule, FooterModule, SectionModule],
})
export class GameInfoModule {}
