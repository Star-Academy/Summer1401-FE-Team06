import {Component, Input} from '@angular/core';
import {IconType} from '../../enum/icon-type.enum';
import {IconColor} from '../../enum/icon-color.enum';

@Component({
    selector: 'app-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
    @Input() public iconClass: IconType = IconType.SHOP;
    @Input() public iconColor: IconColor = IconColor.WHITE;
    @Input() public colorStyle: string = '';
    @Input() public haveBackgroundColor: boolean = true;
}
