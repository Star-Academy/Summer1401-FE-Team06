import {Component, OnInit} from '@angular/core';
import {PrimaryTitleDirection} from '../../enum/primary-title-direction.enum';
import {GameService} from '../../services/game.service';
import {ProductNew} from '../../models/productNew.model';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
    public constructor(private gameService: GameService) {}

    public titleDirectionType = PrimaryTitleDirection;
    public topGame: ProductNew[] | null = null;

    public async ngOnInit(): Promise<void> {
        this.topGame = (await this.gameService.topGame()) || null;
    }
}
