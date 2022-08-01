import {Component, Input, OnInit} from '@angular/core';
import {ResultMessageService} from '../../services/result-message.service';

@Component({
    selector: 'app-primary-title',
    templateUrl: './primary-title.component.html',
    styleUrls: ['./primary-title.component.scss'],
})
export class PrimaryTitleComponent {
    @Input() public title: string = '';
    @Input() public direction: string = '';
}
