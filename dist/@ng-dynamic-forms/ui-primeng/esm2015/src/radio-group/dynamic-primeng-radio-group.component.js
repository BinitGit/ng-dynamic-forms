/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicRadioGroupModel } from "@ng-dynamic-forms/core";
export class DynamicPrimeNGRadioGroupComponent extends DynamicFormControlComponent {
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
DynamicPrimeNGRadioGroupComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-primeng-radio-group",
                template: "<div role=\"radiogroup\"\r\n     [dynamicId]=\"bindId && model.id\"\r\n     [formGroup]=\"group\"\r\n     [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n     [tabindex]=\"model.tabIndex\">\r\n\r\n    <div *ngFor=\"let option of model.options$ | async\" [ngClass]=\"getClass('grid', 'option')\">\r\n\r\n        <p-radioButton [formControlName]=\"model.id\"\r\n                       [label]=\"option.label\"\r\n                       [name]=\"model.id\"\r\n                       [ngClass]=\"getClass('element', 'option')\"\r\n                       [value]=\"option.value\"\r\n                       (click)=\"onChange($event)\"></p-radioButton>\r\n    </div>\r\n\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicPrimeNGRadioGroupComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicPrimeNGRadioGroupComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DynamicPrimeNGRadioGroupComponent.prototype.bindId;
    /** @type {?} */
    DynamicPrimeNGRadioGroupComponent.prototype.group;
    /** @type {?} */
    DynamicPrimeNGRadioGroupComponent.prototype.layout;
    /** @type {?} */
    DynamicPrimeNGRadioGroupComponent.prototype.model;
    /** @type {?} */
    DynamicPrimeNGRadioGroupComponent.prototype.blur;
    /** @type {?} */
    DynamicPrimeNGRadioGroupComponent.prototype.change;
    /** @type {?} */
    DynamicPrimeNGRadioGroupComponent.prototype.focus;
    /** @type {?} */
    DynamicPrimeNGRadioGroupComponent.prototype.layoutService;
    /** @type {?} */
    DynamicPrimeNGRadioGroupComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-primeng-radio-group.component.js.map