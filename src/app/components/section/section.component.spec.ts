import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SectionComponent} from './section.component';

describe('SectionComponent', () => {
    let component: SectionComponent;
    let fixture: ComponentFixture<SectionComponent>;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SectionComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should render section ', () => {
        const sectionEl = host.querySelector('.section');
        expect(sectionEl).toBeTruthy();
    });
    it('should render section - with secondary-section class', () => {
        testBackgroundColor(true);
    });
    it('should render section - without secondary-section class', () => {
        testBackgroundColor(false);
    });
    // Primary title
    it('should render primary-title - render', () => {
        testHavePrimaryTitle(true);
    });
    it('should render primary-title - not render', () => {
        testHavePrimaryTitle(false);
    });

    const testBackgroundColor = (isSecondary: boolean): void => {
        component.isSecondaryBackgroundColor = isSecondary;
        fixture.detectChanges();

        const sectionEl = host.querySelector('.section');
        expect(sectionEl).toBeTruthy();
        if (isSecondary) {
            expect(sectionEl?.classList).toContain('secondary-section');
        } else {
            expect(sectionEl?.classList).not.toContain('secondary-section');
        }
    };
    const testHavePrimaryTitle = (haveTitle: boolean): void => {
        component.primaryTitle = haveTitle ? 'testing title' : '';
        fixture.detectChanges();

        const primaryTitleEl = host.querySelector('app-primary-title');
        if (component.primaryTitle.length === 0) {
            expect(primaryTitleEl).toBeNull();
        } else {
            expect(primaryTitleEl).toBeTruthy();
        }
    };
});
