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
import { JSONUtils } from "../../utils/json.utils";
import { isBoolean, isNumber, isObservable } from "../../utils/core.utils";
import { of } from "rxjs";
import { tap } from "rxjs/operators";
/** @type {?} */
export const DYNAMIC_FORM_CONTROL_TYPE_INPUT = "INPUT";
/** @type {?} */
export const DYNAMIC_FORM_CONTROL_INPUT_TYPE_COLOR = "color";
/** @type {?} */
export const DYNAMIC_FORM_CONTROL_INPUT_TYPE_DATE = "date";
/** @type {?} */
export const DYNAMIC_FORM_CONTROL_INPUT_TYPE_DATETIME_LOCAL = "datetime-local";
/** @type {?} */
export const DYNAMIC_FORM_CONTROL_INPUT_TYPE_EMAIL = "email";
/** @type {?} */
export const DYNAMIC_FORM_CONTROL_INPUT_TYPE_FILE = "file";
/** @type {?} */
export const DYNAMIC_FORM_CONTROL_INPUT_TYPE_MONTH = "month";
/** @type {?} */
export const DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER = "number";
/** @type {?} */
export const DYNAMIC_FORM_CONTROL_INPUT_TYPE_PASSWORD = "password";
/** @type {?} */
export const DYNAMIC_FORM_CONTROL_INPUT_TYPE_RANGE = "range";
/** @type {?} */
export const DYNAMIC_FORM_CONTROL_INPUT_TYPE_SEARCH = "search";
/** @type {?} */
export const DYNAMIC_FORM_CONTROL_INPUT_TYPE_TEL = "tel";
/** @type {?} */
export const DYNAMIC_FORM_CONTROL_INPUT_TYPE_TEXT = "text";
/** @type {?} */
export const DYNAMIC_FORM_CONTROL_INPUT_TYPE_TIME = "time";
/** @type {?} */
export const DYNAMIC_FORM_CONTROL_INPUT_TYPE_URL = "url";
/** @type {?} */
export const DYNAMIC_FORM_CONTROL_INPUT_TYPE_WEEK = "week";
/**
 * @record
 */
export function DynamicInputModelConfig() { }
/** @type {?|undefined} */
DynamicInputModelConfig.prototype.accept;
/** @type {?|undefined} */
DynamicInputModelConfig.prototype.inputType;
/** @type {?|undefined} */
DynamicInputModelConfig.prototype.list;
/** @type {?|undefined} */
DynamicInputModelConfig.prototype.mask;
/** @type {?|undefined} */
DynamicInputModelConfig.prototype.max;
/** @type {?|undefined} */
DynamicInputModelConfig.prototype.min;
/** @type {?|undefined} */
DynamicInputModelConfig.prototype.multiple;
/** @type {?|undefined} */
DynamicInputModelConfig.prototype.pattern;
/** @type {?|undefined} */
DynamicInputModelConfig.prototype.step;
export class DynamicInputModel extends DynamicInputControlModel {
    /**
     * @param {?} config
     * @param {?=} layout
     */
    constructor(config, layout) {
        super(config, layout);
        this.files = null;
        this.list$ = null;
        this._list = null;
        this._listId = null;
        this.type = DYNAMIC_FORM_CONTROL_TYPE_INPUT;
        this.accept = config.accept || null;
        this.inputType = config.inputType || DYNAMIC_FORM_CONTROL_INPUT_TYPE_TEXT;
        this.mask = config.mask || null;
        this.max = config.max !== undefined ? config.max : null;
        this.min = config.min !== undefined ? config.min : null;
        this.multiple = isBoolean(config.multiple) ? config.multiple : null;
        this.pattern = config.pattern || null;
        this.step = isNumber(config.step) ? config.step : null;
        if (config.list !== undefined) {
            this.list = config.list;
            this._listId = `${this.id}List`;
        }
    }
    /**
     * @return {?}
     */
    get listId() {
        return this._listId;
    }
    /**
     * @return {?}
     */
    get hasList() {
        return isObservable(this.list$);
    }
    /**
     * @param {?} list
     * @return {?}
     */
    set list(list) {
        if (Array.isArray(list)) {
            this._list = list;
            this.list$ = of(this._list);
        }
        else if (isObservable(list)) {
            this.list$ = (/** @type {?} */ (list)).pipe(tap(list => this._list = list));
        }
        else {
            this._list = null;
            this.list$ = null;
        }
    }
    /**
     * @return {?}
     */
    toJSON() {
        /** @type {?} */
        let json = super.toJSON();
        if (this.mask !== null) {
            json.mask = JSONUtils.maskToString(this.mask);
        }
        return json;
    }
}
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicInputModel.prototype, "accept", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicInputModel.prototype, "inputType", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicInputModel.prototype, "mask", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicInputModel.prototype, "max", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicInputModel.prototype, "min", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicInputModel.prototype, "multiple", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicInputModel.prototype, "pattern", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicInputModel.prototype, "step", void 0);
__decorate([
    serializable("list"),
    __metadata("design:type", Object)
], DynamicInputModel.prototype, "_list", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicInputModel.prototype, "type", void 0);
if (false) {
    /** @type {?} */
    DynamicInputModel.prototype.accept;
    /** @type {?} */
    DynamicInputModel.prototype.inputType;
    /** @type {?} */
    DynamicInputModel.prototype.files;
    /** @type {?} */
    DynamicInputModel.prototype.list$;
    /** @type {?} */
    DynamicInputModel.prototype.mask;
    /** @type {?} */
    DynamicInputModel.prototype.max;
    /** @type {?} */
    DynamicInputModel.prototype.min;
    /** @type {?} */
    DynamicInputModel.prototype.multiple;
    /** @type {?} */
    DynamicInputModel.prototype.pattern;
    /** @type {?} */
    DynamicInputModel.prototype.step;
    /** @type {?} */
    DynamicInputModel.prototype._list;
    /** @type {?} */
    DynamicInputModel.prototype._listId;
    /** @type {?} */
    DynamicInputModel.prototype.type;
}
//# sourceMappingURL=dynamic-input.model.js.map