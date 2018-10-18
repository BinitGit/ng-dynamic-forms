var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ɵlooseIdentical as looseIdentical } from "@angular/core";
import { DynamicOptionControlModel } from "../dynamic-option-control.model";
import { serializable } from "../../decorator/serializable.decorator";
import { isBoolean, isFunction } from "../../utils/core.utils";
/** @type {?} */
export var DYNAMIC_FORM_CONTROL_TYPE_SELECT = "SELECT";
/**
 * @record
 * @template T
 */
export function DynamicSelectModelConfig() { }
/** @type {?|undefined} */
DynamicSelectModelConfig.prototype.compareWithFn;
/** @type {?|undefined} */
DynamicSelectModelConfig.prototype.filterable;
/** @type {?|undefined} */
DynamicSelectModelConfig.prototype.multiple;
/** @type {?|undefined} */
DynamicSelectModelConfig.prototype.placeholder;
/** @type {?|undefined} */
DynamicSelectModelConfig.prototype.prefix;
/** @type {?|undefined} */
DynamicSelectModelConfig.prototype.suffix;
/**
 * @template T
 */
var DynamicSelectModel = /** @class */ (function (_super) {
    __extends(DynamicSelectModel, _super);
    function DynamicSelectModel(config, layout) {
        var _this = _super.call(this, config, layout) || this;
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_SELECT;
        _this.compareWithFn = isFunction(config.compareWithFn) ? config.compareWithFn : looseIdentical;
        _this.filterable = isBoolean(config.filterable) ? config.filterable : false;
        _this.multiple = isBoolean(config.multiple) ? config.multiple : false;
        _this.placeholder = config.placeholder || "";
        _this.prefix = config.prefix || null;
        _this.suffix = config.suffix || null;
        return _this;
    }
    /**
     * @param {...?} indices
     * @return {?}
     */
    DynamicSelectModel.prototype.select = /**
     * @param {...?} indices
     * @return {?}
     */
    function () {
        var _this = this;
        var indices = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            indices[_i] = arguments[_i];
        }
        /** @type {?} */
        var value = this.multiple ? indices.map(function (index) { return _this.get(index).value; }) : this.get(indices[0]).value;
        this.valueUpdates.next(value);
    };
    __decorate([
        serializable(),
        __metadata("design:type", Boolean)
    ], DynamicSelectModel.prototype, "filterable", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Boolean)
    ], DynamicSelectModel.prototype, "multiple", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicSelectModel.prototype, "placeholder", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Object)
    ], DynamicSelectModel.prototype, "prefix", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Object)
    ], DynamicSelectModel.prototype, "suffix", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicSelectModel.prototype, "type", void 0);
    return DynamicSelectModel;
}(DynamicOptionControlModel));
export { DynamicSelectModel };
if (false) {
    /** @type {?} */
    DynamicSelectModel.prototype.compareWithFn;
    /** @type {?} */
    DynamicSelectModel.prototype.filterable;
    /** @type {?} */
    DynamicSelectModel.prototype.multiple;
    /** @type {?} */
    DynamicSelectModel.prototype.placeholder;
    /** @type {?} */
    DynamicSelectModel.prototype.prefix;
    /** @type {?} */
    DynamicSelectModel.prototype.suffix;
    /** @type {?} */
    DynamicSelectModel.prototype.type;
}
//# sourceMappingURL=dynamic-select.model.js.map