export interface User {
    token?: string;
    id?: number;
    username: string;
    email: string;
    phone?: string;
    firstName: string;
    lastName: string;
    gender?: boolean;
    dateOfBirth?: string;
    avatar?: string;
    password: string;
}
