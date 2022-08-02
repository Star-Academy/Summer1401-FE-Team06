import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ContainerComponent} from './container.component';

describe('ContainerComponent', () => {
    let component: ContainerComponent;
    let fixture: ComponentFixture<ContainerComponent>;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ContainerComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
