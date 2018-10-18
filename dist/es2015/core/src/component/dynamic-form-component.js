/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { DynamicFormControlEventType } from "./dynamic-form-control.event";
/**
 * @abstract
 */
export class DynamicFormComponent {
    /**
     * @param {?} formService
     * @param {?} layoutService
     */
    constructor(formService, layoutService) {
        this.formService = formService;
        this.layoutService = layoutService;
    }
    /**
     * @param {?} _index
     * @param {?} model
     * @return {?}
     */
    trackByFn(_index, model) {
        return model.id;
    }
    /**
     * @param {?} model
     * @param {?} context
     * @param {?} place
     * @return {?}
     */
    getClass(model, context, place) {
        /** @type {?} */
        let controlLayout = this.layoutService.findById(model.id, this.formLayout) || /** @type {?} */ (model.layout);
        return this.layoutService.getClass(controlLayout, context, place);
    }
    /**
     * @param {?} $event
     * @param {?} type
     * @return {?}
     */
    onEvent($event, type) {
        switch (type) {
            case DynamicFormControlEventType.Blur:
                this.blur.emit($event);
                break;
            case DynamicFormControlEventType.Change:
                this.change.emit($event);
                break;
            case DynamicFormControlEventType.Focus:
                this.focus.emit($event);
                break;
            case DynamicFormControlEventType.Custom:
                this.customEvent.emit($event);
                break;
        }
    }
}
if (false) {
    /** @type {?} */
    DynamicFormComponent.prototype.formGroup;
    /** @type {?} */
    DynamicFormComponent.prototype.formModel;
    /** @type {?} */
    DynamicFormComponent.prototype.formLayout;
    /** @type {?} */
    DynamicFormComponent.prototype.components;
    /** @type {?} */
    DynamicFormComponent.prototype.templates;
    /** @type {?} */
    DynamicFormComponent.prototype.blur;
    /** @type {?} */
    DynamicFormComponent.prototype.change;
    /** @type {?} */
    DynamicFormComponent.prototype.focus;
    /** @type {?} */
    DynamicFormComponent.prototype.customEvent;
    /** @type {?} */
    DynamicFormComponent.prototype.formService;
    /** @type {?} */
    DynamicFormComponent.prototype.layoutService;
}
//# sourceMappingURL=dynamic-form-component.js.map