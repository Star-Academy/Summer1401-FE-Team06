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
        console.log(this.loadingComponent);
        this.loadingComponent.show();
    }

    // public async wrapAsync<T>(callback: () => T): Promise<T> {
    //     if (!this.spinnerComponent) return callback();
    //
    //     const spinnerId = this.show();
    //
    //     try {
    //         return await callback();
    //     } finally {
    //         this.hide(spinnerId);
    //     }
    // }
}
