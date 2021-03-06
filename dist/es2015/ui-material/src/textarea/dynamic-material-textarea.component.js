/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Inject, Input, Optional, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MAT_LABEL_GLOBAL_OPTIONS, MatInput } from "@angular/material";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicTextAreaModel } from "@ng-dynamic-forms/core";
import { DynamicMaterialFormInputControlComponent } from "../dynamic-material-form-input-control.component";
export class DynamicMaterialTextAreaComponent extends DynamicMaterialFormInputControlComponent {
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
DynamicMaterialTextAreaComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-material-textarea",
                template: "<mat-form-field [appearance]=\"model.getAdditional('appearance', 'legacy')\"\r\n                [color]=\"model.getAdditional('color', 'primary')\"\r\n                [floatLabel]=\"model.getAdditional('floatLabel', LABEL_OPTIONS && LABEL_OPTIONS['float'] || 'auto')\"\r\n                [formGroup]=\"group\"\r\n                [hideRequiredMarker]=\"model.getAdditional('hideRequiredMarker', false)\"\r\n                [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <ng-container *ngIf=\"model.label\" ngProjectAs=\"mat-label\">\r\n\r\n        <mat-label>{{ model.label }}</mat-label>\r\n\r\n    </ng-container>\r\n\r\n    <textarea matInput\r\n              [cdkTextareaAutosize]=\"model.getAdditional('cdkTextareaAutosize', true)\"\r\n              [cols]=\"model.cols\"\r\n              [formControlName]=\"model.id\"\r\n              [id]=\"bindId ? model.id : null\"\r\n              [maxlength]=\"model.maxLength\"\r\n              [minlength]=\"model.minLength\"\r\n              [name]=\"model.name\"\r\n              [ngClass]=\"getClass('element', 'control')\"\r\n              [placeholder]=\"model.placeholder\"\r\n              [readonly]=\"model.readOnly\"\r\n              [required]=\"model.required\"\r\n              [rows]=\"model.rows\"\r\n              [spellcheck]=\"model.spellCheck\"\r\n              [tabindex]=\"model.tabIndex\"\r\n              [wrap]=\"model.wrap\"\r\n              (blur)=\"onBlur($event)\"\r\n              (change)=\"onChange($event)\"\r\n              (focus)=\"onFocus($event)\"></textarea>\r\n\r\n    <mat-hint *ngIf=\"model.hint !== null\" align=\"start\" [innerHTML]=\"model.hint\"></mat-hint>\r\n\r\n    <mat-hint *ngIf=\"showCharacterHint\" align=\"end\">{{ characterHint }}</mat-hint>\r\n\r\n    <ng-container *ngFor=\"let message of errorMessages\" ngProjectAs=\"mat-error\">\r\n\r\n        <mat-error *ngIf=\"showErrorMessages\">{{ message }}</mat-error>\r\n\r\n    </ng-container>\r\n\r\n</mat-form-field>"
            }] }
];
/** @nocollapse */
DynamicMaterialTextAreaComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_LABEL_GLOBAL_OPTIONS,] }, { type: Optional }] }
];
DynamicMaterialTextAreaComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    customEvent: [{ type: Output }],
    focus: [{ type: Output }],
    matInput: [{ type: ViewChild, args: [MatInput,] }]
};
if (false) {
    /** @type {?} */
    DynamicMaterialTextAreaComponent.prototype.bindId;
    /** @type {?} */
    DynamicMaterialTextAreaComponent.prototype.group;
    /** @type {?} */
    DynamicMaterialTextAreaComponent.prototype.layout;
    /** @type {?} */
    DynamicMaterialTextAreaComponent.prototype.model;
    /** @type {?} */
    DynamicMaterialTextAreaComponent.prototype.blur;
    /** @type {?} */
    DynamicMaterialTextAreaComponent.prototype.change;
    /** @type {?} */
    DynamicMaterialTextAreaComponent.prototype.customEvent;
    /** @type {?} */
    DynamicMaterialTextAreaComponent.prototype.focus;
    /** @type {?} */
    DynamicMaterialTextAreaComponent.prototype.matInput;
    /** @type {?} */
    DynamicMaterialTextAreaComponent.prototype.layoutService;
    /** @type {?} */
    DynamicMaterialTextAreaComponent.prototype.validationService;
    /** @type {?} */
    DynamicMaterialTextAreaComponent.prototype.LABEL_OPTIONS;
}
//# sourceMappingURL=dynamic-material-textarea.component.js.map