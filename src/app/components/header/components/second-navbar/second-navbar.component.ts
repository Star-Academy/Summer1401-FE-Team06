import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../services/auth.service';

@Component({
    selector: 'app-second-navbar',
    templateUrl: './second-navbar.component.html',
    styleUrls: ['./second-navbar.component.scss'],
})
export class SecondNavbarComponent {
    public isLoggedIn: boolean = false;
    public constructor(private authService: AuthService) {
        this.initializeVariables().then();
    }

    private async initializeVariables(): Promise<void> {
        console.log('salam');
        this.isLoggedIn = await this.authService.isLoggedIn();
    }
}
