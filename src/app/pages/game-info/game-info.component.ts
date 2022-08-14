import {Component, OnInit} from '@angular/core';

import {GameService} from '../../services/game.service';
import {Game, GameImage, Item} from '../../models/game.model';
import {ActivatedRoute, Params} from '@angular/router';
import {UtilityService} from '../../services/utility.service';
import {ProductNew} from '../../models/productNew.model';

@Component({
    selector: 'app-game-info',
    templateUrl: './game-info.component.html',
    styleUrls: ['./game-info.component.scss'],
})
export class GameInfoComponent implements OnInit {
    public isFetching = false;
    public game: Game | null = null;
    public relatedGames!: ProductNew[] | null;
    public gameImages: string[] = [];
    private id!: number;
    public constructor(
        private gameService: GameService,
        private route: ActivatedRoute,
        private utilityService: UtilityService
    ) {}

    public async ngOnInit(): Promise<void> {
        this.route.params.subscribe(async (params: Params) => {
            this.id = +params['id'];
            this.game = (await this.gameService.searchById(this.id)) || null;
            if (this.game) {
                this.gameImages = this.utilityService.gameImageGenerate(
                    this.game.artworks,
                    this.game.screenshots,
                    this.game.cover
                );
            }
            this.relatedGames = await this.gameService.relatedGames(this.extractID(this.game?.genres));
        });
    }
    public extractID(items?: Item[]): number[] {
        if (items) return items.map((item) => item.id);
        return [];
    }
}
