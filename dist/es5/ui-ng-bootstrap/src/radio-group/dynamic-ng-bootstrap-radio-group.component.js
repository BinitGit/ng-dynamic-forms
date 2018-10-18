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
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicRadioGroupModel } from "@ng-dynamic-forms/core";
var DynamicNGBootstrapRadioGroupComponent = /** @class */ (function (_super) {
    __extends(DynamicNGBootstrapRadioGroupComponent, _super);
    function DynamicNGBootstrapRadioGroupComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicNGBootstrapRadioGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-ng-bootstrap-radio-group",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <div ngbRadioGroup class=\"btn-group btn-group-toggle\" role=\"radiogroup\"\r\n         [dynamicId]=\"bindId && model.id\"\r\n         [formControlName]=\"model.id\"\r\n         [ngClass]=\"getClass('element', 'control')\"\r\n         [tabindex]=\"model.tabIndex\"\r\n         (change)=\"onChange($event)\">\r\n\r\n        <legend *ngIf=\"model.legend\" [innerHTML]=\"model.legend\"></legend>\r\n\r\n        <label *ngFor=\"let option of model.options$ | async\" ngbButtonLabel\r\n               [ngClass]=\"[getClass('element', 'option'), getClass('grid', 'option')]\">\r\n\r\n            <input type=\"radio\" ngbButton\r\n                   [disabled]=\"option.disabled\"\r\n                   [name]=\"model.name\"\r\n                   [value]=\"option.value\"\r\n                   (blur)=\"onBlur($event)\"\r\n                   (focus)=\"onFocus($event)\"/><span [innerHTML]=\"option.label\"></span>\r\n        </label>\r\n\r\n    </div>\r\n\r\n</ng-container>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicNGBootstrapRadioGroupComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicNGBootstrapRadioGroupComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }]
    };
    return DynamicNGBootstrapRadioGroupComponent;
}(DynamicFormControlComponent));
export { DynamicNGBootstrapRadioGroupComponent };
if (false) {
    /** @type {?} */
    DynamicNGBootstrapRadioGroupComponent.prototype.bindId;
    /** @type {?} */
    DynamicNGBootstrapRadioGroupComponent.prototype.group;
    /** @type {?} */
    DynamicNGBootstrapRadioGroupComponent.prototype.layout;
    /** @type {?} */
    DynamicNGBootstrapRadioGroupComponent.prototype.model;
    /** @type {?} */
    DynamicNGBootstrapRadioGroupComponent.prototype.blur;
    /** @type {?} */
    DynamicNGBootstrapRadioGroupComponent.prototype.change;
    /** @type {?} */
    DynamicNGBootstrapRadioGroupComponent.prototype.focus;
    /** @type {?} */
    DynamicNGBootstrapRadioGroupComponent.prototype.layoutService;
    /** @type {?} */
    DynamicNGBootstrapRadioGroupComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-ng-bootstrap-radio-group.component.js.map