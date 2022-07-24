import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-search-box',
    templateUrl: './search-box.component.html',
    styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
    @Input() public searchPhrase: string = '';
    @Output() public searchPhraseChange = new EventEmitter<string>();
}
