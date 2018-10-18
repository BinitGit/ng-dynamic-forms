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
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicCheckboxGroupModel, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, } from "@ng-dynamic-forms/core";
var DynamicKendoCheckboxGroupComponent = /** @class */ (function (_super) {
    __extends(DynamicKendoCheckboxGroupComponent, _super);
    function DynamicKendoCheckboxGroupComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicKendoCheckboxGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-kendo-checkbox-group",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <fieldset class=\"k-form-field\"\r\n              [dynamicId]=\"bindId && model.id\"\r\n              [formGroupName]=\"model.id\"\r\n              [name]=\"model.name\"\r\n              [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\">\r\n\r\n        <legend *ngIf=\"model.legend\" [innerHTML]=\"model.legend\"></legend>\r\n\r\n        <ng-container *ngFor=\"let checkboxModel of model.group\">\r\n\r\n            <input type=\"checkbox\" class=\"k-checkbox\"\r\n                   [checked]=\"checkboxModel.checked\"\r\n                   [dynamicId]=\"bindId && checkboxModel.id\"\r\n                   [formControlName]=\"checkboxModel.id\"\r\n                   [indeterminate]=\"checkboxModel.indeterminate\"\r\n                   [name]=\"checkboxModel.name\"\r\n                   [ngClass]=\"getClass('element', 'control', checkboxModel)\"\r\n                   [required]=\"checkboxModel.required\"\r\n                   [tabindex]=\"checkboxModel.tabIndex\"\r\n                   [value]=\"checkboxModel.value\"\r\n                   (blur)=\"onBlur($event)\"\r\n                   (change)=\"onEmbeddedCheckboxChange($event, model)\"\r\n                   (focus)=\"onFocus($event)\"/>\r\n\r\n            <label class=\"k-checkbox-label\" [for]=\"checkboxModel.id\" [innerHTML]=\"checkboxModel.label\"></label>\r\n\r\n        </ng-container>\r\n\r\n    </fieldset>\r\n\r\n</ng-container>"
                }] }
    ];
    /** @nocollapse */
    DynamicKendoCheckboxGroupComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicKendoCheckboxGroupComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }]
    };
    return DynamicKendoCheckboxGroupComponent;
}(DynamicFormControlComponent));
export { DynamicKendoCheckboxGroupComponent };
if (false) {
    /** @type {?} */
    DynamicKendoCheckboxGroupComponent.prototype.bindId;
    /** @type {?} */
    DynamicKendoCheckboxGroupComponent.prototype.group;
    /** @type {?} */
    DynamicKendoCheckboxGroupComponent.prototype.layout;
    /** @type {?} */
    DynamicKendoCheckboxGroupComponent.prototype.model;
    /** @type {?} */
    DynamicKendoCheckboxGroupComponent.prototype.blur;
    /** @type {?} */
    DynamicKendoCheckboxGroupComponent.prototype.change;
    /** @type {?} */
    DynamicKendoCheckboxGroupComponent.prototype.focus;
    /** @type {?} */
    DynamicKendoCheckboxGroupComponent.prototype.layoutService;
    /** @type {?} */
    DynamicKendoCheckboxGroupComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-kendo-checkbox-group.component.js.map