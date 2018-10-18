var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ComponentFactoryResolver, ContentChildren, EventEmitter, Input, Output, QueryList, ViewChild, ViewContainerRef } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormControlContainerComponent, DynamicFormControlModel, DynamicFormLayoutService, DynamicFormValidationService, DynamicTemplateDirective, DYNAMIC_FORM_CONTROL_TYPE_ARRAY, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP, DYNAMIC_FORM_CONTROL_TYPE_COLORPICKER, DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER, DYNAMIC_FORM_CONTROL_TYPE_EDITOR, DYNAMIC_FORM_CONTROL_TYPE_GROUP, DYNAMIC_FORM_CONTROL_TYPE_INPUT, DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER, DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP, DYNAMIC_FORM_CONTROL_TYPE_RATING, DYNAMIC_FORM_CONTROL_TYPE_SELECT, DYNAMIC_FORM_CONTROL_TYPE_SLIDER, DYNAMIC_FORM_CONTROL_TYPE_SWITCH, DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA, DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER } from "@ng-dynamic-forms/core";
import { DynamicPrimeNGCheckboxComponent } from "./checkbox/dynamic-primeng-checkbox.component";
import { DynamicPrimeNGColorPickerComponent } from "./colorpicker/dynamic-primeng-colorpicker.component";
import { DynamicPrimeNGCalendarComponent } from "./calendar/dynamic-primeng-calendar.component";
import { DynamicPrimeNGEditorComponent } from "./editor/dynamic-primeng-editor.component";
import { DynamicPrimeNGFormArrayComponent } from "./form-array/dynamic-primeng-form-array.component";
import { DynamicPrimeNGFormGroupComponent } from "./form-group/dynamic-primeng-form-group.component";
import { DynamicPrimeNGSpinnerComponent } from "./spinner/dynamic-primeng-spinner.component";
import { DynamicPrimeNGInputMaskComponent } from "./input-mask/dynamic-primeng-input-mask.component";
import { DynamicPrimeNGAutoCompleteComponent } from "./autocomplete/dynamic-primeng-autocomplete.component";
import { DynamicPrimeNGChipsComponent } from "./chips/dynamic-primeng-chips.component";
import { DynamicPrimeNGInputComponent } from "./input/dynamic-primeng-input.component";
import { DynamicPrimeNGRadioGroupComponent } from "./radio-group/dynamic-primeng-radio-group.component";
import { DynamicPrimeNGRatingComponent } from "./rating/dynamic-primeng-rating.component";
import { DynamicPrimeNGMultiSelectComponent } from "./multiselect/dynamic-primeng-multiselect.component";
import { DynamicPrimeNGDropdownComponent } from "./dropdown/dynamic-primeng-dropdown.component";
import { DynamicPrimeNGSliderComponent } from "./slider/dynamic-primeng-slider.component";
import { DynamicPrimeNGInputSwitchComponent } from "./input-switch/dynamic-primeng-input-switch.component";
import { DynamicPrimeNGTextAreaComponent } from "./textarea/dynamic-primeng-textarea.component";
var DynamicPrimeNGFormControlContainerComponent = /** @class */ (function (_super) {
    __extends(DynamicPrimeNGFormControlContainerComponent, _super);
    function DynamicPrimeNGFormControlContainerComponent(componentFactoryResolver, layoutService, validationService) {
        var _this = _super.call(this, componentFactoryResolver, layoutService, validationService) || this;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.context = null;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        _this.customEvent = new EventEmitter();
        return _this;
    }
    Object.defineProperty(DynamicPrimeNGFormControlContainerComponent.prototype, "componentType", {
        get: /**
         * @return {?}
         */
        function () {
            return this.layoutService.getCustomComponentType(this.model) || primeNGUIFormControlMapFn(this.model);
        },
        enumerable: true,
        configurable: true
    });
    DynamicPrimeNGFormControlContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-primeng-form-control",
                    template: "<div [formGroup]=\"group\" [ngClass]=\"[getClass('element', 'container'), getClass('grid', 'container')]\">\r\n\r\n    <div *ngIf=\"!isCheckbox && hasLabel\" [ngClass]=\"getClass('grid', 'label')\">\r\n\r\n        <label [for]=\"model.id\" [innerHTML]=\"model.label\" [ngClass]=\"getClass('element', 'label')\"></label>\r\n\r\n    </div>\r\n\r\n    <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <ng-container #componentViewContainer></ng-container>\r\n\r\n    <ul *ngIf=\"showErrorMessages\" [ngClass]=\"[getClass('element', 'errors'), getClass('grid', 'errors')]\">\r\n        <li *ngFor=\"let message of errorMessages\" class=\"ui-message ui-messages-error ui-corner-all\">{{ message }}</li>\r\n    </ul>\r\n\r\n    <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <ng-content></ng-content>\r\n\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    DynamicPrimeNGFormControlContainerComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicPrimeNGFormControlContainerComponent.propDecorators = {
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
        customEvent: [{ type: Output, args: ["pEvent",] }],
        componentViewContainerRef: [{ type: ViewChild, args: ["componentViewContainer", { read: ViewContainerRef },] }]
    };
    return DynamicPrimeNGFormControlContainerComponent;
}(DynamicFormControlContainerComponent));
export { DynamicPrimeNGFormControlContainerComponent };
if (false) {
    /** @type {?} */
    DynamicPrimeNGFormControlContainerComponent.prototype.contentTemplateList;
    /** @type {?} */
    DynamicPrimeNGFormControlContainerComponent.prototype.inputTemplateList;
    /** @type {?} */
    DynamicPrimeNGFormControlContainerComponent.prototype.bindId;
    /** @type {?} */
    DynamicPrimeNGFormControlContainerComponent.prototype.context;
    /** @type {?} */
    DynamicPrimeNGFormControlContainerComponent.prototype.group;
    /** @type {?} */
    DynamicPrimeNGFormControlContainerComponent.prototype.layout;
    /** @type {?} */
    DynamicPrimeNGFormControlContainerComponent.prototype.model;
    /** @type {?} */
    DynamicPrimeNGFormControlContainerComponent.prototype.blur;
    /** @type {?} */
    DynamicPrimeNGFormControlContainerComponent.prototype.change;
    /** @type {?} */
    DynamicPrimeNGFormControlContainerComponent.prototype.focus;
    /** @type {?} */
    DynamicPrimeNGFormControlContainerComponent.prototype.customEvent;
    /** @type {?} */
    DynamicPrimeNGFormControlContainerComponent.prototype.componentViewContainerRef;
    /** @type {?} */
    DynamicPrimeNGFormControlContainerComponent.prototype.componentFactoryResolver;
    /** @type {?} */
    DynamicPrimeNGFormControlContainerComponent.prototype.layoutService;
    /** @type {?} */
    DynamicPrimeNGFormControlContainerComponent.prototype.validationService;
}
/**
 * @param {?} model
 * @return {?}
 */
export function primeNGUIFormControlMapFn(model) {
    switch (model.type) {
        case DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
            return DynamicPrimeNGFormArrayComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX:
            return DynamicPrimeNGCheckboxComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
            return DynamicPrimeNGFormGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_COLORPICKER:
            return DynamicPrimeNGColorPickerComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER:
            return DynamicPrimeNGCalendarComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_EDITOR:
            return DynamicPrimeNGEditorComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_GROUP:
            return DynamicPrimeNGFormGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_INPUT:
            /** @type {?} */
            var inputModel = /** @type {?} */ (model);
            if (inputModel.inputType === DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER) {
                return DynamicPrimeNGSpinnerComponent;
            }
            else if (inputModel.mask) {
                return DynamicPrimeNGInputMaskComponent;
            }
            else if (Array.isArray(inputModel.list)) {
                return DynamicPrimeNGAutoCompleteComponent;
            }
            else if (inputModel.multiple) {
                return DynamicPrimeNGChipsComponent;
            }
            else {
                return DynamicPrimeNGInputComponent;
            }
        case DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP:
            return DynamicPrimeNGRadioGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_RATING:
            return DynamicPrimeNGRatingComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_SELECT:
            /** @type {?} */
            var selectModel = /** @type {?} */ (model);
            return selectModel.multiple ? DynamicPrimeNGMultiSelectComponent : DynamicPrimeNGDropdownComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_SLIDER:
            return DynamicPrimeNGSliderComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_SWITCH:
            return DynamicPrimeNGInputSwitchComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA:
            return DynamicPrimeNGTextAreaComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER:
            return DynamicPrimeNGCalendarComponent;
        default:
            return null;
    }
}
//# sourceMappingURL=dynamic-primeng-form-control-container.component.js.map