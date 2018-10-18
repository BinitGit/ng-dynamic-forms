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
import { InputMask } from "primeng/primeng";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicInputModel } from "@ng-dynamic-forms/core";
var DynamicPrimeNGInputMaskComponent = /** @class */ (function (_super) {
    __extends(DynamicPrimeNGInputMaskComponent, _super);
    function DynamicPrimeNGInputMaskComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.customEvent = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicPrimeNGInputMaskComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-primeng-input-mask",
                    template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <p-inputMask #pInputMask\r\n                 [autoClear]=\"model.getAdditional('autoClear', true)\"\r\n                 [dynamicId]=\"bindId && model.id\"\r\n                 [formControlName]=\"model.id\"\r\n                 [mask]=\"model.mask\"\r\n                 [ngClass]=\"getClass('element', 'control')\"\r\n                 [placeholder]=\"model.placeholder\"\r\n                 [readonly]=\"model.readOnly\"\r\n                 [slotChar]=\"model.getAdditional('slotChar', '_')\"\r\n                 [tabindex]=\"model.tabIndex\"\r\n                 (change)=\"onChange($event)\"\r\n                 (onBlur)=\"onBlur($event)\"\r\n                 (onComplete)=\"onCustomEvent($event, 'onComplete')\"\r\n                 (onFocus)=\"onFocus($event)\"></p-inputMask>\r\n\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicPrimeNGInputMaskComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicPrimeNGInputMaskComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        customEvent: [{ type: Output }],
        focus: [{ type: Output }],
        pInputMask: [{ type: ViewChild, args: ["pInputMask",] }]
    };
    return DynamicPrimeNGInputMaskComponent;
}(DynamicFormControlComponent));
export { DynamicPrimeNGInputMaskComponent };
if (false) {
    /** @type {?} */
    DynamicPrimeNGInputMaskComponent.prototype.bindId;
    /** @type {?} */
    DynamicPrimeNGInputMaskComponent.prototype.group;
    /** @type {?} */
    DynamicPrimeNGInputMaskComponent.prototype.layout;
    /** @type {?} */
    DynamicPrimeNGInputMaskComponent.prototype.model;
    /** @type {?} */
    DynamicPrimeNGInputMaskComponent.prototype.blur;
    /** @type {?} */
    DynamicPrimeNGInputMaskComponent.prototype.change;
    /** @type {?} */
    DynamicPrimeNGInputMaskComponent.prototype.customEvent;
    /** @type {?} */
    DynamicPrimeNGInputMaskComponent.prototype.focus;
    /** @type {?} */
    DynamicPrimeNGInputMaskComponent.prototype.pInputMask;
    /** @type {?} */
    DynamicPrimeNGInputMaskComponent.prototype.layoutService;
    /** @type {?} */
    DynamicPrimeNGInputMaskComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-primeng-input-mask.component.js.map