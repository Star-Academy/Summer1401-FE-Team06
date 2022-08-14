import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchComponent} from './search.component';
import {GameService} from '../../services/game.service';
import {FetchMock} from '../../mocks/fetch.mock';
import {RouterTestingModule} from '@angular/router/testing';
import {LoadingService} from "../../services/loading.service";

describe('SearchComponent', () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;
    let host: HTMLElement;
    let gameServiceMock: GameService;
    let fetchMock: FetchMock;
    let loadingServiceMock: LoadingService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SearchComponent],
            imports: [RouterTestingModule],
            providers: [GameService, LoadingService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;

        gameServiceMock = TestBed.inject(GameService);
        loadingServiceMock = TestBed.inject(LoadingService);
        fixture.detectChanges();

        fetchMock = new FetchMock();
        spyOn(window, 'fetch').and.callFake(fetchMock.fetch.bind(fetchMock));
    });

    it('should create', () => {
        fixture.detectChanges();
        console.log(loadingServiceMock);
        spyOn(loadingServiceMock, 'show');
        expect(component).toBeTruthy();
    });

    // it('should previousPageButtonClickHandler', () => {
    //     component.active = Math.floor(Math.random() * 100);
    //     let num = component.active - 1;
    //     expect(component.previousPageButtonClickHandler()).toBeTruthy();
        // if (num === 1) component.linumbers = [1, 2, 3];
        // if (num === component.gameService.numberOfPages)
        //     component.linumbers = [
        //         component.gameService.numberOfPages - 2,
        //         component.gameService.numberOfPages - 1,
        //         component.gameService.numberOfPages,
        //     ];
    // });

    // const tests = (num: number): void => {
    //     if (num === 1) expect(JSON.stringify(component.linumbers)).toEqual(JSON.stringify([1, 2, 3]));
    //     if (num === component.gameService.numberOfPages)
    //         component.linumbers = [
    //             component.gameService.numberOfPages - 2,
    //             component.gameService.numberOfPages - 1,
    //             component.gameService.numberOfPages,
    //         ];
    // };
});
