/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { DynamicFormControlComponent } from "./dynamic-form-control.component";
import { isString } from "../utils/core.utils";
/**
 * @abstract
 */
export class DynamicTemplateableFormControlComponent extends DynamicFormControlComponent {
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.layoutService
            .filterTemplatesByModel(this.model, this.templates)
            .forEach(template => this.bindTemplate(template));
    }
    /**
     * @param {?} template
     * @return {?}
     */
    bindTemplate(template) {
        if (isString(template.as) && this.templateDirectives.has(template.as)) {
            /** @type {?} */
            let property = /** @type {?} */ (this.templateDirectives.get(template.as));
            this.viewChild[property] = this.mapTemplate(template);
        }
    }
}
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