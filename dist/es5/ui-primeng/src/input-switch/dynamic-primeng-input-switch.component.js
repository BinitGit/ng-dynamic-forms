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
import { InputSwitch } from "primeng/primeng";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicSwitchModel } from "@ng-dynamic-forms/core";
var DynamicPrimeNGInputSwitchComponent = /** @class */ (function (_super) {
    __extends(DynamicPrimeNGInputSwitchComponent, _super);
    function DynamicPrimeNGInputSwitchComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicPrimeNGInputSwitchComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-primeng-input-switch",
                    template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <p-inputSwitch #pInputSwitch\r\n                   [dynamicId]=\"bindId && model.id\"\r\n                   [formControlName]=\"model.id\"\r\n                   [ngClass]=\"getClass('element', 'control')\"\r\n                   [tabindex]=\"model.tabIndex\"\r\n                   (onChange)=\"onChange($event)\"></p-inputSwitch>\r\n\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicPrimeNGInputSwitchComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicPrimeNGInputSwitchComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        pInputSwitch: [{ type: ViewChild, args: ["pInputSwitch",] }]
    };
    return DynamicPrimeNGInputSwitchComponent;
}(DynamicFormControlComponent));
export { DynamicPrimeNGInputSwitchComponent };
if (false) {
    /** @type {?} */
    DynamicPrimeNGInputSwitchComponent.prototype.bindId;
    /** @type {?} */
    DynamicPrimeNGInputSwitchComponent.prototype.group;
    /** @type {?} */
    DynamicPrimeNGInputSwitchComponent.prototype.layout;
    /** @type {?} */
    DynamicPrimeNGInputSwitchComponent.prototype.model;
    /** @type {?} */
    DynamicPrimeNGInputSwitchComponent.prototype.blur;
    /** @type {?} */
    DynamicPrimeNGInputSwitchComponent.prototype.change;
    /** @type {?} */
    DynamicPrimeNGInputSwitchComponent.prototype.focus;
    /** @type {?} */
    DynamicPrimeNGInputSwitchComponent.prototype.pInputSwitch;
    /** @type {?} */
    DynamicPrimeNGInputSwitchComponent.prototype.layoutService;
    /** @type {?} */
    DynamicPrimeNGInputSwitchComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-primeng-input-switch.component.js.map