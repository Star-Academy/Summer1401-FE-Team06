import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PercentPipe} from './percent.pipe';

@NgModule({
    declarations: [PercentPipe],
    imports: [CommonModule],
    exports: [PercentPipe],
})
export class PercentPipeModule {}
