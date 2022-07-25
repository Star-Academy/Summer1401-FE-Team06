import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
    public isLogin: boolean = true;
    public changeIsLogin(): void {
        this.isLogin = !this.isLogin;
    }
}
