import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-primary-title',
    templateUrl: './primary-title.component.html',
    styleUrls: ['./primary-title.component.scss'],
})
export class PrimaryTitleComponent {
    @Input() public title: string = '';
}
