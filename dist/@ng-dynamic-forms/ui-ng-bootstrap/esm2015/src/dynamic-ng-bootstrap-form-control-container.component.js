/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ComponentFactoryResolver, ContentChildren, EventEmitter, Input, Output, QueryList, ViewChild, ViewContainerRef } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormControlContainerComponent, DynamicFormControlModel, DynamicFormLayoutService, DynamicFormValidationService, DynamicTemplateDirective, DYNAMIC_FORM_CONTROL_TYPE_ARRAY, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP, DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER, DYNAMIC_FORM_CONTROL_TYPE_GROUP, DYNAMIC_FORM_CONTROL_TYPE_INPUT, DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP, DYNAMIC_FORM_CONTROL_TYPE_RATING, DYNAMIC_FORM_CONTROL_TYPE_SELECT, DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA, DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER } from "@ng-dynamic-forms/core";
import { DynamicNGBootstrapCheckboxComponent } from "./checkbox/dynamic-ng-bootstrap-checkbox.component";
import { DynamicNGBootstrapCheckboxGroupComponent } from "./checkbox-group/dynamic-ng-bootstrap-checkbox-group.component";
import { DynamicNGBootstrapCalendarComponent } from "./calendar/dynamic-ng-bootstrap-calendar.component";
import { DynamicNGBootstrapDatePickerComponent } from "./datepicker/dynamic-ng-bootstrap-datepicker.component";
import { DynamicNGBootstrapFormArrayComponent } from "./form-array/dynamic-ng-bootstrap-form-array.component";
import { DynamicNGBootstrapFormGroupComponent } from "./form-group/dynamic-ng-bootstrap-form-group.component";
import { DynamicNGBootstrapInputComponent } from "./input/dynamic-ng-bootstrap-input.component";
import { DynamicNGBootstrapRadioGroupComponent } from "./radio-group/dynamic-ng-bootstrap-radio-group.component";
import { DynamicNGBootstrapRatingComponent } from "./rating/dynamic-ng-bootstrap-rating.component";
import { DynamicNGBootstrapSelectComponent } from "./select/dynamic-ng-bootstrap-select.component";
import { DynamicNGBootstrapTextAreaComponent } from "./textarea/dynamic-ng-bootstrap-textarea.component";
import { DynamicNGBootstrapTimePickerComponent } from "./timepicker/dynamic-ng-bootstrap-timepicker.component";
export class DynamicNGBootstrapFormControlContainerComponent extends DynamicFormControlContainerComponent {
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
        this.click = new EventEmitter();
        this.customEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get componentType() {
        return this.layoutService.getCustomComponentType(this.model) || ngBootstrapUIFormControlMapFn(this.model);
    }
}
DynamicNGBootstrapFormControlContainerComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-ng-bootstrap-form-control",
                template: "<div [class.form-group]=\"(model.type !== 'GROUP' && asBootstrapFormGroup) || getClass('element', 'container').includes('form-group')\"\r\n     [formGroup]=\"group\"\r\n     [ngClass]=\"[getClass('element', 'container'), getClass('grid', 'container')]\">\r\n\r\n    <label *ngIf=\"!isCheckbox && hasLabel\"\r\n           [for]=\"model.id\"\r\n           [innerHTML]=\"model.label\"\r\n           [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></label>\r\n\r\n    <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <div [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n        <ng-container #componentViewContainer></ng-container>\r\n\r\n        <small *ngIf=\"hasHint\" class=\"text-muted\" [innerHTML]=\"model.hint\" [ngClass]=\"getClass('element', 'hint')\"></small>\r\n\r\n        <div *ngIf=\"showErrorMessages\" [ngClass]=\"[getClass('element', 'errors'), getClass('grid', 'errors')]\">\r\n            <small *ngFor=\"let message of errorMessages\" class=\"invalid-feedback d-block\">{{ message }}</small>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <ng-content></ng-content>\r\n\r\n</div>\r\n"
            }] }
];
/** @nocollapse */
DynamicNGBootstrapFormControlContainerComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicNGBootstrapFormControlContainerComponent.propDecorators = {
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
    click: [{ type: Output }],
    customEvent: [{ type: Output, args: ["ngbEvent",] }],
    componentViewContainerRef: [{ type: ViewChild, args: ["componentViewContainer", { read: ViewContainerRef },] }]
};
if (false) {
    /** @type {?} */
    DynamicNGBootstrapFormControlContainerComponent.prototype.contentTemplateList;
    /** @type {?} */
    DynamicNGBootstrapFormControlContainerComponent.prototype.inputTemplateList;
    /** @type {?} */
    DynamicNGBootstrapFormControlContainerComponent.prototype.asBootstrapFormGroup;
    /** @type {?} */
    DynamicNGBootstrapFormControlContainerComponent.prototype.bindId;
    /** @type {?} */
    DynamicNGBootstrapFormControlContainerComponent.prototype.context;
    /** @type {?} */
    DynamicNGBootstrapFormControlContainerComponent.prototype.group;
    /** @type {?} */
    DynamicNGBootstrapFormControlContainerComponent.prototype.layout;
    /** @type {?} */
    DynamicNGBootstrapFormControlContainerComponent.prototype.model;
    /** @type {?} */
    DynamicNGBootstrapFormControlContainerComponent.prototype.blur;
    /** @type {?} */
    DynamicNGBootstrapFormControlContainerComponent.prototype.change;
    /** @type {?} */
    DynamicNGBootstrapFormControlContainerComponent.prototype.focus;
    /** @type {?} */
    DynamicNGBootstrapFormControlContainerComponent.prototype.click;
    /** @type {?} */
    DynamicNGBootstrapFormControlContainerComponent.prototype.customEvent;
    /** @type {?} */
    DynamicNGBootstrapFormControlContainerComponent.prototype.componentViewContainerRef;
    /** @type {?} */
    DynamicNGBootstrapFormControlContainerComponent.prototype.componentFactoryResolver;
    /** @type {?} */
    DynamicNGBootstrapFormControlContainerComponent.prototype.layoutService;
    /** @type {?} */
    DynamicNGBootstrapFormControlContainerComponent.prototype.validationService;
}
/**
 * @param {?} model
 * @return {?}
 */
export function ngBootstrapUIFormControlMapFn(model) {
    switch (model.type) {
        case DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
            return DynamicNGBootstrapFormArrayComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX:
            return DynamicNGBootstrapCheckboxComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
            return DynamicNGBootstrapCheckboxGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER:
            /** @type {?} */
            let datePickerModel = /** @type {?} */ (model);
            return datePickerModel.inline ? DynamicNGBootstrapCalendarComponent : DynamicNGBootstrapDatePickerComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_GROUP:
            return DynamicNGBootstrapFormGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_INPUT:
            return DynamicNGBootstrapInputComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP:
            return DynamicNGBootstrapRadioGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_RATING:
            return DynamicNGBootstrapRatingComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_SELECT:
            return DynamicNGBootstrapSelectComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA:
            return DynamicNGBootstrapTextAreaComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER:
            return DynamicNGBootstrapTimePickerComponent;
        default:
            return null;
    }
}
//# sourceMappingURL=dynamic-ng-bootstrap-form-control-container.component.js.map