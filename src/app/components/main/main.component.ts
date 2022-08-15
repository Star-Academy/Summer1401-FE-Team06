import {Component, OnInit} from '@angular/core';
import {PrimaryTitleDirection} from '../../enum/primary-title-direction.enum';
import {GameService} from '../../services/game.service';
import {ProductNew} from '../../models/productNew.model';
import {LoadingService} from '../../services/loading.service';
import {SlidebarImages} from '../../models/game/game-interface/slidebar-image.model';
import {SearchService} from '../../services/search.service';
import {Banner} from '../../models/game/game-interface/banner.model';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
    public constructor(
        public gameService: GameService,
        private loadingService: LoadingService,
        public searchService: SearchService
    ) {}

    public titleDirectionType = PrimaryTitleDirection;
    public topSellerGames: ProductNew[] | null = null;
    public mostPopularGames: ProductNew[] | null = null;
    public newestGames: ProductNew[] | null = null;
    public games: ProductNew[] | null = null;
    public bannerItems: Banner[] = [
        {

            id: 1970,
            name: 'Assassins Creed',
            ageLimit: 16,
            releaseDate: 2007,
            genre: 'نقش آفرینی و اکشن',
            rating: 84,
            src: 'assets/images/banner.webp',
        },
        {
            id: 138949,
            name: 'Spider Man',
            ageLimit: 13,
            releaseDate: 2021,
            genre: 'ابرقهرمان و اکشن',
            rating: 82,
            src: 'assets/images/banner2.webp',
        },
    ];

    public slidebarImages: SlidebarImages[] = [];
    public async ngOnInit(): Promise<void> {
        this.loadingService.show();
        this.topSellerGames = (await this.gameService.topSellerGames(this.searchService.topSellerBody)) || null;
        if (this.topSellerGames)
            this.slidebarImages = this.topSellerGames
                ?.map((game) => {
                    return {
                        id: game.id,
                        artworks: game.artworks[0],
                        name: game.name,
                    };
                })
                .slice(1, 5);
        this.loadingService.hide();
        this.mostPopularGames = (await this.gameService.mostPopularGames(this.searchService.mostPopularBody)) || null;
        this.newestGames = (await this.gameService.newestGames(this.searchService.newestBody)) || null;
        this.games = (await this.gameService.allGames(this.searchService.allGamesBody)) || null;
    }
}
