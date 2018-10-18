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
var DynamicKendoTextAreaComponent = /** @class */ (function (_super) {
    __extends(DynamicKendoTextAreaComponent, _super);
    function DynamicKendoTextAreaComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicKendoTextAreaComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-kendo-textarea",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n        <textarea class=\"k-textarea\"\r\n                  [cols]=\"model.cols\"\r\n                  [dynamicId]=\"bindId && model.id\"\r\n                  [formControlName]=\"model.id\"\r\n                  [maxlength]=\"model.maxLength\"\r\n                  [minlength]=\"model.minLength\"\r\n                  [name]=\"model.name\"\r\n                  [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n                  [placeholder]=\"model.placeholder\"\r\n                  [readonly]=\"model.readOnly\"\r\n                  [required]=\"model.required\"\r\n                  [rows]=\"model.rows\"\r\n                  [spellcheck]=\"model.spellCheck\"\r\n                  [tabindex]=\"model.tabIndex\"\r\n                  [wrap]=\"model.wrap\"\r\n                  (blur)=\"onBlur($event)\"\r\n                  (change)=\"onChange($event)\"\r\n                  (focus)=\"onFocus($event)\"></textarea>\r\n\r\n</ng-container>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicKendoTextAreaComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicKendoTextAreaComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }]
    };
    return DynamicKendoTextAreaComponent;
}(DynamicFormControlComponent));
export { DynamicKendoTextAreaComponent };
if (false) {
    /** @type {?} */
    DynamicKendoTextAreaComponent.prototype.bindId;
    /** @type {?} */
    DynamicKendoTextAreaComponent.prototype.group;
    /** @type {?} */
    DynamicKendoTextAreaComponent.prototype.layout;
    /** @type {?} */
    DynamicKendoTextAreaComponent.prototype.model;
    /** @type {?} */
    DynamicKendoTextAreaComponent.prototype.blur;
    /** @type {?} */
    DynamicKendoTextAreaComponent.prototype.change;
    /** @type {?} */
    DynamicKendoTextAreaComponent.prototype.focus;
    /** @type {?} */
    DynamicKendoTextAreaComponent.prototype.layoutService;
    /** @type {?} */
    DynamicKendoTextAreaComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-kendo-textarea.component.js.map