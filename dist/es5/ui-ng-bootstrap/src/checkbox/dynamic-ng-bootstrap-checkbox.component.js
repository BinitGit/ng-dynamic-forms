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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicCheckboxModel, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, } from "@ng-dynamic-forms/core";
var DynamicNGBootstrapCheckboxComponent = /** @class */ (function (_super) {
    __extends(DynamicNGBootstrapCheckboxComponent, _super);
    function DynamicNGBootstrapCheckboxComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicNGBootstrapCheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-ng-bootstrap-checkbox",
                    template: "<div [formGroup]=\"group\" class=\"form-check\" [class.disabled]=\"model.disabled\">\r\n\r\n    <label class=\"form-check-label\">\r\n\r\n        <input type=\"checkbox\" class=\"form-check-input\"\r\n               [checked]=\"model.checked\"\r\n               [class.is-invalid]=\"showErrorMessages\"\r\n               [dynamicId]=\"bindId && model.id\"\r\n               [formControlName]=\"model.id\"\r\n               [indeterminate]=\"model.indeterminate\"\r\n               [name]=\"model.name\"\r\n               [ngClass]=\"getClass('element', 'control')\"\r\n               [required]=\"model.required\"\r\n               [tabindex]=\"model.tabIndex\"\r\n               [value]=\"model.value\"\r\n               (blur)=\"onBlur($event)\"\r\n               (change)=\"onChange($event)\"\r\n               (focus)=\"onFocus($event)\"/><span [innerHTML]=\"model.label\"\r\n                                                [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></span>\r\n    </label>\r\n\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicNGBootstrapCheckboxComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicNGBootstrapCheckboxComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }]
    };
    return DynamicNGBootstrapCheckboxComponent;
}(DynamicFormControlComponent));
export { DynamicNGBootstrapCheckboxComponent };
if (false) {
    /** @type {?} */
    DynamicNGBootstrapCheckboxComponent.prototype.bindId;
    /** @type {?} */
    DynamicNGBootstrapCheckboxComponent.prototype.group;
    /** @type {?} */
    DynamicNGBootstrapCheckboxComponent.prototype.layout;
    /** @type {?} */
    DynamicNGBootstrapCheckboxComponent.prototype.model;
    /** @type {?} */
    DynamicNGBootstrapCheckboxComponent.prototype.blur;
    /** @type {?} */
    DynamicNGBootstrapCheckboxComponent.prototype.change;
    /** @type {?} */
    DynamicNGBootstrapCheckboxComponent.prototype.focus;
    /** @type {?} */
    DynamicNGBootstrapCheckboxComponent.prototype.layoutService;
    /** @type {?} */
    DynamicNGBootstrapCheckboxComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-ng-bootstrap-checkbox.component.js.map