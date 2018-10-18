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
import { DynamicFormControlComponent } from "./dynamic-form-control.component";
/**
 * @abstract
 */
var /**
 * @abstract
 */
DynamicFormArrayComponent = /** @class */ (function (_super) {
    __extends(DynamicFormArrayComponent, _super);
    function DynamicFormArrayComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DynamicFormArrayComponent.prototype, "startTemplate", {
        get: /**
         * @return {?}
         */
        function () {
            return this.layoutService.getStartTemplate(this.model, this.templates);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormArrayComponent.prototype, "endTemplate", {
        get: /**
         * @return {?}
         */
        function () {
            return this.layoutService.getEndTemplate(this.model, this.templates);
        },
        enumerable: true,
        configurable: true
    });
    return DynamicFormArrayComponent;
}(DynamicFormControlComponent));
/**
 * @abstract
 */
export { DynamicFormArrayComponent };
if (false) {
    /** @type {?} */
    DynamicFormArrayComponent.prototype.model;
    /** @type {?} */
    DynamicFormArrayComponent.prototype.templates;
}
//# sourceMappingURL=dynamic-form-array.component.js.map