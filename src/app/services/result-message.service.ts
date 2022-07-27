import {Injectable} from '@angular/core';
import {ResultMessageComponent} from '../components/result-message/result-message.component';

@Injectable({
    providedIn: 'root',
})
export class ResultMessageService {
    private resultMessageComponent!: ResultMessageComponent;

    public initComponent(resultMessageComponent: ResultMessageComponent): void {
        this.resultMessageComponent = resultMessageComponent;
    }

    public show(message: string, colorType?: string): void {
        this.resultMessageComponent.show(message, colorType);
    }

    public reset(): void {
        this.resultMessageComponent.show();
    }
}
