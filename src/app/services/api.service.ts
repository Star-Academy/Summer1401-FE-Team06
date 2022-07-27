import {Injectable} from '@angular/core';
import {POST_REQUEST_INIT} from '../utils/api.utils';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    public constructor() {}

    public async post<T>(url: string, body: any = '', init: Partial<RequestInit> = {}): Promise<T | null> {
        const options = {
            ...POST_REQUEST_INIT,
            body: JSON.stringify(body),
            ...init,
        };

        const response = await fetch(url, options);
        const data = await response.json();
        if (response.ok) return data as T;
        return null;
    }
}
