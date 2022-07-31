import {Component, Input} from '@angular/core';
import {IconType} from '../../enum/icon-type.enum';

@Component({
    selector: 'app-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
    @Input() public iconClass: IconType = IconType.SHOP;
    @Input() public backgroundColorClassName: string = '';
}
