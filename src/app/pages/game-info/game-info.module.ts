import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeaderModule} from '../../components/header/header.module';
import {FooterModule} from '../../components/footer/footer.module';
import {SectionModule} from '../../components/section/section.module';
import {GameInfoComponent} from './game-info.component';
import { GameSliderComponent } from './components/game-slider/game-slider.component';
import { GameTitleComponent } from './components/game-title/game-title.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';

@NgModule({
    declarations: [GameInfoComponent, GameSliderComponent, GameTitleComponent, GameDetailComponent],
    imports: [CommonModule, HeaderModule, FooterModule, SectionModule],
})
export class GameInfoModule {}
