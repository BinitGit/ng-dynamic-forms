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
import { Spinner } from "primeng/primeng";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicInputModel } from "@ng-dynamic-forms/core";
var DynamicPrimeNGSpinnerComponent = /** @class */ (function (_super) {
    __extends(DynamicPrimeNGSpinnerComponent, _super);
    function DynamicPrimeNGSpinnerComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicPrimeNGSpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-primeng-spinner",
                    template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <p-spinner #pSpinner\r\n               [decimalSeparator]=\"model.getAdditional('decimalSeparator', '.')\"\r\n               [dynamicId]=\"bindId && model.id\"\r\n               [formatInput]=\"model.getAdditional('formatInput', true)\"\r\n               [formControlName]=\"model.id\"\r\n               [min]=\"model.min\"\r\n               [max]=\"model.max\"\r\n               [ngClass]=\"getClass('element', 'control')\"\r\n               [placeholder]=\"model.placeholder\"\r\n               [step]=\"model.step || 1\"\r\n               [tabindex]=\"model.tabIndex\"\r\n               [thousandSeparator]=\"model.getAdditional('thousandSeparator', ',')\"\r\n               (onBlur)=\"onBlur($event)\"\r\n               (onChange)=\"onChange($event)\"\r\n               (onFocus)=\"onFocus($event)\"></p-spinner>\r\n\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicPrimeNGSpinnerComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicPrimeNGSpinnerComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        pSpinner: [{ type: ViewChild, args: ["pSpinner",] }]
    };
    return DynamicPrimeNGSpinnerComponent;
}(DynamicFormControlComponent));
export { DynamicPrimeNGSpinnerComponent };
if (false) {
    /** @type {?} */
    DynamicPrimeNGSpinnerComponent.prototype.bindId;
    /** @type {?} */
    DynamicPrimeNGSpinnerComponent.prototype.group;
    /** @type {?} */
    DynamicPrimeNGSpinnerComponent.prototype.layout;
    /** @type {?} */
    DynamicPrimeNGSpinnerComponent.prototype.model;
    /** @type {?} */
    DynamicPrimeNGSpinnerComponent.prototype.blur;
    /** @type {?} */
    DynamicPrimeNGSpinnerComponent.prototype.change;
    /** @type {?} */
    DynamicPrimeNGSpinnerComponent.prototype.focus;
    /** @type {?} */
    DynamicPrimeNGSpinnerComponent.prototype.pSpinner;
    /** @type {?} */
    DynamicPrimeNGSpinnerComponent.prototype.layoutService;
    /** @type {?} */
    DynamicPrimeNGSpinnerComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-primeng-spinner.component.js.map