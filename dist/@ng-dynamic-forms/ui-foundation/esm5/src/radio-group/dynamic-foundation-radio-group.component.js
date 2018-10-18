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
import { DynamicFormControlComponent, DynamicFormLayoutService, DynamicFormValidationService, DynamicRadioGroupModel } from "@ng-dynamic-forms/core";
var DynamicFoundationRadioGroupComponent = /** @class */ (function (_super) {
    __extends(DynamicFoundationRadioGroupComponent, _super);
    function DynamicFoundationRadioGroupComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicFoundationRadioGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-foundation-radio-group",
                    template: "<fieldset role=\"radiogroup\"\r\n          [dynamicId]=\"bindId && model.id\"\r\n          [formGroup]=\"group\"\r\n          [name]=\"model.name\"\r\n          [ngClass]=\"getClass('element', 'control')\"\r\n          [tabindex]=\"model.tabIndex\"\r\n          (change)=\"onChange($event)\">\r\n\r\n    <legend *ngIf=\"model.legend\" [innerHTML]=\"model.legend\"></legend>\r\n\r\n    <label *ngFor=\"let option of model.options$ | async\" [ngClass]=\"getClass('element', 'option')\">\r\n\r\n        <input type=\"radio\"\r\n               [formControlName]=\"model.id\"\r\n               [name]=\"model.name\"\r\n               [value]=\"option.value\"\r\n               (blur)=\"onBlur($event)\"\r\n               (focus)=\"onFocus($event)\"/><span [innerHTML]=\"option.label\"></span></label>\r\n\r\n</fieldset>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicFoundationRadioGroupComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicFoundationRadioGroupComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }]
    };
    return DynamicFoundationRadioGroupComponent;
}(DynamicFormControlComponent));
export { DynamicFoundationRadioGroupComponent };
if (false) {
    /** @type {?} */
    DynamicFoundationRadioGroupComponent.prototype.bindId;
    /** @type {?} */
    DynamicFoundationRadioGroupComponent.prototype.group;
    /** @type {?} */
    DynamicFoundationRadioGroupComponent.prototype.layout;
    /** @type {?} */
    DynamicFoundationRadioGroupComponent.prototype.model;
    /** @type {?} */
    DynamicFoundationRadioGroupComponent.prototype.blur;
    /** @type {?} */
    DynamicFoundationRadioGroupComponent.prototype.change;
    /** @type {?} */
    DynamicFoundationRadioGroupComponent.prototype.focus;
    /** @type {?} */
    DynamicFoundationRadioGroupComponent.prototype.layoutService;
    /** @type {?} */
    DynamicFoundationRadioGroupComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-foundation-radio-group.component.js.map