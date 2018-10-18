/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicInputModel } from "@ng-dynamic-forms/core";
export class DynamicKendoInputComponent extends DynamicFormControlComponent {
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
DynamicKendoInputComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-kendo-input",
                template: "<label [formGroup]=\"group\" class=\"k-form-field\" [ngClass]=\"getClass('grid','control')\">\r\n\r\n    <span>\r\n\r\n        <span [innerHTML]=\"model.label\" [ngClass]=\"getClass('element','label')\"></span>\r\n\r\n        <span *ngIf=\"model.hint !== null\" class=\"k-field-info\" [innerHTML]=\"model.hint\"\r\n              [ngClass]=\"getClass('element','hint')\"></span>\r\n\r\n    </span>\r\n\r\n    <input class=\"k-textbox\"\r\n           [attr.accept]=\"model.accept\"\r\n           [attr.max]=\"model.max\"\r\n           [attr.min]=\"model.min\"\r\n           [attr.multiple]=\"model.multiple\"\r\n           [attr.step]=\"model.step\"\r\n           [autocomplete]=\"model.autoComplete\"\r\n           [autofocus]=\"model.autoFocus\"\r\n           [dynamicId]=\"bindId && model.id\"\r\n           [dynamicList]=\"model.listId\"\r\n           [formControlName]=\"model.id\"\r\n           [maxlength]=\"model.maxLength\"\r\n           [minlength]=\"model.minLength\"\r\n           [name]=\"model.name\"\r\n           [ngClass]=\"getClass('element','control')\"\r\n           [pattern]=\"model.pattern\"\r\n           [placeholder]=\"model.placeholder\"\r\n           [readonly]=\"model.readOnly\"\r\n           [required]=\"model.required\"\r\n           [spellcheck]=\"model.spellCheck\"\r\n           [tabindex]=\"model.tabIndex\"\r\n           [type]=\"model.inputType\"\r\n           (blur)=\"onBlur($event)\"\r\n           (change)=\"onChange($event)\"\r\n           (focus)=\"onFocus($event)\"/></label>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicKendoInputComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicKendoInputComponent.propDecorators = {
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
    DynamicKendoInputComponent.prototype.bindId;
    /** @type {?} */
    DynamicKendoInputComponent.prototype.group;
    /** @type {?} */
    DynamicKendoInputComponent.prototype.layout;
    /** @type {?} */
    DynamicKendoInputComponent.prototype.model;
    /** @type {?} */
    DynamicKendoInputComponent.prototype.blur;
    /** @type {?} */
    DynamicKendoInputComponent.prototype.change;
    /** @type {?} */
    DynamicKendoInputComponent.prototype.focus;
    /** @type {?} */
    DynamicKendoInputComponent.prototype.layoutService;
    /** @type {?} */
    DynamicKendoInputComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-kendo-input.component.js.map