import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {ResultMessageService} from '../../services/result-message.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
    public isLogin: boolean = true;
    public twoStepPassword: string = '';
    public user: User = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
    };
    public changeIsLogin(): void {
        this.resetUserField();
        this.isLogin = !this.isLogin;
    }
    public constructor(
        private router: Router,
        private authService: AuthService,
        private resultMessageService: ResultMessageService
    ) {}

    public async formSubmitHandler(): Promise<void> {
        if (this.isLogin) {
            await this.loginUser();
        } else {
            await this.signUpUser();
        }
    }
    public async loginUser(): Promise<void> {
        const isLoggedIn = await this.authService.login(this.user);
        if (isLoggedIn) await this.router.navigateByUrl('/');
        this.resultMessageService.show('رمز وارد شده اشتباه است', 'error');
    }
    public async signUpUser(): Promise<void | null> {
        if (this.twoStepPassword !== this.user.password) {
            this.resultMessageService.show('رمز خود را یکسان وارد کنید', 'error');
            return null;
        }
        const signedUp = await this.authService.singUp(this.user);
        if (signedUp) await this.router.navigateByUrl('/');
    }
    public resetUserField(): void {
        this.user.username = '';
        this.user.password = '';
        this.user.email = '';
        this.user.firstName = '';
        this.user.lastName = '';
        this.twoStepPassword = '';
        this.resultMessageService.reset();
    }
}
