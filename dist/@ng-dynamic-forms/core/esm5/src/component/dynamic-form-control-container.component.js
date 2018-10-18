/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { DynamicFormControlEventType, isDynamicFormControlEvent } from "./dynamic-form-control.event";
import { DynamicFormValueControlModel } from "../model/dynamic-form-value-control.model";
import { DYNAMIC_FORM_CONTROL_TYPE_ARRAY } from "../model/form-array/dynamic-form-array.model";
import { DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX } from "../model/checkbox/dynamic-checkbox.model";
import { DYNAMIC_FORM_CONTROL_TYPE_INPUT, DYNAMIC_FORM_CONTROL_INPUT_TYPE_FILE } from "../model/input/dynamic-input.model";
import { RelationUtils } from "../utils/relation.utils";
import { isString } from "../utils/core.utils";
/**
 * @abstract
 */
var /**
 * @abstract
 */
DynamicFormControlContainerComponent = /** @class */ (function () {
    function DynamicFormControlContainerComponent(componentFactoryResolver, layoutService, validationService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.context = null;
        this.componentSubscriptions = [];
        this.subscriptions = [];
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    DynamicFormControlContainerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        /** @type {?} */
        var groupChange = /** @type {?} */ (changes["group"]);
        /** @type {?} */
        var modelChange = /** @type {?} */ (changes["model"]);
        if (modelChange) {
            this.destroyFormControlComponent();
            this.createFormControlComponent();
        }
        if (groupChange || modelChange) {
            if (this.model) {
                this.unsubscribe();
                if (this.group) {
                    this.control = /** @type {?} */ (this.group.get(this.model.id));
                    this.subscriptions.push(this.control.valueChanges.subscribe(function (value) { return _this.onControlValueChanges(value); }));
                }
                this.subscriptions.push(this.model.disabledUpdates.subscribe(function (value) { return _this.onModelDisabledUpdates(value); }));
                if (this.model instanceof DynamicFormValueControlModel) {
                    /** @type {?} */
                    var model = /** @type {?} */ (this.model);
                    this.subscriptions.push(model.valueUpdates.subscribe(function (value) { return _this.onModelValueUpdates(value); }));
                }
                if (this.model.relation.length > 0) {
                    this.setControlRelations();
                }
            }
        }
    };
    /**
     * @return {?}
     */
    DynamicFormControlContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyFormControlComponent();
        this.unsubscribe();
    };
    Object.defineProperty(DynamicFormControlContainerComponent.prototype, "errorMessages", {
        get: /**
         * @return {?}
         */
        function () {
            return this.validationService.createErrorMessages(this.control, this.model);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlContainerComponent.prototype, "hasHint", {
        get: /**
         * @return {?}
         */
        function () {
            return isString((/** @type {?} */ (this.model)).hint);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlContainerComponent.prototype, "hasLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return isString(this.model.label);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlContainerComponent.prototype, "isCheckbox", {
        get: /**
         * @return {?}
         */
        function () {
            return this.model.type === DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlContainerComponent.prototype, "isInvalid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.invalid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlContainerComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlContainerComponent.prototype, "showErrorMessages", {
        get: /**
         * @return {?}
         */
        function () {
            return this.model.hasErrorMessages && this.control.touched && !this.hasFocus && this.isInvalid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlContainerComponent.prototype, "templates", {
        get: /**
         * @return {?}
         */
        function () {
            return this.inputTemplateList !== undefined ? this.inputTemplateList : this.contentTemplateList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlContainerComponent.prototype, "startTemplate", {
        get: /**
         * @return {?}
         */
        function () {
            return this.model.type !== DYNAMIC_FORM_CONTROL_TYPE_ARRAY ?
                this.layoutService.getStartTemplate(this.model, this.templates) : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlContainerComponent.prototype, "endTemplate", {
        get: /**
         * @return {?}
         */
        function () {
            return this.model.type !== DYNAMIC_FORM_CONTROL_TYPE_ARRAY ?
                this.layoutService.getEndTemplate(this.model, this.templates) : undefined;
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
    DynamicFormControlContainerComponent.prototype.getClass = /**
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
     * @return {?}
     */
    DynamicFormControlContainerComponent.prototype.createFormControlComponent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var componentType = this.componentType;
        if (componentType !== null) {
            /** @type {?} */
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
            this.componentViewContainerRef.clear();
            this.componentRef = this.componentViewContainerRef.createComponent(componentFactory);
            /** @type {?} */
            var instance = this.componentRef.instance;
            instance.bindId = this.bindId;
            instance.group = this.group;
            instance.layout = this.layout;
            instance.model = /** @type {?} */ (this.model);
            if (this.templates) {
                instance.templates = this.templates;
            }
            this.componentSubscriptions.push(instance.blur.subscribe(function ($event) { return _this.onBlur($event); }));
            this.componentSubscriptions.push(instance.change.subscribe(function ($event) { return _this.onChange($event); }));
            this.componentSubscriptions.push(instance.focus.subscribe(function ($event) { return _this.onFocus($event); }));
            if (instance.customEvent !== undefined) {
                this.componentSubscriptions.push(instance.customEvent.subscribe(function ($event) { return _this.onCustomEvent($event); }));
            }
        }
    };
    /**
     * @return {?}
     */
    DynamicFormControlContainerComponent.prototype.destroyFormControlComponent = /**
     * @return {?}
     */
    function () {
        if (this.componentRef) {
            this.componentSubscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
            this.componentSubscriptions = [];
            this.componentRef.destroy();
        }
    };
    /**
     * @return {?}
     */
    DynamicFormControlContainerComponent.prototype.setControlRelations = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var relActivation = RelationUtils.findActivationRelation(this.model.relation);
        if (relActivation !== null) {
            /** @type {?} */
            var rel_1 = /** @type {?} */ (relActivation);
            this.updateModelDisabled(rel_1);
            RelationUtils.getRelatedFormControls(this.model, this.group).forEach(function (control) {
                _this.subscriptions.push(control.valueChanges.subscribe(function () { return _this.updateModelDisabled(rel_1); }));
                _this.subscriptions.push(control.statusChanges.subscribe(function () { return _this.updateModelDisabled(rel_1); }));
            });
        }
    };
    /**
     * @param {?} $event
     * @param {?} type
     * @return {?}
     */
    DynamicFormControlContainerComponent.prototype.createDynamicFormControlEvent = /**
     * @param {?} $event
     * @param {?} type
     * @return {?}
     */
    function ($event, type) {
        return { $event: $event, context: this.context, control: this.control, group: this.group, model: this.model, type: type };
    };
    /**
     * @param {?} relation
     * @return {?}
     */
    DynamicFormControlContainerComponent.prototype.updateModelDisabled = /**
     * @param {?} relation
     * @return {?}
     */
    function (relation) {
        this.model.disabledUpdates.next(RelationUtils.isFormControlToBeDisabled(relation, this.group));
    };
    /**
     * @return {?}
     */
    DynamicFormControlContainerComponent.prototype.unsubscribe = /**
     * @return {?}
     */
    function () {
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
        this.subscriptions = [];
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DynamicFormControlContainerComponent.prototype.onControlValueChanges = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.model instanceof DynamicFormValueControlModel) {
            /** @type {?} */
            var model = /** @type {?} */ (this.model);
            if (model.value !== value) {
                model.valueUpdates.next(value);
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DynamicFormControlContainerComponent.prototype.onModelValueUpdates = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.control.value !== value) {
            this.control.setValue(value);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DynamicFormControlContainerComponent.prototype.onModelDisabledUpdates = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        value ? this.control.disable() : this.control.enable();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    DynamicFormControlContainerComponent.prototype.onChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event && $event instanceof Event) { // native HTML5 change event
            // native HTML5 change event
            if (this.model.type === DYNAMIC_FORM_CONTROL_TYPE_INPUT) {
                /** @type {?} */
                var model = /** @type {?} */ (this.model);
                if (model.inputType === DYNAMIC_FORM_CONTROL_INPUT_TYPE_FILE) {
                    /** @type {?} */
                    var inputElement = $event.target || $event.srcElement;
                    model.files = /** @type {?} */ (inputElement.files);
                }
            }
            this.change.emit(this.createDynamicFormControlEvent($event, DynamicFormControlEventType.Change));
        }
        else if (isDynamicFormControlEvent($event)) { // event bypass
            // event bypass
            this.change.emit($event);
        }
        else { // custom library value change event
            // custom library value change event
            this.change.emit(this.createDynamicFormControlEvent($event, DynamicFormControlEventType.Change));
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    DynamicFormControlContainerComponent.prototype.onBlur = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (isDynamicFormControlEvent($event)) { // event bypass
            // event bypass
            this.blur.emit($event);
        }
        else { // native HTML 5 or UI library blur event
            // native HTML 5 or UI library blur event
            this.hasFocus = false;
            this.blur.emit(this.createDynamicFormControlEvent($event, DynamicFormControlEventType.Blur));
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    DynamicFormControlContainerComponent.prototype.onFocus = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (isDynamicFormControlEvent($event)) { // event bypass
            // event bypass
            this.focus.emit($event);
        }
        else { // native HTML 5 or UI library focus event
            // native HTML 5 or UI library focus event
            this.hasFocus = true;
            this.focus.emit(this.createDynamicFormControlEvent($event, DynamicFormControlEventType.Focus));
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    DynamicFormControlContainerComponent.prototype.onCustomEvent = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var emitter = /** @type {?} */ (this.customEvent);
        if (isDynamicFormControlEvent($event)) { // child event bypass
            // child event bypass
            emitter.emit($event);
        }
        else { // native UI library custom event
            // native UI library custom event
            emitter.emit(this.createDynamicFormControlEvent($event.customEvent, $event.customEventType));
        }
    };
    return DynamicFormControlContainerComponent;
}());
/**
 * @abstract
 */
export { DynamicFormControlContainerComponent };
if (false) {
    /** @type {?} */
    DynamicFormControlContainerComponent.prototype.bindId;
    /** @type {?} */
    DynamicFormControlContainerComponent.prototype.context;
    /** @type {?} */
    DynamicFormControlContainerComponent.prototype.control;
    /** @type {?} */
    DynamicFormControlContainerComponent.prototype.group;
    /** @type {?} */
    DynamicFormControlContainerComponent.prototype.hasFocus;
    /** @type {?} */
    DynamicFormControlContainerComponent.prototype.layout;
    /** @type {?} */
    DynamicFormControlContainerComponent.prototype.model;
    /** @type {?} */
    DynamicFormControlContainerComponent.prototype.contentTemplateList;
    /** @type {?} */
    DynamicFormControlContainerComponent.prototype.inputTemplateList;
    /** @type {?} */
    DynamicFormControlContainerComponent.prototype.blur;
    /** @type {?} */
    DynamicFormControlContainerComponent.prototype.change;
    /** @type {?} */
    DynamicFormControlContainerComponent.prototype.customEvent;
    /** @type {?} */
    DynamicFormControlContainerComponent.prototype.focus;
    /** @type {?} */
    DynamicFormControlContainerComponent.prototype.componentViewContainerRef;
    /** @type {?} */
    DynamicFormControlContainerComponent.prototype.componentRef;
    /** @type {?} */
    DynamicFormControlContainerComponent.prototype.componentSubscriptions;
    /** @type {?} */
    DynamicFormControlContainerComponent.prototype.subscriptions;
    /** @type {?} */
    DynamicFormControlContainerComponent.prototype.componentFactoryResolver;
    /** @type {?} */
    DynamicFormControlContainerComponent.prototype.layoutService;
    /** @type {?} */
    DynamicFormControlContainerComponent.prototype.validationService;
    /**
     * @abstract
     * @return {?}
     */
    DynamicFormControlContainerComponent.prototype.componentType = function () { };
}
//# sourceMappingURL=dynamic-form-control-container.component.js.map