/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicRadioGroupModel } from "@ng-dynamic-forms/core";
export class DynamicKendoRadioGroupComponent extends DynamicFormControlComponent {
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
DynamicKendoRadioGroupComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-kendo-radio-group",
                template: "<fieldset [formGroup]=\"group\" class=\"k-form-field\" role=\"radiogroup\"\r\n          [ngClass]=\"[getClass('element','control'), getClass('grid','control')]\">\r\n\r\n    <legend *ngIf=\"model.legend\" [innerHTML]=\"model.legend\"></legend>\r\n\r\n    <ng-container *ngFor=\"let option of model.options$ | async; let idx = index\">\r\n\r\n        <input type=\"radio\" class=\"k-radio\"\r\n               [formControlName]=\"model.id\"\r\n               [id]=\"'option' + idx + model.id\"\r\n               [name]=\"model.name\"\r\n               [ngClass]=\"[getClass('element','option'), getClass('grid','option')]\"\r\n               [value]=\"option.value\"\r\n               (blur)=\"onBlur($event)\"\r\n               (change)=\"onChange($event)\"\r\n               (focus)=\"onFocus($event)\"/>\r\n\r\n        <label class=\"k-radio-label\" [for]=\"'option' + idx + model.id\" [innerHTML]=\"option.label\"></label>\r\n\r\n    </ng-container>\r\n\r\n</fieldset>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicKendoRadioGroupComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicKendoRadioGroupComponent.propDecorators = {
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
    DynamicKendoRadioGroupComponent.prototype.bindId;
    /** @type {?} */
    DynamicKendoRadioGroupComponent.prototype.group;
    /** @type {?} */
    DynamicKendoRadioGroupComponent.prototype.layout;
    /** @type {?} */
    DynamicKendoRadioGroupComponent.prototype.model;
    /** @type {?} */
    DynamicKendoRadioGroupComponent.prototype.blur;
    /** @type {?} */
    DynamicKendoRadioGroupComponent.prototype.change;
    /** @type {?} */
    DynamicKendoRadioGroupComponent.prototype.focus;
    /** @type {?} */
    DynamicKendoRadioGroupComponent.prototype.layoutService;
    /** @type {?} */
    DynamicKendoRadioGroupComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-kendo-radio-group.component.js.map