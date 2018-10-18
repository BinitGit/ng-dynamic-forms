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
import { TimepickerComponent } from "ngx-bootstrap/timepicker";
import { DynamicFormControlComponent, DynamicFormLayoutService, DynamicFormValidationService, DynamicTimePickerModel } from "@ng-dynamic-forms/core";
var DynamicBootstrapTimePickerComponent = /** @class */ (function (_super) {
    __extends(DynamicBootstrapTimePickerComponent, _super);
    function DynamicBootstrapTimePickerComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicBootstrapTimePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-bootstrap-timepicker",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <timepicker [arrowkeys]=\"model.getAdditional('arrowkeys', true)\"\r\n                [dynamicId]=\"bindId && model.id\"\r\n                [formControlName]=\"model.id\"\r\n                [hourStep]=\"model.getAdditional('hourStep', 1)\"\r\n                [max]=\"model.max\"\r\n                [min]=\"model.min\"\r\n                [mousewheel]=\"model.getAdditional('mousewheel', true)\"\r\n                [minuteStep]=\"model.getAdditional('minuteStep', 1)\"\r\n                [ngClass]=\"getClass('element', 'control')\"\r\n                [secondsStep]=\"model.getAdditional('secondsStep', 1)\"\r\n                [showMeridian]=\"model.meridian\"\r\n                [showSeconds]=\"model.showSeconds\"\r\n                [showSpinners]=\"model.getAdditional('spinners', true)\"></timepicker>\r\n\r\n</ng-container>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicBootstrapTimePickerComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicBootstrapTimePickerComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        bsTimePicker: [{ type: ViewChild, args: [TimepickerComponent,] }]
    };
    return DynamicBootstrapTimePickerComponent;
}(DynamicFormControlComponent));
export { DynamicBootstrapTimePickerComponent };
if (false) {
    /** @type {?} */
    DynamicBootstrapTimePickerComponent.prototype.bindId;
    /** @type {?} */
    DynamicBootstrapTimePickerComponent.prototype.group;
    /** @type {?} */
    DynamicBootstrapTimePickerComponent.prototype.layout;
    /** @type {?} */
    DynamicBootstrapTimePickerComponent.prototype.model;
    /** @type {?} */
    DynamicBootstrapTimePickerComponent.prototype.blur;
    /** @type {?} */
    DynamicBootstrapTimePickerComponent.prototype.change;
    /** @type {?} */
    DynamicBootstrapTimePickerComponent.prototype.focus;
    /** @type {?} */
    DynamicBootstrapTimePickerComponent.prototype.bsTimePicker;
    /** @type {?} */
    DynamicBootstrapTimePickerComponent.prototype.layoutService;
    /** @type {?} */
    DynamicBootstrapTimePickerComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-bootstrap-timepicker.component.js.map