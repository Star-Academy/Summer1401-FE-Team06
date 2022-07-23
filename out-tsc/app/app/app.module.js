import {__decorate} from 'tslib';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeModule} from './pages/home/home.module';
import {NotFoundModule} from './pages/not-found/not-found.module';
let AppModule = class AppModule {};
AppModule = __decorate(
    [
        NgModule({
            declarations: [AppComponent],
            imports: [BrowserModule, AppRoutingModule, HomeModule, NotFoundModule],
            providers: [],
            bootstrap: [AppComponent],
        }),
    ],
    AppModule
);
export {AppModule};
//# sourceMappingURL=app.module.js.map
