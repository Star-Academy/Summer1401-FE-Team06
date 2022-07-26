import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
    public isLogin: boolean = true;
    public errorMessage: string | null = null;
    public user: User = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
    };
    public changeIsLogin(): void {
        this.isLogin = !this.isLogin;
    }
    public constructor(private router: Router, private authService: AuthService) {}

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
    }
    public async signUpUser(): Promise<void> {
        const signedUp = await this.authService.singUp(this.user);
        if (signedUp) await this.router.navigateByUrl('/');
    }
}
