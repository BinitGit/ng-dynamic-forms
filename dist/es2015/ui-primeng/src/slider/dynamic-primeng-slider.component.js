/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Slider } from "primeng/primeng";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicSliderModel } from "@ng-dynamic-forms/core";
export class DynamicPrimeNGSliderComponent extends DynamicFormControlComponent {
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
DynamicPrimeNGSliderComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-primeng-slider",
                template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <p-slider #pSlider\r\n              [animate]=\"model.getAdditional('animate', false)\"\r\n              [dynamicId]=\"bindId && model.id\"\r\n              [formControlName]=\"model.id\"\r\n              [min]=\"model.min\"\r\n              [max]=\"model.max\"\r\n              [ngClass]=\"getClass('element', 'control')\"\r\n              [orientation]=\"model.vertical ? 'vertical' : 'horizontal'\"\r\n              [range]=\"model.getAdditional('range', false)\"\r\n              [step]=\"model.step\"\r\n              (onChange)=\"onChange($event)\"\r\n              (onSlideEnd)=\"onCustomEvent($event, 'onSlideEnd')\"></p-slider>\r\n\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicPrimeNGSliderComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicPrimeNGSliderComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    customEvent: [{ type: Output }],
    focus: [{ type: Output }],
    pSlider: [{ type: ViewChild, args: ["pSlider",] }]
};
if (false) {
    /** @type {?} */
    DynamicPrimeNGSliderComponent.prototype.bindId;
    /** @type {?} */
    DynamicPrimeNGSliderComponent.prototype.group;
    /** @type {?} */
    DynamicPrimeNGSliderComponent.prototype.layout;
    /** @type {?} */
    DynamicPrimeNGSliderComponent.prototype.model;
    /** @type {?} */
    DynamicPrimeNGSliderComponent.prototype.blur;
    /** @type {?} */
    DynamicPrimeNGSliderComponent.prototype.change;
    /** @type {?} */
    DynamicPrimeNGSliderComponent.prototype.customEvent;
    /** @type {?} */
    DynamicPrimeNGSliderComponent.prototype.focus;
    /** @type {?} */
    DynamicPrimeNGSliderComponent.prototype.pSlider;
    /** @type {?} */
    DynamicPrimeNGSliderComponent.prototype.layoutService;
    /** @type {?} */
    DynamicPrimeNGSliderComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-primeng-slider.component.js.map