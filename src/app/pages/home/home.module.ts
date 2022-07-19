import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HeaderModule} from '../../components/header/header.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, HeaderModule],
})
export class HomeModule {}
