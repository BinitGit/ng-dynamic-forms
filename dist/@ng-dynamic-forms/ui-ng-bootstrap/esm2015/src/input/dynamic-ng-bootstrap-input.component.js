/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicInputModel } from "@ng-dynamic-forms/core";
export class DynamicNGBootstrapInputComponent extends DynamicFormControlComponent {
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
        this.click = new EventEmitter();
    }
}
DynamicNGBootstrapInputComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-ng-bootstrap-input",
                template: "<div [formGroup]=\"group\" [class.input-group]=\"model.prefix || model.suffix\">\r\n\r\n    <div *ngIf=\"model.prefix\" class=\"input-group-prepend\">\r\n        <span class=\"input-group-text\" [innerHTML]=\"model.prefix\"></span>\r\n    </div>\r\n\r\n    <input [attr.accept]=\"model.accept\"\r\n           [attr.max]=\"model.max\"\r\n           [attr.min]=\"model.min\"\r\n           [attr.multiple]=\"model.multiple\"\r\n           [attr.step]=\"model.step\"\r\n           [autocomplete]=\"model.autoComplete\"\r\n           [autofocus]=\"model.autoFocus\"\r\n           [class.form-control]=\"model.inputType !== 'file'\"\r\n           [class.form-control-file]=\"model.inputType === 'file'\"\r\n           [class.is-invalid]=\"showErrorMessages\"\r\n           [dynamicId]=\"bindId && model.id\"\r\n           [dynamicList]=\"model.listId\"\r\n           [formControlName]=\"model.id\"\r\n           [maxlength]=\"model.maxLength\"\r\n           [minlength]=\"model.minLength\"\r\n           [name]=\"model.name\"\r\n           [ngClass]=\"getClass('element', 'control')\"\r\n           [pattern]=\"model.pattern\"\r\n           [placeholder]=\"model.placeholder\"\r\n           [readonly]=\"model.readOnly\"\r\n           [required]=\"model.required\"\r\n           [spellcheck]=\"model.spellCheck\"\r\n           [tabindex]=\"model.tabIndex\"\r\n           [textMask]=\"{mask: (model.mask || false), showMask: model.mask && !(model.placeholder)}\"\r\n           [type]=\"model.inputType\"\r\n           (blur)=\"onBlur($event)\"\r\n           (change)=\"onChange($event)\"\r\n           (focus)=\"onFocus($event)\"\r\n           (click)=\"onClick($event)\"/>\r\n\r\n    <div *ngIf=\"model.suffix\" class=\"input-group-append\">\r\n        <span class=\"input-group-text\" [innerHTML]=\"model.suffix\"></span>\r\n    </div>\r\n\r\n    <datalist *ngIf=\"model.hasList\" [id]=\"model.listId\">\r\n\r\n        <option *ngFor=\"let option of model.list$ | async\" [value]=\"option\">\r\n\r\n    </datalist>\r\n\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicNGBootstrapInputComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicNGBootstrapInputComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    click: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DynamicNGBootstrapInputComponent.prototype.bindId;
    /** @type {?} */
    DynamicNGBootstrapInputComponent.prototype.group;
    /** @type {?} */
    DynamicNGBootstrapInputComponent.prototype.layout;
    /** @type {?} */
    DynamicNGBootstrapInputComponent.prototype.model;
    /** @type {?} */
    DynamicNGBootstrapInputComponent.prototype.blur;
    /** @type {?} */
    DynamicNGBootstrapInputComponent.prototype.change;
    /** @type {?} */
    DynamicNGBootstrapInputComponent.prototype.focus;
    /** @type {?} */
    DynamicNGBootstrapInputComponent.prototype.click;
    /** @type {?} */
    DynamicNGBootstrapInputComponent.prototype.layoutService;
    /** @type {?} */
    DynamicNGBootstrapInputComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-ng-bootstrap-input.component.js.map