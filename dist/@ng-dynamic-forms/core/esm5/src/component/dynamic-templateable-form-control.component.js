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
import { isString } from "../utils/core.utils";
/**
 * @abstract
 */
var /**
 * @abstract
 */
DynamicTemplateableFormControlComponent = /** @class */ (function (_super) {
    __extends(DynamicTemplateableFormControlComponent, _super);
    function DynamicTemplateableFormControlComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    DynamicTemplateableFormControlComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.layoutService
            .filterTemplatesByModel(this.model, this.templates)
            .forEach(function (template) { return _this.bindTemplate(template); });
    };
    /**
     * @param {?} template
     * @return {?}
     */
    DynamicTemplateableFormControlComponent.prototype.bindTemplate = /**
     * @param {?} template
     * @return {?}
     */
    function (template) {
        if (isString(template.as) && this.templateDirectives.has(template.as)) {
            /** @type {?} */
            var property = /** @type {?} */ (this.templateDirectives.get(template.as));
            this.viewChild[property] = this.mapTemplate(template);
        }
    };
    return DynamicTemplateableFormControlComponent;
}(DynamicFormControlComponent));
/**
 * @abstract
 */
export { DynamicTemplateableFormControlComponent };
if (false) {
    /** @type {?} */
    DynamicTemplateableFormControlComponent.prototype.templateDirectives;
    /** @type {?} */
    DynamicTemplateableFormControlComponent.prototype.templates;
    /**
     * @abstract
     * @return {?}
     */
    DynamicTemplateableFormControlComponent.prototype.viewChild = function () { };
    /**
     * @abstract
     * @param {?} template
     * @return {?}
     */
    DynamicTemplateableFormControlComponent.prototype.mapTemplate = function (template) { };
}
//# sourceMappingURL=dynamic-templateable-form-control.component.js.map