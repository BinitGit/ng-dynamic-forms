/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { isString } from "../utils/core.utils";
/**
 * @abstract
 */
var /**
 * @abstract
 */
DynamicFormControlComponent = /** @class */ (function () {
    function DynamicFormControlComponent(layoutService, validationService) {
        this.layoutService = layoutService;
        this.validationService = validationService;
        this._hasFocus = false;
    }
    Object.defineProperty(DynamicFormControlComponent.prototype, "control", {
        get: /**
         * @return {?}
         */
        function () {
            return /** @type {?} */ (this.group.get(this.model.id));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlComponent.prototype, "errorMessages", {
        get: /**
         * @return {?}
         */
        function () {
            return this.validationService.createErrorMessages(this.control, this.model);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlComponent.prototype, "hasFocus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasFocus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlComponent.prototype, "isInvalid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.invalid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlComponent.prototype, "showErrorMessages", {
        get: /**
         * @return {?}
         */
        function () {
            return this.model.hasErrorMessages && this.control.touched && !this.hasFocus && this.isInvalid;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} context
     * @param {?} place
     * @param {?=} model
     * @return {?}
     */
    DynamicFormControlComponent.prototype.getClass = /**
     * @param {?} context
     * @param {?} place
     * @param {?=} model
     * @return {?}
     */
    function (context, place, model) {
        if (model === void 0) { model = this.model; }
        /** @type {?} */
        var controlLayout = (this.layout && this.layout[model.id]) || /** @type {?} */ (model.layout);
        return this.layoutService.getClass(controlLayout, context, place);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    DynamicFormControlComponent.prototype.onBlur = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event instanceof Event) {
            $event.stopPropagation();
        }
        this._hasFocus = false;
        this.blur.emit($event);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    DynamicFormControlComponent.prototype.onChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event instanceof Event) {
            $event.stopPropagation();
        }
        this.change.emit($event);
    };
    /**
     * @param {?} $event
     * @param {?} model
     * @return {?}
     */
    DynamicFormControlComponent.prototype.onEmbeddedCheckboxChange = /**
     * @param {?} $event
     * @param {?} model
     * @return {?}
     */
    function ($event, model) {
        this.onChange($event);
        model.valueUpdates.next((/** @type {?} */ ($event.target)).checked);
    };
    /**
     * @param {?} $event
     * @param {?=} type
     * @param {?=} bypass
     * @return {?}
     */
    DynamicFormControlComponent.prototype.onCustomEvent = /**
     * @param {?} $event
     * @param {?=} type
     * @param {?=} bypass
     * @return {?}
     */
    function ($event, type, bypass) {
        if (type === void 0) { type = null; }
        if (bypass === void 0) { bypass = false; }
        /** @type {?} */
        var emitter = /** @type {?} */ (this.customEvent);
        if (bypass) {
            emitter.emit($event);
        }
        else if (isString(type)) {
            emitter.emit({ customEvent: $event, customEventType: type });
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    DynamicFormControlComponent.prototype.onFocus = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event instanceof Event) {
            $event.stopPropagation();
        }
        this._hasFocus = true;
        this.focus.emit($event);
    };
    return DynamicFormControlComponent;
}());
/**
 * @abstract
 */
export { DynamicFormControlComponent };
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