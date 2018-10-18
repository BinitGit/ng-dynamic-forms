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
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicSelectModel } from "@ng-dynamic-forms/core";
var DynamicNGBootstrapSelectComponent = /** @class */ (function (_super) {
    __extends(DynamicNGBootstrapSelectComponent, _super);
    function DynamicNGBootstrapSelectComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicNGBootstrapSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-ng-bootstrap-select",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <select class=\"form-control\"\r\n            [class.is-invalid]=\"showErrorMessages\"\r\n            [compareWith]=\"model.compareWithFn\"\r\n            [dynamicId]=\"bindId && model.id\"\r\n            [formControlName]=\"model.id\"\r\n            [name]=\"model.name\"\r\n            [ngClass]=\"getClass('element', 'control')\"\r\n            [required]=\"model.required\"\r\n            [tabindex]=\"model.tabIndex\"\r\n            (blur)=\"onBlur($event)\"\r\n            (change)=\"onChange($event)\"\r\n            (focus)=\"onFocus($event)\">\r\n\r\n        <option *ngFor=\"let option of model.options$ | async\"\r\n                [disabled]=\"option.disabled\"\r\n                [ngValue]=\"option.value\">{{ option.label }}</option>\r\n\r\n    </select>\r\n\r\n</ng-container>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicNGBootstrapSelectComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicNGBootstrapSelectComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }]
    };
    return DynamicNGBootstrapSelectComponent;
}(DynamicFormControlComponent));
export { DynamicNGBootstrapSelectComponent };
if (false) {
    /** @type {?} */
    DynamicNGBootstrapSelectComponent.prototype.bindId;
    /** @type {?} */
    DynamicNGBootstrapSelectComponent.prototype.group;
    /** @type {?} */
    DynamicNGBootstrapSelectComponent.prototype.layout;
    /** @type {?} */
    DynamicNGBootstrapSelectComponent.prototype.model;
    /** @type {?} */
    DynamicNGBootstrapSelectComponent.prototype.blur;
    /** @type {?} */
    DynamicNGBootstrapSelectComponent.prototype.change;
    /** @type {?} */
    DynamicNGBootstrapSelectComponent.prototype.focus;
    /** @type {?} */
    DynamicNGBootstrapSelectComponent.prototype.layoutService;
    /** @type {?} */
    DynamicNGBootstrapSelectComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-ng-bootstrap-select.component.js.map