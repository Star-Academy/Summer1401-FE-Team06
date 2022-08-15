import {Injectable} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {ApiService} from './api.service';
import {Game} from '../models/game/game.model';
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
import {SlidebarImages} from '../models/game/game-interface/slidebar-image.model';
import {LoadingService} from './loading.service';
import {GameInfo} from '../models/game/game-info.model';
import {SearchService} from './search.service';

@Injectable({
    providedIn: 'root',
})
export class GameService {
    public readonly PAGE_SIZE: number = 21;
    public games: ProductNew[] = [];

    public favoriteListCount = new BehaviorSubject<number>(0);
    public favoriteList = new BehaviorSubject<ProductNew[]>([]);
    public favoriteListId: number[] = [];
    public get currentFavoriteList(): ProductNew[] {
        return this.favoriteList.value;
    }

    public wishlistListCount = new BehaviorSubject<number>(0);
    public wishlistList = new BehaviorSubject<ProductNew[]>([]);
    public wishlistListId: number[] = [];
    public get currentWishlistList(): ProductNew[] {
        return this.wishlistList.value;
    }

    public slidebarImages: SlidebarImages[] = [];
    public topSeller: ProductNew[] = [];
    public mostPopular: ProductNew[] = [];
    public newest: ProductNew[] = [];

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
        private route: ActivatedRoute,
        private loadingService: LoadingService,
        private searchService: SearchService
    ) {
        this.initializePlatforms().then();
        this.initializeGenres().then();
        this.initializeFavoriteList(true).then();
        this.initializeWishlistList(true).then();
        this.initializeObservers();
    }

    public async searchById(id: number): Promise<GameInfo | null> {
        const response = await this.apiService.getRequest<{game: Game}>({
            url: `${API_GAME_ONE}/${id}`,
        });
        const game = response?.game || null;

        let createdGameForGameInfo;

        if (game) {
            createdGameForGameInfo = {
                ...game,
                discount: ((game.price - game.priceOnSale) / game.price) * 100,
                isFavorite: this.favoriteListId.some((gameId) => gameId === game.id),
                isWishList: this.wishlistListId.some((gameId) => gameId === game.id),
            };
        }

        return createdGameForGameInfo || null;
    }

    public async topSellerGames(body: object): Promise<ProductNew[] | null> {
        if (this.topSeller.length > 0) return this.topSeller;
        const response = await this.apiService.postRequest<{games: Game[]}>({
            url: API_GAME_SEARCH,
            body,
        });

        this.topSeller = response && Array.isArray(response?.games) ? this.convertToGameCard(response.games) : [];

        return this.topSeller;
    }
    public async mostPopularGames(body: object): Promise<ProductNew[] | null> {
        if (this.mostPopular.length > 0) return this.mostPopular;
        const response = await this.apiService.postRequest<{games: Game[]}>({
            url: API_GAME_SEARCH,
            body,
        });

        this.mostPopular = response && Array.isArray(response?.games) ? this.convertToGameCard(response.games) : [];
        return this.mostPopular;
    }
    public async newestGames(body: object): Promise<ProductNew[] | null> {
        if (this.newest.length > 0) return this.newest;
        const response = await this.apiService.postRequest<{games: Game[]}>({
            url: API_GAME_SEARCH,
            body,
        });

        this.newest = response && Array.isArray(response?.games) ? this.convertToGameCard(response.games) : [];
        return this.newest;
    }

    public async allGames(body: object): Promise<ProductNew[] | null> {
        if (this.games.length > 0) return this.games;
        const response = await this.apiService.postRequest<{games: Game[]}>({
            url: API_GAME_SEARCH,
            body,
        });

        this.games = response && Array.isArray(response?.games) ? this.convertToGameCard(response.games) : [];
        return this.games;
    }

    public async relatedGames(genres: number[]): Promise<ProductNew[] | null> {
        const response = await this.apiService.postRequest<{games: Game[]}>({
            url: API_GAME_SEARCH,
            body: {
                searchPhrase: '',
                pageSize: 10,
                offset: 0,
                sort: Sort.MOST_POPULAR,
                filters: {
                    genres: [...genres],
                },
            },
        });

        const relateGames = response && Array.isArray(response?.games) ? this.convertToGameCard(response.games) : [];
        return relateGames;
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
                discount: (game.price / game.priceOnSale) * 100,
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

    public async search(saveInUrl?: boolean): Promise<void> {
        this.loadingService.show();
        const filterParams = this.generateFilters();
        if (saveInUrl)
            await this.searchService.searchWithFilter({searchPhrase: this.searchPhrase, filters: filterParams});
        const response = await this.apiService.postRequest<{count: number; games: Game[]}>({
            url: API_GAME_SEARCH,
            body: {
                searchPhrase: this.searchPhrase,
                pageSize: this.PAGE_SIZE,
                offset: this.offset,
                sort: this.sort,
                filters: filterParams,
            },
        });

        const gamesGet = response && Array.isArray(response?.games) ? response.games : [];
        this.searchGames = this.convertToGameCard(gamesGet);

        this.countOfProducts = response?.count || 0;
        this.numberOfPages = ~~(this.countOfProducts / this.PAGE_SIZE) + 1;
        this.loadingService.hide();
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
            if (saveToFavoriteList) this.favoriteListCount.next(favoriteList.length);
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
            if (saveToWishlistList) this.wishlistListCount.next(this.wishlistListId.length);
        }
    }

    private async initializeGenres(): Promise<void> {
        const genres = (await this.apiService.getRequest<Genre[]>({url: API_GAME_GENRES})) || [];
        this.genres = genres.map((x) => ({id: x.id, title: x.name, isEnabled: false}));
    }

    private initializeObservers(): void {
        this.router.events.subscribe(async (value) => {
            if (value instanceof NavigationEnd) {
                this.translateUrlToSearchGame();

                if (value.url.startsWith('/search')) await this.search();
            }
        });
    }

    private translateUrlToSearchGame(): void {
        this.searchPhrase = this.getFilterByParam('searchPhrase') || this.searchPhrase;
        this.onlyPublishedGames =
            this.getFilterByParam('onlyPublishedGames') === 'true' ? true : false || this.onlyPublishedGames;
        this.sort = this.getFilterSort();
        this.offset = Number(this.getFilterByParam('offset')) || this.offset;
        this.numberOfPages = Number(this.getFilterByParam('numberOfPages')) || this.numberOfPages;
        this.minimumRating = Number(this.getFilterByParam('minimumRating')) || this.minimumRating;
        this.maximumRating = Number(this.getFilterByParam('maximumRating')) || this.maximumRating;
        this.getFilterArray(this.getFilterByParamAll('genres'), 'genres');
        this.getFilterArray(this.getFilterByParamAll('platforms'), 'platforms');
    }

    private getFilterByParam(param: string): string | null {
        const convertedToString = this.route.snapshot.queryParamMap.get(param);
        if (convertedToString) return convertedToString;
        return null;
    }

    private getFilterByParamAll(param: string): string[] | null {
        const convertedToString = this.route.snapshot.queryParamMap.getAll(param);
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
    private getFilterArray(params: string[] | null, key: string): void | null {
        if (params === null) return;

        const filteredIds = params.map((x) => +x);
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
