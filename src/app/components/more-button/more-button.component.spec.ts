import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MoreButtonComponent} from './more-button.component';

describe('MoreButtonComponent', () => {
    let component: MoreButtonComponent;
    let fixture: ComponentFixture<MoreButtonComponent>;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MoreButtonComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MoreButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should render icon element', () => {
        const iconEl = host.querySelector('i');
        expect(iconEl).toBeTruthy();
    });
    it('should render - container type - default', () => {
        testContainerType();
    });
    it('should render - container type - no reverse', () => {
        testContainerType(false);
    });
    it('should render - container type - reverse', () => {
        testContainerType(true);
    });

    const testContainerType = (isReverse?: boolean): void => {
        if (isReverse !== undefined) {
            component.isReverse = isReverse;
            fixture.detectChanges();
        }

        const buttonContainerEl = host.querySelector('.more');
        const iconEl = host.querySelector('i');

        expect(buttonContainerEl).toBeTruthy();

        if (isReverse) {
            expect(buttonContainerEl?.classList).toContain('reverse');
            expect(iconEl?.classList).toContain('fa-angles-right');
        } else {
            expect(buttonContainerEl?.classList).not.toContain('reverse');
            expect(iconEl?.classList).toContain('fa-angles-left');
        }
    };
});
