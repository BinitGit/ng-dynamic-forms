var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Subject } from "rxjs";
import { DynamicFormControlModel } from "./dynamic-form-control.model";
import { serializable } from "../decorator/serializable.decorator";
import { isBoolean, isObject } from "../utils/core.utils";
/**
 * @record
 * @template T
 */
export function DynamicFormValueControlModelConfig() { }
/** @type {?|undefined} */
DynamicFormValueControlModelConfig.prototype.additional;
/** @type {?|undefined} */
DynamicFormValueControlModelConfig.prototype.hint;
/** @type {?|undefined} */
DynamicFormValueControlModelConfig.prototype.required;
/** @type {?|undefined} */
DynamicFormValueControlModelConfig.prototype.tabIndex;
/** @type {?|undefined} */
DynamicFormValueControlModelConfig.prototype.value;
/**
 * @abstract
 * @template T
 */
export class DynamicFormValueControlModel extends DynamicFormControlModel {
    /**
     * @param {?} config
     * @param {?=} layout
     */
    constructor(config, layout) {
        super(config, layout);
        this.additional = isObject(config.additional) ? config.additional : null;
        this.hint = config.hint || null;
        this.required = isBoolean(config.required) ? config.required : false;
        this.tabIndex = config.tabIndex || null;
        this.value = config.value !== null && config.value !== undefined ? config.value : null;
        this.valueUpdates = new Subject();
        this.valueUpdates.subscribe((value) => this.value = value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} key
     * @param {?=} defaultValue
     * @return {?}
     */
    getAdditional(key, defaultValue = null) {
        return this.additional !== null && this.additional.hasOwnProperty(key) ? this.additional[key] : defaultValue;
    }
}
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicFormValueControlModel.prototype, "additional", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicFormValueControlModel.prototype, "hint", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicFormValueControlModel.prototype, "required", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicFormValueControlModel.prototype, "tabIndex", void 0);
__decorate([
    serializable("value"),
    __metadata("design:type", Object)
], DynamicFormValueControlModel.prototype, "_value", void 0);
if (false) {
    /** @type {?} */
    DynamicFormValueControlModel.prototype.additional;
    /** @type {?} */
    DynamicFormValueControlModel.prototype.hint;
    /** @type {?} */
    DynamicFormValueControlModel.prototype.required;
    /** @type {?} */
    DynamicFormValueControlModel.prototype.tabIndex;
    /** @type {?} */
    DynamicFormValueControlModel.prototype._value;
    /** @type {?} */
    DynamicFormValueControlModel.prototype.valueUpdates;
}
//# sourceMappingURL=dynamic-form-value-control.model.js.map