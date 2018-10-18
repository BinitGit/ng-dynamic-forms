/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ComponentFactoryResolver, ContentChildren, EventEmitter, Input, Output, QueryList, ViewChild, ViewContainerRef } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DYNAMIC_FORM_CONTROL_TYPE_ARRAY, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP, DYNAMIC_FORM_CONTROL_TYPE_GROUP, DYNAMIC_FORM_CONTROL_TYPE_INPUT, DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP, DYNAMIC_FORM_CONTROL_TYPE_SELECT, DYNAMIC_FORM_CONTROL_TYPE_SWITCH, DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA, DynamicFormControlContainerComponent, DynamicFormControlModel, DynamicFormLayoutService, DynamicFormValidationService, DynamicTemplateDirective, } from "@ng-dynamic-forms/core";
import { DynamicFoundationTextAreaComponent } from "./textarea/dynamic-foundation-textarea.component";
import { DynamicFoundationSwitchComponent } from "./switch/dynamic-foundation-switch.component";
import { DynamicFoundationSelectComponent } from "./select/dynamic-foundation-select.component";
import { DynamicFoundationRadioGroupComponent } from "./radio-group/dynamic-foundation-radio-group.component";
import { DynamicFoundationInputComponent } from "./input/dynamic-foundation-input.component";
import { DynamicFoundationCheckboxComponent } from "./checkbox/dynamic-foundation-checkbox.component";
import { DynamicFoundationFormArrayComponent } from "./form-array/dynamic-foundation-form-array.component";
import { DynamicFoundationFormGroupComponent } from "./form-group/dynamic-foundation-form-group.component";
export class DynamicFoundationFormControlContainerComponent extends DynamicFormControlContainerComponent {
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
        this.bindId = true;
        this.context = null;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.focus = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get componentType() {
        return this.layoutService.getCustomComponentType(this.model) || foundationUIFormControlMapFn(this.model);
    }
}
DynamicFoundationFormControlContainerComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-foundation-form-control",
                template: "<div [formGroup]=\"group\" [ngClass]=\"[getClass('element', 'container'), getClass('grid', 'container')]\">\r\n\r\n    <div *ngIf=\"!isCheckbox && hasLabel\" [ngClass]=\"getClass('grid', 'label')\">\r\n\r\n        <label [class.is-invalid-label]=\"showErrorMessages\"\r\n               [for]=\"model.id\"\r\n               [innerHTML]=\"model.label\"\r\n               [ngClass]=\"getClass('element', 'label')\"></label>\r\n    </div>\r\n\r\n    <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <div [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n        <ng-container #componentViewContainer></ng-container>\r\n\r\n    </div>\r\n\r\n    <ul *ngIf=\"showErrorMessages\" [ngClass]=\"[getClass('element', 'errors'), getClass('grid', 'errors')]\">\r\n        <li *ngFor=\"let message of errorMessages\" class=\"form-error is-visible\">{{ message }}</li>\r\n    </ul>\r\n\r\n    <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <ng-content></ng-content>\r\n\r\n</div>"
            }] }
];
/** @nocollapse */
DynamicFoundationFormControlContainerComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicFoundationFormControlContainerComponent.propDecorators = {
    contentTemplateList: [{ type: ContentChildren, args: [DynamicTemplateDirective,] }],
    inputTemplateList: [{ type: Input, args: ["templates",] }],
    bindId: [{ type: Input }],
    context: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    componentViewContainerRef: [{ type: ViewChild, args: ["componentViewContainer", { read: ViewContainerRef },] }]
};
if (false) {
    /** @type {?} */
    DynamicFoundationFormControlContainerComponent.prototype.contentTemplateList;
    /** @type {?} */
    DynamicFoundationFormControlContainerComponent.prototype.inputTemplateList;
    /** @type {?} */
    DynamicFoundationFormControlContainerComponent.prototype.bindId;
    /** @type {?} */
    DynamicFoundationFormControlContainerComponent.prototype.context;
    /** @type {?} */
    DynamicFoundationFormControlContainerComponent.prototype.group;
    /** @type {?} */
    DynamicFoundationFormControlContainerComponent.prototype.layout;
    /** @type {?} */
    DynamicFoundationFormControlContainerComponent.prototype.model;
    /** @type {?} */
    DynamicFoundationFormControlContainerComponent.prototype.blur;
    /** @type {?} */
    DynamicFoundationFormControlContainerComponent.prototype.change;
    /** @type {?} */
    DynamicFoundationFormControlContainerComponent.prototype.focus;
    /** @type {?} */
    DynamicFoundationFormControlContainerComponent.prototype.componentViewContainerRef;
    /** @type {?} */
    DynamicFoundationFormControlContainerComponent.prototype.componentFactoryResolver;
    /** @type {?} */
    DynamicFoundationFormControlContainerComponent.prototype.layoutService;
    /** @type {?} */
    DynamicFoundationFormControlContainerComponent.prototype.validationService;
}
/**
 * @param {?} model
 * @return {?}
 */
export function foundationUIFormControlMapFn(model) {
    switch (model.type) {
        case DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
            return DynamicFoundationFormArrayComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX:
            return DynamicFoundationCheckboxComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
            return DynamicFoundationFormGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_GROUP:
            return DynamicFoundationFormGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_INPUT:
            return DynamicFoundationInputComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP:
            return DynamicFoundationRadioGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_SELECT:
            return DynamicFoundationSelectComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_SWITCH:
            return DynamicFoundationSwitchComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA:
            return DynamicFoundationTextAreaComponent;
        default:
            return null;
    }
}
//# sourceMappingURL=dynamic-foundation-form-control-container.component.js.map