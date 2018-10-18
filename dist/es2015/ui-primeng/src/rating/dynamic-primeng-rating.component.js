/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Rating } from "primeng/primeng";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicRatingModel } from "@ng-dynamic-forms/core";
export class DynamicPrimeNGRatingComponent extends DynamicFormControlComponent {
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
DynamicPrimeNGRatingComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-primeng-rating",
                template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <p-rating #pRating\r\n              [cancel]=\"model.getAdditional('cancel', true)\"\r\n              [dynamicId]=\"bindId && model.id\"\r\n              [formControlName]=\"model.id\"\r\n              [iconCancelClass]=\"model.getAdditional('iconCancelClass', 'pi pi-ban')\"\r\n              [iconOffClass]=\"model.getAdditional('iconOffClass', 'pi pi-star-o')\"\r\n              [iconOnClass]=\"model.getAdditional('iconOnClass', 'pi pi-star')\"\r\n              [ngClass]=\"getClass('element', 'control')\"\r\n              [stars]=\"model.max\"\r\n              (onCancel)=\"onCustomEvent($event, 'onCancel')\"\r\n              (onRate)=\"onChange($event)\"></p-rating>\r\n\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicPrimeNGRatingComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicPrimeNGRatingComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    customEvent: [{ type: Output }],
    focus: [{ type: Output }],
    pRating: [{ type: ViewChild, args: ["pRating",] }]
};
if (false) {
    /** @type {?} */
    DynamicPrimeNGRatingComponent.prototype.bindId;
    /** @type {?} */
    DynamicPrimeNGRatingComponent.prototype.group;
    /** @type {?} */
    DynamicPrimeNGRatingComponent.prototype.layout;
    /** @type {?} */
    DynamicPrimeNGRatingComponent.prototype.model;
    /** @type {?} */
    DynamicPrimeNGRatingComponent.prototype.blur;
    /** @type {?} */
    DynamicPrimeNGRatingComponent.prototype.change;
    /** @type {?} */
    DynamicPrimeNGRatingComponent.prototype.customEvent;
    /** @type {?} */
    DynamicPrimeNGRatingComponent.prototype.focus;
    /** @type {?} */
    DynamicPrimeNGRatingComponent.prototype.pRating;
    /** @type {?} */
    DynamicPrimeNGRatingComponent.prototype.layoutService;
    /** @type {?} */
    DynamicPrimeNGRatingComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-primeng-rating.component.js.map