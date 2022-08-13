import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile.component';
import {RouterModule} from '@angular/router';
import {SliderCardModule} from '../../components/slider-card/slider-card.module';
import {FormsModule} from '@angular/forms';
import {ResultMessageModule} from '../../components/result-message/result-message.module';
import {HeaderModule} from '../../components/header/header.module';
import {FooterModule} from '../../components/footer/footer.module';
import {SliderImageConverterPipeModule} from '../game-info/pipe/slider-image-converter.pip.module';
import {PickBestImagePipeModule} from '../game-info/pipe/pick-best-image-pipe.module';

@NgModule({
    declarations: [ProfileComponent],
    imports: [
        CommonModule,
        RouterModule,
        SliderCardModule,
        FormsModule,
        ResultMessageModule,
        HeaderModule,
        FooterModule,
        SliderImageConverterPipeModule,
        PickBestImagePipeModule,
    ],
    exports: [ProfileComponent],
})
export class ProfileModule {}
