import {Component, OnInit} from '@angular/core';
import {PrimaryTitleDirection} from '../../enum/primary-title-direction.enum';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent {
    public titleDirectionType = PrimaryTitleDirection;
}
