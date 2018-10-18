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
import { isBoolean } from "../../utils/core.utils";
/** @type {?} */
export const DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER = "TIMEPICKER";
/**
 * @record
 */
export function DynamicTimePickerModelConfig() { }
/** @type {?|undefined} */
DynamicTimePickerModelConfig.prototype.meridian;
/** @type {?|undefined} */
DynamicTimePickerModelConfig.prototype.showSeconds;
export class DynamicTimePickerModel extends DynamicDateControlModel {
    /**
     * @param {?} config
     * @param {?=} layout
     */
    constructor(config, layout) {
        super(config, layout);
        this.type = DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER;
        this.meridian = isBoolean(config.meridian) ? config.meridian : false;
        this.showSeconds = isBoolean(config.showSeconds) ? config.showSeconds : false;
    }
}
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicTimePickerModel.prototype, "meridian", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicTimePickerModel.prototype, "showSeconds", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicTimePickerModel.prototype, "type", void 0);
if (false) {
    /** @type {?} */
    DynamicTimePickerModel.prototype.meridian;
    /** @type {?} */
    DynamicTimePickerModel.prototype.showSeconds;
    /** @type {?} */
    DynamicTimePickerModel.prototype.type;
}
//# sourceMappingURL=dynamic-timepicker.model.js.map