import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ExpansionListItem} from '../../models/expansion-list-item.model';

@Component({
    selector: 'app-expansion-list',
    templateUrl: './expansion-list.component.html',
    styleUrls: ['./expansion-list.component.scss'],
})
export class ExpansionListComponent {
    @Input() public title: string = '';
    @Input() public items: ExpansionListItem[] = [];

    @Output() public itemsChange = new EventEmitter<ExpansionListItem[]>();

    public isExpanded: boolean = false;
    public searchPhrase: string = '';
}
