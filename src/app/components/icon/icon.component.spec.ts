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
    const iconTypeState: IconType[] = [IconType.SHOP, IconType.WISH_LIST, IconType.PRICE];
    it('should render icon - icon Type - default', () => {
        testIconType();
    });

    iconTypeState.forEach((state, index) => {
        it(`should render icon - icon Type - ${Object.keys(IconType)[index]} `, () => {
            testIconType(state);
        });
    });

    //  Icon color test
    const iconColorState: IconColor[] = [IconColor.WHITE, IconColor.ORANGE, IconColor.GREEN];
    it('should render icon - icon color - default', () => {
        testIconColor();
    });

    iconColorState.forEach((state, index) => {
        it(`should render icon - icon Type - ${Object.keys(IconColor)[index]} `, () => {
            testIconColor(state);
        });
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
    const testIconType = (type?: IconType): void => {
        if (!!type) {
            component.iconClass = type;
            fixture.detectChanges();
        }
        const iconEl = host.querySelector('.icon-container i');
        const iconTypeClassName = component.iconClass.split(' ');
        expect(iconEl).toBeTruthy();
        iconTypeClassName.forEach((iconClass) => expect(iconEl?.classList).toContain(iconClass));
    };

    const testIconColor = (type?: IconColor): void => {
        if (!!type) {
            component.iconColor = type;
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
