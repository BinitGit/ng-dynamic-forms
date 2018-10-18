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
import { isNumber } from "../../utils/core.utils";
/** @type {?} */
export const DYNAMIC_FORM_CONTROL_TYPE_RATING = "RATING";
/**
 * @record
 */
export function DynamicRatingModelConfig() { }
/** @type {?|undefined} */
DynamicRatingModelConfig.prototype.max;
export class DynamicRatingModel extends DynamicFormValueControlModel {
    /**
     * @param {?} config
     * @param {?=} layout
     */
    constructor(config, layout) {
        super(config, layout);
        this.type = DYNAMIC_FORM_CONTROL_TYPE_RATING;
        this.max = isNumber(config.max) ? config.max : 10;
    }
}
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicRatingModel.prototype, "max", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicRatingModel.prototype, "type", void 0);
if (false) {
    /** @type {?} */
    DynamicRatingModel.prototype.max;
    /** @type {?} */
    DynamicRatingModel.prototype.type;
}
//# sourceMappingURL=dynamic-rating.model.js.map