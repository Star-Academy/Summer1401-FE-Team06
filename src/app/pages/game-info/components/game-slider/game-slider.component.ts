import {AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild} from '@angular/core';

// interface Item {
//     src: string;
// }
@Component({
    selector: 'app-game-slider',
    templateUrl: './game-slider.component.html',
    styleUrls: ['./game-slider.component.scss'],
})
export class GameSliderComponent implements AfterViewInit, OnDestroy {
    public readonly INTERVAL_DELAY: number = 4_000;

    @Input() public items: string[] = [
        'assets/images/slider3.webp',
        'assets/images/slider1.webp',
        'assets/images/slider4.webp',
    ];

    public cardWidthConstant: number = 300;

    @ViewChild('slider') public sliderContainer!: ElementRef;
    public scrollToLeft(): void {
        this.scrollFunction(this.cardWidthConstant);
    }

    public scrollToRight(): void {
        this.scrollFunction(-this.cardWidthConstant);
    }
    public scrollFunction(width: number): void {
        this.sliderContainer.nativeElement.scrollTo({
            left: this.sliderContainer.nativeElement.scrollLeft + width,
            behavior: 'smooth',
        });
    }

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
