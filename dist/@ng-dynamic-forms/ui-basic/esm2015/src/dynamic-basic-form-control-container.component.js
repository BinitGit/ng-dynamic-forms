/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ComponentFactoryResolver, ContentChildren, EventEmitter, Input, Output, QueryList, ViewChild, ViewContainerRef } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormControlContainerComponent, DynamicFormControlModel, DynamicFormLayoutService, DynamicFormValidationService, DynamicTemplateDirective, DYNAMIC_FORM_CONTROL_TYPE_ARRAY, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP, DYNAMIC_FORM_CONTROL_TYPE_GROUP, DYNAMIC_FORM_CONTROL_TYPE_INPUT, DYNAMIC_FORM_CONTROL_TYPE_SELECT, DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA, DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP } from "@ng-dynamic-forms/core";
import { DynamicBasicCheckboxComponent } from "./checkbox/dynamic-basic-checkbox.component";
import { DynamicBasicInputComponent } from "./input/dynamic-basic-input.component";
import { DynamicBasicRadioGroupComponent } from "./radio-group/dynamic-basic-radio-group.component";
import { DynamicBasicSelectComponent } from "./select/dynamic-basic-select.component";
import { DynamicBasicTextAreaComponent } from "./textarea/dynamic-basic-textarea.component";
import { DynamicBasicFormArrayComponent } from "./form-array/dynamic-basic-form-array.component";
import { DynamicBasicFormGroupComponent } from "./form-group/dynamic-basic-form-group.component";
export class DynamicBasicFormControlContainerComponent extends DynamicFormControlContainerComponent {
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
        return this.layoutService.getCustomComponentType(this.model) || basicUIFormControlMapFn(this.model);
    }
}
DynamicBasicFormControlContainerComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-basic-form-control",
                template: "<div [formGroup]=\"group\" [ngClass]=\"[getClass('element', 'container'), getClass('grid', 'container')]\">\r\n\r\n    <label *ngIf=\"!isCheckbox && hasLabel\"\r\n           [for]=\"model.id\"\r\n           [innerHTML]=\"model.label\"\r\n           [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></label>\r\n\r\n    <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <ng-container #componentViewContainer></ng-container>\r\n\r\n    <div *ngIf=\"hasHint\" [ngClass]=\"[getClass('element', 'hint'), getClass('grid', 'hint')]\">\r\n        <span [innerHTML]=\"model.hint\"></span>\r\n    </div>\r\n\r\n    <ul *ngIf=\"showErrorMessages\" [ngClass]=\"[getClass('element', 'errors'), getClass('grid', 'errors')]\">\r\n        <li *ngFor=\"let message of errorMessages\">{{ message }}</li>\r\n    </ul>\r\n\r\n    <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <ng-content></ng-content>\r\n\r\n</div>"
            }] }
];
/** @nocollapse */
DynamicBasicFormControlContainerComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicBasicFormControlContainerComponent.propDecorators = {
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
    DynamicBasicFormControlContainerComponent.prototype.contentTemplateList;
    /** @type {?} */
    DynamicBasicFormControlContainerComponent.prototype.inputTemplateList;
    /** @type {?} */
    DynamicBasicFormControlContainerComponent.prototype.bindId;
    /** @type {?} */
    DynamicBasicFormControlContainerComponent.prototype.context;
    /** @type {?} */
    DynamicBasicFormControlContainerComponent.prototype.group;
    /** @type {?} */
    DynamicBasicFormControlContainerComponent.prototype.layout;
    /** @type {?} */
    DynamicBasicFormControlContainerComponent.prototype.model;
    /** @type {?} */
    DynamicBasicFormControlContainerComponent.prototype.blur;
    /** @type {?} */
    DynamicBasicFormControlContainerComponent.prototype.change;
    /** @type {?} */
    DynamicBasicFormControlContainerComponent.prototype.focus;
    /** @type {?} */
    DynamicBasicFormControlContainerComponent.prototype.componentViewContainerRef;
    /** @type {?} */
    DynamicBasicFormControlContainerComponent.prototype.componentFactoryResolver;
    /** @type {?} */
    DynamicBasicFormControlContainerComponent.prototype.layoutService;
    /** @type {?} */
    DynamicBasicFormControlContainerComponent.prototype.validationService;
}
/**
 * @param {?} model
 * @return {?}
 */
export function basicUIFormControlMapFn(model) {
    switch (model.type) {
        case DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
            return DynamicBasicFormArrayComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX:
            return DynamicBasicCheckboxComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
            return DynamicBasicFormGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_GROUP:
            return DynamicBasicFormGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_INPUT:
            return DynamicBasicInputComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP:
            return DynamicBasicRadioGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_SELECT:
            return DynamicBasicSelectComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA:
            return DynamicBasicTextAreaComponent;
        default:
            return null;
    }
}
//# sourceMappingURL=dynamic-basic-form-control-container.component.js.map