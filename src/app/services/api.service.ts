import {Injectable} from '@angular/core';
import {DEFAULT_POST_REQUEST_INIT} from '../utils/api.utils';
import {GetRequestOptions, PostRequestOptions, RequestOptions} from '../models/api/request-options.model';
@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private static generatePostRequestInit(options: PostRequestOptions): RequestInit {
        return {
            ...DEFAULT_POST_REQUEST_INIT,
            body: JSON.stringify(options.body),
            ...(options.init || {}),
        };
    }

    public async getRequest<T>(options: GetRequestOptions): Promise<T | null> {
        return await ApiService.fetchRequest<T>(options, options.init);
    }

    public async postRequest<T>(options: PostRequestOptions): Promise<T | null> {
        const init = ApiService.generatePostRequestInit(options);
        return await ApiService.fetchRequest<T>(options, init);
    }

    private static async fetchRequest<T>(options: RequestOptions, init?: RequestInit): Promise<T | null> {
        const {url} = options;

        const response = await fetch(url, init);
        const data = await response.json();

        if (response.ok) return data as T;

        return null;
    }
}
