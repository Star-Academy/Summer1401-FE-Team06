export interface User {
    token?: string;
    id?: number;
    username: string;
    email: string;
    phone?: string;
    firstName: string;
    lastName: string;
    gender?: number;
    dateOfBirth?: string;
    avatar?: string;
    password: string;
}
