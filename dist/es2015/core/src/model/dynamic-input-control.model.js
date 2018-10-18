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
import { AUTOCOMPLETE_ON } from "../utils/autofill.utils";
import { isBoolean, isNumber } from "../utils/core.utils";
/**
 * @record
 * @template T
 */
export function DynamicInputControlModelConfig() { }
/** @type {?|undefined} */
DynamicInputControlModelConfig.prototype.autoComplete;
/** @type {?|undefined} */
DynamicInputControlModelConfig.prototype.autoFocus;
/** @type {?|undefined} */
DynamicInputControlModelConfig.prototype.maxLength;
/** @type {?|undefined} */
DynamicInputControlModelConfig.prototype.minLength;
/** @type {?|undefined} */
DynamicInputControlModelConfig.prototype.placeholder;
/** @type {?|undefined} */
DynamicInputControlModelConfig.prototype.prefix;
/** @type {?|undefined} */
DynamicInputControlModelConfig.prototype.readOnly;
/** @type {?|undefined} */
DynamicInputControlModelConfig.prototype.spellCheck;
/** @type {?|undefined} */
DynamicInputControlModelConfig.prototype.suffix;
/**
 * @abstract
 * @template T
 */
export class DynamicInputControlModel extends DynamicFormValueControlModel {
    /**
     * @param {?} config
     * @param {?=} layout
     */
    constructor(config, layout) {
        super(config, layout);
        this.autoComplete = config.autoComplete || AUTOCOMPLETE_ON;
        this.autoFocus = isBoolean(config.autoFocus) ? config.autoFocus : false;
        this.maxLength = isNumber(config.maxLength) ? config.maxLength : null;
        this.minLength = isNumber(config.minLength) ? config.minLength : null;
        this.placeholder = config.placeholder || "";
        this.prefix = config.prefix || null;
        this.readOnly = isBoolean(config.readOnly) ? config.readOnly : false;
        this.spellCheck = isBoolean(config.spellCheck) ? config.spellCheck : false;
        this.suffix = config.suffix || null;
    }
}
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicInputControlModel.prototype, "autoComplete", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicInputControlModel.prototype, "autoFocus", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicInputControlModel.prototype, "maxLength", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicInputControlModel.prototype, "minLength", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicInputControlModel.prototype, "placeholder", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicInputControlModel.prototype, "prefix", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicInputControlModel.prototype, "readOnly", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicInputControlModel.prototype, "spellCheck", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicInputControlModel.prototype, "suffix", void 0);
if (false) {
    /** @type {?} */
    DynamicInputControlModel.prototype.autoComplete;
    /** @type {?} */
    DynamicInputControlModel.prototype.autoFocus;
    /** @type {?} */
    DynamicInputControlModel.prototype.maxLength;
    /** @type {?} */
    DynamicInputControlModel.prototype.minLength;
    /** @type {?} */
    DynamicInputControlModel.prototype.placeholder;
    /** @type {?} */
    DynamicInputControlModel.prototype.prefix;
    /** @type {?} */
    DynamicInputControlModel.prototype.readOnly;
    /** @type {?} */
    DynamicInputControlModel.prototype.spellCheck;
    /** @type {?} */
    DynamicInputControlModel.prototype.suffix;
}
//# sourceMappingURL=dynamic-input-control.model.js.map