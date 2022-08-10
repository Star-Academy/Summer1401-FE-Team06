import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-switch',
    templateUrl: './switch.component.html',
    styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent {
    @Input() public title: string = '';
    @Input() public value: boolean = false;

    @Output() public valueChange = new EventEmitter<boolean>();
}
