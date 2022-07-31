import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SectionComponent} from './section.component';
import {PrimaryTitleModule} from "../primary-title/primary-title.module";

@NgModule({
    declarations: [SectionComponent],
    exports: [SectionComponent],
    imports: [CommonModule, PrimaryTitleModule],
})
export class SectionModule {}
