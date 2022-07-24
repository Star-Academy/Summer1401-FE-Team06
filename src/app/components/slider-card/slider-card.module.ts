import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SliderCardComponent} from './slider-card.component';
import {IconModule} from '../icon/icon.module';

@NgModule({
    declarations: [SliderCardComponent],
    imports: [CommonModule, IconModule],
    exports: [SliderCardComponent],
})
export class SliderCardModule {}
