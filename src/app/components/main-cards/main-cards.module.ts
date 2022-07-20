import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCardsComponent } from './main-cards.component';
import {CardModule} from "./card/card.module";



@NgModule({
  declarations: [
    MainCardsComponent
  ],
  exports: [
    MainCardsComponent
  ],
    imports: [
        CommonModule,
        CardModule
    ]
})
export class MainCardsModule { }
