import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SliderCardComponent} from './slider-card.component';
import {CommonModule} from '@angular/common';
import {IconModule} from '../icon/icon.module';

describe('SliderCardComponent', () => {
    let component: SliderCardComponent;
    let fixture: ComponentFixture<SliderCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SliderCardComponent],
            imports: [CommonModule, IconModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SliderCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
