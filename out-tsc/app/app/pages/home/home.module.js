import {__decorate} from 'tslib';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HeaderModule} from '../../components/header/header.module';
import {MainCardsModule} from '../../components/main-cards/main-cards.module';
import {FooterModule} from '../../components/footer/footer.module';
import {BannerModule} from '../../components/banner/banner.module';
let HomeModule = class HomeModule {};
HomeModule = __decorate(
    [
        NgModule({
            declarations: [HomeComponent],
            imports: [CommonModule, HeaderModule, MainCardsModule, FooterModule, BannerModule],
        }),
    ],
    HomeModule
);
export {HomeModule};
//# sourceMappingURL=home.module.js.map
