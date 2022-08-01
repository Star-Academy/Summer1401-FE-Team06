import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Products} from '../../../main-cards/sample-data';
import {Product} from '../../../main-cards/models/product';

@Component({
    selector: 'app-slider-section',
    templateUrl: './slider-section.component.html',
    styleUrls: ['./slider-section.component.scss'],
})
export class SliderSectionComponent {
    public cards: Product[] = Products;
    @Input() public isReverse: boolean = false;

    @ViewChild('slider') public sliderContainer!: ElementRef;
    public scrollToLeft(): void {
        this.scrollFunction(300);
    }

    public scrollToRight(): void {
        this.scrollFunction(-300);
    }
    public scrollFunction(width: number): void {
        this.sliderContainer.nativeElement.scrollTo({
            left: this.sliderContainer.nativeElement.scrollLeft + width,
            behavior: 'smooth',
        });
    }
}
