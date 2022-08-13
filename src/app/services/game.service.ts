import {Injectable} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {ApiService} from './api.service';
import {Game, GameImage} from '../models/game.model';
import {
    API_FAVORITES_ADD,
    API_FAVORITES_ALL,
    API_FAVORITES_REMOVE,
    API_GAME_GENRES,
    API_GAME_ONE,
    API_GAME_PLATFORMS,
    API_GAME_SEARCH,
    API_WISHLIST_ADD,
    API_WISHLIST_ALL,
    API_WISHLIST_REMOVE,
} from '../utils/api.utils';
import {Sort} from '../enum/sort.enum';
import {Platform} from '../models/platform.model';
import {Genre} from '../models/genre.model';
import {Filters} from '../models/filters.model';
import {ExpansionListItem} from '../pages/search/models/expansion-list-item.model';
import {ProductNew} from '../models/productNew.model';
import {AuthService} from './auth.service';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GameService {
    public readonly PAGE_SIZE: number = 21;
    public games: Game[] = [];
    // public favoriteList = new Subject<ProductNew[]>();
    public favoriteList = new BehaviorSubject<ProductNew[]>([]);
    public favoriteListId: number[] = [];
    public get currentFavoriteList(): ProductNew[] {
        return this.favoriteList.value;
    }

    public wishlistList = new BehaviorSubject<ProductNew[]>([]);
    // public wishlistList = new Subject<ProductNew[]>();
    public wishlistListId: number[] = [];
    public get currentWishlistList(): ProductNew[] {
        return this.wishlistList.value;
    }

    public sliderGames: ProductNew[] = [];
    public searchGames: ProductNew[] = [];

    public platforms: ExpansionListItem[] = [];
    public genres: ExpansionListItem[] = [];

    public searchPhrase: string = '';

    public onlyPublishedGames: boolean = false;

    public sort: Sort = Sort.TOP_SELLER;
    public minimumRating: number | null = null;
    public maximumRating: number | null = null;
    public numberOfPages: number = 0;
    public offset: number = 0;

    public countOfProducts: number = 0;

    public constructor(
        private router: Router,
        private apiService: ApiService,
        private authService: AuthService,
        private route: ActivatedRoute
    ) {
        this.initializePlatforms().then();
        this.initializeGenres().then();
        this.initializeFavoriteList(true).then();
        this.initializeWishlistList(true).then();
        this.initializeObservers();
    }

    public async searchById(id: number): Promise<Game | null> {
        const response = await this.apiService.getRequest<{game: Game}>({
            url: `${API_GAME_ONE}/${id}`,
        });

        return response?.game || null;
    }

    public async topGame(): Promise<ProductNew[] | null> {
        const response = await this.apiService.postRequest<{games: Game[]}>({
            url: API_GAME_SEARCH,
            body: {
                searchPhrase: 'red dead',
                pageSize: 10,
                offset: 0,
                sort: 2,
                filters: {
                    minimumRating: 80,
                    maximumRating: 99,
                },
            },
        });

        this.sliderGames = response && Array.isArray(response?.games) ? this.convertToGameCard(response.games) : [];
        return this.sliderGames;
    }

    public async addGameToFavoriteList(gameId: number): Promise<void> {
        const token = this.authService.token;
        await this.apiService.postRequest<any>({url: API_FAVORITES_ADD, body: {token, gameId}});
        this.favoriteListId.push(gameId);
        await this.initializeFavoriteList(true);
    }
    public async removeGameFromFavoriteList(gameId: number): Promise<void> {
        const token = this.authService.token;
        await this.apiService.deleteRequest<any>({
            url: API_FAVORITES_REMOVE,
            body: {token, gameId},
        });
        this.favoriteListId = this.favoriteListId.filter((id) => id !== gameId);
        await this.initializeFavoriteList(true);
    }

    public async addGameToWishlistList(gameId: number): Promise<void> {
        const token = this.authService.token;
        await this.apiService.postRequest<any>({url: API_WISHLIST_ADD, body: {token, gameId}});
        this.wishlistListId.push(gameId);
        await this.initializeWishlistList(true);
    }
    public async removeGameFromWishlistList(gameId: number): Promise<void> {
        const token = this.authService.token;
        await this.apiService.deleteRequest<any>({
            url: API_WISHLIST_REMOVE,
            body: {token, gameId},
        });
        this.wishlistListId = this.favoriteListId.filter((id) => id !== gameId);
        await this.initializeWishlistList(true);
    }

    private convertToGameCard(games: Game[]): ProductNew[] {
        const generatedGames = games.map((game): ProductNew => {
            return {
                name: game.name,
                id: game.id,
                price: game.price,
                priceOnSale: game.priceOnSale,
                cover: game.cover,
                artworks: game.artworks,
                screenshots: game.screenshots,
                isFavorite: this.favoriteListId.some((gameId) => gameId === game.id),
                isWishList: this.wishlistListId.some((gameId) => gameId === game.id),
            };
        });
        return generatedGames;
    }

    public async changeSort(sort: Sort): Promise<void> {
        this.offset = 0;
        this.sort = sort;
        await this.search();
    }

    public async changePage(multiplier: number): Promise<void> {
        this.offset = multiplier * this.PAGE_SIZE;
        if (this.offset < 0) this.offset = 0;

        await this.search();
    }

    public async search(): Promise<void> {
        const response = await this.apiService.postRequest<{count: number; games: Game[]}>({
            url: API_GAME_SEARCH,
            body: {
                searchPhrase: this.searchPhrase,
                pageSize: this.PAGE_SIZE,
                offset: this.offset,
                sort: this.sort,
                filters: this.generateFilters(),
            },
        });

        this.games = response && Array.isArray(response?.games) ? response.games : [];
        this.searchGames = this.convertToGameCard(this.games);

        this.countOfProducts = response?.count || 0;
        this.numberOfPages = ~~(this.countOfProducts / this.PAGE_SIZE) + 1;
    }

    public async navigate(): Promise<void> {
        this.offset = 0;

        if (!this.router.routerState.snapshot.url.startsWith('/search')) {
            await this.router.navigateByUrl('/search');
            return;
        }

        await this.search();
    }

    private generateFilters(): Filters {
        return {
            status: this.onlyPublishedGames,
            platforms: this.platforms.filter((x) => x.isEnabled).map((x) => x.id),
            genres: this.genres.filter((x) => x.isEnabled).map((x) => x.id),
            minimumRating: this.minimumRating || undefined,
            maximumRating: this.maximumRating || undefined,
        };
    }

    private async initializePlatforms(): Promise<void> {
        const platforms = (await this.apiService.getRequest<Platform[]>({url: API_GAME_PLATFORMS})) || [];
        this.platforms = platforms.map((x) => ({id: x.id, title: x.name, isEnabled: false}));
    }

    private async initializeFavoriteList(saveToFavoriteList: boolean = false): Promise<void> {
        const token = this.authService.token;
        if (token) {
            const favoriteList: Game[] =
                (await this.apiService
                    .postRequest<{games: Game[]}>({url: API_FAVORITES_ALL, body: {token}})
                    .then((data) => data?.games)) || [];

            this.favoriteListId = favoriteList.map((game) => game.id);
            if (saveToFavoriteList) this.favoriteList.next(this.convertToGameCard(favoriteList));
        }
    }

    private async initializeWishlistList(saveToWishlistList: boolean = false): Promise<void> {
        const token = this.authService.token;
        if (token) {
            const wishlistList: Game[] =
                (await this.apiService
                    .postRequest<{games: Game[]}>({url: API_WISHLIST_ALL, body: {token}})
                    .then((data) => data?.games)) || [];

            this.wishlistListId = wishlistList.map((game) => game.id);
            if (saveToWishlistList) this.wishlistList.next(this.convertToGameCard(wishlistList));
        }
    }

    private async initializeGenres(): Promise<void> {
        const genres = (await this.apiService.getRequest<Genre[]>({url: API_GAME_GENRES})) || [];
        this.genres = genres.map((x) => ({id: x.id, title: x.name, isEnabled: false}));
    }

    private initializeObservers(): void {
        this.router.events.subscribe(async (value) => {
            if (value instanceof NavigationEnd) {
                this.searchPhrase = this.getFilterByParam('searchPhrase') || this.searchPhrase;
                this.onlyPublishedGames =
                    this.getFilterByParam('onlyPublishedGames') === 'true' ? true : false || this.onlyPublishedGames;
                this.sort = this.getFilterSort();
                this.offset = Number(this.getFilterByParam('offset')) || this.offset;
                this.numberOfPages = Number(this.getFilterByParam('numberOfPages')) || this.numberOfPages;
                this.minimumRating = Number(this.getFilterByParam('minimumRating')) || this.minimumRating;
                this.maximumRating = Number(this.getFilterByParam('maximumRating')) || this.maximumRating;
                this.getFilterArray(this.getFilterByParam('genres'), 'genres');
                this.getFilterArray(this.getFilterByParam('platforms'), 'platforms');

                if (value.url.startsWith('/search')) await this.search();
            }
        });
    }
    private getFilterByParam(param: string): string | null {
        const convertedToString = this.route.snapshot.queryParamMap.get(param);
        if (convertedToString) return convertedToString;
        return null;
    }

    private getFilterSort(): Sort {
        const sort = this.getFilterByParam('sort');
        if (!sort) return this.sort;

        let sortObj: Sort;
        switch (+sort) {
            case 0:
                sortObj = Sort.MOST_RELEVANT;
                break;
            case 1:
                sortObj = Sort.TOP_SELLER;
                break;
            case 2:
                sortObj = Sort.MOST_POPULAR;
                break;
            case 3:
                sortObj = Sort.NEWEST;
                break;
            case 4:
                sortObj = Sort.OLDEST;
                break;
            default:
                sortObj = this.sort;
        }
        return sortObj;
    }
    private getFilterArray(params: string | null, key: string): void | null {
        if (params === null) return;

        const filteredIds = params.split(',').map((x) => +x);
        if (key === 'genres') {
            filteredIds.forEach((id) => {
                const activeGenre = this.genres.find((genre) => genre.id == id);
                if (activeGenre) activeGenre.isEnabled = true;
            });
        } else if (key === 'platforms') {
            filteredIds.forEach((id) => {
                const activePlatform = this.platforms.find((genre) => genre.id == id);
                if (activePlatform) activePlatform.isEnabled = true;
            });
        }
    }
}
