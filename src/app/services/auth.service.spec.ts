import {TestBed} from '@angular/core/testing';
import {AuthService} from './auth.service';
import {RouterTestingModule} from '@angular/router/testing';
import {LocalStorageMock} from '../mocks/local-storage.mock';
import {FetchMock, VALID_TOKEN, VALID_USER_LOGIN_DATA} from '../mocks/fetch.mock';

describe('AuthService', () => {
    let service: AuthService;
    let localStorageMock: LocalStorageMock;
    let fetchMock: FetchMock;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
        });

        localStorageMock = new LocalStorageMock();
        spyOn(localStorage, 'getItem').and.callFake(localStorageMock.getItem.bind(localStorageMock));
        spyOn(localStorage, 'setItem').and.callFake(localStorageMock.setItem.bind(localStorageMock));
        spyOn(localStorage, 'removeItem').and.callFake(localStorageMock.removeItem.bind(localStorageMock));
        spyOn(localStorage, 'clear').and.callFake(localStorageMock.clear.bind(localStorageMock));

        fetchMock = new FetchMock();
        spyOn(window, 'fetch').and.callFake(fetchMock.fetch.bind(fetchMock));

        service = TestBed.inject(AuthService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should token - empty', () => {
        expect(service.token).toEqual('');
    });

    it('should token - value', () => {
        localStorageMock.setItem('token', 'value');
        expect(service.token).toEqual('value');
    });

    it('should isLoggedIn - false - empty token', async () => {
        const response = await service.isLoggedIn();
        expect(response).toBeFalse();

        testCache('', false, null);
    });

    it('should isLoggedIn - false - invalid token', async () => {
        localStorageMock.setItem('token', 'value');

        const response = await service.isLoggedIn();
        expect(response).toBeFalse();

        testCache('value', false, null);
    });

    it('should isLoggedIn - true', async () => {
        localStorageMock.setItem('token', VALID_TOKEN);

        const response = await service.isLoggedIn();
        expect(response).toBeTrue();

        testCache(VALID_TOKEN, true, 23);
    });

    it('should login - false', async () => {
        const response = await service.login({username: '', password: ''});
        expect(response).toBeFalse();

        testCache('', false, null);
    });

    it('should login - true', async () => {
        const response = await service.login(VALID_USER_LOGIN_DATA);
        expect(response).toBeTrue();

        testCache(VALID_TOKEN, true, 23);
    });

    // [SECTION] Utility Functions

    const testCache = (token: string, isLoggedIn: boolean | null, userId: number | null): void => {
        expect(service.token).toEqual(token);
        expect(service.cachedIsLoggedIn).toEqual(isLoggedIn);
        expect(service.cachedUserId).toEqual(userId);
    };
});
