export const BASE_URL = 'https://api.bijanprogrammer.com/games';

export const API_USER_ONE = BASE_URL + '/user/one';
export const API_USER_AUTH = BASE_URL + '/user/auth';
export const API_USER_LOGIN = BASE_URL + '/user/login';
export const API_USER_REGISTER = BASE_URL + '/user/register';
export const API_USER_ALTER = BASE_URL + '/user/alter';

export const DEFAULT_POST_REQUEST_INIT: RequestInit = {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
};
