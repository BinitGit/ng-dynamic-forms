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
var DynamicBasicRadioGroupComponent = /** @class */ (function (_super) {
    __extends(DynamicBasicRadioGroupComponent, _super);
    function DynamicBasicRadioGroupComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicBasicRadioGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-basic-radio-group",
                    template: "<fieldset role=\"radiogroup\"\r\n          [dynamicId]=\"bindId && model.id\"\r\n          [formGroup]=\"group\"\r\n          [name]=\"model.name\"\r\n          [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n          [tabindex]=\"model.tabIndex\"\r\n          (change)=\"onChange($event)\">\r\n\r\n    <legend *ngIf=\"model.legend\" [innerHTML]=\"model.legend\"></legend>\r\n\r\n    <label *ngFor=\"let option of model.options$ | async\" [ngClass]=\"getClass('element', 'option')\">\r\n\r\n        <input type=\"radio\"\r\n               [formControlName]=\"model.id\"\r\n               [name]=\"model.name\"\r\n               [value]=\"option.value\"\r\n               (blur)=\"onBlur($event)\"\r\n               (focus)=\"onFocus($event)\"/><span [innerHTML]=\"option.label\"></span></label>\r\n</fieldset>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicBasicRadioGroupComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicBasicRadioGroupComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }]
    };
    return DynamicBasicRadioGroupComponent;
}(DynamicFormControlComponent));
export { DynamicBasicRadioGroupComponent };
if (false) {
    /** @type {?} */
    DynamicBasicRadioGroupComponent.prototype.bindId;
    /** @type {?} */
    DynamicBasicRadioGroupComponent.prototype.group;
    /** @type {?} */
    DynamicBasicRadioGroupComponent.prototype.layout;
    /** @type {?} */
    DynamicBasicRadioGroupComponent.prototype.model;
    /** @type {?} */
    DynamicBasicRadioGroupComponent.prototype.blur;
    /** @type {?} */
    DynamicBasicRadioGroupComponent.prototype.change;
    /** @type {?} */
    DynamicBasicRadioGroupComponent.prototype.focus;
    /** @type {?} */
    DynamicBasicRadioGroupComponent.prototype.layoutService;
    /** @type {?} */
    DynamicBasicRadioGroupComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-basic-radio-group.component.js.map