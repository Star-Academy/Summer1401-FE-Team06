import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-first-navbar',
    templateUrl: './first-navbar.component.html',
    styleUrls: ['./first-navbar.component.scss'],
})
export class FirstNavbarComponent {
    public constructor(private router: Router) {}
    public async submitSearchPhrase(sentence: string): Promise<void> {
        await this.router.navigate(['/search'], {queryParams: {searchPhrase: sentence}});
    }
}
