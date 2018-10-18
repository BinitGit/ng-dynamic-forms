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
var DynamicNGBootstrapFormControlContainerComponent = /** @class */ (function (_super) {
    __extends(DynamicNGBootstrapFormControlContainerComponent, _super);
    function DynamicNGBootstrapFormControlContainerComponent(componentFactoryResolver, layoutService, validationService) {
        var _this = _super.call(this, componentFactoryResolver, layoutService, validationService) || this;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.asBootstrapFormGroup = true;
        _this.bindId = true;
        _this.context = null;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        _this.click = new EventEmitter();
        _this.customEvent = new EventEmitter();
        return _this;
    }
    Object.defineProperty(DynamicNGBootstrapFormControlContainerComponent.prototype, "componentType", {
        get: /**
         * @return {?}
         */
        function () {
            return this.layoutService.getCustomComponentType(this.model) || ngBootstrapUIFormControlMapFn(this.model);
        },
        enumerable: true,
        configurable: true
    });
    DynamicNGBootstrapFormControlContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-ng-bootstrap-form-control",
                    template: "<div [class.form-group]=\"(model.type !== 'GROUP' && asBootstrapFormGroup) || getClass('element', 'container').includes('form-group')\"\r\n     [formGroup]=\"group\"\r\n     [ngClass]=\"[getClass('element', 'container'), getClass('grid', 'container')]\">\r\n\r\n    <label *ngIf=\"!isCheckbox && hasLabel\"\r\n           [for]=\"model.id\"\r\n           [innerHTML]=\"model.label\"\r\n           [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></label>\r\n\r\n    <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <div [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n        <ng-container #componentViewContainer></ng-container>\r\n\r\n        <small *ngIf=\"hasHint\" class=\"text-muted\" [innerHTML]=\"model.hint\" [ngClass]=\"getClass('element', 'hint')\"></small>\r\n\r\n        <div *ngIf=\"showErrorMessages\" [ngClass]=\"[getClass('element', 'errors'), getClass('grid', 'errors')]\">\r\n            <small *ngFor=\"let message of errorMessages\" class=\"invalid-feedback d-block\">{{ message }}</small>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <ng-content></ng-content>\r\n\r\n</div>\r\n"
                }] }
    ];
    /** @nocollapse */
    DynamicNGBootstrapFormControlContainerComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
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
    return DynamicNGBootstrapFormControlContainerComponent;
}(DynamicFormControlContainerComponent));
export { DynamicNGBootstrapFormControlContainerComponent };
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
            var datePickerModel = /** @type {?} */ (model);
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