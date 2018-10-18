/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatRadioGroup } from "@angular/material";
import { DynamicFormControlComponent, DynamicFormLayoutService, DynamicFormValidationService, DynamicRadioGroupModel } from "@ng-dynamic-forms/core";
export class DynamicMaterialRadioGroupComponent extends DynamicFormControlComponent {
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
DynamicMaterialRadioGroupComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-material-radio-group",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <mat-radio-group #matRadioGroup\r\n                     [formControlName]=\"model.id\"\r\n                     [id]=\"bindId ? model.id : null\"\r\n                     [labelPosition]=\"model.getAdditional('labelPosition', 'after')\"\r\n                     [name]=\"model.name\"\r\n                     [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n                     (blur)=\"onBlur($event)\"\r\n                     (change)=\"onChange($event)\"\r\n                     (focus)=\"onFocus($event)\">\r\n\r\n        <mat-radio-button *ngFor=\"let option of model.options$ | async\"\r\n                          [name]=\"model.name\"\r\n                          [ngClass]=\"getClass('element', 'option')\"\r\n                          [value]=\"option.value\"><span [innerHTML]=\"option.label\"></span></mat-radio-button>\r\n\r\n    </mat-radio-group>\r\n\r\n</ng-container>"
            }] }
];
/** @nocollapse */
DynamicMaterialRadioGroupComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicMaterialRadioGroupComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    customEvent: [{ type: Output }],
    focus: [{ type: Output }],
    matRadioGroup: [{ type: ViewChild, args: ["matRadioGroup",] }]
};
if (false) {
    /** @type {?} */
    DynamicMaterialRadioGroupComponent.prototype.bindId;
    /** @type {?} */
    DynamicMaterialRadioGroupComponent.prototype.group;
    /** @type {?} */
    DynamicMaterialRadioGroupComponent.prototype.layout;
    /** @type {?} */
    DynamicMaterialRadioGroupComponent.prototype.model;
    /** @type {?} */
    DynamicMaterialRadioGroupComponent.prototype.blur;
    /** @type {?} */
    DynamicMaterialRadioGroupComponent.prototype.change;
    /** @type {?} */
    DynamicMaterialRadioGroupComponent.prototype.customEvent;
    /** @type {?} */
    DynamicMaterialRadioGroupComponent.prototype.focus;
    /** @type {?} */
    DynamicMaterialRadioGroupComponent.prototype.matRadioGroup;
    /** @type {?} */
    DynamicMaterialRadioGroupComponent.prototype.layoutService;
    /** @type {?} */
    DynamicMaterialRadioGroupComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-material-radio-group.component.js.map