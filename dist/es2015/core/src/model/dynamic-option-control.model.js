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
export class DynamicFormOption {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.disabled = isBoolean(config.disabled) ? config.disabled : false;
        this.label = config.label || null;
        this.value = config.value;
    }
    /**
     * @return {?}
     */
    get text() {
        return this.label;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    set text(text) {
        this.label = text;
    }
    /**
     * @return {?}
     */
    toJSON() {
        return serialize(this);
    }
}
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
export class DynamicOptionControlModel extends DynamicFormValueControlModel {
    /**
     * @param {?} config
     * @param {?=} layout
     */
    constructor(config, layout) {
        super(config, layout);
        this._options = [];
        this.options = config.options;
    }
    /**
     * @return {?}
     */
    updateOptions$() {
        this.options$ = of(this.options);
    }
    /**
     * @param {?} options
     * @return {?}
     */
    set options(options) {
        if (Array.isArray(options)) {
            this._options = (/** @type {?} */ (options)).map(optionConfig => {
                return new DynamicFormOption(optionConfig);
            });
            this.updateOptions$();
        }
        else if (isObservable(options)) { // replace with isObservable from rxjs in next major version
            // replace with isObservable from rxjs in next major version
            this.options$ = (/** @type {?} */ (options)).pipe(map(optionsConfig => {
                /** @type {?} */
                let options = optionsConfig.map(optionConfig => new DynamicFormOption(optionConfig));
                this._options = options;
                return options;
            }));
        }
        else {
            this.updateOptions$();
        }
    }
    /**
     * @return {?}
     */
    get options() {
        return this._options;
    }
    /**
     * @param {?} optionConfig
     * @return {?}
     */
    add(optionConfig) {
        return this.insert(this.options.length, optionConfig);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    get(index) {
        return this.options[index];
    }
    /**
     * @param {?} index
     * @param {?} optionConfig
     * @return {?}
     */
    insert(index, optionConfig) {
        /** @type {?} */
        let option = new DynamicFormOption(optionConfig);
        this.options.splice(index, 0, option);
        this.updateOptions$();
        return option;
    }
    /**
     * @param {...?} indices
     * @return {?}
     */
    remove(...indices) {
        indices.forEach(index => this.options.splice(index, 1));
        this.updateOptions$();
    }
}
__decorate([
    serializable("options"),
    __metadata("design:type", Array)
], DynamicOptionControlModel.prototype, "_options", void 0);
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