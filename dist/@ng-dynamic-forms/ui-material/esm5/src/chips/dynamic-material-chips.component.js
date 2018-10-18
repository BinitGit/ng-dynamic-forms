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
import { MAT_CHIPS_DEFAULT_OPTIONS, MAT_LABEL_GLOBAL_OPTIONS, MatChipList, MatInput } from "@angular/material";
import { DynamicFormControlComponent, DynamicFormLayoutService, DynamicFormValidationService, DynamicInputModel } from "@ng-dynamic-forms/core";
var DynamicMaterialChipsComponent = /** @class */ (function (_super) {
    __extends(DynamicMaterialChipsComponent, _super);
    function DynamicMaterialChipsComponent(layoutService, validationService, CHIPS_OPTIONS, LABEL_OPTIONS) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.CHIPS_OPTIONS = CHIPS_OPTIONS;
        _this.LABEL_OPTIONS = LABEL_OPTIONS;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.customEvent = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    Object.defineProperty(DynamicMaterialChipsComponent.prototype, "model", {
        get: /**
         * @return {?}
         */
        function () {
            return this._model;
        },
        set: /**
         * @param {?} model
         * @return {?}
         */
        function (model) {
            var _this = this;
            this.unsubscribe();
            this._model = model;
            this._model.valueUpdates.subscribe(function (value) { return _this.chipList = value; });
            this.chipList = Array.isArray(model.value) ? /** @type {?} */ (model.value) : [];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DynamicMaterialChipsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe();
    };
    /**
     * @return {?}
     */
    DynamicMaterialChipsComponent.prototype.unsubscribe = /**
     * @return {?}
     */
    function () {
        if (this._valueSubscription) {
            this._valueSubscription.unsubscribe();
        }
    };
    Object.defineProperty(DynamicMaterialChipsComponent.prototype, "chipList", {
        get: /**
         * @return {?}
         */
        function () {
            return this._chipList;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._chipList = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} $event
     * @return {?}
     */
    DynamicMaterialChipsComponent.prototype.onChipInputTokenEnd = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var inputElement = $event.input;
        /** @type {?} */
        var inputValue = $event.value.trim();
        if (Array.isArray(this.chipList) && inputValue.length > 0) {
            this.chipList.push(inputValue);
            this.control.patchValue(this.chipList);
        }
        if (inputElement instanceof HTMLInputElement) {
            inputElement.value = "";
        }
    };
    /**
     * @param {?} chip
     * @param {?} index
     * @return {?}
     */
    DynamicMaterialChipsComponent.prototype.onChipRemoved = /**
     * @param {?} chip
     * @param {?} index
     * @return {?}
     */
    function (chip, index) {
        if (Array.isArray(this.chipList) && this.chipList[index] === chip) {
            this.chipList.splice(index, 1);
            this.control.patchValue(this.chipList);
        }
    };
    DynamicMaterialChipsComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-material-chips",
                    template: "<mat-form-field [appearance]=\"model.getAdditional('appearance', 'legacy')\"\r\n                [color]=\"model.getAdditional('color', 'primary')\"\r\n                [floatLabel]=\"model.getAdditional('floatLabel', LABEL_OPTIONS && LABEL_OPTIONS['float'] || 'auto')\"\r\n                [formGroup]=\"group\"\r\n                [hideRequiredMarker]=\"model.getAdditional('hideRequiredMarker', false)\"\r\n                [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <mat-chip-list #matChipList\r\n                   [formControlName]=\"model.id\"\r\n                   [id]=\"bindId ? model.id : null\"\r\n                   [multiple]=\"true\">\r\n\r\n        <mat-chip *ngFor=\"let chip of chipList; let index = index\"\r\n                  [selectable]=\"false\"\r\n                  (removed)=\"onChipRemoved(chip, index)\">\r\n\r\n            <span>{{ chip }}</span>\r\n\r\n            <mat-icon matChipRemove>cancel</mat-icon>\r\n\r\n        </mat-chip>\r\n\r\n        <input matInput\r\n               [placeholder]=\"model.placeholder\"\r\n               [matChipInputFor]=\"matChipList\"\r\n               [matChipInputAddOnBlur]=\"model.getAdditional('matChipInputAddOnBlur', true)\"\r\n               [matChipInputSeparatorKeyCodes]=\"model.getAdditional('matChipInputSeparatorKeyCodes', CHIPS_OPTIONS['separatorKeyCodes'])\"\r\n               (matChipInputTokenEnd)=\"onChipInputTokenEnd($event)\"/>\r\n\r\n    </mat-chip-list>\r\n\r\n</mat-form-field>"
                }] }
    ];
    /** @nocollapse */
    DynamicMaterialChipsComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_CHIPS_DEFAULT_OPTIONS,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_LABEL_GLOBAL_OPTIONS,] }, { type: Optional }] }
    ]; };
    DynamicMaterialChipsComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        customEvent: [{ type: Output }],
        focus: [{ type: Output }],
        matChipList: [{ type: ViewChild, args: ["matChipList",] }],
        matInput: [{ type: ViewChild, args: [MatInput,] }]
    };
    return DynamicMaterialChipsComponent;
}(DynamicFormControlComponent));
export { DynamicMaterialChipsComponent };
if (false) {
    /** @type {?} */
    DynamicMaterialChipsComponent.prototype._chipList;
    /** @type {?} */
    DynamicMaterialChipsComponent.prototype._model;
    /** @type {?} */
    DynamicMaterialChipsComponent.prototype._valueSubscription;
    /** @type {?} */
    DynamicMaterialChipsComponent.prototype.bindId;
    /** @type {?} */
    DynamicMaterialChipsComponent.prototype.group;
    /** @type {?} */
    DynamicMaterialChipsComponent.prototype.layout;
    /** @type {?} */
    DynamicMaterialChipsComponent.prototype.blur;
    /** @type {?} */
    DynamicMaterialChipsComponent.prototype.change;
    /** @type {?} */
    DynamicMaterialChipsComponent.prototype.customEvent;
    /** @type {?} */
    DynamicMaterialChipsComponent.prototype.focus;
    /** @type {?} */
    DynamicMaterialChipsComponent.prototype.matChipList;
    /** @type {?} */
    DynamicMaterialChipsComponent.prototype.matInput;
    /** @type {?} */
    DynamicMaterialChipsComponent.prototype.layoutService;
    /** @type {?} */
    DynamicMaterialChipsComponent.prototype.validationService;
    /** @type {?} */
    DynamicMaterialChipsComponent.prototype.CHIPS_OPTIONS;
    /** @type {?} */
    DynamicMaterialChipsComponent.prototype.LABEL_OPTIONS;
}
//# sourceMappingURL=dynamic-material-chips.component.js.map