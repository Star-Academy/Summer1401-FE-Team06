import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {HeaderComponent} from './header.component';
import {SearchBoxModule} from '../search-box/search-box.module';
import {FormsModule} from '@angular/forms';
import {FirstNavbarComponent} from './components/first-navbar/first-navbar.component';
import {IconModule} from '../icon/icon.module';

import {SlidebarModule} from '../slidebar/slidebar.module';
@NgModule({
    declarations: [HeaderComponent, FirstNavbarComponent],
    exports: [HeaderComponent],
    imports: [CommonModule, RouterModule, FormsModule, IconModule, SlidebarModule, SearchBoxModule],
})
export class HeaderModule {}
