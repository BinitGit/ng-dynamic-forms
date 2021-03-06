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
import { DynamicFormValueControlModel } from "../dynamic-form-value-control.model";
import { serializable } from "../../decorator/serializable.decorator";
import { isBoolean, isNumber } from "../../utils/core.utils";
/** @type {?} */
export var DYNAMIC_FORM_CONTROL_TYPE_SLIDER = "SLIDER";
/**
 * @record
 */
export function DynamicSliderModelConfig() { }
/** @type {?|undefined} */
DynamicSliderModelConfig.prototype.max;
/** @type {?|undefined} */
DynamicSliderModelConfig.prototype.min;
/** @type {?|undefined} */
DynamicSliderModelConfig.prototype.step;
/** @type {?|undefined} */
DynamicSliderModelConfig.prototype.vertical;
var DynamicSliderModel = /** @class */ (function (_super) {
    __extends(DynamicSliderModel, _super);
    function DynamicSliderModel(config, layout) {
        var _this = _super.call(this, config, layout) || this;
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_SLIDER;
        _this.max = isNumber(config.max) ? config.max : 10;
        _this.min = isNumber(config.min) ? config.min : 0;
        _this.step = isNumber(config.step) ? config.step : 1;
        _this.vertical = isBoolean(config.vertical) ? config.vertical : false;
        return _this;
    }
    __decorate([
        serializable(),
        __metadata("design:type", Object)
    ], DynamicSliderModel.prototype, "max", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Object)
    ], DynamicSliderModel.prototype, "min", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Object)
    ], DynamicSliderModel.prototype, "step", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Boolean)
    ], DynamicSliderModel.prototype, "vertical", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicSliderModel.prototype, "type", void 0);
    return DynamicSliderModel;
}(DynamicFormValueControlModel));
export { DynamicSliderModel };
if (false) {
    /** @type {?} */
    DynamicSliderModel.prototype.max;
    /** @type {?} */
    DynamicSliderModel.prototype.min;
    /** @type {?} */
    DynamicSliderModel.prototype.step;
    /** @type {?} */
    DynamicSliderModel.prototype.vertical;
    /** @type {?} */
    DynamicSliderModel.prototype.type;
}
//# sourceMappingURL=dynamic-slider.model.js.map