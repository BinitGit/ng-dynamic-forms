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
export const DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER = "DATEPICKER";
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
export class DynamicDatePickerModel extends DynamicDateControlModel {
    /**
     * @param {?} config
     * @param {?=} layout
     */
    constructor(config, layout) {
        super(config, layout);
        this.type = DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER;
        this.autoFocus = isBoolean(config.autoFocus) ? config.autoFocus : false;
        this.focusedDate = config.focusedDate || null;
        this.inline = isBoolean(config.inline) ? config.inline : false;
        this.prefix = config.prefix || null;
        this.readOnly = isBoolean(config.readOnly) ? config.readOnly : false;
        this.toggleIcon = isString(config.toggleIcon) ? config.toggleIcon : null;
        this.toggleLabel = isString(config.toggleLabel) ? config.toggleLabel : null;
        this.suffix = config.suffix || null;
    }
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