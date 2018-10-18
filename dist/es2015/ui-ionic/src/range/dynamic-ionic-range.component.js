/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Range } from "@ionic/angular";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicSliderModel } from "@ng-dynamic-forms/core";
export class DynamicIonicRangeComponent extends DynamicFormControlComponent {
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
        this.focus = new EventEmitter();
    }
}
DynamicIonicRangeComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-ionic-range",
                template: "<ion-item [formGroup]=\"group\">\r\n\r\n    <ion-label *ngIf=\"model.label !== null\"\r\n               [innerHTML]=\"model.label\"\r\n               [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></ion-label>\r\n\r\n    <ion-range #ionRange\r\n               [debounce]=\"model.getAdditional('debounce', 0)\"\r\n               [dualKnobs]=\"model.getAdditional('dualKnobs', false)\"\r\n               [dynamicId]=\"bindId && model.id\"\r\n               [formControlName]=\"model.id\"\r\n               [max]=\"model.max\"\r\n               [min]=\"model.min\"\r\n               [ngClass]=\"getClass('element', 'control')\"\r\n               [pin]=\"model.getAdditional('pin', true)\"\r\n               [snaps]=\"model.getAdditional('snaps', true)\"\r\n               [step]=\"model.step\"\r\n               (ionBlur)=\"onBlur($event)\"\r\n               (ionChange)=\"onChange($event)\"\r\n               (ionFocus)=\"onFocus($event)\"></ion-range>\r\n\r\n</ion-item>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicIonicRangeComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicIonicRangeComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    ionRange: [{ type: ViewChild, args: ["ionRange",] }]
};
if (false) {
    /** @type {?} */
    DynamicIonicRangeComponent.prototype.bindId;
    /** @type {?} */
    DynamicIonicRangeComponent.prototype.group;
    /** @type {?} */
    DynamicIonicRangeComponent.prototype.layout;
    /** @type {?} */
    DynamicIonicRangeComponent.prototype.model;
    /** @type {?} */
    DynamicIonicRangeComponent.prototype.blur;
    /** @type {?} */
    DynamicIonicRangeComponent.prototype.change;
    /** @type {?} */
    DynamicIonicRangeComponent.prototype.focus;
    /** @type {?} */
    DynamicIonicRangeComponent.prototype.ionRange;
    /** @type {?} */
    DynamicIonicRangeComponent.prototype.layoutService;
    /** @type {?} */
    DynamicIonicRangeComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-ionic-range.component.js.map