import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {NgxPopperjsModule} from 'ngx-popperjs';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeModule} from './pages/home/home.module';
import {NotFoundModule} from './pages/not-found/not-found.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NgxPopperjsModule, AppRoutingModule, HomeModule, NotFoundModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
