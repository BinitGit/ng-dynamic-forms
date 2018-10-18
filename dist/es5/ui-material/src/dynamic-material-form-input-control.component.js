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
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { DynamicFormControlComponent } from "@ng-dynamic-forms/core";
/**
 * @abstract
 */
var /**
 * @abstract
 */
DynamicMaterialFormInputControlComponent = /** @class */ (function (_super) {
    __extends(DynamicMaterialFormInputControlComponent, _super);
    function DynamicMaterialFormInputControlComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        return _this;
    }
    Object.defineProperty(DynamicMaterialFormInputControlComponent.prototype, "characterCount", {
        get: /**
         * @return {?}
         */
        function () {
            return this.matInput ? this.matInput.value.length : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicMaterialFormInputControlComponent.prototype, "characterHint", {
        get: /**
         * @return {?}
         */
        function () {
            return this.characterCount + " / " + ((/** @type {?} */ (this.model))).maxLength;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicMaterialFormInputControlComponent.prototype, "showCharacterHint", {
        get: /**
         * @return {?}
         */
        function () {
            return !!((/** @type {?} */ (this.model)).maxLength && this.characterCount);
        },
        enumerable: true,
        configurable: true
    });
    return DynamicMaterialFormInputControlComponent;
}(DynamicFormControlComponent));
/**
 * @abstract
 */
export { DynamicMaterialFormInputControlComponent };
if (false) {
    /** @type {?} */
    DynamicMaterialFormInputControlComponent.prototype.matInput;
    /** @type {?} */
    DynamicMaterialFormInputControlComponent.prototype.layoutService;
    /** @type {?} */
    DynamicMaterialFormInputControlComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-material-form-input-control.component.js.map