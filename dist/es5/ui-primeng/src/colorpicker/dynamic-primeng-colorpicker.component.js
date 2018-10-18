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
import { ColorPicker } from "primeng/primeng";
import { DynamicColorPickerModel, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, } from "@ng-dynamic-forms/core";
var DynamicPrimeNGColorPickerComponent = /** @class */ (function (_super) {
    __extends(DynamicPrimeNGColorPickerComponent, _super);
    function DynamicPrimeNGColorPickerComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicPrimeNGColorPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-primeng-colorpicker",
                    template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <p-colorPicker #pColorPicker\r\n                   [dynamicId]=\"bindId && model.id\"\r\n                   [format]=\"model.format || 'hex'\"\r\n                   [formControlName]=\"model.id\"\r\n                   [inline]=\"model.inline\"\r\n                   [ngClass]=\"getClass('element','control')\"\r\n                   [tabindex]=\"model.tabIndex\"\r\n                   (onChange)=\"onChange($event)\"></p-colorPicker>\r\n\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicPrimeNGColorPickerComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicPrimeNGColorPickerComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        pColorPicker: [{ type: ViewChild, args: ["pColorPicker",] }]
    };
    return DynamicPrimeNGColorPickerComponent;
}(DynamicFormControlComponent));
export { DynamicPrimeNGColorPickerComponent };
if (false) {
    /** @type {?} */
    DynamicPrimeNGColorPickerComponent.prototype.bindId;
    /** @type {?} */
    DynamicPrimeNGColorPickerComponent.prototype.group;
    /** @type {?} */
    DynamicPrimeNGColorPickerComponent.prototype.layout;
    /** @type {?} */
    DynamicPrimeNGColorPickerComponent.prototype.model;
    /** @type {?} */
    DynamicPrimeNGColorPickerComponent.prototype.blur;
    /** @type {?} */
    DynamicPrimeNGColorPickerComponent.prototype.change;
    /** @type {?} */
    DynamicPrimeNGColorPickerComponent.prototype.focus;
    /** @type {?} */
    DynamicPrimeNGColorPickerComponent.prototype.pColorPicker;
    /** @type {?} */
    DynamicPrimeNGColorPickerComponent.prototype.layoutService;
    /** @type {?} */
    DynamicPrimeNGColorPickerComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-primeng-colorpicker.component.js.map