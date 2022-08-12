import {Component, OnInit} from '@angular/core';

import {GameService} from '../../services/game.service';
import {Game, GameImage} from '../../models/game.model';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
    selector: 'app-game-info',
    templateUrl: './game-info.component.html',
    styleUrls: ['./game-info.component.scss'],
})
export class GameInfoComponent implements OnInit {
    public isFetching = false;
    public game: Game | null = null;
    public gameImages: string[] = [];
    private id!: number;
    public constructor(private gameService: GameService, private route: ActivatedRoute) {}

    public ngOnInit(): void {
        this.route.params.subscribe(async (params: Params) => {
            this.id = +params['id'];
            this.game = (await this.gameService.searchById(this.id)) || null;
            if (this.game) {
                this.gameImages = this.gameImageGenerate(this.game?.cover, this.game?.artworks, this.game?.screenshots);
            }
        });
    }
    public showMe(): void {
        console.log(this.game);
    }
    private gameImageGenerate(cover: GameImage, artWork: GameImage[], screenShots: GameImage[]): string[] {
        const mergedImages = [
            ...this.convertGameImageToId([cover]),
            ...this.convertGameImageToId(artWork),
            ...this.convertGameImageToId(screenShots),
        ];

        return mergedImages;
    }
    private convertGameImageToId(arrayHarchi: GameImage[]): string[] {
        const extractedId = arrayHarchi.map((image) => image.id);
        return extractedId;
    }
}
