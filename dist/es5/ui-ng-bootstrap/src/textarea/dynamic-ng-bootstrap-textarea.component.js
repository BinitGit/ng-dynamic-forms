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
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicTextAreaModel } from "@ng-dynamic-forms/core";
var DynamicNGBootstrapTextAreaComponent = /** @class */ (function (_super) {
    __extends(DynamicNGBootstrapTextAreaComponent, _super);
    function DynamicNGBootstrapTextAreaComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicNGBootstrapTextAreaComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-ng-bootstrap-textarea",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <textarea class=\"form-control\"\r\n              [class.is-invalid]=\"showErrorMessages\"\r\n              [dynamicId]=\"bindId && model.id\"\r\n              [cols]=\"model.cols\"\r\n              [formControlName]=\"model.id\"\r\n              [maxlength]=\"model.maxLength\"\r\n              [minlength]=\"model.minLength\"\r\n              [name]=\"model.name\"\r\n              [ngClass]=\"getClass('element', 'control')\"\r\n              [placeholder]=\"model.placeholder\"\r\n              [readonly]=\"model.readOnly\"\r\n              [required]=\"model.required\"\r\n              [rows]=\"model.rows\"\r\n              [spellcheck]=\"model.spellCheck\"\r\n              [tabindex]=\"model.tabIndex\"\r\n              [wrap]=\"model.wrap\"\r\n              (blur)=\"onBlur($event)\"\r\n              (change)=\"onChange($event)\"\r\n              (focus)=\"onFocus($event)\"></textarea>\r\n\r\n</ng-container>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicNGBootstrapTextAreaComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicNGBootstrapTextAreaComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }]
    };
    return DynamicNGBootstrapTextAreaComponent;
}(DynamicFormControlComponent));
export { DynamicNGBootstrapTextAreaComponent };
if (false) {
    /** @type {?} */
    DynamicNGBootstrapTextAreaComponent.prototype.bindId;
    /** @type {?} */
    DynamicNGBootstrapTextAreaComponent.prototype.group;
    /** @type {?} */
    DynamicNGBootstrapTextAreaComponent.prototype.layout;
    /** @type {?} */
    DynamicNGBootstrapTextAreaComponent.prototype.model;
    /** @type {?} */
    DynamicNGBootstrapTextAreaComponent.prototype.blur;
    /** @type {?} */
    DynamicNGBootstrapTextAreaComponent.prototype.change;
    /** @type {?} */
    DynamicNGBootstrapTextAreaComponent.prototype.focus;
    /** @type {?} */
    DynamicNGBootstrapTextAreaComponent.prototype.layoutService;
    /** @type {?} */
    DynamicNGBootstrapTextAreaComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-ng-bootstrap-textarea.component.js.map