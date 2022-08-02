import {Component, ElementRef, Input, ViewChild} from '@angular/core';
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
}
