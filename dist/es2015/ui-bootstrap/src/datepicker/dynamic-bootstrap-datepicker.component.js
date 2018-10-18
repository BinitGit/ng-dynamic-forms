/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { BsDatepickerDirective } from "ngx-bootstrap/datepicker";
import { DynamicDatePickerModel, DynamicFormControlComponent, DynamicFormLayoutService, DynamicFormValidationService } from "@ng-dynamic-forms/core";
export class DynamicBootstrapDatePickerComponent extends DynamicFormControlComponent {
    /**
     * @param {?} layoutService
     * @param {?} validationService
     */
    constructor(layoutService, validationService) {
        super(layoutService, validationService);
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.bindId = true;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.customEvent = new EventEmitter();
        this.focus = new EventEmitter();
    }
}
DynamicBootstrapDatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-bootstrap-datepicker",
                template: "<div [formGroup]=\"group\" class=\"input-group\">\r\n\r\n    <input bsDatepicker class=\"form-control\" #bsDatepicker=\"bsDatepicker\"\r\n           [autofocus]=\"model.autoFocus\"\r\n           [bsConfig]=\"model.getAdditional('bsConfig', {containerClass: model.getAdditional('containerClass', 'theme-green'), showWeekNumbers: model.getAdditional('showWeekNumbers', true)})\"\r\n           [dynamicId]=\"bindId && model.id\"\r\n           [formControlName]=\"model.id\"\r\n           [maxDate]=\"model.max\"\r\n           [minDate]=\"model.min\"\r\n           [name]=\"model.name\"\r\n           [ngClass]=\"getClass('element', 'control')\"\r\n           [outsideClick]=\"model.getAdditional('outsideClick', true)\"\r\n           [placeholder]=\"model.placeholder\"\r\n           [placement]=\"model.getAdditional('placement', 'bottom')\"\r\n           [readonly]=\"model.readOnly\"\r\n           [required]=\"model.required\"\r\n           (bsValueChange)=\"onChange($event)\"\r\n           (onHidden)=\"onCustomEvent($event, 'onHidden')\"\r\n           (onShown)=\"onCustomEvent($event, 'onShown')\">\r\n\r\n    <div *ngIf=\"model.toggleLabel\" class=\"input-group-btn\">\r\n\r\n        <button *ngIf=\"model.toggleIcon\" class=\"btn\" (click)=\"bsDatepicker.toggle()\"><img [src]=\"model.toggleIcon\"/></button>\r\n        <button *ngIf=\"model.toggleLabel\" class=\"btn\" (click)=\"bsDatepicker.toggle()\">{{ model.toggleLabel }}</button>\r\n\r\n    </div>\r\n\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicBootstrapDatePickerComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
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