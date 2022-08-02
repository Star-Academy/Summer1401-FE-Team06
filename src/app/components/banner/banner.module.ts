import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BannerComponent} from './banner.component';
import {RouterModule} from '@angular/router';
import {MoreButtonModule} from '../more-button/more-button.module';

@NgModule({
    declarations: [BannerComponent],
    exports: [BannerComponent],
    imports: [CommonModule, RouterModule, MoreButtonModule],
})
export class BannerModule {}
