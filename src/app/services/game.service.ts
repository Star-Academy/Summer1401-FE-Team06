import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {ApiService} from './api.service';
import {Game} from '../models/game.model';
import {
    API_FAVORITES_ADD,
    API_FAVORITES_ALL,
    API_FAVORITES_REMOVE,
    API_GAME_GENRES,
    API_GAME_ONE,
    API_GAME_PLATFORMS,
    API_GAME_SEARCH,
} from '../utils/api.utils';
import {Sort} from '../enum/sort.enum';
import {Platform} from '../models/platform.model';
import {Genre} from '../models/genre.model';
import {Filters} from '../models/filters.model';
import {ExpansionListItem} from '../pages/search/models/expansion-list-item.model';
import {ProductNew} from '../models/productNew.model';
import {AuthService} from './auth.service';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GameService {
    public readonly PAGE_SIZE: number = 20;
    public games: Game[] = [];
    // public favoriteList: ProductNew[] = [];
    public favoriteList = new Subject<ProductNew[]>();
    // public favoriteChanged = new Subject<ProductNew[]>();
    public favoriteListId: number[] = [];
    public sliderGames: ProductNew[] = [];
    public platforms: ExpansionListItem[] = [];
    public genres: ExpansionListItem[] = [];

    public searchPhrase: string = '';
    public offset: number = 0;
    public sort: Sort = Sort.TOP_SELLER;
    public onlyPublishedGames: boolean = false;
    public minimumRating: number | null = null;
    public maximumRating: number | null = null;

    public constructor(private router: Router, private apiService: ApiService, private authService: AuthService) {
        this.initializePlatforms().then();
        this.initializeGenres().then();
        this.initializeFavoriteList(true).then();
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
        this.offset += multiplier * this.PAGE_SIZE;
        if (this.offset < 0) this.offset = 0;

        await this.search();
    }

    public async search(): Promise<void> {
        const response = await this.apiService.postRequest<{games: Game[]}>({
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
            // if (saveToFavoriteList) this.favoriteList = this.convertToGameCard(favoriteList);
            if (saveToFavoriteList) this.favoriteList.next(this.convertToGameCard(favoriteList));
        }
    }

    private async initializeGenres(): Promise<void> {
        const genres = (await this.apiService.getRequest<Genre[]>({url: API_GAME_GENRES})) || [];
        this.genres = genres.map((x) => ({id: x.id, title: x.name, isEnabled: false}));
    }

    private initializeObservers(): void {
        this.router.events.subscribe(async (value) => {
            if (value instanceof NavigationEnd) {
                if (value.url.startsWith('/search')) await this.search();
            }
        });
    }
}
