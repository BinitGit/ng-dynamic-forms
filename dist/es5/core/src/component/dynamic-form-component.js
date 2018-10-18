/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { DynamicFormControlEventType } from "./dynamic-form-control.event";
/**
 * @abstract
 */
var /**
 * @abstract
 */
DynamicFormComponent = /** @class */ (function () {
    function DynamicFormComponent(formService, layoutService) {
        this.formService = formService;
        this.layoutService = layoutService;
    }
    /**
     * @param {?} _index
     * @param {?} model
     * @return {?}
     */
    DynamicFormComponent.prototype.trackByFn = /**
     * @param {?} _index
     * @param {?} model
     * @return {?}
     */
    function (_index, model) {
        return model.id;
    };
    /**
     * @param {?} model
     * @param {?} context
     * @param {?} place
     * @return {?}
     */
    DynamicFormComponent.prototype.getClass = /**
     * @param {?} model
     * @param {?} context
     * @param {?} place
     * @return {?}
     */
    function (model, context, place) {
        /** @type {?} */
        var controlLayout = this.layoutService.findById(model.id, this.formLayout) || /** @type {?} */ (model.layout);
        return this.layoutService.getClass(controlLayout, context, place);
    };
    /**
     * @param {?} $event
     * @param {?} type
     * @return {?}
     */
    DynamicFormComponent.prototype.onEvent = /**
     * @param {?} $event
     * @param {?} type
     * @return {?}
     */
    function ($event, type) {
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
    };
    return DynamicFormComponent;
}());
/**
 * @abstract
 */
export { DynamicFormComponent };
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