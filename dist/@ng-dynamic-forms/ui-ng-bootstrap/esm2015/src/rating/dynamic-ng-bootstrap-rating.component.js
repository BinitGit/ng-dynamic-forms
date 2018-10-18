/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { NgbRating, NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicRatingModel } from "@ng-dynamic-forms/core";
export class DynamicNGBootstrapRatingComponent extends DynamicFormControlComponent {
    /**
     * @param {?} layoutService
     * @param {?} validationService
     * @param {?} config
     */
    constructor(layoutService, validationService, config) {
        super(layoutService, validationService);
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.config = config;
        this.bindId = true;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.focus = new EventEmitter();
    }
}
DynamicNGBootstrapRatingComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-ng-bootstrap-rating",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <ngb-rating [dynamicId]=\"bindId && model.id\"\r\n                [formControlName]=\"model.id\"\r\n                [max]=\"model.max\"\r\n                [ngClass]=\"getClass('element', 'control')\"\r\n                [resettable]=\"model.getAdditional('resettable', config['resettable'])\"\r\n                (rateChange)=\"onChange($event)\"></ngb-rating>\r\n\r\n</ng-container>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicNGBootstrapRatingComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService },
    { type: NgbRatingConfig }
];
DynamicNGBootstrapRatingComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    ngbRating: [{ type: ViewChild, args: [NgbRating,] }]
};
if (false) {
    /** @type {?} */
    DynamicNGBootstrapRatingComponent.prototype.bindId;
    /** @type {?} */
    DynamicNGBootstrapRatingComponent.prototype.group;
    /** @type {?} */
    DynamicNGBootstrapRatingComponent.prototype.layout;
    /** @type {?} */
    DynamicNGBootstrapRatingComponent.prototype.model;
    /** @type {?} */
    DynamicNGBootstrapRatingComponent.prototype.blur;
    /** @type {?} */
    DynamicNGBootstrapRatingComponent.prototype.change;
    /** @type {?} */
    DynamicNGBootstrapRatingComponent.prototype.focus;
    /** @type {?} */
    DynamicNGBootstrapRatingComponent.prototype.ngbRating;
    /** @type {?} */
    DynamicNGBootstrapRatingComponent.prototype.layoutService;
    /** @type {?} */
    DynamicNGBootstrapRatingComponent.prototype.validationService;
    /** @type {?} */
    DynamicNGBootstrapRatingComponent.prototype.config;
}
//# sourceMappingURL=dynamic-ng-bootstrap-rating.component.js.map