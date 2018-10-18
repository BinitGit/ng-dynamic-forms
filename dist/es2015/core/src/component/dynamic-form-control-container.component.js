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
export class DynamicFormControlContainerComponent {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} layoutService
     * @param {?} validationService
     */
    constructor(componentFactoryResolver, layoutService, validationService) {
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
    ngOnChanges(changes) {
        /** @type {?} */
        let groupChange = /** @type {?} */ (changes["group"]);
        /** @type {?} */
        let modelChange = /** @type {?} */ (changes["model"]);
        if (modelChange) {
            this.destroyFormControlComponent();
            this.createFormControlComponent();
        }
        if (groupChange || modelChange) {
            if (this.model) {
                this.unsubscribe();
                if (this.group) {
                    this.control = /** @type {?} */ (this.group.get(this.model.id));
                    this.subscriptions.push(this.control.valueChanges.subscribe(value => this.onControlValueChanges(value)));
                }
                this.subscriptions.push(this.model.disabledUpdates.subscribe(value => this.onModelDisabledUpdates(value)));
                if (this.model instanceof DynamicFormValueControlModel) {
                    /** @type {?} */
                    let model = /** @type {?} */ (this.model);
                    this.subscriptions.push(model.valueUpdates.subscribe(value => this.onModelValueUpdates(value)));
                }
                if (this.model.relation.length > 0) {
                    this.setControlRelations();
                }
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyFormControlComponent();
        this.unsubscribe();
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
    get hasHint() {
        return isString((/** @type {?} */ (this.model)).hint);
    }
    /**
     * @return {?}
     */
    get hasLabel() {
        return isString(this.model.label);
    }
    /**
     * @return {?}
     */
    get isCheckbox() {
        return this.model.type === DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX;
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
     * @return {?}
     */
    get templates() {
        return this.inputTemplateList !== undefined ? this.inputTemplateList : this.contentTemplateList;
    }
    /**
     * @return {?}
     */
    get startTemplate() {
        return this.model.type !== DYNAMIC_FORM_CONTROL_TYPE_ARRAY ?
            this.layoutService.getStartTemplate(this.model, this.templates) : undefined;
    }
    /**
     * @return {?}
     */
    get endTemplate() {
        return this.model.type !== DYNAMIC_FORM_CONTROL_TYPE_ARRAY ?
            this.layoutService.getEndTemplate(this.model, this.templates) : undefined;
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
     * @return {?}
     */
    createFormControlComponent() {
        /** @type {?} */
        let componentType = this.componentType;
        if (componentType !== null) {
            /** @type {?} */
            let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
            this.componentViewContainerRef.clear();
            this.componentRef = this.componentViewContainerRef.createComponent(componentFactory);
            /** @type {?} */
            let instance = this.componentRef.instance;
            instance.bindId = this.bindId;
            instance.group = this.group;
            instance.layout = this.layout;
            instance.model = /** @type {?} */ (this.model);
            if (this.templates) {
                instance.templates = this.templates;
            }
            this.componentSubscriptions.push(instance.blur.subscribe(($event) => this.onBlur($event)));
            this.componentSubscriptions.push(instance.change.subscribe(($event) => this.onChange($event)));
            this.componentSubscriptions.push(instance.focus.subscribe(($event) => this.onFocus($event)));
            if (instance.customEvent !== undefined) {
                this.componentSubscriptions.push(instance.customEvent.subscribe(($event) => this.onCustomEvent($event)));
            }
        }
    }
    /**
     * @return {?}
     */
    destroyFormControlComponent() {
        if (this.componentRef) {
            this.componentSubscriptions.forEach(subscription => subscription.unsubscribe());
            this.componentSubscriptions = [];
            this.componentRef.destroy();
        }
    }
    /**
     * @return {?}
     */
    setControlRelations() {
        /** @type {?} */
        let relActivation = RelationUtils.findActivationRelation(this.model.relation);
        if (relActivation !== null) {
            /** @type {?} */
            let rel = /** @type {?} */ (relActivation);
            this.updateModelDisabled(rel);
            RelationUtils.getRelatedFormControls(this.model, this.group).forEach(control => {
                this.subscriptions.push(control.valueChanges.subscribe(() => this.updateModelDisabled(rel)));
                this.subscriptions.push(control.statusChanges.subscribe(() => this.updateModelDisabled(rel)));
            });
        }
    }
    /**
     * @param {?} $event
     * @param {?} type
     * @return {?}
     */
    createDynamicFormControlEvent($event, type) {
        return { $event, context: this.context, control: this.control, group: this.group, model: this.model, type };
    }
    /**
     * @param {?} relation
     * @return {?}
     */
    updateModelDisabled(relation) {
        this.model.disabledUpdates.next(RelationUtils.isFormControlToBeDisabled(relation, this.group));
    }
    /**
     * @return {?}
     */
    unsubscribe() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
        this.subscriptions = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onControlValueChanges(value) {
        if (this.model instanceof DynamicFormValueControlModel) {
            /** @type {?} */
            let model = /** @type {?} */ (this.model);
            if (model.value !== value) {
                model.valueUpdates.next(value);
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onModelValueUpdates(value) {
        if (this.control.value !== value) {
            this.control.setValue(value);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onModelDisabledUpdates(value) {
        value ? this.control.disable() : this.control.enable();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onChange($event) {
        if ($event && $event instanceof Event) { // native HTML5 change event
            // native HTML5 change event
            if (this.model.type === DYNAMIC_FORM_CONTROL_TYPE_INPUT) {
                /** @type {?} */
                let model = /** @type {?} */ (this.model);
                if (model.inputType === DYNAMIC_FORM_CONTROL_INPUT_TYPE_FILE) {
                    /** @type {?} */
                    let inputElement = $event.target || $event.srcElement;
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
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onBlur($event) {
        if (isDynamicFormControlEvent($event)) { // event bypass
            // event bypass
            this.blur.emit($event);
        }
        else { // native HTML 5 or UI library blur event
            // native HTML 5 or UI library blur event
            this.hasFocus = false;
            this.blur.emit(this.createDynamicFormControlEvent($event, DynamicFormControlEventType.Blur));
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onFocus($event) {
        if (isDynamicFormControlEvent($event)) { // event bypass
            // event bypass
            this.focus.emit($event);
        }
        else { // native HTML 5 or UI library focus event
            // native HTML 5 or UI library focus event
            this.hasFocus = true;
            this.focus.emit(this.createDynamicFormControlEvent($event, DynamicFormControlEventType.Focus));
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onCustomEvent($event) {
        /** @type {?} */
        let emitter = /** @type {?} */ (this.customEvent);
        if (isDynamicFormControlEvent($event)) { // child event bypass
            // child event bypass
            emitter.emit($event);
        }
        else { // native UI library custom event
            // native UI library custom event
            emitter.emit(this.createDynamicFormControlEvent($event.customEvent, $event.customEventType));
        }
    }
}
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