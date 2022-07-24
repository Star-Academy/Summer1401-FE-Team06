import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BannerComponent} from './banner.component';
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [BannerComponent],
    exports: [BannerComponent],
    imports: [CommonModule, RouterModule],
})
export class BannerModule {}
