import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IconComponent} from './icon.component';
import {IconType} from '../../enum/icon-type.enum';

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

    it('should render icon - default inputs', () => {
        testIconType();
    });
    it('should render icon - SHOP icon', () => {
        testIconType('SHOP');
    });
    it('should render icon - WISH_LIST icon', () => {
        testIconType('WISH_LIST');
    });

    const testIconType = (type?: 'SHOP' | 'WISH_LIST'): void => {
        if (!!type) {
            component.iconClass = IconType[type];
            fixture.detectChanges();
        }
        const iconEl = host.querySelector('.icon-container i');
        const iconTypeClassName = component.iconClass.split(' ');
        expect(iconEl).toBeTruthy();
        iconTypeClassName.forEach((iconClass) => expect(iconEl?.classList).toContain(iconClass));
    };
});
