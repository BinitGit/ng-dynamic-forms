/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { isString } from "../utils/core.utils";
/**
 * @abstract
 */
export class DynamicFormControlComponent {
    /**
     * @param {?} layoutService
     * @param {?} validationService
     */
    constructor(layoutService, validationService) {
        this.layoutService = layoutService;
        this.validationService = validationService;
        this._hasFocus = false;
    }
    /**
     * @return {?}
     */
    get control() {
        return /** @type {?} */ (this.group.get(this.model.id));
    }
    /**
     * @return {?}
     */
    get errorMessages() {
        return this.validationService.createErrorMessages(this.control, this.model);
    }
    /**
     * @return {?}
     */
    get hasFocus() {
        return this._hasFocus;
    }
    /**
     * @return {?}
     */
    get isInvalid() {
        return this.control.invalid;
    }
    /**
     * @return {?}
     */
    get isValid() {
        return this.control.valid;
    }
    /**
     * @return {?}
     */
    get showErrorMessages() {
        return this.model.hasErrorMessages && this.control.touched && !this.hasFocus && this.isInvalid;
    }
    /**
     * @param {?} context
     * @param {?} place
     * @param {?=} model
     * @return {?}
     */
    getClass(context, place, model = this.model) {
        /** @type {?} */
        let controlLayout = (this.layout && this.layout[model.id]) || /** @type {?} */ (model.layout);
        return this.layoutService.getClass(controlLayout, context, place);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onBlur($event) {
        if ($event instanceof Event) {
            $event.stopPropagation();
        }
        this._hasFocus = false;
        this.blur.emit($event);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onChange($event) {
        if ($event instanceof Event) {
            $event.stopPropagation();
        }
        this.change.emit($event);
    }
    /**
     * @param {?} $event
     * @param {?} model
     * @return {?}
     */
    onEmbeddedCheckboxChange($event, model) {
        this.onChange($event);
        model.valueUpdates.next((/** @type {?} */ ($event.target)).checked);
    }
    /**
     * @param {?} $event
     * @param {?=} type
     * @param {?=} bypass
     * @return {?}
     */
    onCustomEvent($event, type = null, bypass = false) {
        /** @type {?} */
        let emitter = /** @type {?} */ (this.customEvent);
        if (bypass) {
            emitter.emit($event);
        }
        else if (isString(type)) {
            emitter.emit({ customEvent: $event, customEventType: type });
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onFocus($event) {
        if ($event instanceof Event) {
            $event.stopPropagation();
        }
        this._hasFocus = true;
        this.focus.emit($event);
    }
}
if (false) {
    /** @type {?} */
    DynamicFormControlComponent.prototype._hasFocus;
    /** @type {?} */
    DynamicFormControlComponent.prototype.bindId;
    /** @type {?} */
    DynamicFormControlComponent.prototype.group;
    /** @type {?} */
    DynamicFormControlComponent.prototype.layout;
    /** @type {?} */
    DynamicFormControlComponent.prototype.model;
    /** @type {?} */
    DynamicFormControlComponent.prototype.templates;
    /** @type {?} */
    DynamicFormControlComponent.prototype.blur;
    /** @type {?} */
    DynamicFormControlComponent.prototype.change;
    /** @type {?} */
    DynamicFormControlComponent.prototype.customEvent;
    /** @type {?} */
    DynamicFormControlComponent.prototype.focus;
    /** @type {?} */
    DynamicFormControlComponent.prototype.layoutService;
    /** @type {?} */
    DynamicFormControlComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-form-control.component.js.map