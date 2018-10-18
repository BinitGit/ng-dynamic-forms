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
import { DynamicCheckboxGroupModel, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent } from "@ng-dynamic-forms/core";
var DynamicNGBootstrapCheckboxGroupComponent = /** @class */ (function (_super) {
    __extends(DynamicNGBootstrapCheckboxGroupComponent, _super);
    function DynamicNGBootstrapCheckboxGroupComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicNGBootstrapCheckboxGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-ng-bootstrap-checkbox-group",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\"\r\n         [dynamicId]=\"bindId && model.id\"\r\n         [formGroupName]=\"model.id\"\r\n         [ngClass]=\"getClass('element', 'control')\">\r\n\r\n        <label *ngFor=\"let checkboxModel of model.group\" ngbButtonLabel\r\n               [hidden]=\"checkboxModel.hidden\"\r\n               [ngClass]=\"getClass('element', 'control', checkboxModel)\">\r\n\r\n            <input type=\"checkbox\" ngbButton\r\n                   [checked]=\"checkboxModel.checked\"\r\n                   [dynamicId]=\"bindId && checkboxModel.id\"\r\n                   [formControlName]=\"checkboxModel.id\"\r\n                   [name]=\"checkboxModel.name\"\r\n                   [required]=\"checkboxModel.required\"\r\n                   [tabindex]=\"checkboxModel.tabIndex\"\r\n                   [value]=\"checkboxModel.value\"\r\n                   (blur)=\"onBlur($event)\"\r\n                   (change)=\"onEmbeddedCheckboxChange($event, checkboxModel)\"\r\n                   (focus)=\"onFocus($event)\"/><span [ngClass]=\"getClass('element', 'label', checkboxModel)\"\r\n                                                    [innerHTML]=\"checkboxModel.label\"></span></label>\r\n    </div>\r\n\r\n</ng-container>"
                }] }
    ];
    /** @nocollapse */
    DynamicNGBootstrapCheckboxGroupComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicNGBootstrapCheckboxGroupComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }]
    };
    return DynamicNGBootstrapCheckboxGroupComponent;
}(DynamicFormControlComponent));
export { DynamicNGBootstrapCheckboxGroupComponent };
if (false) {
    /** @type {?} */
    DynamicNGBootstrapCheckboxGroupComponent.prototype.bindId;
    /** @type {?} */
    DynamicNGBootstrapCheckboxGroupComponent.prototype.group;
    /** @type {?} */
    DynamicNGBootstrapCheckboxGroupComponent.prototype.layout;
    /** @type {?} */
    DynamicNGBootstrapCheckboxGroupComponent.prototype.model;
    /** @type {?} */
    DynamicNGBootstrapCheckboxGroupComponent.prototype.blur;
    /** @type {?} */
    DynamicNGBootstrapCheckboxGroupComponent.prototype.change;
    /** @type {?} */
    DynamicNGBootstrapCheckboxGroupComponent.prototype.focus;
    /** @type {?} */
    DynamicNGBootstrapCheckboxGroupComponent.prototype.layoutService;
    /** @type {?} */
    DynamicNGBootstrapCheckboxGroupComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-ng-bootstrap-checkbox-group.component.js.map