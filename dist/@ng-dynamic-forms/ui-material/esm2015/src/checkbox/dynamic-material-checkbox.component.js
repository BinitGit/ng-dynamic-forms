/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Inject, Input, Optional, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MAT_RIPPLE_GLOBAL_OPTIONS, MatCheckbox } from "@angular/material";
import { DynamicCheckboxModel, DynamicFormControlComponent, DynamicFormLayoutService, DynamicFormValidationService, } from "@ng-dynamic-forms/core";
export class DynamicMaterialCheckboxComponent extends DynamicFormControlComponent {
    /**
     * @param {?} layoutService
     * @param {?} validationService
     * @param {?} RIPPLE_OPTIONS
     */
    constructor(layoutService, validationService, RIPPLE_OPTIONS) {
        super(layoutService, validationService);
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.RIPPLE_OPTIONS = RIPPLE_OPTIONS;
        this.bindId = true;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.customEvent = new EventEmitter();
        this.focus = new EventEmitter();
    }
}
DynamicMaterialCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-material-checkbox",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <mat-checkbox #matCheckbox\r\n                  [checked]=\"model.checked\"\r\n                  [color]=\"model.getAdditional('color', 'accent')\"\r\n                  [disableRipple]=\"model.getAdditional('disableRipple', RIPPLE_OPTIONS && RIPPLE_OPTIONS['disabled'] || false)\"\r\n                  [formControlName]=\"model.id\"\r\n                  [id]=\"bindId ? model.id : null\"\r\n                  [indeterminate]=\"model.indeterminate\"\r\n                  [labelPosition]=\"model.labelPosition || 'after'\"\r\n                  [name]=\"model.name\"\r\n                  [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n                  (blur)=\"onBlur($event)\"\r\n                  (change)=\"onChange($event)\"\r\n                  (focus)=\"onFocus($event)\"\r\n                  (indeterminateChange)=\"onCustomEvent($event, 'indeterminateChange')\">\r\n\r\n        <span [ngClass]=\"getClass('element', 'label')\" [innerHTML]=\"model.label\"></span>\r\n\r\n    </mat-checkbox>\r\n\r\n</ng-container>"
            }] }
];
/** @nocollapse */
DynamicMaterialCheckboxComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_RIPPLE_GLOBAL_OPTIONS,] }, { type: Optional }] }
];
DynamicMaterialCheckboxComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    customEvent: [{ type: Output }],
    focus: [{ type: Output }],
    matCheckbox: [{ type: ViewChild, args: ["matCheckbox",] }]
};
if (false) {
    /** @type {?} */
    DynamicMaterialCheckboxComponent.prototype.bindId;
    /** @type {?} */
    DynamicMaterialCheckboxComponent.prototype.group;
    /** @type {?} */
    DynamicMaterialCheckboxComponent.prototype.layout;
    /** @type {?} */
    DynamicMaterialCheckboxComponent.prototype.model;
    /** @type {?} */
    DynamicMaterialCheckboxComponent.prototype.blur;
    /** @type {?} */
    DynamicMaterialCheckboxComponent.prototype.change;
    /** @type {?} */
    DynamicMaterialCheckboxComponent.prototype.customEvent;
    /** @type {?} */
    DynamicMaterialCheckboxComponent.prototype.focus;
    /** @type {?} */
    DynamicMaterialCheckboxComponent.prototype.matCheckbox;
    /** @type {?} */
    DynamicMaterialCheckboxComponent.prototype.layoutService;
    /** @type {?} */
    DynamicMaterialCheckboxComponent.prototype.validationService;
    /** @type {?} */
    DynamicMaterialCheckboxComponent.prototype.RIPPLE_OPTIONS;
}
//# sourceMappingURL=dynamic-material-checkbox.component.js.map