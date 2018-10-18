/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Inject, Input, Optional, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ErrorStateMatcher, MAT_LABEL_GLOBAL_OPTIONS, MAT_RIPPLE_GLOBAL_OPTIONS, MatSelect } from "@angular/material";
import { DynamicFormControlComponent, DynamicFormLayoutService, DynamicFormValidationService, DynamicSelectModel } from "@ng-dynamic-forms/core";
export class DynamicMaterialSelectComponent extends DynamicFormControlComponent {
    /**
     * @param {?} layoutService
     * @param {?} validationService
     * @param {?} errorStateMatcher
     * @param {?} LABEL_OPTIONS
     * @param {?} RIPPLE_OPTIONS
     */
    constructor(layoutService, validationService, errorStateMatcher, LABEL_OPTIONS, RIPPLE_OPTIONS) {
        super(layoutService, validationService);
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.errorStateMatcher = errorStateMatcher;
        this.LABEL_OPTIONS = LABEL_OPTIONS;
        this.RIPPLE_OPTIONS = RIPPLE_OPTIONS;
        this.bindId = true;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.customEvent = new EventEmitter();
        this.focus = new EventEmitter();
    }
}
DynamicMaterialSelectComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-material-select",
                template: "<mat-form-field [appearance]=\"model.getAdditional('appearance', 'legacy')\"\r\n                [color]=\"model.getAdditional('color', 'primary')\"\r\n                [ngClass]=\"getClass('grid', 'control')\"\r\n                [floatLabel]=\"model.getAdditional('floatLabel', LABEL_OPTIONS && LABEL_OPTIONS['float'] || 'auto')\"\r\n                [formGroup]=\"group\">\r\n\r\n    <ng-container *ngIf=\"model.label\" ngProjectAs=\"mat-label\">\r\n\r\n        <mat-label>{{ model.label }}</mat-label>\r\n\r\n    </ng-container>\r\n\r\n    <span *ngIf=\"model.prefix\" matPrefix [innerHTML]=\"model.prefix\"></span>\r\n\r\n    <mat-select #matSelect\r\n                [compareWith]=\"model.compareWithFn\"\r\n                [disableRipple]=\"model.getAdditional('disableRipple', RIPPLE_OPTIONS && RIPPLE_OPTIONS['disabled'] || false)\"\r\n                [errorStateMatcher]=\"model.getAdditional('errorStateMatcher', errorStateMatcher)\"\r\n                [formControlName]=\"model.id\"\r\n                [id]=\"bindId ? model.id : null\"\r\n                [multiple]=\"model.multiple\"\r\n                [ngClass]=\"getClass('element', 'control')\"\r\n                [placeholder]=\"model.placeholder\"\r\n                [required]=\"model.required\"\r\n                (openedChange)=\"onCustomEvent($event, 'openedChange')\"\r\n                (selectionChange)=\"onChange($event)\">\r\n\r\n        <mat-option *ngFor=\"let option of model.options$ | async\"\r\n                    [ngClass]=\"getClass('element', 'option')\"\r\n                    [value]=\"option.value\"><span [innerHTML]=\"option.label\"></span></mat-option>\r\n    </mat-select>\r\n\r\n    <span *ngIf=\"model.suffix\" matSuffix [innerHTML]=\"model.suffix\"></span>\r\n\r\n    <mat-hint *ngIf=\"model.hint !== null\" align=\"start\" [innerHTML]=\"model.hint\"></mat-hint>\r\n\r\n    <ng-container *ngFor=\"let message of errorMessages\" ngProjectAs=\"mat-error\">\r\n\r\n        <mat-error *ngIf=\"showErrorMessages\">{{ message }}</mat-error>\r\n\r\n    </ng-container>\r\n\r\n</mat-form-field>"
            }] }
];
/** @nocollapse */
DynamicMaterialSelectComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService },
    { type: ErrorStateMatcher, decorators: [{ type: Inject, args: [ErrorStateMatcher,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_LABEL_GLOBAL_OPTIONS,] }, { type: Optional }] },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_RIPPLE_GLOBAL_OPTIONS,] }, { type: Optional }] }
];
DynamicMaterialSelectComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    customEvent: [{ type: Output }],
    focus: [{ type: Output }],
    matSelect: [{ type: ViewChild, args: ["matSelect",] }]
};
if (false) {
    /** @type {?} */
    DynamicMaterialSelectComponent.prototype.bindId;
    /** @type {?} */
    DynamicMaterialSelectComponent.prototype.group;
    /** @type {?} */
    DynamicMaterialSelectComponent.prototype.layout;
    /** @type {?} */
    DynamicMaterialSelectComponent.prototype.model;
    /** @type {?} */
    DynamicMaterialSelectComponent.prototype.blur;
    /** @type {?} */
    DynamicMaterialSelectComponent.prototype.change;
    /** @type {?} */
    DynamicMaterialSelectComponent.prototype.customEvent;
    /** @type {?} */
    DynamicMaterialSelectComponent.prototype.focus;
    /** @type {?} */
    DynamicMaterialSelectComponent.prototype.matSelect;
    /** @type {?} */
    DynamicMaterialSelectComponent.prototype.layoutService;
    /** @type {?} */
    DynamicMaterialSelectComponent.prototype.validationService;
    /** @type {?} */
    DynamicMaterialSelectComponent.prototype.errorStateMatcher;
    /** @type {?} */
    DynamicMaterialSelectComponent.prototype.LABEL_OPTIONS;
    /** @type {?} */
    DynamicMaterialSelectComponent.prototype.RIPPLE_OPTIONS;
}
//# sourceMappingURL=dynamic-material-select.component.js.map