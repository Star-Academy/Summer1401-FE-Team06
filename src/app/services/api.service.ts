import {Injectable} from '@angular/core';
import {POST_REQUEST_INIT} from '../utils/api.utils';
// import {SnackbarService} from './snackbar.service';
import {ApiError} from '../models/api-error.model';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    // private snackbarService: SnackbarService
    public constructor() {}

    public async post<T>(url: string, body: any = '', init: Partial<RequestInit> = {}): Promise<T | null> {
        const options = {
            ...POST_REQUEST_INIT,
            body: JSON.stringify(body),
            ...init,
        };

        const response = await fetch(url, options);
        const data = await response.json();

        if (response.status >= 200 && response.status < 300) return data as T;

        // this.snackbarService.show((data as ApiError).message, 'red');
        return null;
    }
}
