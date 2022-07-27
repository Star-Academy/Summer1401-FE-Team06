import {Component, Input, OnInit} from '@angular/core';
import {ResultMessageService} from '../../services/result-message.service';

@Component({
    selector: 'app-result-message',
    templateUrl: './result-message.component.html',
    styleUrls: ['./result-message.component.scss'],
})
export class ResultMessageComponent {
    public backgroundColorResultMessage: string | null = '';
    public message: string | null = '';
    public constructor(private resultMessageService: ResultMessageService) {
        this.resultMessageService.initComponent(this);
    }
    public show(message?: string, colorType?: string): void {
        this.message = message || null;
        this.backgroundColorResultMessage = colorType || null;
    }
}
