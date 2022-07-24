import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrimaryTitleComponent} from './primary-title.component';

@NgModule({
    declarations: [PrimaryTitleComponent],
    imports: [CommonModule],
    exports: [PrimaryTitleComponent],
})
export class PrimaryTitleModule {}
