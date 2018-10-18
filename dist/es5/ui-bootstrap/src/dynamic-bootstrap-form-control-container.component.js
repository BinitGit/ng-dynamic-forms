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
var DynamicBootstrapFormControlContainerComponent = /** @class */ (function (_super) {
    __extends(DynamicBootstrapFormControlContainerComponent, _super);
    function DynamicBootstrapFormControlContainerComponent(componentFactoryResolver, layoutService, validationService) {
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
        _this.customEvent = new EventEmitter();
        return _this;
    }
    Object.defineProperty(DynamicBootstrapFormControlContainerComponent.prototype, "componentType", {
        get: /**
         * @return {?}
         */
        function () {
            return this.layoutService.getCustomComponentType(this.model) || bootstrapUIFormControlMapFn(this.model);
        },
        enumerable: true,
        configurable: true
    });
    DynamicBootstrapFormControlContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-bootstrap-form-control",
                    template: "<div [class.form-group]=\"asBootstrapFormGroup || getClass('element', 'container').includes('form-group')\"\r\n     [class.has-error]=\"showErrorMessages\"\r\n     [formGroup]=\"group\"\r\n     [ngClass]=\"[getClass('element', 'container'), getClass('grid', 'container')]\">\r\n\r\n    <label *ngIf=\"!isCheckbox && hasLabel\"\r\n           [for]=\"model.id\"\r\n           [innerHTML]=\"model.label\"\r\n           [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></label>\r\n\r\n    <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <div [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n        <ng-container #componentViewContainer></ng-container>\r\n\r\n        <span *ngIf=\"hasHint\" class=\"help-block\" [innerHTML]=\"model.hint\"\r\n              [ngClass]=\"getClass('element', 'hint')\"></span>\r\n\r\n    </div>\r\n\r\n    <ul *ngIf=\"showErrorMessages\" class=\"has-error\"\r\n        [ngClass]=\"[getClass('element', 'errors'), getClass('grid', 'errors')]\">\r\n\r\n        <li *ngFor=\"let message of errorMessages\" class=\"help-block\">{{ message }}</li>\r\n\r\n    </ul>\r\n\r\n    <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <ng-content></ng-content>\r\n\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    DynamicBootstrapFormControlContainerComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
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
    return DynamicBootstrapFormControlContainerComponent;
}(DynamicFormControlContainerComponent));
export { DynamicBootstrapFormControlContainerComponent };
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