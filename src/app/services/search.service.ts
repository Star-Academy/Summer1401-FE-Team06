import {Injectable} from '@angular/core';
import {GameService} from './game.service';
import {Sort} from '../enum/sort.enum';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class SearchService {
    public constructor(private router: Router) {}
    public topSellerBody = {
        searchPhrase: '',
        pageSize: 10,
        offset: 0,
        sort: Sort.TOP_SELLER,
        filters: {
            minimumRating: 80,
            maximumRating: 99,
        },
    };

    public mostPopularBody = {
        searchPhrase: '',
        pageSize: 10,
        offset: 0,
        sort: Sort.MOST_POPULAR,
        filters: {
            minimumRating: 80,
            maximumRating: 99,
        },
    };
    public newestBody = {
        searchPhrase: '',
        pageSize: 10,
        offset: 0,
        sort: Sort.NEWEST,
        filters: {
            minimumRating: 80,
            maximumRating: 99,
        },
    };

    public allGamesBody = {
        searchPhrase: '',
    };

    public async searchWithFilter(queryParamsFilter: object): Promise<void> {
        await this.router.navigate(['/search'], {queryParams: queryParamsFilter});
    }
}
