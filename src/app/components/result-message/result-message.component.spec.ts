import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ResultMessageComponent} from './result-message.component';

describe('ResultMessageComponent', () => {
    let component: ResultMessageComponent;
    let fixture: ComponentFixture<ResultMessageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ResultMessageComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ResultMessageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
