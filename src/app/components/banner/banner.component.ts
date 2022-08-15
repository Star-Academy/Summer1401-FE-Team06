import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
    public constructor(private router: Router) {}
    public async searchWithFilter(id: number): Promise<void> {
        await this.router.navigate(['/game', id]);
    }
}
