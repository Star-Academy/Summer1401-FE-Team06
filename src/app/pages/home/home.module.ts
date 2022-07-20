import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HeaderModule} from '../../components/header/header.module';
import {MainCardsModule} from '../../components/main-cards/main-cards.module';
import {FooterModule} from '../../components/footer/footer.module';
import {BannerModule} from '../../components/banner/banner.module';
import {MainModule} from "../../components/main/main.module";

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, HeaderModule, MainCardsModule, FooterModule, BannerModule, MainModule],
})
export class HomeModule {}
