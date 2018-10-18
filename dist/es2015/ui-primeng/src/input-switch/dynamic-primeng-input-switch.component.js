/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { InputSwitch } from "primeng/primeng";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicSwitchModel } from "@ng-dynamic-forms/core";
export class DynamicPrimeNGInputSwitchComponent extends DynamicFormControlComponent {
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
DynamicPrimeNGInputSwitchComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-primeng-input-switch",
                template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <p-inputSwitch #pInputSwitch\r\n                   [dynamicId]=\"bindId && model.id\"\r\n                   [formControlName]=\"model.id\"\r\n                   [ngClass]=\"getClass('element', 'control')\"\r\n                   [tabindex]=\"model.tabIndex\"\r\n                   (onChange)=\"onChange($event)\"></p-inputSwitch>\r\n\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicPrimeNGInputSwitchComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicPrimeNGInputSwitchComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    pInputSwitch: [{ type: ViewChild, args: ["pInputSwitch",] }]
};
if (false) {
    /** @type {?} */
    DynamicPrimeNGInputSwitchComponent.prototype.bindId;
    /** @type {?} */
    DynamicPrimeNGInputSwitchComponent.prototype.group;
    /** @type {?} */
    DynamicPrimeNGInputSwitchComponent.prototype.layout;
    /** @type {?} */
    DynamicPrimeNGInputSwitchComponent.prototype.model;
    /** @type {?} */
    DynamicPrimeNGInputSwitchComponent.prototype.blur;
    /** @type {?} */
    DynamicPrimeNGInputSwitchComponent.prototype.change;
    /** @type {?} */
    DynamicPrimeNGInputSwitchComponent.prototype.focus;
    /** @type {?} */
    DynamicPrimeNGInputSwitchComponent.prototype.pInputSwitch;
    /** @type {?} */
    DynamicPrimeNGInputSwitchComponent.prototype.layoutService;
    /** @type {?} */
    DynamicPrimeNGInputSwitchComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-primeng-input-switch.component.js.map