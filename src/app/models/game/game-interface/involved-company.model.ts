import {Company} from './company.model';

export interface InvolvedCompany {
    id: number;
    developer: boolean;
    porting: boolean;
    publisher: boolean;
    supporting: boolean;
    company: Company;
}
