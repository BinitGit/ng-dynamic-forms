/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ComponentFactoryResolver, ContentChildren, EventEmitter, Input, Output, QueryList, ViewChild, ViewContainerRef, } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormControlContainerComponent, DynamicFormControlModel, DynamicFormLayoutService, DynamicFormValidationService, DynamicTemplateDirective, DYNAMIC_FORM_CONTROL_TYPE_ARRAY, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP, DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER, DYNAMIC_FORM_CONTROL_TYPE_FILE_UPLOAD, DYNAMIC_FORM_CONTROL_TYPE_GROUP, DYNAMIC_FORM_CONTROL_TYPE_INPUT, DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP, DYNAMIC_FORM_CONTROL_TYPE_SELECT, DYNAMIC_FORM_CONTROL_TYPE_SLIDER, DYNAMIC_FORM_CONTROL_TYPE_SWITCH, DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA, DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER, DYNAMIC_FORM_CONTROL_INPUT_TYPE_DATE, DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER, isString } from "@ng-dynamic-forms/core";
import { DynamicKendoAutoCompleteComponent } from "./autocomplete/dynamic-kendo-autocomplete.component";
import { DynamicKendoCheckboxComponent } from "./checkbox/dynamic-kendo-checkbox.component";
import { DynamicKendoCheckboxGroupComponent } from "./checkbox-group/dynamic-kendo-checkbox-group.component";
import { DynamicKendoCalendarComponent } from "./calendar/dynamic-kendo-calendar.component";
import { DynamicKendoDatePickerComponent } from "./datepicker/dynamic-kendo-datepicker.component";
import { DynamicKendoUploadComponent } from "./upload/dynamic-kendo-upload.component";
import { DynamicKendoDateInputComponent } from "./dateinput/dynamic-kendo-dateinput.component";
import { DynamicKendoFormArrayComponent } from "./form-array/dynamic-kendo-form-array.component";
import { DynamicKendoFormGroupComponent } from "./form-group/dynamic-kendo-form-group.component";
import { DynamicKendoMaskedTextBoxComponent } from "./masked-textbox/dynamic-kendo-maskedtextbox.component";
import { DynamicKendoNumericTextBoxComponent } from "./numeric-textbox/dynamic-kendo-numerictextbox.component";
import { DynamicKendoInputComponent } from "./input/dynamic-kendo-input.component";
import { DynamicKendoRadioGroupComponent } from "./radio-group/dynamic-kendo-radio-group.component";
import { DynamicKendoMultiSelectComponent } from "./multiselect/dynamic-kendo-multiselect.component";
import { DynamicKendoDropdownListComponent } from "./dropdownlist/dynamic-kendo-dropdownlist.component";
import { DynamicKendoSliderComponent } from "./slider/dynamic-kendo-slider.component";
import { DynamicKendoSwitchComponent } from "./switch/dynamic-kendo-switch.component";
import { DynamicKendoTextAreaComponent } from "./textarea/dynamic-kendo-textarea.component";
import { DynamicKendoTimePickerComponent } from "./timepicker/dynamic-kendo-timepicker.component";
export class DynamicKendoFormControlContainerComponent extends DynamicFormControlContainerComponent {
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
        this.customEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get componentType() {
        return this.layoutService.getCustomComponentType(this.model) || kendoUIFormControlMapFn(this.model);
    }
    /**
     * @return {?}
     */
    get hasHint() {
        return this.isTextBox && isString((/** @type {?} */ (this.model)).hint);
    }
    /**
     * @return {?}
     */
    get hasLabel() {
        return this.model.type !== DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX && this.componentType !== DynamicKendoInputComponent && isString(this.model.label);
    }
    /**
     * @return {?}
     */
    get isTextBox() {
        return this.componentType === DynamicKendoMaskedTextBoxComponent || this.componentType === DynamicKendoNumericTextBoxComponent;
    }
}
DynamicKendoFormControlContainerComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-kendo-form-control",
                template: "<div [formGroup]=\"group\" [ngClass]=\"[getClass('element', 'container'), getClass('grid', 'container')]\">\r\n\r\n    <label *ngIf=\"hasLabel\" [for]=\"model.id\" [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\">\r\n\r\n        <span [innerHTML]=\"model.label\"></span>\r\n\r\n        <span *ngIf=\"hasHint\" class=\"k-field-info\" [innerHTML]=\"model.hint\" [ngClass]=\"getClass('element', 'hint')\"></span>\r\n\r\n    </label>\r\n\r\n    <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <ng-container #componentViewContainer></ng-container>\r\n\r\n    <ul *ngIf=\"showErrorMessages\" [ngClass]=\"[getClass('element', 'errors'), getClass('grid', 'errors')]\">\r\n        <li *ngFor=\"let message of errorMessages\" class=\"k-field-info k-required\">{{ message }}</li>\r\n    </ul>\r\n\r\n    <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <ng-content></ng-content>\r\n\r\n</div>"
            }] }
];
/** @nocollapse */
DynamicKendoFormControlContainerComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicKendoFormControlContainerComponent.propDecorators = {
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
    customEvent: [{ type: Output, args: ["kendoEvent",] }],
    componentViewContainerRef: [{ type: ViewChild, args: ["componentViewContainer", { read: ViewContainerRef },] }]
};
if (false) {
    /** @type {?} */
    DynamicKendoFormControlContainerComponent.prototype.contentTemplateList;
    /** @type {?} */
    DynamicKendoFormControlContainerComponent.prototype.inputTemplateList;
    /** @type {?} */
    DynamicKendoFormControlContainerComponent.prototype.bindId;
    /** @type {?} */
    DynamicKendoFormControlContainerComponent.prototype.context;
    /** @type {?} */
    DynamicKendoFormControlContainerComponent.prototype.group;
    /** @type {?} */
    DynamicKendoFormControlContainerComponent.prototype.layout;
    /** @type {?} */
    DynamicKendoFormControlContainerComponent.prototype.model;
    /** @type {?} */
    DynamicKendoFormControlContainerComponent.prototype.blur;
    /** @type {?} */
    DynamicKendoFormControlContainerComponent.prototype.change;
    /** @type {?} */
    DynamicKendoFormControlContainerComponent.prototype.focus;
    /** @type {?} */
    DynamicKendoFormControlContainerComponent.prototype.customEvent;
    /** @type {?} */
    DynamicKendoFormControlContainerComponent.prototype.componentViewContainerRef;
    /** @type {?} */
    DynamicKendoFormControlContainerComponent.prototype.componentFactoryResolver;
    /** @type {?} */
    DynamicKendoFormControlContainerComponent.prototype.layoutService;
    /** @type {?} */
    DynamicKendoFormControlContainerComponent.prototype.validationService;
}
/**
 * @param {?} model
 * @return {?}
 */
export function kendoUIFormControlMapFn(model) {
    switch (model.type) {
        case DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
            return DynamicKendoFormArrayComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX:
            return DynamicKendoCheckboxComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
            return DynamicKendoCheckboxGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER:
            /** @type {?} */
            let datepickerModel = /** @type {?} */ (model);
            return datepickerModel.inline ? DynamicKendoCalendarComponent : DynamicKendoDatePickerComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_FILE_UPLOAD:
            return DynamicKendoUploadComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_GROUP:
            return DynamicKendoFormGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_INPUT:
            /** @type {?} */
            let inputModel = /** @type {?} */ (model);
            if (inputModel.inputType === DYNAMIC_FORM_CONTROL_INPUT_TYPE_DATE) {
                return DynamicKendoDateInputComponent;
            }
            else if (!inputModel.mask && inputModel.list && inputModel.inputType !== DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER) {
                return DynamicKendoAutoCompleteComponent;
            }
            else if (inputModel.mask && inputModel.inputType !== DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER) {
                return DynamicKendoMaskedTextBoxComponent;
            }
            else if (!inputModel.mask && inputModel.inputType === DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER) {
                return DynamicKendoNumericTextBoxComponent;
            }
            else {
                return DynamicKendoInputComponent;
            }
        case DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP:
            return DynamicKendoRadioGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_SELECT:
            /** @type {?} */
            let selectModel = /** @type {?} */ (model);
            return selectModel.multiple ? DynamicKendoMultiSelectComponent : DynamicKendoDropdownListComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_SLIDER:
            return DynamicKendoSliderComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_SWITCH:
            return DynamicKendoSwitchComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA:
            return DynamicKendoTextAreaComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER:
            return DynamicKendoTimePickerComponent;
        default:
            return null;
    }
}
//# sourceMappingURL=dynamic-kendo-form-control-container.component.js.map