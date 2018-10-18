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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { BsDatepickerDirective } from "ngx-bootstrap/datepicker";
import { DynamicDatePickerModel, DynamicFormControlComponent, DynamicFormLayoutService, DynamicFormValidationService } from "@ng-dynamic-forms/core";
var DynamicBootstrapDatePickerComponent = /** @class */ (function (_super) {
    __extends(DynamicBootstrapDatePickerComponent, _super);
    function DynamicBootstrapDatePickerComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.customEvent = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicBootstrapDatePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-bootstrap-datepicker",
                    template: "<div [formGroup]=\"group\" class=\"input-group\">\r\n\r\n    <input bsDatepicker class=\"form-control\" #bsDatepicker=\"bsDatepicker\"\r\n           [autofocus]=\"model.autoFocus\"\r\n           [bsConfig]=\"model.getAdditional('bsConfig', {containerClass: model.getAdditional('containerClass', 'theme-green'), showWeekNumbers: model.getAdditional('showWeekNumbers', true)})\"\r\n           [dynamicId]=\"bindId && model.id\"\r\n           [formControlName]=\"model.id\"\r\n           [maxDate]=\"model.max\"\r\n           [minDate]=\"model.min\"\r\n           [name]=\"model.name\"\r\n           [ngClass]=\"getClass('element', 'control')\"\r\n           [outsideClick]=\"model.getAdditional('outsideClick', true)\"\r\n           [placeholder]=\"model.placeholder\"\r\n           [placement]=\"model.getAdditional('placement', 'bottom')\"\r\n           [readonly]=\"model.readOnly\"\r\n           [required]=\"model.required\"\r\n           (bsValueChange)=\"onChange($event)\"\r\n           (onHidden)=\"onCustomEvent($event, 'onHidden')\"\r\n           (onShown)=\"onCustomEvent($event, 'onShown')\">\r\n\r\n    <div *ngIf=\"model.toggleLabel\" class=\"input-group-btn\">\r\n\r\n        <button *ngIf=\"model.toggleIcon\" class=\"btn\" (click)=\"bsDatepicker.toggle()\"><img [src]=\"model.toggleIcon\"/></button>\r\n        <button *ngIf=\"model.toggleLabel\" class=\"btn\" (click)=\"bsDatepicker.toggle()\">{{ model.toggleLabel }}</button>\r\n\r\n    </div>\r\n\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicBootstrapDatePickerComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicBootstrapDatePickerComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        customEvent: [{ type: Output }],
        focus: [{ type: Output }],
        bsDatePicker: [{ type: ViewChild, args: [BsDatepickerDirective,] }]
    };
    return DynamicBootstrapDatePickerComponent;
}(DynamicFormControlComponent));
export { DynamicBootstrapDatePickerComponent };
if (false) {
    /** @type {?} */
    DynamicBootstrapDatePickerComponent.prototype.bindId;
    /** @type {?} */
    DynamicBootstrapDatePickerComponent.prototype.group;
    /** @type {?} */
    DynamicBootstrapDatePickerComponent.prototype.layout;
    /** @type {?} */
    DynamicBootstrapDatePickerComponent.prototype.model;
    /** @type {?} */
    DynamicBootstrapDatePickerComponent.prototype.blur;
    /** @type {?} */
    DynamicBootstrapDatePickerComponent.prototype.change;
    /** @type {?} */
    DynamicBootstrapDatePickerComponent.prototype.customEvent;
    /** @type {?} */
    DynamicBootstrapDatePickerComponent.prototype.focus;
    /** @type {?} */
    DynamicBootstrapDatePickerComponent.prototype.bsDatePicker;
    /** @type {?} */
    DynamicBootstrapDatePickerComponent.prototype.layoutService;
    /** @type {?} */
    DynamicBootstrapDatePickerComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-bootstrap-datepicker.component.js.map