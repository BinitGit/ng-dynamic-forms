/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicCheckboxGroupModel, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, } from "@ng-dynamic-forms/core";
export class DynamicKendoCheckboxGroupComponent extends DynamicFormControlComponent {
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
DynamicKendoCheckboxGroupComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-kendo-checkbox-group",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <fieldset class=\"k-form-field\"\r\n              [dynamicId]=\"bindId && model.id\"\r\n              [formGroupName]=\"model.id\"\r\n              [name]=\"model.name\"\r\n              [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\">\r\n\r\n        <legend *ngIf=\"model.legend\" [innerHTML]=\"model.legend\"></legend>\r\n\r\n        <ng-container *ngFor=\"let checkboxModel of model.group\">\r\n\r\n            <input type=\"checkbox\" class=\"k-checkbox\"\r\n                   [checked]=\"checkboxModel.checked\"\r\n                   [dynamicId]=\"bindId && checkboxModel.id\"\r\n                   [formControlName]=\"checkboxModel.id\"\r\n                   [indeterminate]=\"checkboxModel.indeterminate\"\r\n                   [name]=\"checkboxModel.name\"\r\n                   [ngClass]=\"getClass('element', 'control', checkboxModel)\"\r\n                   [required]=\"checkboxModel.required\"\r\n                   [tabindex]=\"checkboxModel.tabIndex\"\r\n                   [value]=\"checkboxModel.value\"\r\n                   (blur)=\"onBlur($event)\"\r\n                   (change)=\"onEmbeddedCheckboxChange($event, model)\"\r\n                   (focus)=\"onFocus($event)\"/>\r\n\r\n            <label class=\"k-checkbox-label\" [for]=\"checkboxModel.id\" [innerHTML]=\"checkboxModel.label\"></label>\r\n\r\n        </ng-container>\r\n\r\n    </fieldset>\r\n\r\n</ng-container>"
            }] }
];
/** @nocollapse */
DynamicKendoCheckboxGroupComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicKendoCheckboxGroupComponent.propDecorators = {
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
    DynamicKendoCheckboxGroupComponent.prototype.bindId;
    /** @type {?} */
    DynamicKendoCheckboxGroupComponent.prototype.group;
    /** @type {?} */
    DynamicKendoCheckboxGroupComponent.prototype.layout;
    /** @type {?} */
    DynamicKendoCheckboxGroupComponent.prototype.model;
    /** @type {?} */
    DynamicKendoCheckboxGroupComponent.prototype.blur;
    /** @type {?} */
    DynamicKendoCheckboxGroupComponent.prototype.change;
    /** @type {?} */
    DynamicKendoCheckboxGroupComponent.prototype.focus;
    /** @type {?} */
    DynamicKendoCheckboxGroupComponent.prototype.layoutService;
    /** @type {?} */
    DynamicKendoCheckboxGroupComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-kendo-checkbox-group.component.js.map