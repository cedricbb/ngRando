"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var hike_list_component_1 = require("./hike-list.component");
var hike_service_1 = require("./hike.service");
var HikeModule = (function () {
    function HikeModule() {
    }
    return HikeModule;
}());
HikeModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [hike_list_component_1.HikeListComponent],
        exports: [hike_list_component_1.HikeListComponent],
        providers: [hike_service_1.HikeService]
    })
], HikeModule);
exports.HikeModule = HikeModule;
//# sourceMappingURL=hike.module.js.map