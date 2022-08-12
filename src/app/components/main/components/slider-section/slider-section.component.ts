import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Products} from '../../../main-cards/sample-data';
import {Product} from '../../../main-cards/models/product';
import {GameService} from '../../../../services/game.service';
import {Params} from '@angular/router';
import {ProductNew} from '../../../../models/productNew.model';

@Component({
    selector: 'app-slider-section',
    templateUrl: './slider-section.component.html',
    styleUrls: ['./slider-section.component.scss'],
})
export class SliderSectionComponent {
    @Input() public cards: ProductNew[] | null = null;
    @Input() public isReverse: boolean = false;
    public cardWidthConstant: number = 300;

    // public constructor(private gameService: GameService) {}
    // public async ngOnInit(): Promise<void> {
    //     this.cards = (await this.gameService.topGame()) && null;
    // }

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
