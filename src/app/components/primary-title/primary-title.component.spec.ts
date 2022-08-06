import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PrimaryTitleComponent} from './primary-title.component';
import {PrimaryTitleDirection} from '../../enum/primary-title-direction.enum';
import {IconColor} from '../../enum/icon-color.enum';

describe('PrimaryTitleComponent', () => {
    let component: PrimaryTitleComponent;
    let fixture: ComponentFixture<PrimaryTitleComponent>;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PrimaryTitleComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PrimaryTitleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should render - title element ', () => {
        const titleEl = host.querySelector('h2');
        expect(titleEl).toBeTruthy();
    });
    // Title content
    it('should render - title content - default', () => {
        testTitleHaveContent();
    });
    it('should render - title content - empty', () => {
        testTitleHaveContent(true);
    });
    it('should render - title content - not empty', () => {
        testTitleHaveContent(false);
    });

    // Title direction
    const PrimaryTitleDirectionState: PrimaryTitleDirection[] = [
        PrimaryTitleDirection.RIGHT,
        PrimaryTitleDirection.LEFT,
    ];

    it('should render - title direction - default', () => {
        testTitleDirection();
    });

    PrimaryTitleDirectionState.forEach((state, index) => {
        it(`should render - title direction  - ${Object.keys(PrimaryTitleDirection)[index]} `, () => {
            testTitleDirection(state);
        });
    });

    // Utility
    const testTitleHaveContent = (isEmpty?: boolean): void => {
        if (isEmpty !== undefined) {
            component.title = isEmpty ? '' : 'testing';
            fixture.detectChanges();
        }
        const titleEl = host.querySelector('h2');
        expect(titleEl).toBeTruthy();
        if (isEmpty || isEmpty === undefined) {
            expect(titleEl?.innerText).toBeFalsy();
        } else {
            expect(titleEl?.innerText).toBeTruthy();
        }
    };
    const testTitleDirection = (direction?: PrimaryTitleDirection): void => {
        if (direction !== undefined) {
            component.direction = direction;
            fixture.detectChanges();
        }
        const titleContainerEl = host.querySelector('.primary-title');
        expect(titleContainerEl).toBeTruthy();
        expect(titleContainerEl?.classList).toContain(component.direction);
    };
});
