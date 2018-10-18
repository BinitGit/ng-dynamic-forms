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
var DynamicBootstrapRadioGroupComponent = /** @class */ (function (_super) {
    __extends(DynamicBootstrapRadioGroupComponent, _super);
    function DynamicBootstrapRadioGroupComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicBootstrapRadioGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-bootstrap-radio-group",
                    template: "<fieldset role=\"radiogroup\"\r\n          [dynamicId]=\"bindId && model.id\"\r\n          [formGroup]=\"group\"\r\n          [name]=\"model.name\"\r\n          [ngClass]=\"getClass('element', 'control')\"\r\n          [tabindex]=\"model.tabIndex\"\r\n          (change)=\"onChange($event)\">\r\n\r\n    <legend *ngIf=\"model.legend\" [innerHTML]=\"model.legend\"></legend>\r\n\r\n    <div *ngFor=\"let option of model.options$ | async\" [ngClass]=\"getClass('element', 'option') || 'radio'\">\r\n\r\n        <label><input type=\"radio\"\r\n                      [formControlName]=\"model.id\"\r\n                      [name]=\"model.name\"\r\n                      [value]=\"option.value\"\r\n                      (blur)=\"onBlur($event)\"\r\n                      (focus)=\"onFocus($event)\"/><span [innerHTML]=\"option.label\"></span></label>\r\n    </div>\r\n\r\n</fieldset>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicBootstrapRadioGroupComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicBootstrapRadioGroupComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }]
    };
    return DynamicBootstrapRadioGroupComponent;
}(DynamicFormControlComponent));
export { DynamicBootstrapRadioGroupComponent };
if (false) {
    /** @type {?} */
    DynamicBootstrapRadioGroupComponent.prototype.bindId;
    /** @type {?} */
    DynamicBootstrapRadioGroupComponent.prototype.group;
    /** @type {?} */
    DynamicBootstrapRadioGroupComponent.prototype.layout;
    /** @type {?} */
    DynamicBootstrapRadioGroupComponent.prototype.model;
    /** @type {?} */
    DynamicBootstrapRadioGroupComponent.prototype.blur;
    /** @type {?} */
    DynamicBootstrapRadioGroupComponent.prototype.change;
    /** @type {?} */
    DynamicBootstrapRadioGroupComponent.prototype.focus;
    /** @type {?} */
    DynamicBootstrapRadioGroupComponent.prototype.layoutService;
    /** @type {?} */
    DynamicBootstrapRadioGroupComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-bootstrap-radio-group.component.js.map