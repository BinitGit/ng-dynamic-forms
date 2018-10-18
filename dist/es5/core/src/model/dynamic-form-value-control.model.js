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
var DynamicFormValueControlModel = /** @class */ (function (_super) {
    __extends(DynamicFormValueControlModel, _super);
    function DynamicFormValueControlModel(config, layout) {
        var _this = _super.call(this, config, layout) || this;
        _this.additional = isObject(config.additional) ? config.additional : null;
        _this.hint = config.hint || null;
        _this.required = isBoolean(config.required) ? config.required : false;
        _this.tabIndex = config.tabIndex || null;
        _this.value = config.value !== null && config.value !== undefined ? config.value : null;
        _this.valueUpdates = new Subject();
        _this.valueUpdates.subscribe(function (value) { return _this.value = value; });
        return _this;
    }
    Object.defineProperty(DynamicFormValueControlModel.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} key
     * @param {?=} defaultValue
     * @return {?}
     */
    DynamicFormValueControlModel.prototype.getAdditional = /**
     * @param {?} key
     * @param {?=} defaultValue
     * @return {?}
     */
    function (key, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        return this.additional !== null && this.additional.hasOwnProperty(key) ? this.additional[key] : defaultValue;
    };
    var _a;
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
    return DynamicFormValueControlModel;
}(DynamicFormControlModel));
export { DynamicFormValueControlModel };
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