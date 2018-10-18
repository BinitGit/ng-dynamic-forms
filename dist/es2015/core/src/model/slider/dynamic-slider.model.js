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
export const DYNAMIC_FORM_CONTROL_TYPE_SLIDER = "SLIDER";
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
export class DynamicSliderModel extends DynamicFormValueControlModel {
    /**
     * @param {?} config
     * @param {?=} layout
     */
    constructor(config, layout) {
        super(config, layout);
        this.type = DYNAMIC_FORM_CONTROL_TYPE_SLIDER;
        this.max = isNumber(config.max) ? config.max : 10;
        this.min = isNumber(config.min) ? config.min : 0;
        this.step = isNumber(config.step) ? config.step : 1;
        this.vertical = isBoolean(config.vertical) ? config.vertical : false;
    }
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