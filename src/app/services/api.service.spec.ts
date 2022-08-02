import {ApiService} from './api.service';
import {LocalStorageMock} from '../mocks/local-storage.mock';
import {FetchMock, VALID_USER_LOGIN_DATA} from '../mocks/fetch.mock';
import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {API_USER_LOGIN} from '../utils/api.utils';

describe('ApiService', () => {
    let service: ApiService;
    let fetchMock: FetchMock;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [ApiService],
        });

        fetchMock = new FetchMock();
        spyOn(window, 'fetch').and.callFake(fetchMock.fetch.bind(fetchMock));

        service = TestBed.inject(ApiService);
    });

    it('should create', () => {
        expect(service).toBeTruthy();
    });

    it('should post request - successfull', async () => {
        const response = await service.postRequest<any>({url: API_USER_LOGIN, body: VALID_USER_LOGIN_DATA});
        expect(response).toBeTruthy();
    });

    it('should post request - fail', async () => {
        const response = await service.postRequest<any>({url: '', body: {}});
        expect(response).not.toBeTruthy();
    });

    it('should get request - successfull', async () => {
        const response = await service.getRequest<any>({url: '/23'});
        expect(response).toBeTruthy();
    });

    it('should get request - fail', async () => {
        const response = await service.getRequest<any>({url: ''});
        expect(response).not.toBeTruthy();
    });
});
