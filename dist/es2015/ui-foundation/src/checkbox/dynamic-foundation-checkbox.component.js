/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicCheckboxModel, DynamicFormControlComponent, DynamicFormLayoutService, DynamicFormValidationService, } from "@ng-dynamic-forms/core";
export class DynamicFoundationCheckboxComponent extends DynamicFormControlComponent {
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
DynamicFoundationCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-foundation-checkbox",
                template: "<label [formGroup]=\"group\">\r\n\r\n    <input type=\"checkbox\"\r\n           [checked]=\"model.checked\"\r\n           [dynamicId]=\"bindId && model.id\"\r\n           [formControlName]=\"model.id\"\r\n           [indeterminate]=\"model.indeterminate\"\r\n           [name]=\"model.name\"\r\n           [ngClass]=\"getClass('element', 'control')\"\r\n           [required]=\"model.required\"\r\n           [tabindex]=\"model.tabIndex\"\r\n           [value]=\"model.value\"\r\n           (blur)=\"onBlur($event)\"\r\n           (change)=\"onChange($event)\"\r\n           (focus)=\"onFocus($event)\"/><span [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"\r\n                                            [innerHTML]=\"model.label\"></span></label>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicFoundationCheckboxComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicFoundationCheckboxComponent.propDecorators = {
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
    DynamicFoundationCheckboxComponent.prototype.bindId;
    /** @type {?} */
    DynamicFoundationCheckboxComponent.prototype.group;
    /** @type {?} */
    DynamicFoundationCheckboxComponent.prototype.layout;
    /** @type {?} */
    DynamicFoundationCheckboxComponent.prototype.model;
    /** @type {?} */
    DynamicFoundationCheckboxComponent.prototype.blur;
    /** @type {?} */
    DynamicFoundationCheckboxComponent.prototype.change;
    /** @type {?} */
    DynamicFoundationCheckboxComponent.prototype.focus;
    /** @type {?} */
    DynamicFoundationCheckboxComponent.prototype.layoutService;
    /** @type {?} */
    DynamicFoundationCheckboxComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-foundation-checkbox.component.js.map