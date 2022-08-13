import {Component, ElementRef, ViewChild, ChangeDetectorRef} from '@angular/core';
import {LoadingService} from '../../services/loading.service';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
    public isShow: boolean = false;
    public opacity: number = 1;
    public filter: string = '0';

    public load: number = 0;
    public int!: any;

    public constructor(private changeDetectorRef: ChangeDetectorRef, private loadingService: LoadingService) {
        this.loadingService.initComponent(this);
    }

    public blurring(): void {
        console.log(this.load);
        this.load = this.load + 1;

        if (this.load > 99) {
            this.isShow = false;
            clearInterval(this.int);
        }

        function scale(num: number, in_min: number, in_max: number, out_min: number, out_max: number): number {
            return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
        }
        this.opacity = scale(this.load, 0, 100, 1, 0);
        this.filter = `blur(${scale(this.load, 0, 100, 30, 0)}px)`;
        console.log(this.filter);
    }

    public show(): void {
        this.isShow = true;
        this.opacity = 1;
        this.load = 0;
        this.int = setInterval(this.blurring.bind(this), 30);
    }
}
