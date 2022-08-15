import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {IconColor} from 'src/app/enum/icon-color.enum';
import {IconType} from 'src/app/enum/icon-type.enum';
import {AuthService} from '../../../../services/auth.service';

@Component({
    selector: 'app-first-navbar',
    templateUrl: './first-navbar.component.html',
    styleUrls: ['./first-navbar.component.scss'],
})
export class FirstNavbarComponent {
    public isLoggedIn: boolean = false;
    public IconType = IconType;
    public IconColor = IconColor;

    public constructor(private router: Router, private authService: AuthService) {
        this.initializeVariables().then();
    }
    public async submitSearchPhrase(sentence: string): Promise<void> {
        await this.router.navigate(['/search'], {queryParams: {searchPhrase: sentence}});
    }

    private async initializeVariables(): Promise<void> {
        this.isLoggedIn = await this.authService.isLoggedIn();
    }
}
