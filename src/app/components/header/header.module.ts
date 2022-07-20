import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {HeaderComponent} from './header.component';
import {SearchBoxComponent} from './components/search-box/search-box.component';
import {FormsModule} from '@angular/forms';
import {FirstNavbarComponent} from './components/first-navbar/first-navbar.component';
import {SecondNavbarComponent} from './components/second-navbar/second-navbar.component';
import {IconModule} from '../icon/icon.module';
import {HeroComponent} from './components/hero/hero.component';
import {GameSliderComponent} from './components/hero/game-slider/game-slider.component';
// import {HeroComponent} from './components/hero/hero.component';
// import {HeroModule} from './components/hero/hero.module';

@NgModule({
    declarations: [
        HeaderComponent,
        SearchBoxComponent,
        FirstNavbarComponent,
        SecondNavbarComponent,
        HeroComponent,
        GameSliderComponent,
    ],
    exports: [HeaderComponent],
    imports: [CommonModule, RouterModule, FormsModule, IconModule],
})
export class HeaderModule {}
