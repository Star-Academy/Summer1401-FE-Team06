import {Component, OnInit} from '@angular/core';
import {PrimaryTitleDirection} from '../../enum/primary-title-direction.enum';
import {GameService} from '../../services/game.service';
import {ProductNew} from '../../models/productNew.model';
import {LoadingService} from '../../services/loading.service';
import {SlidebarImages} from '../../models/game/game-interface/slidebar-image.model';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
    public constructor(public gameService: GameService, private loadingService: LoadingService) {}

    public titleDirectionType = PrimaryTitleDirection;
    public topSellerGames: ProductNew[] | null = null;
    public mostPopularGames: ProductNew[] | null = null;
    public newestGames: ProductNew[] | null = null;
    public games: ProductNew[] | null = null;
    public slidebarImages: SlidebarImages[] = [];
    public async ngOnInit(): Promise<void> {
        this.topSellerGames = (await this.gameService.topSellerGames()) || null;
        if (this.topSellerGames)
            this.slidebarImages = this.topSellerGames
                ?.map((game) => {
                    return {
                        id: game.id,
                        artworks: game.artworks[0],
                    };
                })
                .slice(1, 5);

        this.mostPopularGames = (await this.gameService.mostPopularGames()) || null;
        this.newestGames = (await this.gameService.newestGames()) || null;
        await this.gameService.search();
        this.games = this.gameService.searchGames;
    }
}
