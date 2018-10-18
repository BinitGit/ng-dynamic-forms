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
import { DynamicCheckboxModel, DynamicFormControlComponent, DynamicFormLayoutService, DynamicFormValidationService, } from "@ng-dynamic-forms/core";
var DynamicBasicCheckboxComponent = /** @class */ (function (_super) {
    __extends(DynamicBasicCheckboxComponent, _super);
    function DynamicBasicCheckboxComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicBasicCheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-basic-checkbox",
                    template: "<label [formGroup]=\"group\" [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\">\r\n\r\n    <input type=\"checkbox\"\r\n           [checked]=\"model.checked\"\r\n           [dynamicId]=\"bindId && model.id\"\r\n           [formControlName]=\"model.id\"\r\n           [indeterminate]=\"model.indeterminate\"\r\n           [name]=\"model.name\"\r\n           [required]=\"model.required\"\r\n           [tabindex]=\"model.tabIndex\"\r\n           [value]=\"model.value\"\r\n           (blur)=\"onBlur($event)\"\r\n           (change)=\"onChange($event)\"\r\n           (focus)=\"onFocus($event)\"/><span [ngClass]=\"getClass('element', 'label')\"\r\n                                            [innerHTML]=\"model.label\"></span></label>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicBasicCheckboxComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicBasicCheckboxComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }]
    };
    return DynamicBasicCheckboxComponent;
}(DynamicFormControlComponent));
export { DynamicBasicCheckboxComponent };
if (false) {
    /** @type {?} */
    DynamicBasicCheckboxComponent.prototype.bindId;
    /** @type {?} */
    DynamicBasicCheckboxComponent.prototype.group;
    /** @type {?} */
    DynamicBasicCheckboxComponent.prototype.layout;
    /** @type {?} */
    DynamicBasicCheckboxComponent.prototype.model;
    /** @type {?} */
    DynamicBasicCheckboxComponent.prototype.blur;
    /** @type {?} */
    DynamicBasicCheckboxComponent.prototype.change;
    /** @type {?} */
    DynamicBasicCheckboxComponent.prototype.focus;
    /** @type {?} */
    DynamicBasicCheckboxComponent.prototype.layoutService;
    /** @type {?} */
    DynamicBasicCheckboxComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-basic-checkbox.component.js.map