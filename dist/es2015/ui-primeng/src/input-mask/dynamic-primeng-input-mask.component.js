/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { InputMask } from "primeng/primeng";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicInputModel } from "@ng-dynamic-forms/core";
export class DynamicPrimeNGInputMaskComponent extends DynamicFormControlComponent {
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
DynamicPrimeNGInputMaskComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-primeng-input-mask",
                template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <p-inputMask #pInputMask\r\n                 [autoClear]=\"model.getAdditional('autoClear', true)\"\r\n                 [dynamicId]=\"bindId && model.id\"\r\n                 [formControlName]=\"model.id\"\r\n                 [mask]=\"model.mask\"\r\n                 [ngClass]=\"getClass('element', 'control')\"\r\n                 [placeholder]=\"model.placeholder\"\r\n                 [readonly]=\"model.readOnly\"\r\n                 [slotChar]=\"model.getAdditional('slotChar', '_')\"\r\n                 [tabindex]=\"model.tabIndex\"\r\n                 (change)=\"onChange($event)\"\r\n                 (onBlur)=\"onBlur($event)\"\r\n                 (onComplete)=\"onCustomEvent($event, 'onComplete')\"\r\n                 (onFocus)=\"onFocus($event)\"></p-inputMask>\r\n\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicPrimeNGInputMaskComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicPrimeNGInputMaskComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    customEvent: [{ type: Output }],
    focus: [{ type: Output }],
    pInputMask: [{ type: ViewChild, args: ["pInputMask",] }]
};
if (false) {
    /** @type {?} */
    DynamicPrimeNGInputMaskComponent.prototype.bindId;
    /** @type {?} */
    DynamicPrimeNGInputMaskComponent.prototype.group;
    /** @type {?} */
    DynamicPrimeNGInputMaskComponent.prototype.layout;
    /** @type {?} */
    DynamicPrimeNGInputMaskComponent.prototype.model;
    /** @type {?} */
    DynamicPrimeNGInputMaskComponent.prototype.blur;
    /** @type {?} */
    DynamicPrimeNGInputMaskComponent.prototype.change;
    /** @type {?} */
    DynamicPrimeNGInputMaskComponent.prototype.customEvent;
    /** @type {?} */
    DynamicPrimeNGInputMaskComponent.prototype.focus;
    /** @type {?} */
    DynamicPrimeNGInputMaskComponent.prototype.pInputMask;
    /** @type {?} */
    DynamicPrimeNGInputMaskComponent.prototype.layoutService;
    /** @type {?} */
    DynamicPrimeNGInputMaskComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-primeng-input-mask.component.js.map