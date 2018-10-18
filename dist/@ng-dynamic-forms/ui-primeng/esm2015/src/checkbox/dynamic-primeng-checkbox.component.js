/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Checkbox } from "primeng/primeng";
import { DynamicCheckboxModel, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, } from "@ng-dynamic-forms/core";
export class DynamicPrimeNGCheckboxComponent extends DynamicFormControlComponent {
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
DynamicPrimeNGCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-primeng-checkbox",
                template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <p-checkbox #pCheckbox\r\n                binary=\"true\"\r\n                [dynamicId]=\"bindId && model.id\"\r\n                [formControlName]=\"model.id\"\r\n                [label]=\"model.label\"\r\n                [name]=\"model.name\"\r\n                [ngClass]=\"getClass('element', 'control')\"\r\n                [tabindex]=\"model.tabIndex\"\r\n                [value]=\"model.value\"\r\n                (onChange)=\"onChange($event)\"></p-checkbox>\r\n\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicPrimeNGCheckboxComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicPrimeNGCheckboxComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    pCheckbox: [{ type: ViewChild, args: ["pCheckbox",] }]
};
if (false) {
    /** @type {?} */
    DynamicPrimeNGCheckboxComponent.prototype.bindId;
    /** @type {?} */
    DynamicPrimeNGCheckboxComponent.prototype.group;
    /** @type {?} */
    DynamicPrimeNGCheckboxComponent.prototype.layout;
    /** @type {?} */
    DynamicPrimeNGCheckboxComponent.prototype.model;
    /** @type {?} */
    DynamicPrimeNGCheckboxComponent.prototype.blur;
    /** @type {?} */
    DynamicPrimeNGCheckboxComponent.prototype.change;
    /** @type {?} */
    DynamicPrimeNGCheckboxComponent.prototype.focus;
    /** @type {?} */
    DynamicPrimeNGCheckboxComponent.prototype.pCheckbox;
    /** @type {?} */
    DynamicPrimeNGCheckboxComponent.prototype.layoutService;
    /** @type {?} */
    DynamicPrimeNGCheckboxComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-primeng-checkbox.component.js.map