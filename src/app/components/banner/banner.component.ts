import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Banner} from '../../models/game/game-interface/banner.model';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
    @Input() public isReverse: boolean = false;
    @Input() public bannerItem: Banner | null = null;
    public constructor(private router: Router) {}
    public async searchWithFilter(id: number | undefined): Promise<void> {
        if (id) await this.router.navigate(['/game', id]);
    }
}
