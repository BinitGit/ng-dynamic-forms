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
import { DynamicFormControlContainerComponent, DynamicFormControlModel, DynamicFormLayoutService, DynamicFormValidationService, DynamicTemplateDirective, DYNAMIC_FORM_CONTROL_TYPE_ARRAY, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP, DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER, DYNAMIC_FORM_CONTROL_TYPE_GROUP, DYNAMIC_FORM_CONTROL_TYPE_INPUT, DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP, DYNAMIC_FORM_CONTROL_TYPE_SELECT, DYNAMIC_FORM_CONTROL_TYPE_SLIDER, DYNAMIC_FORM_CONTROL_TYPE_SWITCH, DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA, DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER } from "@ng-dynamic-forms/core";
import { DynamicIonicCheckboxComponent } from "./checkbox/dynamic-ionic-checkbox.component";
import { DynamicIonicDateTimeComponent } from "./datetime/dynamic-ionic-datetime.component";
import { DynamicIonicFormArrayComponent } from "./form-array/dynamic-ionic-form-array.component";
import { DynamicIonicFormGroupComponent } from "./form-group/dynamic-ionic-form-group.component";
import { DynamicIonicInputComponent } from "./input/dynamic-ionic-input.component";
import { DynamicIonicRadioGroupComponent } from "./radio-group/dynamic-ionic-radio-group.component";
import { DynamicIonicRangeComponent } from "./range/dynamic-ionic-range.component";
import { DynamicIonicSelectComponent } from "./select/dynamic-ionic-select.component";
import { DynamicIonicToggleComponent } from "./toggle/dynamic-ionic-toggle.component";
import { DynamicIonicTextAreaComponent } from "./textarea/dynamic-ionic-textarea.component";
var DynamicIonicFormControlContainerComponent = /** @class */ (function (_super) {
    __extends(DynamicIonicFormControlContainerComponent, _super);
    function DynamicIonicFormControlContainerComponent(componentFactoryResolver, layoutService, validationService) {
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
    Object.defineProperty(DynamicIonicFormControlContainerComponent.prototype, "componentType", {
        get: /**
         * @return {?}
         */
        function () {
            return this.layoutService.getCustomComponentType(this.model) || ionicUIFormControlMapFn(this.model);
        },
        enumerable: true,
        configurable: true
    });
    DynamicIonicFormControlContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-ionic-form-control",
                    template: "<div [formGroup]=\"group\" [ngClass]=\"[getClass('element', 'container'), getClass('grid', 'container')]\">\r\n\r\n    <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <ng-container #componentViewContainer></ng-container>\r\n\r\n    <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <ng-content></ng-content>\r\n\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    DynamicIonicFormControlContainerComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicIonicFormControlContainerComponent.propDecorators = {
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
        customEvent: [{ type: Output, args: ["ionEvent",] }],
        componentViewContainerRef: [{ type: ViewChild, args: ["componentViewContainer", { read: ViewContainerRef },] }]
    };
    return DynamicIonicFormControlContainerComponent;
}(DynamicFormControlContainerComponent));
export { DynamicIonicFormControlContainerComponent };
if (false) {
    /** @type {?} */
    DynamicIonicFormControlContainerComponent.prototype.contentTemplateList;
    /** @type {?} */
    DynamicIonicFormControlContainerComponent.prototype.inputTemplateList;
    /** @type {?} */
    DynamicIonicFormControlContainerComponent.prototype.bindId;
    /** @type {?} */
    DynamicIonicFormControlContainerComponent.prototype.context;
    /** @type {?} */
    DynamicIonicFormControlContainerComponent.prototype.group;
    /** @type {?} */
    DynamicIonicFormControlContainerComponent.prototype.layout;
    /** @type {?} */
    DynamicIonicFormControlContainerComponent.prototype.model;
    /** @type {?} */
    DynamicIonicFormControlContainerComponent.prototype.blur;
    /** @type {?} */
    DynamicIonicFormControlContainerComponent.prototype.change;
    /** @type {?} */
    DynamicIonicFormControlContainerComponent.prototype.focus;
    /** @type {?} */
    DynamicIonicFormControlContainerComponent.prototype.customEvent;
    /** @type {?} */
    DynamicIonicFormControlContainerComponent.prototype.componentViewContainerRef;
    /** @type {?} */
    DynamicIonicFormControlContainerComponent.prototype.componentFactoryResolver;
    /** @type {?} */
    DynamicIonicFormControlContainerComponent.prototype.layoutService;
    /** @type {?} */
    DynamicIonicFormControlContainerComponent.prototype.validationService;
}
/**
 * @param {?} model
 * @return {?}
 */
export function ionicUIFormControlMapFn(model) {
    switch (model.type) {
        case DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
            return DynamicIonicFormArrayComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX:
            return DynamicIonicCheckboxComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
            return DynamicIonicFormGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER:
            return DynamicIonicDateTimeComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_GROUP:
            return DynamicIonicFormGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_INPUT:
            return DynamicIonicInputComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP:
            return DynamicIonicRadioGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_SELECT:
            return DynamicIonicSelectComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_SLIDER:
            return DynamicIonicRangeComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_SWITCH:
            return DynamicIonicToggleComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA:
            return DynamicIonicTextAreaComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER:
            return DynamicIonicDateTimeComponent;
        default:
            return null;
    }
}
//# sourceMappingURL=dynamic-ionic-form-control-container.component.js.map