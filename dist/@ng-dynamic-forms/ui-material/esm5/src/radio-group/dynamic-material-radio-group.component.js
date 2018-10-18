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
import { Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatRadioGroup } from "@angular/material";
import { DynamicFormControlComponent, DynamicFormLayoutService, DynamicFormValidationService, DynamicRadioGroupModel } from "@ng-dynamic-forms/core";
var DynamicMaterialRadioGroupComponent = /** @class */ (function (_super) {
    __extends(DynamicMaterialRadioGroupComponent, _super);
    function DynamicMaterialRadioGroupComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.customEvent = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicMaterialRadioGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-material-radio-group",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <mat-radio-group #matRadioGroup\r\n                     [formControlName]=\"model.id\"\r\n                     [id]=\"bindId ? model.id : null\"\r\n                     [labelPosition]=\"model.getAdditional('labelPosition', 'after')\"\r\n                     [name]=\"model.name\"\r\n                     [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n                     (blur)=\"onBlur($event)\"\r\n                     (change)=\"onChange($event)\"\r\n                     (focus)=\"onFocus($event)\">\r\n\r\n        <mat-radio-button *ngFor=\"let option of model.options$ | async\"\r\n                          [name]=\"model.name\"\r\n                          [ngClass]=\"getClass('element', 'option')\"\r\n                          [value]=\"option.value\"><span [innerHTML]=\"option.label\"></span></mat-radio-button>\r\n\r\n    </mat-radio-group>\r\n\r\n</ng-container>"
                }] }
    ];
    /** @nocollapse */
    DynamicMaterialRadioGroupComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicMaterialRadioGroupComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        customEvent: [{ type: Output }],
        focus: [{ type: Output }],
        matRadioGroup: [{ type: ViewChild, args: ["matRadioGroup",] }]
    };
    return DynamicMaterialRadioGroupComponent;
}(DynamicFormControlComponent));
export { DynamicMaterialRadioGroupComponent };
if (false) {
    /** @type {?} */
    DynamicMaterialRadioGroupComponent.prototype.bindId;
    /** @type {?} */
    DynamicMaterialRadioGroupComponent.prototype.group;
    /** @type {?} */
    DynamicMaterialRadioGroupComponent.prototype.layout;
    /** @type {?} */
    DynamicMaterialRadioGroupComponent.prototype.model;
    /** @type {?} */
    DynamicMaterialRadioGroupComponent.prototype.blur;
    /** @type {?} */
    DynamicMaterialRadioGroupComponent.prototype.change;
    /** @type {?} */
    DynamicMaterialRadioGroupComponent.prototype.customEvent;
    /** @type {?} */
    DynamicMaterialRadioGroupComponent.prototype.focus;
    /** @type {?} */
    DynamicMaterialRadioGroupComponent.prototype.matRadioGroup;
    /** @type {?} */
    DynamicMaterialRadioGroupComponent.prototype.layoutService;
    /** @type {?} */
    DynamicMaterialRadioGroupComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-material-radio-group.component.js.map