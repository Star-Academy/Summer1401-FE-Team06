import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-more-button',
    templateUrl: './more-button.component.html',
    styleUrls: ['./more-button.component.scss'],
})
export class MoreButtonComponent {
    @Input() public isReverse: boolean = false;
    @Output() public btnClick = new EventEmitter<void>();

    public onClickHandler(): void {
        this.btnClick.emit();
    }
}
