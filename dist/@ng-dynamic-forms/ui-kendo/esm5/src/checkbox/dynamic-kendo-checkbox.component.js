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
import { DynamicCheckboxModel, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent } from "@ng-dynamic-forms/core";
var DynamicKendoCheckboxComponent = /** @class */ (function (_super) {
    __extends(DynamicKendoCheckboxComponent, _super);
    function DynamicKendoCheckboxComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicKendoCheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-kendo-checkbox",
                    template: "<label [formGroup]=\"group\" class=\"k-form-field\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <input type=\"checkbox\" class=\"k-checkbox\"\r\n           [checked]=\"model.checked\"\r\n           [dynamicId]=\"bindId && model.id\"\r\n           [formControlName]=\"model.id\"\r\n           [indeterminate]=\"model.indeterminate\"\r\n           [name]=\"model.name\"\r\n           [ngClass]=\"getClass('element', 'control')\"\r\n           [required]=\"model.required\"\r\n           [tabindex]=\"model.tabIndex\"\r\n           [value]=\"model.value\"\r\n           (blur)=\"onBlur($event)\"\r\n           (change)=\"onChange($event)\"\r\n           (focus)=\"onFocus($event)\"/>\r\n\r\n    <label class=\"k-checkbox-label\" [for]=\"model.id\" [innerHTML]=\"model.label\"></label>\r\n\r\n</label>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicKendoCheckboxComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicKendoCheckboxComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }]
    };
    return DynamicKendoCheckboxComponent;
}(DynamicFormControlComponent));
export { DynamicKendoCheckboxComponent };
if (false) {
    /** @type {?} */
    DynamicKendoCheckboxComponent.prototype.bindId;
    /** @type {?} */
    DynamicKendoCheckboxComponent.prototype.group;
    /** @type {?} */
    DynamicKendoCheckboxComponent.prototype.layout;
    /** @type {?} */
    DynamicKendoCheckboxComponent.prototype.model;
    /** @type {?} */
    DynamicKendoCheckboxComponent.prototype.blur;
    /** @type {?} */
    DynamicKendoCheckboxComponent.prototype.change;
    /** @type {?} */
    DynamicKendoCheckboxComponent.prototype.focus;
    /** @type {?} */
    DynamicKendoCheckboxComponent.prototype.layoutService;
    /** @type {?} */
    DynamicKendoCheckboxComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-kendo-checkbox.component.js.map