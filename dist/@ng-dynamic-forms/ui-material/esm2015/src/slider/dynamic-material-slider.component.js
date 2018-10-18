/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatSlider } from "@angular/material";
import { DynamicFormControlComponent, DynamicFormLayoutService, DynamicFormValidationService, DynamicSliderModel } from "@ng-dynamic-forms/core";
export class DynamicMaterialSliderComponent extends DynamicFormControlComponent {
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
DynamicMaterialSliderComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-material-slider",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <mat-slider #matSlider\r\n                [color]=\"model.getAdditional('color', 'accent')\"\r\n                [formControlName]=\"model.id\"\r\n                [id]=\"bindId ? model.id : null\"\r\n                [invert]=\"model.getAdditional('invert', false)\"\r\n                [min]=\"model.min\"\r\n                [max]=\"model.max\"\r\n                [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n                [step]=\"model.step\"\r\n                [tabIndex]=\"model.tabIndex\"\r\n                [thumbLabel]=\"model.getAdditional('thumbLabel', true)\"\r\n                [tickInterval]=\"model.getAdditional('tickInterval', 1)\"\r\n                [vertical]=\"model.vertical\"\r\n                (change)=\"onChange($event)\"\r\n                (input)=\"onCustomEvent($event, 'input')\"></mat-slider>\r\n\r\n</ng-container>"
            }] }
];
/** @nocollapse */
DynamicMaterialSliderComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicMaterialSliderComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    customEvent: [{ type: Output }],
    focus: [{ type: Output }],
    matSlider: [{ type: ViewChild, args: ["matSlider",] }]
};
if (false) {
    /** @type {?} */
    DynamicMaterialSliderComponent.prototype.bindId;
    /** @type {?} */
    DynamicMaterialSliderComponent.prototype.group;
    /** @type {?} */
    DynamicMaterialSliderComponent.prototype.layout;
    /** @type {?} */
    DynamicMaterialSliderComponent.prototype.model;
    /** @type {?} */
    DynamicMaterialSliderComponent.prototype.blur;
    /** @type {?} */
    DynamicMaterialSliderComponent.prototype.change;
    /** @type {?} */
    DynamicMaterialSliderComponent.prototype.customEvent;
    /** @type {?} */
    DynamicMaterialSliderComponent.prototype.focus;
    /** @type {?} */
    DynamicMaterialSliderComponent.prototype.matSlider;
    /** @type {?} */
    DynamicMaterialSliderComponent.prototype.layoutService;
    /** @type {?} */
    DynamicMaterialSliderComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-material-slider.component.js.map