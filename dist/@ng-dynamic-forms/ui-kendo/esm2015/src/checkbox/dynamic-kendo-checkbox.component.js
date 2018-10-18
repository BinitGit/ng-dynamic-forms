/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicCheckboxModel, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent } from "@ng-dynamic-forms/core";
export class DynamicKendoCheckboxComponent extends DynamicFormControlComponent {
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
DynamicKendoCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-kendo-checkbox",
                template: "<label [formGroup]=\"group\" class=\"k-form-field\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <input type=\"checkbox\" class=\"k-checkbox\"\r\n           [checked]=\"model.checked\"\r\n           [dynamicId]=\"bindId && model.id\"\r\n           [formControlName]=\"model.id\"\r\n           [indeterminate]=\"model.indeterminate\"\r\n           [name]=\"model.name\"\r\n           [ngClass]=\"getClass('element', 'control')\"\r\n           [required]=\"model.required\"\r\n           [tabindex]=\"model.tabIndex\"\r\n           [value]=\"model.value\"\r\n           (blur)=\"onBlur($event)\"\r\n           (change)=\"onChange($event)\"\r\n           (focus)=\"onFocus($event)\"/>\r\n\r\n    <label class=\"k-checkbox-label\" [for]=\"model.id\" [innerHTML]=\"model.label\"></label>\r\n\r\n</label>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicKendoCheckboxComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicKendoCheckboxComponent.propDecorators = {
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
    DynamicKendoCheckboxComponent.prototype.bindId;
    /** @type {?} */
    DynamicKendoCheckboxComponent.prototype.group;
    /** @type {?} */
    DynamicKendoCheckboxComponent.prototype.layout;
    /** @type {?} */
    DynamicKendoCheckboxComponent.prototype.model;
    /** @type {?} */
    DynamicKendoCheckboxComponent.prototype.blur;
    /** @type {?} */
    DynamicKendoCheckboxComponent.prototype.change;
    /** @type {?} */
    DynamicKendoCheckboxComponent.prototype.focus;
    /** @type {?} */
    DynamicKendoCheckboxComponent.prototype.layoutService;
    /** @type {?} */
    DynamicKendoCheckboxComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-kendo-checkbox.component.js.map