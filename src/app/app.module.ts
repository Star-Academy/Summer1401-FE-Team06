import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeModule} from './pages/home/home.module';
import {NotFoundModule} from './pages/not-found/not-found.module';
import {AuthModule} from './pages/auth/auth.module';
import {ProfileModule} from './pages/profile/profile.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, HomeModule, NotFoundModule, AuthModule, ProfileModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
