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
import { MaskedTextBoxComponent } from "@progress/kendo-angular-inputs";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicInputModel } from "@ng-dynamic-forms/core";
var DynamicKendoMaskedTextBoxComponent = /** @class */ (function (_super) {
    __extends(DynamicKendoMaskedTextBoxComponent, _super);
    function DynamicKendoMaskedTextBoxComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicKendoMaskedTextBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-kendo-maskedtextbox",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <kendo-maskedtextbox #kendoMaskedTextBox\r\n                         [dynamicId]=\"bindId && model.id\"\r\n                         [formControlName]=\"model.id\"\r\n                         [includeLiterals]=\"model.getAdditional('includeLiterals', false)\"\r\n                         [mask]=\"model.mask\"\r\n                         [maskValidation]=\"model.getAdditional('maskValidation', true)\"\r\n                         [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n                         [prompt]=\"model.getAdditional('prompt', '_')\"\r\n                         [promptPlaceholder]=\"model.getAdditional('promptPlaceholder', '')\"\r\n                         [tabIndex]=\"model.tabIndex\"\r\n                         (blur)=\"onBlur($event)\"\r\n                         (focus)=\"onFocus($event)\"\r\n                         (valueChange)=\"onChange($event)\"></kendo-maskedtextbox>\r\n\r\n</ng-container>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicKendoMaskedTextBoxComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicKendoMaskedTextBoxComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        kendoMaskedTextBox: [{ type: ViewChild, args: ["kendoMaskedTextBox",] }]
    };
    return DynamicKendoMaskedTextBoxComponent;
}(DynamicFormControlComponent));
export { DynamicKendoMaskedTextBoxComponent };
if (false) {
    /** @type {?} */
    DynamicKendoMaskedTextBoxComponent.prototype.bindId;
    /** @type {?} */
    DynamicKendoMaskedTextBoxComponent.prototype.group;
    /** @type {?} */
    DynamicKendoMaskedTextBoxComponent.prototype.layout;
    /** @type {?} */
    DynamicKendoMaskedTextBoxComponent.prototype.model;
    /** @type {?} */
    DynamicKendoMaskedTextBoxComponent.prototype.blur;
    /** @type {?} */
    DynamicKendoMaskedTextBoxComponent.prototype.change;
    /** @type {?} */
    DynamicKendoMaskedTextBoxComponent.prototype.focus;
    /** @type {?} */
    DynamicKendoMaskedTextBoxComponent.prototype.kendoMaskedTextBox;
    /** @type {?} */
    DynamicKendoMaskedTextBoxComponent.prototype.layoutService;
    /** @type {?} */
    DynamicKendoMaskedTextBoxComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-kendo-maskedtextbox.component.js.map