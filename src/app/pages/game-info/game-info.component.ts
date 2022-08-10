import {Component} from '@angular/core';
import {detailListModel} from './game-details.model';

const fakeDetails: detailListModel = {
    title: 'Genre',
    list: [
        {name: 'Shooter', id: 3},
        {name: 'Fighting', id: 2},
        {name: 'Music', id: 4},
        {name: 'Platform', id: 6},
        {name: 'Puzzle', id: 10},
    ],
};

@Component({
    selector: 'app-game-info',
    templateUrl: './game-info.component.html',
    styleUrls: ['./game-info.component.scss'],
})
export class GameInfoComponent {
    public summary = {
        title: 'درباره بازی:',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dignissimos doloribus esse exercitationem, id itaque quis rem rerum soluta vero?',
    };

    public storyLine = {
        title: 'داستان بازی:',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores assumenda autem delectus dolorem dolores eius eos fuga illo in ipsa, laboriosam laborum modi mollitia nesciunt non possimus quaerat similique, suscipit veniam vero voluptatibus.',
    };

    public detailsList: detailListModel = fakeDetails;
}
