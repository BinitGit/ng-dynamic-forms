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
var DynamicFoundationCheckboxComponent = /** @class */ (function (_super) {
    __extends(DynamicFoundationCheckboxComponent, _super);
    function DynamicFoundationCheckboxComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicFoundationCheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-foundation-checkbox",
                    template: "<label [formGroup]=\"group\">\r\n\r\n    <input type=\"checkbox\"\r\n           [checked]=\"model.checked\"\r\n           [dynamicId]=\"bindId && model.id\"\r\n           [formControlName]=\"model.id\"\r\n           [indeterminate]=\"model.indeterminate\"\r\n           [name]=\"model.name\"\r\n           [ngClass]=\"getClass('element', 'control')\"\r\n           [required]=\"model.required\"\r\n           [tabindex]=\"model.tabIndex\"\r\n           [value]=\"model.value\"\r\n           (blur)=\"onBlur($event)\"\r\n           (change)=\"onChange($event)\"\r\n           (focus)=\"onFocus($event)\"/><span [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"\r\n                                            [innerHTML]=\"model.label\"></span></label>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicFoundationCheckboxComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicFoundationCheckboxComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }]
    };
    return DynamicFoundationCheckboxComponent;
}(DynamicFormControlComponent));
export { DynamicFoundationCheckboxComponent };
if (false) {
    /** @type {?} */
    DynamicFoundationCheckboxComponent.prototype.bindId;
    /** @type {?} */
    DynamicFoundationCheckboxComponent.prototype.group;
    /** @type {?} */
    DynamicFoundationCheckboxComponent.prototype.layout;
    /** @type {?} */
    DynamicFoundationCheckboxComponent.prototype.model;
    /** @type {?} */
    DynamicFoundationCheckboxComponent.prototype.blur;
    /** @type {?} */
    DynamicFoundationCheckboxComponent.prototype.change;
    /** @type {?} */
    DynamicFoundationCheckboxComponent.prototype.focus;
    /** @type {?} */
    DynamicFoundationCheckboxComponent.prototype.layoutService;
    /** @type {?} */
    DynamicFoundationCheckboxComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-foundation-checkbox.component.js.map