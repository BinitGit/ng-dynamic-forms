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
import { of } from "rxjs";
import { map } from "rxjs/operators";
import { DynamicFormValueControlModel } from "./dynamic-form-value-control.model";
import { serializable, serialize } from "../decorator/serializable.decorator";
import { isBoolean, isObservable } from "../utils/core.utils";
/**
 * @record
 * @template T
 */
export function DynamicFormOptionConfig() { }
/** @type {?|undefined} */
DynamicFormOptionConfig.prototype.disabled;
/** @type {?|undefined} */
DynamicFormOptionConfig.prototype.label;
/** @type {?} */
DynamicFormOptionConfig.prototype.value;
/**
 * @template T
 */
var DynamicFormOption = /** @class */ (function () {
    function DynamicFormOption(config) {
        this.disabled = isBoolean(config.disabled) ? config.disabled : false;
        this.label = config.label || null;
        this.value = config.value;
    }
    Object.defineProperty(DynamicFormOption.prototype, "text", {
        get: /**
         * @return {?}
         */
        function () {
            return this.label;
        },
        set: /**
         * @param {?} text
         * @return {?}
         */
        function (text) {
            this.label = text;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DynamicFormOption.prototype.toJSON = /**
     * @return {?}
     */
    function () {
        return serialize(this);
    };
    var _a;
    __decorate([
        serializable(),
        __metadata("design:type", Boolean)
    ], DynamicFormOption.prototype, "disabled", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Object)
    ], DynamicFormOption.prototype, "label", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", typeof (_a = typeof T !== "undefined" && T) === "function" && _a || Object)
    ], DynamicFormOption.prototype, "value", void 0);
    return DynamicFormOption;
}());
export { DynamicFormOption };
if (false) {
    /** @type {?} */
    DynamicFormOption.prototype.disabled;
    /** @type {?} */
    DynamicFormOption.prototype.label;
    /** @type {?} */
    DynamicFormOption.prototype.value;
}
/**
 * @record
 * @template T
 */
export function DynamicOptionControlModelConfig() { }
/** @type {?|undefined} */
DynamicOptionControlModelConfig.prototype.options;
/**
 * @abstract
 * @template T
 */
var DynamicOptionControlModel = /** @class */ (function (_super) {
    __extends(DynamicOptionControlModel, _super);
    function DynamicOptionControlModel(config, layout) {
        var _this = _super.call(this, config, layout) || this;
        _this._options = [];
        _this.options = config.options;
        return _this;
    }
    /**
     * @return {?}
     */
    DynamicOptionControlModel.prototype.updateOptions$ = /**
     * @return {?}
     */
    function () {
        this.options$ = of(this.options);
    };
    Object.defineProperty(DynamicOptionControlModel.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            return this._options;
        },
        set: /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            var _this = this;
            if (Array.isArray(options)) {
                this._options = (/** @type {?} */ (options)).map(function (optionConfig) {
                    return new DynamicFormOption(optionConfig);
                });
                this.updateOptions$();
            }
            else if (isObservable(options)) { // replace with isObservable from rxjs in next major version
                // replace with isObservable from rxjs in next major version
                this.options$ = (/** @type {?} */ (options)).pipe(map(function (optionsConfig) {
                    /** @type {?} */
                    var options = optionsConfig.map(function (optionConfig) { return new DynamicFormOption(optionConfig); });
                    _this._options = options;
                    return options;
                }));
            }
            else {
                this.updateOptions$();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} optionConfig
     * @return {?}
     */
    DynamicOptionControlModel.prototype.add = /**
     * @param {?} optionConfig
     * @return {?}
     */
    function (optionConfig) {
        return this.insert(this.options.length, optionConfig);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    DynamicOptionControlModel.prototype.get = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.options[index];
    };
    /**
     * @param {?} index
     * @param {?} optionConfig
     * @return {?}
     */
    DynamicOptionControlModel.prototype.insert = /**
     * @param {?} index
     * @param {?} optionConfig
     * @return {?}
     */
    function (index, optionConfig) {
        /** @type {?} */
        var option = new DynamicFormOption(optionConfig);
        this.options.splice(index, 0, option);
        this.updateOptions$();
        return option;
    };
    /**
     * @param {...?} indices
     * @return {?}
     */
    DynamicOptionControlModel.prototype.remove = /**
     * @param {...?} indices
     * @return {?}
     */
    function () {
        var _this = this;
        var indices = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            indices[_i] = arguments[_i];
        }
        indices.forEach(function (index) { return _this.options.splice(index, 1); });
        this.updateOptions$();
    };
    __decorate([
        serializable("options"),
        __metadata("design:type", Array)
    ], DynamicOptionControlModel.prototype, "_options", void 0);
    return DynamicOptionControlModel;
}(DynamicFormValueControlModel));
export { DynamicOptionControlModel };
if (false) {
    /** @type {?} */
    DynamicOptionControlModel.prototype._options;
    /** @type {?} */
    DynamicOptionControlModel.prototype.options$;
    /**
     * @abstract
     * @param {...?} indices
     * @return {?}
     */
    DynamicOptionControlModel.prototype.select = function (indices) { };
}
//# sourceMappingURL=dynamic-option-control.model.js.map