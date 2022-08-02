import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ResultMessageComponent} from './result-message.component';
import {AuthComponent} from '../../pages/auth/auth.component';

describe('ResultMessageComponent', () => {
    let component: ResultMessageComponent;
    let fixture: ComponentFixture<ResultMessageComponent>;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ResultMessageComponent, AuthComponent],
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
    // moshkel dare
    // it('should render result-message', () => {
    //     const resultMessageEl = host.querySelector('.result-message');
    //     console.log(resultMessageEl);
    //     component.message = 'testing message';
    //     fixture.detectChanges();
    //     expect(resultMessageEl).toBeTruthy();
    // });
});
