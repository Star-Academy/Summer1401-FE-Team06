import {TestBed} from '@angular/core/testing';

import {ResultMessageService} from './result-message.service';

describe('ResultMessageService', () => {
    let service: ResultMessageService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ResultMessageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
