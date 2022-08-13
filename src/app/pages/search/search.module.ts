import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {HeaderModule} from '../../components/header/header.module';
import {FooterModule} from '../../components/footer/footer.module';
import {SliderCardModule} from '../../components/slider-card/slider-card.module';
import {FiltersComponent} from './components/filters/filters.component';
import {ExpansionListComponent} from './components/expansion-list/expansion-list.component';
import {SwitchComponent} from './components/switch/switch.component';
import {FormsModule} from "@angular/forms";
import {FilterPipeModule} from "../../pipes/filter-pipe/filter-pipe.module";
import {SearchBoxModule} from "../../components/search-box/search-box.module";
import { RangeComponent } from './components/range/range.component';

@NgModule({
    declarations: [
        SearchComponent,
        FiltersComponent,
        ExpansionListComponent,
        SwitchComponent,
        RangeComponent
    ],
    imports: [
        CommonModule,
        HeaderModule,
        FooterModule,
        SliderCardModule,
        FormsModule,
        FilterPipeModule,
        SearchBoxModule,
    ]
})
export class SearchModule {
}
