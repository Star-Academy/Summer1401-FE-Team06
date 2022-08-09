import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SliderCardComponent} from './slider-card.component';
import {IconModule} from '../icon/icon.module';
import {IconComponent} from '../icon/icon.component';
import {Product} from '../main-cards/models/product';
import {IconColor} from '../../enum/icon-color.enum';
import {IconType} from '../../enum/icon-type.enum';

describe('SliderCardComponent', () => {
    let component: SliderCardComponent;
    let fixture: ComponentFixture<SliderCardComponent>;
    let host: HTMLElement;
    let productDefault: Product = {
        oldPrice: 60_000,
        newPrice: 46_000,
        imageUrl: 'assets/images/card1.webp',
        gameName: 'The Witcher',
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SliderCardComponent, IconComponent],
            imports: [IconModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SliderCardComponent);
        component = fixture.componentInstance;
        component.product = productDefault;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should assign iconColor and iconType to true object', () => {
        expect(component.iconColor).toEqual(IconColor);
        expect(component.iconType).toEqual(IconType);
    });
});
