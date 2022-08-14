import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SliderCardComponent} from './slider-card.component';
import {IconModule} from '../icon/icon.module';
import {IconComponent} from '../icon/icon.component';
import {Product} from '../main-cards/models/product';
import {IconColor} from '../../enum/icon-color.enum';
import {IconType} from '../../enum/icon-type.enum';
import {product} from "../../mocks/product.mock";
import {ProductNew} from "../../models/productNew.model";

describe('SliderCardComponent', () => {
    let component: SliderCardComponent;
    let fixture: ComponentFixture<SliderCardComponent>;
    let host: HTMLElement;
    let productDefault: ProductNew = product;

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
        expect(component.IconColor).toEqual(IconColor);
        expect(component.IconType).toEqual(IconType);
    });
});
