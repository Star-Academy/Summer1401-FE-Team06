import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SliderSectionComponent} from './slider-section.component';
import {CommonModule} from '@angular/common';
import {CardModule} from '../../../main-cards/card/card.module';
import {PrimaryTitleModule} from '../../../primary-title/primary-title.module';
import {MoreButtonModule} from '../../../more-button/more-button.module';
import {SliderCardModule} from '../../../slider-card/slider-card.module';
import {BannerModule} from '../../../banner/banner.module';
import {MainCardsModule} from '../../../main-cards/main-cards.module';
import {Product} from '../../../main-cards/models/product';
import {Products} from '../../../main-cards/sample-data';

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
    it('should render wrapper - default', () => {
        testContainerType();
    });
    it('should render wrapper - reverse', () => {
        testContainerType(true);
    });
    it('should render wrapper - not reverse', () => {
        testContainerType(false);
    });

    // Have product
    it('should render wrapper - cards - default', () => {
        testHaveProduct();
    });
    it('should render wrapper - cards - have cards', () => {
        testHaveProduct([{newPrice: 200, gameName: 'test', imageUrl: 'test', oldPrice: 200}]);
    });
    it('should render wrapper - cards - no have cards', () => {
        testHaveProduct([]);
    });

    // Scroll testing
    it('should slider element - scroll - right ', () => {
        testScrollFunction('RIGHT');
    });
    it('should slider element - scroll - left ', () => {
        testScrollFunction('LEFT');
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
    const testHaveProduct = (data?: Product[]): void => {
        if (data !== undefined) {
            component.cards = data;
            fixture.detectChanges();
        }
        const wrapperEl = host.querySelector('.wrapper');
        if (component.cards.length === 0) {
            expect(wrapperEl).toBeNull();
        } else {
            expect(wrapperEl).toBeTruthy();
        }
    };
    const testScrollFunction = (direction: 'RIGHT' | 'LEFT'): void => {
        if (direction === 'RIGHT') {
            component.scrollToRight();
        } else if (direction === 'LEFT') {
            component.scrollToLeft();
        }
        fixture.detectChanges();
        const sliderEl = host.querySelector('.slider');
        const scrollValue = sliderEl?.scrollLeft;
        expect(sliderEl?.scrollLeft).toEqual(scrollValue!);
    };
});
