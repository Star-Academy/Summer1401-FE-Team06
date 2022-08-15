import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {FormsModule} from '@angular/forms';
import {ResultMessageModule} from '../../components/result-message/result-message.module';
import {HeaderModule} from '../../components/header/header.module';
import {FooterModule} from '../../components/footer/footer.module';

@NgModule({
    declarations: [AuthComponent],
    imports: [CommonModule, FormsModule, ResultMessageModule, HeaderModule, FooterModule],
    exports: [AuthComponent],
})
export class AuthModule {}
