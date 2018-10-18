/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ComponentFactoryResolver, ContentChildren, EventEmitter, Input, Output, ViewChild, ViewContainerRef } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormControlContainerComponent, DynamicFormControlModel, DynamicFormLayoutService, DynamicFormValidationService, DynamicTemplateDirective, DYNAMIC_FORM_CONTROL_TYPE_ARRAY, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP, DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER, DYNAMIC_FORM_CONTROL_TYPE_GROUP, DYNAMIC_FORM_CONTROL_TYPE_INPUT, DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP, DYNAMIC_FORM_CONTROL_TYPE_SELECT, DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA, DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER, } from "@ng-dynamic-forms/core";
import { DynamicBootstrapCheckboxComponent } from "./checkbox/dynamic-bootstrap-checkbox.component";
import { DynamicBootstrapDatePickerComponent } from "./datepicker/dynamic-bootstrap-datepicker.component";
import { DynamicBootstrapFormArrayComponent } from "./form-array/dynamic-bootstrap-form-array.component";
import { DynamicBootstrapFormGroupComponent } from "./form-group/dynamic-bootstrap-form-group.component";
import { DynamicBootstrapInputComponent } from "./input/dynamic-bootstrap-input.component";
import { DynamicBootstrapRadioGroupComponent } from "./radio-group/dynamic-bootstrap-radio-group.component";
import { DynamicBootstrapSelectComponent } from "./select/dynamic-bootstrap-select.component";
import { DynamicBootstrapTextAreaComponent } from "./textarea/dynamic-bootstrap-textarea.component";
import { DynamicBootstrapTimePickerComponent } from "./timepicker/dynamic-bootstrap-timepicker.component";
export class DynamicBootstrapFormControlContainerComponent extends DynamicFormControlContainerComponent {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} layoutService
     * @param {?} validationService
     */
    constructor(componentFactoryResolver, layoutService, validationService) {
        super(componentFactoryResolver, layoutService, validationService);
        this.componentFactoryResolver = componentFactoryResolver;
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.asBootstrapFormGroup = true;
        this.bindId = true;
        this.context = null;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.focus = new EventEmitter();
        this.customEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get componentType() {
        return this.layoutService.getCustomComponentType(this.model) || bootstrapUIFormControlMapFn(this.model);
    }
}
DynamicBootstrapFormControlContainerComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-bootstrap-form-control",
                template: "<div [class.form-group]=\"asBootstrapFormGroup || getClass('element', 'container').includes('form-group')\"\r\n     [class.has-error]=\"showErrorMessages\"\r\n     [formGroup]=\"group\"\r\n     [ngClass]=\"[getClass('element', 'container'), getClass('grid', 'container')]\">\r\n\r\n    <label *ngIf=\"!isCheckbox && hasLabel\"\r\n           [for]=\"model.id\"\r\n           [innerHTML]=\"model.label\"\r\n           [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></label>\r\n\r\n    <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <div [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n        <ng-container #componentViewContainer></ng-container>\r\n\r\n        <span *ngIf=\"hasHint\" class=\"help-block\" [innerHTML]=\"model.hint\"\r\n              [ngClass]=\"getClass('element', 'hint')\"></span>\r\n\r\n    </div>\r\n\r\n    <ul *ngIf=\"showErrorMessages\" class=\"has-error\"\r\n        [ngClass]=\"[getClass('element', 'errors'), getClass('grid', 'errors')]\">\r\n\r\n        <li *ngFor=\"let message of errorMessages\" class=\"help-block\">{{ message }}</li>\r\n\r\n    </ul>\r\n\r\n    <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <ng-content></ng-content>\r\n\r\n</div>"
            }] }
];
/** @nocollapse */
DynamicBootstrapFormControlContainerComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicBootstrapFormControlContainerComponent.propDecorators = {
    contentTemplateList: [{ type: ContentChildren, args: [DynamicTemplateDirective,] }],
    inputTemplateList: [{ type: Input, args: ["templates",] }],
    asBootstrapFormGroup: [{ type: Input }],
    bindId: [{ type: Input }],
    context: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    customEvent: [{ type: Output, args: ["bsEvent",] }],
    componentViewContainerRef: [{ type: ViewChild, args: ["componentViewContainer", { read: ViewContainerRef },] }]
};
if (false) {
    /** @type {?} */
    DynamicBootstrapFormControlContainerComponent.prototype.contentTemplateList;
    /** @type {?} */
    DynamicBootstrapFormControlContainerComponent.prototype.inputTemplateList;
    /** @type {?} */
    DynamicBootstrapFormControlContainerComponent.prototype.asBootstrapFormGroup;
    /** @type {?} */
    DynamicBootstrapFormControlContainerComponent.prototype.bindId;
    /** @type {?} */
    DynamicBootstrapFormControlContainerComponent.prototype.context;
    /** @type {?} */
    DynamicBootstrapFormControlContainerComponent.prototype.group;
    /** @type {?} */
    DynamicBootstrapFormControlContainerComponent.prototype.layout;
    /** @type {?} */
    DynamicBootstrapFormControlContainerComponent.prototype.model;
    /** @type {?} */
    DynamicBootstrapFormControlContainerComponent.prototype.blur;
    /** @type {?} */
    DynamicBootstrapFormControlContainerComponent.prototype.change;
    /** @type {?} */
    DynamicBootstrapFormControlContainerComponent.prototype.focus;
    /** @type {?} */
    DynamicBootstrapFormControlContainerComponent.prototype.customEvent;
    /** @type {?} */
    DynamicBootstrapFormControlContainerComponent.prototype.componentViewContainerRef;
    /** @type {?} */
    DynamicBootstrapFormControlContainerComponent.prototype.componentFactoryResolver;
    /** @type {?} */
    DynamicBootstrapFormControlContainerComponent.prototype.layoutService;
    /** @type {?} */
    DynamicBootstrapFormControlContainerComponent.prototype.validationService;
}
/**
 * @param {?} model
 * @return {?}
 */
export function bootstrapUIFormControlMapFn(model) {
    switch (model.type) {
        case DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
            return DynamicBootstrapFormArrayComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX:
            return DynamicBootstrapCheckboxComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
            return DynamicBootstrapFormGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER:
            return DynamicBootstrapDatePickerComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_GROUP:
            return DynamicBootstrapFormGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_INPUT:
            return DynamicBootstrapInputComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP:
            return DynamicBootstrapRadioGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_SELECT:
            return DynamicBootstrapSelectComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA:
            return DynamicBootstrapTextAreaComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER:
            return DynamicBootstrapTimePickerComponent;
        default:
            return null;
    }
}
//# sourceMappingURL=dynamic-bootstrap-form-control-container.component.js.map