import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {FormsModule} from '@angular/forms';
import {ResultMessageModule} from '../../components/result-message/result-message.module';

@NgModule({
    declarations: [AuthComponent],
    imports: [CommonModule, FormsModule, ResultMessageModule],
    exports: [AuthComponent],
})
export class AuthModule {}
