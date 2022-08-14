import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Product} from '../../components/main-cards/models/product';
import {Products} from '../../components/main-cards/sample-data';
import {Sort} from '../../enum/sort.enum';
import {GameService} from '../../services/game.service';
import {LoadingService} from '../../services/loading.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
    public linumbers: number[] = [1, 2, 3];
    public Sort = Sort;
    public active: number = 1;

    public constructor(public gameService: GameService, private loadingService: LoadingService) {}
    public ngOnInit(): void {
        this.loadingService.show();
    }

    public async sortingClickHandler(sort: any): Promise<void> {
        await this.gameService.changeSort(+sort.target.value);
    }

    public async pageButtonClickHandler(x: number): Promise<void> {
        await this.changePaginationList(this.active + x);
    }

    public async changePaginationList(num: number): Promise<void> {
        window.scroll(0, 0);
        this.active = num;
        this.linumbers = [num - 1, num, num + 1];
        if (num === 1) this.linumbers = [1, 2, 3];
        if (num === this.gameService.numberOfPages)
            this.linumbers = [
                this.gameService.numberOfPages - 2,
                this.gameService.numberOfPages - 1,
                this.gameService.numberOfPages,
            ];
        await this.gameService.changePage(this.active - 1);
    }
}
