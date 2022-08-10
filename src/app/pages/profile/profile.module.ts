import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile.component';
import {RouterModule} from '@angular/router';
import {SliderCardModule} from '../../components/slider-card/slider-card.module';

@NgModule({
    declarations: [ProfileComponent],
    imports: [CommonModule, RouterModule, SliderCardModule],
    exports: [ProfileComponent],
})
export class ProfileModule {}
