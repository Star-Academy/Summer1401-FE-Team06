import {Component, OnInit} from '@angular/core';
import {PrimaryTitleDirection} from '../../enum/primary-title-direction.enum';
import {GameService} from '../../services/game.service';
import {ProductNew} from '../../models/productNew.model';
import {LoadingService} from '../../services/loading.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
    public constructor(public gameService: GameService, private loadingService: LoadingService) {}

    public titleDirectionType = PrimaryTitleDirection;
    public topGame: ProductNew[] | null = null;

    public async ngOnInit(): Promise<void> {
        this.loadingService.show();
        this.topGame = (await this.gameService.topGame()) || null;
    }
}
