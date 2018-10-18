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
import { DynamicInputControlModel } from "../dynamic-input-control.model";
import { serializable } from "../../decorator/serializable.decorator";
import { JSONUtils } from "../../utils/json.utils";
import { isBoolean, isNumber, isObservable } from "../../utils/core.utils";
import { of } from "rxjs";
import { tap } from "rxjs/operators";
/** @type {?} */
export var DYNAMIC_FORM_CONTROL_TYPE_INPUT = "INPUT";
/** @type {?} */
export var DYNAMIC_FORM_CONTROL_INPUT_TYPE_COLOR = "color";
/** @type {?} */
export var DYNAMIC_FORM_CONTROL_INPUT_TYPE_DATE = "date";
/** @type {?} */
export var DYNAMIC_FORM_CONTROL_INPUT_TYPE_DATETIME_LOCAL = "datetime-local";
/** @type {?} */
export var DYNAMIC_FORM_CONTROL_INPUT_TYPE_EMAIL = "email";
/** @type {?} */
export var DYNAMIC_FORM_CONTROL_INPUT_TYPE_FILE = "file";
/** @type {?} */
export var DYNAMIC_FORM_CONTROL_INPUT_TYPE_MONTH = "month";
/** @type {?} */
export var DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER = "number";
/** @type {?} */
export var DYNAMIC_FORM_CONTROL_INPUT_TYPE_PASSWORD = "password";
/** @type {?} */
export var DYNAMIC_FORM_CONTROL_INPUT_TYPE_RANGE = "range";
/** @type {?} */
export var DYNAMIC_FORM_CONTROL_INPUT_TYPE_SEARCH = "search";
/** @type {?} */
export var DYNAMIC_FORM_CONTROL_INPUT_TYPE_TEL = "tel";
/** @type {?} */
export var DYNAMIC_FORM_CONTROL_INPUT_TYPE_TEXT = "text";
/** @type {?} */
export var DYNAMIC_FORM_CONTROL_INPUT_TYPE_TIME = "time";
/** @type {?} */
export var DYNAMIC_FORM_CONTROL_INPUT_TYPE_URL = "url";
/** @type {?} */
export var DYNAMIC_FORM_CONTROL_INPUT_TYPE_WEEK = "week";
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
var DynamicInputModel = /** @class */ (function (_super) {
    __extends(DynamicInputModel, _super);
    function DynamicInputModel(config, layout) {
        var _this = _super.call(this, config, layout) || this;
        _this.files = null;
        _this.list$ = null;
        _this._list = null;
        _this._listId = null;
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_INPUT;
        _this.accept = config.accept || null;
        _this.inputType = config.inputType || DYNAMIC_FORM_CONTROL_INPUT_TYPE_TEXT;
        _this.mask = config.mask || null;
        _this.max = config.max !== undefined ? config.max : null;
        _this.min = config.min !== undefined ? config.min : null;
        _this.multiple = isBoolean(config.multiple) ? config.multiple : null;
        _this.pattern = config.pattern || null;
        _this.step = isNumber(config.step) ? config.step : null;
        if (config.list !== undefined) {
            _this.list = config.list;
            _this._listId = _this.id + "List";
        }
        return _this;
    }
    Object.defineProperty(DynamicInputModel.prototype, "listId", {
        get: /**
         * @return {?}
         */
        function () {
            return this._listId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicInputModel.prototype, "hasList", {
        get: /**
         * @return {?}
         */
        function () {
            return isObservable(this.list$);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicInputModel.prototype, "list", {
        set: /**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            var _this = this;
            if (Array.isArray(list)) {
                this._list = list;
                this.list$ = of(this._list);
            }
            else if (isObservable(list)) {
                this.list$ = (/** @type {?} */ (list)).pipe(tap(function (list) { return _this._list = list; }));
            }
            else {
                this._list = null;
                this.list$ = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DynamicInputModel.prototype.toJSON = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var json = _super.prototype.toJSON.call(this);
        if (this.mask !== null) {
            json.mask = JSONUtils.maskToString(this.mask);
        }
        return json;
    };
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
    return DynamicInputModel;
}(DynamicInputControlModel));
export { DynamicInputModel };
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