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
export class DynamicDateControlModel extends DynamicFormValueControlModel {
    /**
     * @param {?} config
     * @param {?=} layout
     */
    constructor(config, layout) {
        super(config, layout);
        this.format = config.format || null;
        this.max = config.max || null;
        this.min = config.min || null;
        this.placeholder = config.placeholder || null;
    }
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