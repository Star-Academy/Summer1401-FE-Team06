import {Injectable} from '@angular/core';
import {LoadingComponent} from '../components/loading/loading.component';

@Injectable({
    providedIn: 'root',
})
export class LoadingService {
    private loadingComponent!: LoadingComponent;

    public initComponent(loadingComponent: LoadingComponent): void {
        this.loadingComponent = loadingComponent;
    }

    public show(): void {
        this.loadingComponent.show();
    }

    public hide(): void {
        this.loadingComponent.hide();
    }
}
