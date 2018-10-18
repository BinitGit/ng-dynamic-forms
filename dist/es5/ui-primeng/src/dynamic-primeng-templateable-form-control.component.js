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
import { DynamicTemplateableFormControlComponent } from "@ng-dynamic-forms/core";
/**
 * @abstract
 */
var /**
 * @abstract
 */
DynamicPrimeNGTemplateableFormControlComponent = /** @class */ (function (_super) {
    __extends(DynamicPrimeNGTemplateableFormControlComponent, _super);
    function DynamicPrimeNGTemplateableFormControlComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} template
     * @return {?}
     */
    DynamicPrimeNGTemplateableFormControlComponent.prototype.mapTemplate = /**
     * @param {?} template
     * @return {?}
     */
    function (template) {
        return template.templateRef;
    };
    return DynamicPrimeNGTemplateableFormControlComponent;
}(DynamicTemplateableFormControlComponent));
/**
 * @abstract
 */
export { DynamicPrimeNGTemplateableFormControlComponent };
//# sourceMappingURL=dynamic-primeng-templateable-form-control.component.js.map