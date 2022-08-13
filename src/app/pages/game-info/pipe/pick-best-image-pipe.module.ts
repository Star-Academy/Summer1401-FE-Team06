import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PickBestImagePipe} from './pick-best-image.pipe';

@NgModule({
    declarations: [PickBestImagePipe],
    imports: [CommonModule],
    exports: [PickBestImagePipe],
})
export class PickBestImagePipeModule {}
