/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Inject, Input, Optional, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MAT_RIPPLE_GLOBAL_OPTIONS, MatSlideToggle } from "@angular/material";
import { DynamicFormControlComponent, DynamicFormLayoutService, DynamicFormValidationService, DynamicSwitchModel } from "@ng-dynamic-forms/core";
export class DynamicMaterialSlideToggleComponent extends DynamicFormControlComponent {
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
DynamicMaterialSlideToggleComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-material-slide-toggle",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <mat-slide-toggle #matSlideToggle\r\n                      [checked]=\"model.checked\"\r\n                      [color]=\"model.getAdditional('color', 'accent')\"\r\n                      [disableRipple]=\"model.getAdditional('disableRipple', RIPPLE_OPTIONS && RIPPLE_OPTIONS['disabled'] || false)\"\r\n                      [formControlName]=\"model.id\"\r\n                      [id]=\"bindId ? model.id : null\"\r\n                      [labelPosition]=\"model.labelPosition || 'after'\"\r\n                      [name]=\"model.name\"\r\n                      [ngClass]=\"[getClass('element','control'), getClass('grid','control')]\"\r\n                      (change)=\"onChange($event)\">\r\n\r\n        <span *ngIf=\"!model.checked\" [innerHTML]=\"model.offLabel\"></span>\r\n        <span *ngIf=\"model.checked\" [innerHTML]=\"model.onLabel\"></span>\r\n\r\n    </mat-slide-toggle>\r\n\r\n</ng-container>"
            }] }
];
/** @nocollapse */
DynamicMaterialSlideToggleComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_RIPPLE_GLOBAL_OPTIONS,] }, { type: Optional }] }
];
DynamicMaterialSlideToggleComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    customEvent: [{ type: Output }],
    focus: [{ type: Output }],
    matSlideToggle: [{ type: ViewChild, args: ["matSlideToggle",] }]
};
if (false) {
    /** @type {?} */
    DynamicMaterialSlideToggleComponent.prototype.bindId;
    /** @type {?} */
    DynamicMaterialSlideToggleComponent.prototype.group;
    /** @type {?} */
    DynamicMaterialSlideToggleComponent.prototype.layout;
    /** @type {?} */
    DynamicMaterialSlideToggleComponent.prototype.model;
    /** @type {?} */
    DynamicMaterialSlideToggleComponent.prototype.blur;
    /** @type {?} */
    DynamicMaterialSlideToggleComponent.prototype.change;
    /** @type {?} */
    DynamicMaterialSlideToggleComponent.prototype.customEvent;
    /** @type {?} */
    DynamicMaterialSlideToggleComponent.prototype.focus;
    /** @type {?} */
    DynamicMaterialSlideToggleComponent.prototype.matSlideToggle;
    /** @type {?} */
    DynamicMaterialSlideToggleComponent.prototype.layoutService;
    /** @type {?} */
    DynamicMaterialSlideToggleComponent.prototype.validationService;
    /** @type {?} */
    DynamicMaterialSlideToggleComponent.prototype.RIPPLE_OPTIONS;
}
//# sourceMappingURL=dynamic-material-slide-toggle.component.js.map