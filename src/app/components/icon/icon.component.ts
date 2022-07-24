import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
    @Input() public iconClass: string = '';
    @Input() public backgroundColorClassName: string = '';
}
