/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Inject, Input, Optional, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MAT_LABEL_GLOBAL_OPTIONS, MatDatepicker, MatInput } from "@angular/material";
import { DynamicDatePickerModel, DynamicFormControlComponent, DynamicFormLayoutService, DynamicFormValidationService } from "@ng-dynamic-forms/core";
export class DynamicMaterialDatePickerComponent extends DynamicFormControlComponent {
    /**
     * @param {?} layoutService
     * @param {?} validationService
     * @param {?} LABEL_OPTIONS
     */
    constructor(layoutService, validationService, LABEL_OPTIONS) {
        super(layoutService, validationService);
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.LABEL_OPTIONS = LABEL_OPTIONS;
        this.bindId = true;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.customEvent = new EventEmitter();
        this.focus = new EventEmitter();
    }
}
DynamicMaterialDatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-material-datepicker",
                template: "<mat-form-field [appearance]=\"model.getAdditional('appearance', 'legacy')\"\r\n                [color]=\"model.getAdditional('color', 'primary')\"\r\n                [floatLabel]=\"model.getAdditional('floatLabel', LABEL_OPTIONS && LABEL_OPTIONS['float'] || 'auto')\"\r\n                [formGroup]=\"group\"\r\n                [hideRequiredMarker]=\"model.getAdditional('hideRequiredMarker', false)\"\r\n                [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <ng-container *ngIf=\"model.label\" ngProjectAs=\"mat-label\">\r\n\r\n        <mat-label>{{ model.label }}</mat-label>\r\n\r\n    </ng-container>\r\n\r\n    <span *ngIf=\"model.prefix\" matPrefix [innerHTML]=\"model.prefix\"></span>\r\n\r\n    <input matInput\r\n           [autofocus]=\"model.autoFocus\"\r\n           [formControlName]=\"model.id\"\r\n           [id]=\"bindId ? model.id : null\"\r\n           [max]=\"model.max\"\r\n           [matDatepicker]=\"matDatepicker\"\r\n           [min]=\"model.min\"\r\n           [name]=\"model.name\"\r\n           [ngClass]=\"getClass('element', 'control')\"\r\n           [placeholder]=\"model.placeholder\"\r\n           [readonly]=\"model.readOnly\"\r\n           [required]=\"model.required\"\r\n           (blur)=\"onBlur($event)\"\r\n           (dateChange)=\"onChange($event)\"\r\n           (dateInput)=\"onCustomEvent($event, 'dateInput')\"\r\n           (focus)=\"onFocus($event)\"/>\r\n\r\n    <span *ngIf=\"model.suffix\" matSuffix [innerHTML]=\"model.suffix\"></span>\r\n\r\n    <mat-hint *ngIf=\"model.hint !== null\" align=\"start\" [innerHTML]=\"model.hint\"></mat-hint>\r\n\r\n\r\n    <mat-datepicker-toggle matSuffix [for]=\"matDatepicker\"></mat-datepicker-toggle>\r\n\r\n    <mat-datepicker #matDatepicker\r\n                    [opened]=\"model.getAdditional('opened', false)\"\r\n                    [startAt]=\"model.focusedDate\"\r\n                    [startView]=\"model.getAdditional('startView', 'month')\"\r\n                    [touchUi]=\"model.getAdditional('touchUi', false)\"\r\n                    (closed)=\"onCustomEvent($event, 'closed')\"\r\n                    (opened)=\"onCustomEvent($event, 'opened')\"></mat-datepicker>\r\n\r\n\r\n    <ng-container *ngFor=\"let message of errorMessages\" ngProjectAs=\"mat-error\">\r\n\r\n        <mat-error *ngIf=\"showErrorMessages\">{{ message }}</mat-error>\r\n\r\n    </ng-container>\r\n\r\n</mat-form-field>"
            }] }
];
/** @nocollapse */
DynamicMaterialDatePickerComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_LABEL_GLOBAL_OPTIONS,] }, { type: Optional }] }
];
DynamicMaterialDatePickerComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    customEvent: [{ type: Output }],
    focus: [{ type: Output }],
    matDatePicker: [{ type: ViewChild, args: ["matDatepicker",] }],
    matInput: [{ type: ViewChild, args: [MatInput,] }]
};
if (false) {
    /** @type {?} */
    DynamicMaterialDatePickerComponent.prototype.bindId;
    /** @type {?} */
    DynamicMaterialDatePickerComponent.prototype.group;
    /** @type {?} */
    DynamicMaterialDatePickerComponent.prototype.layout;
    /** @type {?} */
    DynamicMaterialDatePickerComponent.prototype.model;
    /** @type {?} */
    DynamicMaterialDatePickerComponent.prototype.blur;
    /** @type {?} */
    DynamicMaterialDatePickerComponent.prototype.change;
    /** @type {?} */
    DynamicMaterialDatePickerComponent.prototype.customEvent;
    /** @type {?} */
    DynamicMaterialDatePickerComponent.prototype.focus;
    /** @type {?} */
    DynamicMaterialDatePickerComponent.prototype.matDatePicker;
    /** @type {?} */
    DynamicMaterialDatePickerComponent.prototype.matInput;
    /** @type {?} */
    DynamicMaterialDatePickerComponent.prototype.layoutService;
    /** @type {?} */
    DynamicMaterialDatePickerComponent.prototype.validationService;
    /** @type {?} */
    DynamicMaterialDatePickerComponent.prototype.LABEL_OPTIONS;
}
//# sourceMappingURL=dynamic-material-datepicker.component.js.map