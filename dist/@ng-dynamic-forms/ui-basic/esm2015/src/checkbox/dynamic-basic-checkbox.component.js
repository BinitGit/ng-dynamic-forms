/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicCheckboxModel, DynamicFormControlComponent, DynamicFormLayoutService, DynamicFormValidationService, } from "@ng-dynamic-forms/core";
export class DynamicBasicCheckboxComponent extends DynamicFormControlComponent {
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
DynamicBasicCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-basic-checkbox",
                template: "<label [formGroup]=\"group\" [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\">\r\n\r\n    <input type=\"checkbox\"\r\n           [checked]=\"model.checked\"\r\n           [dynamicId]=\"bindId && model.id\"\r\n           [formControlName]=\"model.id\"\r\n           [indeterminate]=\"model.indeterminate\"\r\n           [name]=\"model.name\"\r\n           [required]=\"model.required\"\r\n           [tabindex]=\"model.tabIndex\"\r\n           [value]=\"model.value\"\r\n           (blur)=\"onBlur($event)\"\r\n           (change)=\"onChange($event)\"\r\n           (focus)=\"onFocus($event)\"/><span [ngClass]=\"getClass('element', 'label')\"\r\n                                            [innerHTML]=\"model.label\"></span></label>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicBasicCheckboxComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicBasicCheckboxComponent.propDecorators = {
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
    DynamicBasicCheckboxComponent.prototype.bindId;
    /** @type {?} */
    DynamicBasicCheckboxComponent.prototype.group;
    /** @type {?} */
    DynamicBasicCheckboxComponent.prototype.layout;
    /** @type {?} */
    DynamicBasicCheckboxComponent.prototype.model;
    /** @type {?} */
    DynamicBasicCheckboxComponent.prototype.blur;
    /** @type {?} */
    DynamicBasicCheckboxComponent.prototype.change;
    /** @type {?} */
    DynamicBasicCheckboxComponent.prototype.focus;
    /** @type {?} */
    DynamicBasicCheckboxComponent.prototype.layoutService;
    /** @type {?} */
    DynamicBasicCheckboxComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-basic-checkbox.component.js.map