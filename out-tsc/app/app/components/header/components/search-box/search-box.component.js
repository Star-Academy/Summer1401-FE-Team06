import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
let SearchBoxComponent = class SearchBoxComponent {
    constructor() {
        this.searchPhrase = '';
        this.searchPhraseChange = new EventEmitter();
    }
};
__decorate([
    Input()
], SearchBoxComponent.prototype, "searchPhrase", void 0);
__decorate([
    Output()
], SearchBoxComponent.prototype, "searchPhraseChange", void 0);
SearchBoxComponent = __decorate([
    Component({
        selector: 'app-search-box',
        templateUrl: './search-box.component.html',
        styleUrls: ['./search-box.component.scss'],
    })
], SearchBoxComponent);
export { SearchBoxComponent };
//# sourceMappingURL=search-box.component.js.map