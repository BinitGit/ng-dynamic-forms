/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Inject, Input, Optional, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ErrorStateMatcher, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, MAT_LABEL_GLOBAL_OPTIONS, MAT_RIPPLE_GLOBAL_OPTIONS, MatAutocomplete, MatInput } from "@angular/material";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicInputModel } from "@ng-dynamic-forms/core";
import { DynamicMaterialFormInputControlComponent } from "../dynamic-material-form-input-control.component";
export class DynamicMaterialInputComponent extends DynamicMaterialFormInputControlComponent {
    /**
     * @param {?} layoutService
     * @param {?} validationService
     * @param {?} errorStateMatcher
     * @param {?} AUTOCOMPLETE_OPTIONS
     * @param {?} LABEL_OPTIONS
     * @param {?} RIPPLE_OPTIONS
     */
    constructor(layoutService, validationService, errorStateMatcher, AUTOCOMPLETE_OPTIONS, LABEL_OPTIONS, RIPPLE_OPTIONS) {
        super(layoutService, validationService);
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.errorStateMatcher = errorStateMatcher;
        this.AUTOCOMPLETE_OPTIONS = AUTOCOMPLETE_OPTIONS;
        this.LABEL_OPTIONS = LABEL_OPTIONS;
        this.RIPPLE_OPTIONS = RIPPLE_OPTIONS;
        this.bindId = true;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.customEvent = new EventEmitter();
        this.focus = new EventEmitter();
    }
}
DynamicMaterialInputComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-material-input",
                template: "<mat-form-field [appearance]=\"model.getAdditional('appearance', 'legacy')\"\r\n                [color]=\"model.getAdditional('color', 'primary')\"\r\n                [floatLabel]=\"model.getAdditional('floatLabel', LABEL_OPTIONS && LABEL_OPTIONS['float'] || 'auto')\"\r\n                [formGroup]=\"group\"\r\n                [hideRequiredMarker]=\"model.getAdditional('hideRequiredMarker', false)\"\r\n                [ngClass]=\"getClass('grid','control')\"\r\n                [textMask]=\"{mask: (model.mask || false), showMask: model.mask && !(model.placeholder)}\">\r\n\r\n    <ng-container *ngIf=\"model.label\" ngProjectAs=\"mat-label\">\r\n\r\n        <mat-label>{{ model.label }}</mat-label>\r\n\r\n    </ng-container>\r\n\r\n    <span *ngIf=\"model.prefix\" matPrefix [innerHTML]=\"model.prefix\"></span>\r\n\r\n    <input matInput\r\n           [attr.accept]=\"model.accept\"\r\n           [attr.max]=\"model.max\"\r\n           [attr.min]=\"model.min\"\r\n           [attr.multiple]=\"model.multiple\"\r\n           [attr.step]=\"model.step\"\r\n           [autocomplete]=\"model.autoComplete\"\r\n           [autofocus]=\"model.autoFocus\"\r\n           [errorStateMatcher]=\"model.getAdditional('errorStateMatcher', errorStateMatcher)\"\r\n           [formControlName]=\"model.id\"\r\n           [id]=\"bindId ? model.id : null\"\r\n           [maxlength]=\"model.maxLength\"\r\n           [matAutocomplete]=\"matAutocomplete\"\r\n           [minlength]=\"model.minLength\"\r\n           [name]=\"model.name\"\r\n           [ngClass]=\"getClass('element', 'control')\"\r\n           [pattern]=\"model.pattern\"\r\n           [placeholder]=\"model.placeholder\"\r\n           [readonly]=\"model.readOnly\"\r\n           [required]=\"model.required\"\r\n           [spellcheck]=\"model.spellCheck\"\r\n           [tabindex]=\"model.tabIndex\"\r\n           [type]=\"model.inputType\"\r\n           (blur)=\"onBlur($event)\"\r\n           (change)=\"onChange($event)\"\r\n           (focus)=\"onFocus($event)\"/>\r\n\r\n    <span *ngIf=\"model.suffix\" matSuffix [innerHTML]=\"model.suffix\"></span>\r\n\r\n    <mat-hint *ngIf=\"model.hint !== null\" align=\"start\" [innerHTML]=\"model.hint\"></mat-hint>\r\n\r\n    <mat-hint *ngIf=\"showCharacterHint\" align=\"end\">{{ characterHint }}</mat-hint>\r\n\r\n    <ng-container *ngFor=\"let message of errorMessages\" ngProjectAs=\"mat-error\">\r\n\r\n        <mat-error *ngIf=\"showErrorMessages\">{{ message }}</mat-error>\r\n\r\n    </ng-container>\r\n\r\n</mat-form-field>\r\n\r\n<mat-autocomplete #matAutocomplete=\"matAutocomplete\"\r\n                  [autoActiveFirstOption]=\"model.getAdditional('autoActiveFirstOption', AUTOCOMPLETE_OPTIONS['autoActiveFirstOption'])\"\r\n                  [disableRipple]=\"model.getAdditional('disableRipple', RIPPLE_OPTIONS && RIPPLE_OPTIONS['disabled'] || false)\"\r\n                  (optionSelected)=\"onChange($event)\">\r\n\r\n    <mat-option *ngFor=\"let option of model.list$ | async\" [value]=\"option\">{{ option }}</mat-option>\r\n\r\n</mat-autocomplete>"
            }] }
];
/** @nocollapse */
DynamicMaterialInputComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService },
    { type: ErrorStateMatcher, decorators: [{ type: Inject, args: [ErrorStateMatcher,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_LABEL_GLOBAL_OPTIONS,] }, { type: Optional }] },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_RIPPLE_GLOBAL_OPTIONS,] }, { type: Optional }] }
];
DynamicMaterialInputComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    customEvent: [{ type: Output }],
    focus: [{ type: Output }],
    matAutocomplete: [{ type: ViewChild, args: ["matAutocomplete",] }],
    matInput: [{ type: ViewChild, args: [MatInput,] }]
};
if (false) {
    /** @type {?} */
    DynamicMaterialInputComponent.prototype.bindId;
    /** @type {?} */
    DynamicMaterialInputComponent.prototype.group;
    /** @type {?} */
    DynamicMaterialInputComponent.prototype.layout;
    /** @type {?} */
    DynamicMaterialInputComponent.prototype.model;
    /** @type {?} */
    DynamicMaterialInputComponent.prototype.blur;
    /** @type {?} */
    DynamicMaterialInputComponent.prototype.change;
    /** @type {?} */
    DynamicMaterialInputComponent.prototype.customEvent;
    /** @type {?} */
    DynamicMaterialInputComponent.prototype.focus;
    /** @type {?} */
    DynamicMaterialInputComponent.prototype.matAutocomplete;
    /** @type {?} */
    DynamicMaterialInputComponent.prototype.matInput;
    /** @type {?} */
    DynamicMaterialInputComponent.prototype.layoutService;
    /** @type {?} */
    DynamicMaterialInputComponent.prototype.validationService;
    /** @type {?} */
    DynamicMaterialInputComponent.prototype.errorStateMatcher;
    /** @type {?} */
    DynamicMaterialInputComponent.prototype.AUTOCOMPLETE_OPTIONS;
    /** @type {?} */
    DynamicMaterialInputComponent.prototype.LABEL_OPTIONS;
    /** @type {?} */
    DynamicMaterialInputComponent.prototype.RIPPLE_OPTIONS;
}
//# sourceMappingURL=dynamic-material-input.component.js.map