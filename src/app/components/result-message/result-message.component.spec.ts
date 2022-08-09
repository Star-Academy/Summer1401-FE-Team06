import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ResultMessageComponent} from './result-message.component';
import {AuthComponent} from '../../pages/auth/auth.component';
import {ResultMessageService} from '../../services/result-message.service';

describe('ResultMessageComponent', () => {
    let component: ResultMessageComponent;
    let fixture: ComponentFixture<ResultMessageComponent>;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ResultMessageComponent, AuthComponent],
            providers: [ResultMessageService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ResultMessageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should not render result-message', () => {
        const resultMessageEl = host.querySelector('.result-message');

        expect(resultMessageEl).toBeNull();
    });

    it('should works show function - have value', () => {
        const message = 'testing message';
        const backgroundColor = 'error';
        component.show(message, backgroundColor);
        fixture.detectChanges();

        expect(component.message).toEqual(message);
        expect(component.backgroundColorResultMessage).toEqual(backgroundColor);
    });

    it('should works show function - dont have value', () => {
        component.show();
        fixture.detectChanges();

        expect(component.message).toBeNull();
        expect(component.backgroundColorResultMessage).toBeNull();
    });
});
