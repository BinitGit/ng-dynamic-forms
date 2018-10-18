/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormControlComponent, DynamicFormLayoutService, DynamicFormValidationService, DynamicRadioGroupModel } from "@ng-dynamic-forms/core";
export class DynamicBootstrapRadioGroupComponent extends DynamicFormControlComponent {
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
DynamicBootstrapRadioGroupComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-bootstrap-radio-group",
                template: "<fieldset role=\"radiogroup\"\r\n          [dynamicId]=\"bindId && model.id\"\r\n          [formGroup]=\"group\"\r\n          [name]=\"model.name\"\r\n          [ngClass]=\"getClass('element', 'control')\"\r\n          [tabindex]=\"model.tabIndex\"\r\n          (change)=\"onChange($event)\">\r\n\r\n    <legend *ngIf=\"model.legend\" [innerHTML]=\"model.legend\"></legend>\r\n\r\n    <div *ngFor=\"let option of model.options$ | async\" [ngClass]=\"getClass('element', 'option') || 'radio'\">\r\n\r\n        <label><input type=\"radio\"\r\n                      [formControlName]=\"model.id\"\r\n                      [name]=\"model.name\"\r\n                      [value]=\"option.value\"\r\n                      (blur)=\"onBlur($event)\"\r\n                      (focus)=\"onFocus($event)\"/><span [innerHTML]=\"option.label\"></span></label>\r\n    </div>\r\n\r\n</fieldset>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicBootstrapRadioGroupComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicBootstrapRadioGroupComponent.propDecorators = {
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
    DynamicBootstrapRadioGroupComponent.prototype.bindId;
    /** @type {?} */
    DynamicBootstrapRadioGroupComponent.prototype.group;
    /** @type {?} */
    DynamicBootstrapRadioGroupComponent.prototype.layout;
    /** @type {?} */
    DynamicBootstrapRadioGroupComponent.prototype.model;
    /** @type {?} */
    DynamicBootstrapRadioGroupComponent.prototype.blur;
    /** @type {?} */
    DynamicBootstrapRadioGroupComponent.prototype.change;
    /** @type {?} */
    DynamicBootstrapRadioGroupComponent.prototype.focus;
    /** @type {?} */
    DynamicBootstrapRadioGroupComponent.prototype.layoutService;
    /** @type {?} */
    DynamicBootstrapRadioGroupComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-bootstrap-radio-group.component.js.map