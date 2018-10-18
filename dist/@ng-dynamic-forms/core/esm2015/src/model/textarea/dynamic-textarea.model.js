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
import { DynamicInputControlModel } from "../dynamic-input-control.model";
import { serializable } from "../../decorator/serializable.decorator";
import { isNumber } from "../../utils/core.utils";
/** @type {?} */
export const DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA = "TEXTAREA";
/** @type {?} */
export const DYNAMIC_FORM_TEXTAREA_WRAP_HARD = "hard";
/** @type {?} */
export const DYNAMIC_FORM_TEXTAREA_WRAP_SOFT = "soft";
/**
 * @record
 */
export function DynamicTextAreaModelConfig() { }
/** @type {?|undefined} */
DynamicTextAreaModelConfig.prototype.cols;
/** @type {?|undefined} */
DynamicTextAreaModelConfig.prototype.rows;
/** @type {?|undefined} */
DynamicTextAreaModelConfig.prototype.wrap;
export class DynamicTextAreaModel extends DynamicInputControlModel {
    /**
     * @param {?} config
     * @param {?=} layout
     */
    constructor(config, layout) {
        super(config, layout);
        this.type = DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA;
        this.cols = isNumber(config.cols) ? config.cols : 20;
        this.rows = isNumber(config.rows) ? config.rows : 2;
        this.wrap = config.wrap || DYNAMIC_FORM_TEXTAREA_WRAP_SOFT;
    }
}
__decorate([
    serializable(),
    __metadata("design:type", Number)
], DynamicTextAreaModel.prototype, "cols", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Number)
], DynamicTextAreaModel.prototype, "rows", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicTextAreaModel.prototype, "wrap", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicTextAreaModel.prototype, "type", void 0);
if (false) {
    /** @type {?} */
    DynamicTextAreaModel.prototype.cols;
    /** @type {?} */
    DynamicTextAreaModel.prototype.rows;
    /** @type {?} */
    DynamicTextAreaModel.prototype.wrap;
    /** @type {?} */
    DynamicTextAreaModel.prototype.type;
}
//# sourceMappingURL=dynamic-textarea.model.js.map