/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormControlComponent, DynamicFormLayoutService, DynamicFormValidationService, DynamicTextAreaModel } from "@ng-dynamic-forms/core";
export class DynamicBootstrapTextAreaComponent extends DynamicFormControlComponent {
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
DynamicBootstrapTextAreaComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-bootstrap-textarea",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <textarea class=\"form-control\"\r\n              [dynamicId]=\"bindId && model.id\"\r\n              [cols]=\"model.cols\"\r\n              [formControlName]=\"model.id\"\r\n              [maxlength]=\"model.maxLength\"\r\n              [minlength]=\"model.minLength\"\r\n              [name]=\"model.name\"\r\n              [ngClass]=\"getClass('element', 'control')\"\r\n              [placeholder]=\"model.placeholder\"\r\n              [readonly]=\"model.readOnly\"\r\n              [required]=\"model.required\"\r\n              [rows]=\"model.rows\"\r\n              [spellcheck]=\"model.spellCheck\"\r\n              [tabindex]=\"model.tabIndex\"\r\n              [wrap]=\"model.wrap\"\r\n              (blur)=\"onBlur($event)\"\r\n              (change)=\"onChange($event)\"\r\n              (focus)=\"onFocus($event)\"></textarea>\r\n\r\n</ng-container>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicBootstrapTextAreaComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicBootstrapTextAreaComponent.propDecorators = {
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
    DynamicBootstrapTextAreaComponent.prototype.bindId;
    /** @type {?} */
    DynamicBootstrapTextAreaComponent.prototype.group;
    /** @type {?} */
    DynamicBootstrapTextAreaComponent.prototype.layout;
    /** @type {?} */
    DynamicBootstrapTextAreaComponent.prototype.model;
    /** @type {?} */
    DynamicBootstrapTextAreaComponent.prototype.blur;
    /** @type {?} */
    DynamicBootstrapTextAreaComponent.prototype.change;
    /** @type {?} */
    DynamicBootstrapTextAreaComponent.prototype.focus;
    /** @type {?} */
    DynamicBootstrapTextAreaComponent.prototype.layoutService;
    /** @type {?} */
    DynamicBootstrapTextAreaComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-bootstrap-textarea.component.js.map