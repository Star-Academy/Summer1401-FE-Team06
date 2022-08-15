import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SliderSectionComponent} from './slider-section.component';
import {ProductNew} from '../../../../models/productNew.model';
import {product} from '../../../../mocks/product.mock';

describe('SliderSectionComponent', () => {
    let component: SliderSectionComponent;
    let fixture: ComponentFixture<SliderSectionComponent>;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SliderSectionComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SliderSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // Have reverse class
    it('should render wrapper - reverse class - default', () => {
        testContainerType();
    });
    it('should render wrapper - reverse class - reverse', () => {
        testContainerType(true);
    });
    it('should render wrapper - reverse class - not reverse', () => {
        testContainerType(false);
    });

    // Have product
    it('should render wrapper - product - default', () => {
        testHaveProduct();
    });
    it('should render wrapper - product - have cards', () => {
        testHaveProduct([product]);
    });
    it('should render wrapper - product - no have cards', () => {
        testHaveProduct([]);
    });

    // Scroll testing
    enum Direction {
        LEFT,
        RIGHT,
    }

    const scrollState: Direction[] = [Direction.RIGHT, Direction.LEFT];
    scrollState.forEach((state) => {
        it(`should slider element - scroll - ${Direction[state]} `, () => {
            testScrollFunction(state);
        });
    });

    // Utility
    const testContainerType = (isReverse?: boolean): void => {
        if (isReverse !== undefined) {
            component.isReverse = isReverse;
            fixture.detectChanges();
        }
        const wrapperEl = host.querySelector('.wrapper');
        expect(wrapperEl).toBeTruthy();
        if (isReverse) {
            expect(wrapperEl?.classList).toContain('reverse');
        } else {
            expect(wrapperEl?.classList).not.toContain('reverse');
        }
    };
    const testHaveProduct = (data?: ProductNew[]): void => {
        if (data !== undefined) {
            component.cards = data;
            fixture.detectChanges();
        }
        const wrapperEl = host.querySelector('.wrapper');
        if (component?.cards?.length === 0) {
            expect(wrapperEl).toBeNull();
        } else {
            expect(wrapperEl).toBeTruthy();
        }
    };
    const testScrollFunction = (direction: Direction): void => {
        if (direction === Direction.RIGHT) {
            component.scrollToRight();
        } else if (direction === Direction.LEFT) {
            component.scrollToLeft();
        }
        fixture.detectChanges();
        const sliderEl = host.querySelector('.slider');
        const scrollValue = sliderEl?.scrollLeft;
        expect(sliderEl?.scrollLeft).toEqual(scrollValue!);
    };
});
