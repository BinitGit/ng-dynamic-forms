var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Inject, Input, Optional, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MAT_LABEL_GLOBAL_OPTIONS, MatInput } from "@angular/material";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicTextAreaModel } from "@ng-dynamic-forms/core";
import { DynamicMaterialFormInputControlComponent } from "../dynamic-material-form-input-control.component";
var DynamicMaterialTextAreaComponent = /** @class */ (function (_super) {
    __extends(DynamicMaterialTextAreaComponent, _super);
    function DynamicMaterialTextAreaComponent(layoutService, validationService, LABEL_OPTIONS) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.LABEL_OPTIONS = LABEL_OPTIONS;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.customEvent = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicMaterialTextAreaComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-material-textarea",
                    template: "<mat-form-field [appearance]=\"model.getAdditional('appearance', 'legacy')\"\r\n                [color]=\"model.getAdditional('color', 'primary')\"\r\n                [floatLabel]=\"model.getAdditional('floatLabel', LABEL_OPTIONS && LABEL_OPTIONS['float'] || 'auto')\"\r\n                [formGroup]=\"group\"\r\n                [hideRequiredMarker]=\"model.getAdditional('hideRequiredMarker', false)\"\r\n                [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <ng-container *ngIf=\"model.label\" ngProjectAs=\"mat-label\">\r\n\r\n        <mat-label>{{ model.label }}</mat-label>\r\n\r\n    </ng-container>\r\n\r\n    <textarea matInput\r\n              [cdkTextareaAutosize]=\"model.getAdditional('cdkTextareaAutosize', true)\"\r\n              [cols]=\"model.cols\"\r\n              [formControlName]=\"model.id\"\r\n              [id]=\"bindId ? model.id : null\"\r\n              [maxlength]=\"model.maxLength\"\r\n              [minlength]=\"model.minLength\"\r\n              [name]=\"model.name\"\r\n              [ngClass]=\"getClass('element', 'control')\"\r\n              [placeholder]=\"model.placeholder\"\r\n              [readonly]=\"model.readOnly\"\r\n              [required]=\"model.required\"\r\n              [rows]=\"model.rows\"\r\n              [spellcheck]=\"model.spellCheck\"\r\n              [tabindex]=\"model.tabIndex\"\r\n              [wrap]=\"model.wrap\"\r\n              (blur)=\"onBlur($event)\"\r\n              (change)=\"onChange($event)\"\r\n              (focus)=\"onFocus($event)\"></textarea>\r\n\r\n    <mat-hint *ngIf=\"model.hint !== null\" align=\"start\" [innerHTML]=\"model.hint\"></mat-hint>\r\n\r\n    <mat-hint *ngIf=\"showCharacterHint\" align=\"end\">{{ characterHint }}</mat-hint>\r\n\r\n    <ng-container *ngFor=\"let message of errorMessages\" ngProjectAs=\"mat-error\">\r\n\r\n        <mat-error *ngIf=\"showErrorMessages\">{{ message }}</mat-error>\r\n\r\n    </ng-container>\r\n\r\n</mat-form-field>"
                }] }
    ];
    /** @nocollapse */
    DynamicMaterialTextAreaComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_LABEL_GLOBAL_OPTIONS,] }, { type: Optional }] }
    ]; };
    DynamicMaterialTextAreaComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        customEvent: [{ type: Output }],
        focus: [{ type: Output }],
        matInput: [{ type: ViewChild, args: [MatInput,] }]
    };
    return DynamicMaterialTextAreaComponent;
}(DynamicMaterialFormInputControlComponent));
export { DynamicMaterialTextAreaComponent };
if (false) {
    /** @type {?} */
    DynamicMaterialTextAreaComponent.prototype.bindId;
    /** @type {?} */
    DynamicMaterialTextAreaComponent.prototype.group;
    /** @type {?} */
    DynamicMaterialTextAreaComponent.prototype.layout;
    /** @type {?} */
    DynamicMaterialTextAreaComponent.prototype.model;
    /** @type {?} */
    DynamicMaterialTextAreaComponent.prototype.blur;
    /** @type {?} */
    DynamicMaterialTextAreaComponent.prototype.change;
    /** @type {?} */
    DynamicMaterialTextAreaComponent.prototype.customEvent;
    /** @type {?} */
    DynamicMaterialTextAreaComponent.prototype.focus;
    /** @type {?} */
    DynamicMaterialTextAreaComponent.prototype.matInput;
    /** @type {?} */
    DynamicMaterialTextAreaComponent.prototype.layoutService;
    /** @type {?} */
    DynamicMaterialTextAreaComponent.prototype.validationService;
    /** @type {?} */
    DynamicMaterialTextAreaComponent.prototype.LABEL_OPTIONS;
}
//# sourceMappingURL=dynamic-material-textarea.component.js.map