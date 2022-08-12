import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {GameService} from '../../services/game.service';

interface Item {
    src: string;
}

@Component({
    selector: 'app-slidebar',
    templateUrl: './slidebar.component.html',
    styleUrls: ['./slidebar.component.scss'],
})
export class SlidebarComponent implements AfterViewInit, OnDestroy {
    public constructor(private gameService: GameService) {}
    public readonly INTERVAL_DELAY: number = 4_000;

    public items: Item[] = [
        {src: 'assets/images/slider1.webp'},
        {src: 'assets/images/slider3.webp'},
        {src: 'assets/images/slider4.webp'},
    ];

    public activeIndex: number = 0;

    public interval!: number;

    public ngAfterViewInit(): void {
        this.resetInterval();
    }

    public ngOnDestroy(): void {
        clearInterval(this.interval);
    }

    public changeActiveIndex(index: number): void {
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
}
