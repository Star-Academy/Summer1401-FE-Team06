import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IconComponent} from './icon.component';
import {IconType} from '../../enum/icon-type.enum';
import {IconColor} from '../../enum/icon-color.enum';

describe('IconComponent', () => {
    let component: IconComponent;
    let fixture: ComponentFixture<IconComponent>;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IconComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(IconComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    //  Icon type test
    it('should render icon - icon Type - default', () => {
        testIconType();
    });
    it('should render icon -  icon Type - SHOP', () => {
        testIconType('SHOP');
    });
    it('should render icon -  icon Type - WISH_LIST', () => {
        testIconType('WISH_LIST');
    });
    it('should render icon -  icon Type - PRICE', () => {
        testIconType('PRICE');
    });

    //  Icon color test
    it('should render icon - icon color - default', () => {
        testIconColor();
    });
    it('should render icon - icon color - WHITE', () => {
        testIconColor('WHITE');
    });
    it('should render icon - icon color - ORANGE', () => {
        testIconColor('ORANGE');
    });
    it('should render icon - icon color - GREEN', () => {
        testIconColor('GREEN');
    });

    //  Icon have background color test
    it('should render icon - background color - default', () => {
        testHaveBackgroundColor(true);
    });
    it('should render icon - background color - have', () => {
        testHaveBackgroundColor(true);
    });
    it('should render icon - background color - no have', () => {
        testHaveBackgroundColor(false);
    });

    // Utility
    const testIconType = (type?: 'SHOP' | 'WISH_LIST' | 'PRICE'): void => {
        if (!!type) {
            component.iconClass = IconType[type];
            fixture.detectChanges();
        }
        const iconEl = host.querySelector('.icon-container i');
        const iconTypeClassName = component.iconClass.split(' ');
        expect(iconEl).toBeTruthy();
        iconTypeClassName.forEach((iconClass) => expect(iconEl?.classList).toContain(iconClass));
    };

    const testIconColor = (type?: 'ORANGE' | 'WHITE' | 'GREEN'): void => {
        if (!!type) {
            component.iconColor = IconColor[type];
            fixture.detectChanges();
        }
        const iconContainer = host.querySelector('.icon-container');
        expect(iconContainer).toBeTruthy();
        expect(iconContainer?.classList).toContain(component.iconColor);
    };
    const testHaveBackgroundColor = (haveBg?: boolean): void => {
        if (haveBg !== undefined) {
            component.haveBackgroundColor = haveBg;
            fixture.detectChanges();
        }
        const iconContainer = host.querySelector('.icon-container');
        if (haveBg) {
            expect(iconContainer?.classList).not.toContain('no-bg');
        } else {
            expect(iconContainer?.classList).toContain('no-bg');
        }
    };
});
