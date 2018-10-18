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
import { DynamicFormValueControlModel } from "../dynamic-form-value-control.model";
import { serializable } from "../../decorator/serializable.decorator";
import { isBoolean, isString } from "../../utils/core.utils";
/** @type {?} */
export var DYNAMIC_FORM_CONTROL_TYPE_COLORPICKER = "COLORPICKER";
/**
 * @record
 */
export function DynamicColorPickerModelConfig() { }
/** @type {?|undefined} */
DynamicColorPickerModelConfig.prototype.format;
/** @type {?|undefined} */
DynamicColorPickerModelConfig.prototype.inline;
var DynamicColorPickerModel = /** @class */ (function (_super) {
    __extends(DynamicColorPickerModel, _super);
    function DynamicColorPickerModel(config, layout) {
        var _this = _super.call(this, config, layout) || this;
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_COLORPICKER;
        _this.format = isString(config.format) ? config.format : null;
        _this.inline = isBoolean(config.inline) ? config.inline : false;
        return _this;
    }
    __decorate([
        serializable(),
        __metadata("design:type", Object)
    ], DynamicColorPickerModel.prototype, "format", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Boolean)
    ], DynamicColorPickerModel.prototype, "inline", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicColorPickerModel.prototype, "type", void 0);
    return DynamicColorPickerModel;
}(DynamicFormValueControlModel));
export { DynamicColorPickerModel };
if (false) {
    /** @type {?} */
    DynamicColorPickerModel.prototype.format;
    /** @type {?} */
    DynamicColorPickerModel.prototype.inline;
    /** @type {?} */
    DynamicColorPickerModel.prototype.type;
}
//# sourceMappingURL=dynamic-colorpicker.model.js.map