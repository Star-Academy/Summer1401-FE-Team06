import {AfterViewInit, Component, Input, OnDestroy} from '@angular/core';
import {GameService} from '../../services/game.service';
import {SlidebarImages} from '../../models/game/game-interface/slidebar-image.model';
import {Router} from '@angular/router';

interface Item {
    src: string;
}

@Component({
    selector: 'app-slidebar',
    templateUrl: './slidebar.component.html',
    styleUrls: ['./slidebar.component.scss'],
})
export class SlidebarComponent implements AfterViewInit, OnDestroy {
    public constructor(private gameService: GameService, private router: Router) {}
    public readonly INTERVAL_DELAY: number = 4_000;

    @Input() public items: SlidebarImages[] = [];
    @Input() public leftItem: SlidebarImages | string = '';
    @Input() public rightItem: SlidebarImages | string = '';
    public activeIndex: number = 0;

    public interval!: number;

    public ngAfterViewInit(): void {
        this.resetInterval();
    }

    public ngOnDestroy(): void {
        clearInterval(this.interval);
    }

    public changeActiveIndex(index: number): void {
        console.log(this.items);
        if (index < 0) index = this.items.length - 1;
        else if (index >= this.items.length) index = 0;

        this.activeIndex = index;
        this.resetInterval();
    }

    public resetInterval(): void {
        clearInterval(this.interval);

        this.interval = setInterval(() => {
            this.changeActiveIndex(this.activeIndex + 1);
        }, this.INTERVAL_DELAY);
    }

    public activeWithClickBullet(index: number): void {
        this.activeIndex = index;
        this.resetInterval();
    }
    public async searchWithFilter(id: number): Promise<void> {
        await this.router.navigate(['/game', id]);
    }
}
