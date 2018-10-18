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
import { NgbTimepicker, NgbTimepickerConfig } from "@ng-bootstrap/ng-bootstrap";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicTimePickerModel } from "@ng-dynamic-forms/core";
var DynamicNGBootstrapTimePickerComponent = /** @class */ (function (_super) {
    __extends(DynamicNGBootstrapTimePickerComponent, _super);
    function DynamicNGBootstrapTimePickerComponent(layoutService, validationService, config) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.config = config;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicNGBootstrapTimePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-ng-bootstrap-timepicker",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <ngb-timepicker [dynamicId]=\"bindId && model.id\"\r\n                    [formControlName]=\"model.id\"\r\n                    [hourStep]=\"model.getAdditional('hourStep', config['hourStep'])\"\r\n                    [meridian]=\"model.meridian\"\r\n                    [minuteStep]=\"model.getAdditional('minuteStep', config['minuteStep'])\"\r\n                    [ngClass]=\"getClass('element', 'control')\"\r\n                    [seconds]=\"model.showSeconds\"\r\n                    [secondStep]=\"model.getAdditional('secondStep', config['secondStep'])\"\r\n                    [size]=\"model.getAdditional('size', config['size'])\"\r\n                    [spinners]=\"model.getAdditional('spinners', config['spinners'])\"></ngb-timepicker>\r\n\r\n</ng-container>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicNGBootstrapTimePickerComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService },
        { type: NgbTimepickerConfig }
    ]; };
    DynamicNGBootstrapTimePickerComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        ngbTimePicker: [{ type: ViewChild, args: [NgbTimepicker,] }]
    };
    return DynamicNGBootstrapTimePickerComponent;
}(DynamicFormControlComponent));
export { DynamicNGBootstrapTimePickerComponent };
if (false) {
    /** @type {?} */
    DynamicNGBootstrapTimePickerComponent.prototype.bindId;
    /** @type {?} */
    DynamicNGBootstrapTimePickerComponent.prototype.group;
    /** @type {?} */
    DynamicNGBootstrapTimePickerComponent.prototype.layout;
    /** @type {?} */
    DynamicNGBootstrapTimePickerComponent.prototype.model;
    /** @type {?} */
    DynamicNGBootstrapTimePickerComponent.prototype.blur;
    /** @type {?} */
    DynamicNGBootstrapTimePickerComponent.prototype.change;
    /** @type {?} */
    DynamicNGBootstrapTimePickerComponent.prototype.focus;
    /** @type {?} */
    DynamicNGBootstrapTimePickerComponent.prototype.ngbTimePicker;
    /** @type {?} */
    DynamicNGBootstrapTimePickerComponent.prototype.layoutService;
    /** @type {?} */
    DynamicNGBootstrapTimePickerComponent.prototype.validationService;
    /** @type {?} */
    DynamicNGBootstrapTimePickerComponent.prototype.config;
}
//# sourceMappingURL=dynamic-ng-bootstrap-timepicker.component.js.map