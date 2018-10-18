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
import { DynamicDateControlModel } from "../dynamic-date-control.model";
import { serializable } from "../../decorator/serializable.decorator";
import { isBoolean, isString } from "../../utils/core.utils";
/** @type {?} */
export var DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER = "DATEPICKER";
/**
 * @record
 */
export function DynamicDatePickerModelConfig() { }
/** @type {?|undefined} */
DynamicDatePickerModelConfig.prototype.autoFocus;
/** @type {?|undefined} */
DynamicDatePickerModelConfig.prototype.focusedDate;
/** @type {?|undefined} */
DynamicDatePickerModelConfig.prototype.inline;
/** @type {?|undefined} */
DynamicDatePickerModelConfig.prototype.prefix;
/** @type {?|undefined} */
DynamicDatePickerModelConfig.prototype.readOnly;
/** @type {?|undefined} */
DynamicDatePickerModelConfig.prototype.suffix;
/** @type {?|undefined} */
DynamicDatePickerModelConfig.prototype.toggleIcon;
/** @type {?|undefined} */
DynamicDatePickerModelConfig.prototype.toggleLabel;
var DynamicDatePickerModel = /** @class */ (function (_super) {
    __extends(DynamicDatePickerModel, _super);
    function DynamicDatePickerModel(config, layout) {
        var _this = _super.call(this, config, layout) || this;
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER;
        _this.autoFocus = isBoolean(config.autoFocus) ? config.autoFocus : false;
        _this.focusedDate = config.focusedDate || null;
        _this.inline = isBoolean(config.inline) ? config.inline : false;
        _this.prefix = config.prefix || null;
        _this.readOnly = isBoolean(config.readOnly) ? config.readOnly : false;
        _this.toggleIcon = isString(config.toggleIcon) ? config.toggleIcon : null;
        _this.toggleLabel = isString(config.toggleLabel) ? config.toggleLabel : null;
        _this.suffix = config.suffix || null;
        return _this;
    }
    __decorate([
        serializable(),
        __metadata("design:type", Boolean)
    ], DynamicDatePickerModel.prototype, "autoFocus", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Object)
    ], DynamicDatePickerModel.prototype, "focusedDate", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Boolean)
    ], DynamicDatePickerModel.prototype, "inline", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Object)
    ], DynamicDatePickerModel.prototype, "prefix", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Boolean)
    ], DynamicDatePickerModel.prototype, "readOnly", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Object)
    ], DynamicDatePickerModel.prototype, "suffix", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Object)
    ], DynamicDatePickerModel.prototype, "toggleIcon", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Object)
    ], DynamicDatePickerModel.prototype, "toggleLabel", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicDatePickerModel.prototype, "type", void 0);
    return DynamicDatePickerModel;
}(DynamicDateControlModel));
export { DynamicDatePickerModel };
if (false) {
    /** @type {?} */
    DynamicDatePickerModel.prototype.autoFocus;
    /** @type {?} */
    DynamicDatePickerModel.prototype.focusedDate;
    /** @type {?} */
    DynamicDatePickerModel.prototype.inline;
    /** @type {?} */
    DynamicDatePickerModel.prototype.prefix;
    /** @type {?} */
    DynamicDatePickerModel.prototype.readOnly;
    /** @type {?} */
    DynamicDatePickerModel.prototype.suffix;
    /** @type {?} */
    DynamicDatePickerModel.prototype.toggleIcon;
    /** @type {?} */
    DynamicDatePickerModel.prototype.toggleLabel;
    /** @type {?} */
    DynamicDatePickerModel.prototype.type;
}
//# sourceMappingURL=dynamic-datepicker.model.js.map