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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { NumericTextBoxComponent } from "@progress/kendo-angular-inputs";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicInputModel } from "@ng-dynamic-forms/core";
var DynamicKendoNumericTextBoxComponent = /** @class */ (function (_super) {
    __extends(DynamicKendoNumericTextBoxComponent, _super);
    function DynamicKendoNumericTextBoxComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicKendoNumericTextBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-kendo-numerictextbox",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <kendo-numerictextbox #kendoNumericTextBox\r\n                          [autoCorrect]=\"model.getAdditional('autoCorrect', false)\"\r\n                          [decimals]=\"model.getAdditional('decimals')\"\r\n                          [dynamicId]=\"bindId && model.id\"\r\n                          [format]=\"model.getAdditional('format', 'n0')\"\r\n                          [formControlName]=\"model.id\"\r\n                          [max]=\"model.max\"\r\n                          [min]=\"model.min\"\r\n                          [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n                          [placeholder]=\"model.placeholder\"\r\n                          [rangeValidation]=\"model.getAdditional('rangeValidation', true)\"\r\n                          [spinners]=\"model.getAdditional('spinners', true)\"\r\n                          [step]=\"model.step\"\r\n                          [tabIndex]=\"model.tabIndex\"\r\n                          (blur)=\"onBlur($event)\"\r\n                          (focus)=\"onFocus($event)\"\r\n                          (valueChange)=\"onChange($event)\"></kendo-numerictextbox>\r\n\r\n</ng-container>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicKendoNumericTextBoxComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicKendoNumericTextBoxComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        kendoNumericTextBox: [{ type: ViewChild, args: ["kendoNumericTextBox",] }]
    };
    return DynamicKendoNumericTextBoxComponent;
}(DynamicFormControlComponent));
export { DynamicKendoNumericTextBoxComponent };
if (false) {
    /** @type {?} */
    DynamicKendoNumericTextBoxComponent.prototype.bindId;
    /** @type {?} */
    DynamicKendoNumericTextBoxComponent.prototype.group;
    /** @type {?} */
    DynamicKendoNumericTextBoxComponent.prototype.layout;
    /** @type {?} */
    DynamicKendoNumericTextBoxComponent.prototype.model;
    /** @type {?} */
    DynamicKendoNumericTextBoxComponent.prototype.blur;
    /** @type {?} */
    DynamicKendoNumericTextBoxComponent.prototype.change;
    /** @type {?} */
    DynamicKendoNumericTextBoxComponent.prototype.focus;
    /** @type {?} */
    DynamicKendoNumericTextBoxComponent.prototype.kendoNumericTextBox;
    /** @type {?} */
    DynamicKendoNumericTextBoxComponent.prototype.layoutService;
    /** @type {?} */
    DynamicKendoNumericTextBoxComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-kendo-numerictextbox.component.js.map