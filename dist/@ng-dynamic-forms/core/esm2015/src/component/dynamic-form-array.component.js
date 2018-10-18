/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { DynamicFormControlComponent } from "./dynamic-form-control.component";
/**
 * @abstract
 */
export class DynamicFormArrayComponent extends DynamicFormControlComponent {
    /**
     * @return {?}
     */
    get startTemplate() {
        return this.layoutService.getStartTemplate(this.model, this.templates);
    }
    /**
     * @return {?}
     */
    get endTemplate() {
        return this.layoutService.getEndTemplate(this.model, this.templates);
    }
}
if (false) {
    /** @type {?} */
    DynamicFormArrayComponent.prototype.model;
    /** @type {?} */
    DynamicFormArrayComponent.prototype.templates;
}
//# sourceMappingURL=dynamic-form-array.component.js.map