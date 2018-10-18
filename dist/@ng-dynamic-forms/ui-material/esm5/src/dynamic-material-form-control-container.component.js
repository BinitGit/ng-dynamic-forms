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
import { DYNAMIC_FORM_CONTROL_TYPE_ARRAY, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP, DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER, DYNAMIC_FORM_CONTROL_TYPE_GROUP, DYNAMIC_FORM_CONTROL_TYPE_INPUT, DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP, DYNAMIC_FORM_CONTROL_TYPE_SELECT, DYNAMIC_FORM_CONTROL_TYPE_SLIDER, DYNAMIC_FORM_CONTROL_TYPE_SWITCH, DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA, DynamicFormControlContainerComponent, DynamicFormControlModel, DynamicFormLayoutService, DynamicFormValidationService, DynamicTemplateDirective, } from "@ng-dynamic-forms/core";
import { DynamicMaterialDatePickerComponent } from "./datepicker/dynamic-material-datepicker.component";
import { DynamicMaterialInputComponent } from "./input/dynamic-material-input.component";
import { DynamicMaterialTextAreaComponent } from "./textarea/dynamic-material-textarea.component";
import { DynamicMaterialSlideToggleComponent } from "./slide-toggle/dynamic-material-slide-toggle.component";
import { DynamicMaterialCheckboxComponent } from "./checkbox/dynamic-material-checkbox.component";
import { DynamicMaterialSliderComponent } from "./slider/dynamic-material-slider.component";
import { DynamicMaterialRadioGroupComponent } from "./radio-group/dynamic-material-radio-group.component";
import { DynamicMaterialChipsComponent } from "./chips/dynamic-material-chips.component";
import { DynamicMaterialSelectComponent } from "./select/dynamic-material-select.component";
import { DynamicMaterialFormArrayComponent } from "./form-array/dynamic-material-form-array.component";
import { DynamicMaterialFormGroupComponent } from "./form-group/dynamic-material-form-group.component";
var DynamicMaterialFormControlContainerComponent = /** @class */ (function (_super) {
    __extends(DynamicMaterialFormControlContainerComponent, _super);
    function DynamicMaterialFormControlContainerComponent(componentFactoryResolver, layoutService, validationService) {
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
    Object.defineProperty(DynamicMaterialFormControlContainerComponent.prototype, "componentType", {
        get: /**
         * @return {?}
         */
        function () {
            return this.layoutService.getCustomComponentType(this.model) || materialUIFormControlMapFn(this.model);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicMaterialFormControlContainerComponent.prototype, "hasMatFormField", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var matFormFieldTypes = [DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER, DYNAMIC_FORM_CONTROL_TYPE_INPUT,
                DYNAMIC_FORM_CONTROL_TYPE_SELECT, DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA];
            return matFormFieldTypes.some(function (type) { return _this.model.type === type; });
        },
        enumerable: true,
        configurable: true
    });
    DynamicMaterialFormControlContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-material-form-control",
                    template: "<div [formGroup]=\"group\" [ngClass]=\"[getClass('element', 'container'), getClass('grid', 'container')]\">\r\n\r\n    <label *ngIf=\"!hasMatFormField && !isCheckbox && hasLabel\"\r\n           [for]=\"model.id\"\r\n           [innerHTML]=\"model.label\"\r\n           [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></label>\r\n\r\n    <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <ng-container #componentViewContainer></ng-container>\r\n\r\n    <ng-container *ngIf=\"!hasMatFormField && showErrorMessages\">\r\n\r\n        <mat-error *ngFor=\"let message of errorMessages\">{{ message }}</mat-error>\r\n\r\n    </ng-container>\r\n\r\n    <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <ng-content></ng-content>\r\n\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    DynamicMaterialFormControlContainerComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicMaterialFormControlContainerComponent.propDecorators = {
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
        customEvent: [{ type: Output, args: ["matEvent",] }],
        componentViewContainerRef: [{ type: ViewChild, args: ["componentViewContainer", { read: ViewContainerRef },] }]
    };
    return DynamicMaterialFormControlContainerComponent;
}(DynamicFormControlContainerComponent));
export { DynamicMaterialFormControlContainerComponent };
if (false) {
    /** @type {?} */
    DynamicMaterialFormControlContainerComponent.prototype.contentTemplateList;
    /** @type {?} */
    DynamicMaterialFormControlContainerComponent.prototype.inputTemplateList;
    /** @type {?} */
    DynamicMaterialFormControlContainerComponent.prototype.bindId;
    /** @type {?} */
    DynamicMaterialFormControlContainerComponent.prototype.context;
    /** @type {?} */
    DynamicMaterialFormControlContainerComponent.prototype.group;
    /** @type {?} */
    DynamicMaterialFormControlContainerComponent.prototype.layout;
    /** @type {?} */
    DynamicMaterialFormControlContainerComponent.prototype.model;
    /** @type {?} */
    DynamicMaterialFormControlContainerComponent.prototype.blur;
    /** @type {?} */
    DynamicMaterialFormControlContainerComponent.prototype.change;
    /** @type {?} */
    DynamicMaterialFormControlContainerComponent.prototype.focus;
    /** @type {?} */
    DynamicMaterialFormControlContainerComponent.prototype.customEvent;
    /** @type {?} */
    DynamicMaterialFormControlContainerComponent.prototype.componentViewContainerRef;
    /** @type {?} */
    DynamicMaterialFormControlContainerComponent.prototype.componentFactoryResolver;
    /** @type {?} */
    DynamicMaterialFormControlContainerComponent.prototype.layoutService;
    /** @type {?} */
    DynamicMaterialFormControlContainerComponent.prototype.validationService;
}
/**
 * @param {?} model
 * @return {?}
 */
export function materialUIFormControlMapFn(model) {
    switch (model.type) {
        case DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
            return DynamicMaterialFormArrayComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX:
            return DynamicMaterialCheckboxComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
            return DynamicMaterialFormGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER:
            return DynamicMaterialDatePickerComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_GROUP:
            return DynamicMaterialFormGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_INPUT:
            /** @type {?} */
            var inputModel = /** @type {?} */ (model);
            return inputModel.multiple ? DynamicMaterialChipsComponent : DynamicMaterialInputComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP:
            return DynamicMaterialRadioGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_SELECT:
            return DynamicMaterialSelectComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_SLIDER:
            return DynamicMaterialSliderComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_SWITCH:
            return DynamicMaterialSlideToggleComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA:
            return DynamicMaterialTextAreaComponent;
        default:
            return null;
    }
}
//# sourceMappingURL=dynamic-material-form-control-container.component.js.map