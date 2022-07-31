import {Component} from '@angular/core';
import {AuthService} from '../../../../services/auth.service';
import {IconType} from '../../../../enum/icon-type.enum';

@Component({
    selector: 'app-second-navbar',
    templateUrl: './second-navbar.component.html',
    styleUrls: ['./second-navbar.component.scss'],
})
export class SecondNavbarComponent {
    public isLoggedIn: boolean = false;
    public iconType = IconType;
    public constructor(private authService: AuthService) {
        this.initializeVariables().then();
    }

    private async initializeVariables(): Promise<void> {
        this.isLoggedIn = await this.authService.isLoggedIn();
    }
}
