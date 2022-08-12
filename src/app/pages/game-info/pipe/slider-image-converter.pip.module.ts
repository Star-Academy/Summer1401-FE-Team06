import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SliderImageConverterPipe} from './slider-image-converter.pipe';

@NgModule({
    declarations: [SliderImageConverterPipe],
    imports: [CommonModule],
    exports: [SliderImageConverterPipe],
})
export class SliderImageConverterPipeModule {}
