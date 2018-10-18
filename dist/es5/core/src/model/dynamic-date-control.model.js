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
import { DynamicFormValueControlModel } from "./dynamic-form-value-control.model";
import { serializable } from "../decorator/serializable.decorator";
/** @typedef {?} */
var DynamicDateControlValue;
export { DynamicDateControlValue };
/**
 * @record
 */
export function DynamicDateControlModelConfig() { }
/** @type {?|undefined} */
DynamicDateControlModelConfig.prototype.format;
/** @type {?|undefined} */
DynamicDateControlModelConfig.prototype.max;
/** @type {?|undefined} */
DynamicDateControlModelConfig.prototype.min;
/** @type {?|undefined} */
DynamicDateControlModelConfig.prototype.placeholder;
/**
 * @abstract
 */
var DynamicDateControlModel = /** @class */ (function (_super) {
    __extends(DynamicDateControlModel, _super);
    function DynamicDateControlModel(config, layout) {
        var _this = _super.call(this, config, layout) || this;
        _this.format = config.format || null;
        _this.max = config.max || null;
        _this.min = config.min || null;
        _this.placeholder = config.placeholder || null;
        return _this;
    }
    __decorate([
        serializable(),
        __metadata("design:type", Object)
    ], DynamicDateControlModel.prototype, "format", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Object)
    ], DynamicDateControlModel.prototype, "max", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Object)
    ], DynamicDateControlModel.prototype, "min", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Object)
    ], DynamicDateControlModel.prototype, "placeholder", void 0);
    return DynamicDateControlModel;
}(DynamicFormValueControlModel));
export { DynamicDateControlModel };
if (false) {
    /** @type {?} */
    DynamicDateControlModel.prototype.format;
    /** @type {?} */
    DynamicDateControlModel.prototype.max;
    /** @type {?} */
    DynamicDateControlModel.prototype.min;
    /** @type {?} */
    DynamicDateControlModel.prototype.placeholder;
}
//# sourceMappingURL=dynamic-date-control.model.js.map