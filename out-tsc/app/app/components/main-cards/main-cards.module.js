import {__decorate} from 'tslib';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainCardsComponent} from './main-cards.component';
import {CardModule} from './card/card.module';
let MainCardsModule = class MainCardsModule {};
MainCardsModule = __decorate(
    [
        NgModule({
            declarations: [MainCardsComponent],
            exports: [MainCardsComponent],
            imports: [CommonModule, CardModule],
        }),
    ],
    MainCardsModule
);
export {MainCardsModule};
//# sourceMappingURL=main-cards.module.js.map
