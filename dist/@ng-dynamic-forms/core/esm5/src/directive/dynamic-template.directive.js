/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Input, TemplateRef } from "@angular/core";
/** @enum {string} */
var DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT = {
    Start: "START", End: "END",
};
export { DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT };
var DynamicTemplateDirective = /** @class */ (function () {
    function DynamicTemplateDirective(templateRef) {
        this.templateRef = templateRef;
        this.align = DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT.End;
        this.as = null;
    }
    DynamicTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: "ng-template[modelId],ng-template[modelType]"
                },] },
    ];
    /** @nocollapse */
    DynamicTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    DynamicTemplateDirective.propDecorators = {
        align: [{ type: Input }],
        as: [{ type: Input }],
        modelId: [{ type: Input }],
        modelType: [{ type: Input }]
    };
    return DynamicTemplateDirective;
}());
export { DynamicTemplateDirective };
if (false) {
    /** @type {?} */
    DynamicTemplateDirective.prototype.align;
    /** @type {?} */
    DynamicTemplateDirective.prototype.as;
    /** @type {?} */
    DynamicTemplateDirective.prototype.modelId;
    /** @type {?} */
    DynamicTemplateDirective.prototype.modelType;
    /** @type {?} */
    DynamicTemplateDirective.prototype.templateRef;
}
//# sourceMappingURL=dynamic-template.directive.js.map