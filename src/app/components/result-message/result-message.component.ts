import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-result-message',
    templateUrl: './result-message.component.html',
    styleUrls: ['./result-message.component.scss'],
})
export class ResultMessageComponent {
    @Input() public backgroundColorResultMessage: string = '';
    @Input() public resultMessage: string = 'اشتباه زدید';
}
