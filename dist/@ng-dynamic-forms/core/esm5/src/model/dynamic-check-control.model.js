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
import { DynamicFormValueControlModel } from "./dynamic-form-value-control.model";
import { serializable } from "../decorator/serializable.decorator";
import { isBoolean } from "../utils/core.utils";
/**
 * @record
 */
export function DynamicCheckControlModelConfig() { }
/** @type {?|undefined} */
DynamicCheckControlModelConfig.prototype.labelPosition;
/**
 * @abstract
 */
var DynamicCheckControlModel = /** @class */ (function (_super) {
    __extends(DynamicCheckControlModel, _super);
    function DynamicCheckControlModel(config, layout) {
        var _this = _super.call(this, config, layout) || this;
        _this.labelPosition = config.labelPosition || null;
        _this.value = isBoolean(_this.value) ? _this.value : false;
        return _this;
    }
    Object.defineProperty(DynamicCheckControlModel.prototype, "checked", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.value;
        },
        set: /**
         * @param {?} checked
         * @return {?}
         */
        function (checked) {
            this.valueUpdates.next(checked);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DynamicCheckControlModel.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.checked = !this.checked;
    };
    __decorate([
        serializable(),
        __metadata("design:type", Object)
    ], DynamicCheckControlModel.prototype, "labelPosition", void 0);
    return DynamicCheckControlModel;
}(DynamicFormValueControlModel));
export { DynamicCheckControlModel };
if (false) {
    /** @type {?} */
    DynamicCheckControlModel.prototype.labelPosition;
}
//# sourceMappingURL=dynamic-check-control.model.js.map