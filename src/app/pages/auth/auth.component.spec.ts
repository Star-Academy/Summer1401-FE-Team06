import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AuthComponent} from './auth.component';
import {User} from '../../models/user.model';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../../services/auth.service';
import {ApiService} from '../../services/api.service';
import {ResultMessageService} from '../../services/result-message.service';
import {FetchMock, VALID_USER_LOGIN_DATA, VALID_USER_SIGNUP_DATA} from '../../mocks/fetch.mock';

describe('AuthComponent', () => {
    let component: AuthComponent;
    let fixture: ComponentFixture<AuthComponent>;
    let host: HTMLElement;

    let authServiceMock: AuthService;
    let resultMessageService: ResultMessageService;
    let fetchMock: FetchMock;

    const firstUserValue: User = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
    };
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AuthComponent],
            imports: [FormsModule, RouterTestingModule],
            providers: [AuthService, ResultMessageService, ApiService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;

        authServiceMock = TestBed.inject(AuthService);
        resultMessageService = TestBed.inject(ResultMessageService);

        fetchMock = new FetchMock();
        spyOn(window, 'fetch').and.callFake(fetchMock.fetch.bind(fetchMock));
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create default variable', () => {
        expect(component.isLogin).toEqual(true);
        expect(component.twoStepPassword).toEqual('');
        expect(component.user).toEqual(firstUserValue);
    });

    for (const isInLoginView of [true, false]) {
        it(`should works changeIsLogin method - ${isInLoginView} => ${!isInLoginView}`, () => {
            spyOn(resultMessageService, 'reset');

            component.isLogin = isInLoginView;
            fixture.detectChanges();

            component.changeIsLogin();
            fixture.detectChanges();

            expect(component.isLogin).toBe(!isInLoginView);
        });
    }
    it('should works resetUserField method', () => {
        const resetResultMessageMethodSpy = spyOn(resultMessageService, 'reset');

        component.resetUserField();
        fixture.detectChanges();

        expect(component.user.username).toEqual('');
        expect(component.user.password).toEqual('');
        expect(component.user.email).toEqual('');
        expect(component.user.firstName).toEqual('');
        expect(component.user.lastName).toEqual('');
        expect(component.twoStepPassword).toEqual('');
        expect(resetResultMessageMethodSpy).toHaveBeenCalled();
    });

    for (const isInLoginView of [true, false]) {
        it('should works formSubmitHandler method', async () => {
            spyOn(resultMessageService, 'show');

            const loginMethodSpy = spyOn(authServiceMock, 'login');
            const signupMethodSpy = spyOn(authServiceMock, 'singUp');

            component.isLogin = isInLoginView;
            fixture.detectChanges();

            await component.formSubmitHandler();
            if (component.isLogin) {
                expect(loginMethodSpy).toHaveBeenCalled();
            } else {
                expect(signupMethodSpy).toHaveBeenCalled();
            }
        });
    }

    it('should works loginUser method', async () => {
        const loginMethodSpy = spyOn(authServiceMock, 'login');
        const showResultMessageMethodSpy = spyOn(resultMessageService, 'show');

        component.user.username = VALID_USER_LOGIN_DATA.username;
        component.user.password = VALID_USER_LOGIN_DATA.password;
        fixture.detectChanges();
        await component.loginUser();

        expect(loginMethodSpy).toHaveBeenCalled();
        expect(showResultMessageMethodSpy).toHaveBeenCalled();
    });

    it('should works singUp method - can signup', async () => {
        const signupMethodSpy = spyOn(authServiceMock, 'singUp');

        component.user = VALID_USER_SIGNUP_DATA;
        component.twoStepPassword = VALID_USER_SIGNUP_DATA.password;
        fixture.detectChanges();

        await component.signUpUser();

        expect(signupMethodSpy).toHaveBeenCalled();
    });

    it('should works singUp method - cant signup', async () => {
        const signupMethodSpy = spyOn(authServiceMock, 'singUp');
        const showResultMessageMethodSpy = spyOn(resultMessageService, 'show');

        component.user = VALID_USER_SIGNUP_DATA;
        component.twoStepPassword = '';
        fixture.detectChanges();

        await component.signUpUser();

        expect(showResultMessageMethodSpy).toHaveBeenCalled();
        expect(signupMethodSpy).not.toHaveBeenCalled();
    });


});
