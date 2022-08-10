import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchBoxComponent} from './search-box.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [SearchBoxComponent],
    imports: [CommonModule, FormsModule],
    exports: [SearchBoxComponent],
})
export class SearchBoxModule {}
