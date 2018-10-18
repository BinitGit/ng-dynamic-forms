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
import { NgbDatepicker, NgbDatepickerConfig } from "@ng-bootstrap/ng-bootstrap";
import { DynamicDatePickerModel, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent } from "@ng-dynamic-forms/core";
var DynamicNGBootstrapDatePickerComponent = /** @class */ (function (_super) {
    __extends(DynamicNGBootstrapDatePickerComponent, _super);
    function DynamicNGBootstrapDatePickerComponent(layoutService, validationService, config) {
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
    DynamicNGBootstrapDatePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-ng-bootstrap-datepicker",
                    template: "<div [formGroup]=\"group\" class=\"input-group\">\r\n\r\n    <input ngbDatepicker class=\"form-control\" #datepicker=\"ngbDatepicker\"\r\n           [class.is-invalid]=\"showErrorMessages\"\r\n           [displayMonths]=\"model.getAdditional('displayMonths', config['displayMonths'])\"\r\n           [dynamicId]=\"bindId && model.id\"\r\n           [firstDayOfWeek]=\"model.getAdditional('firstDayOfWeek', config['firstDayOfWeek'])\"\r\n           [formControlName]=\"model.id\"\r\n           [maxDate]=\"model.max\"\r\n           [minDate]=\"model.min\"\r\n           [name]=\"model.name\"\r\n           [navigation]=\"model.getAdditional('navigation', config['navigation'])\"\r\n           [ngClass]=\"getClass('element', 'control')\"\r\n           [outsideDays]=\"model.getAdditional('outsideDays', config['outsideDays'])\"\r\n           [placeholder]=\"model.placeholder\"\r\n           [placement]=\"model.getAdditional('placement', 'bottom-left')\"\r\n           [showWeekdays]=\"model.getAdditional('showWeekdays', config['showWeekdays'])\"\r\n           [showWeekNumbers]=\"model.getAdditional('showWeekNumbers', config['showWeekNumbers'])\"\r\n           [startDate]=\"model.focusedDate\"\r\n           (blur)=\"onBlur($event)\"\r\n           (change)=\"onChange($event)\"\r\n           (focus)=\"onFocus($event)\">\r\n\r\n    <div class=\"input-group-append\">\r\n\r\n        <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"datepicker.toggle()\">\r\n\r\n            <img *ngIf=\"model.toggleIcon\" [src]=\"model.toggleIcon\" style=\"cursor: pointer;\"/>\r\n            <span *ngIf=\"model.toggleLabel\">{{ model.toggleLabel }}</span>\r\n\r\n        </button>\r\n\r\n    </div>\r\n\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicNGBootstrapDatePickerComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService },
        { type: NgbDatepickerConfig }
    ]; };
    DynamicNGBootstrapDatePickerComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        ngbDatePicker: [{ type: ViewChild, args: [NgbDatepicker,] }]
    };
    return DynamicNGBootstrapDatePickerComponent;
}(DynamicFormControlComponent));
export { DynamicNGBootstrapDatePickerComponent };
if (false) {
    /** @type {?} */
    DynamicNGBootstrapDatePickerComponent.prototype.bindId;
    /** @type {?} */
    DynamicNGBootstrapDatePickerComponent.prototype.group;
    /** @type {?} */
    DynamicNGBootstrapDatePickerComponent.prototype.layout;
    /** @type {?} */
    DynamicNGBootstrapDatePickerComponent.prototype.model;
    /** @type {?} */
    DynamicNGBootstrapDatePickerComponent.prototype.blur;
    /** @type {?} */
    DynamicNGBootstrapDatePickerComponent.prototype.change;
    /** @type {?} */
    DynamicNGBootstrapDatePickerComponent.prototype.focus;
    /** @type {?} */
    DynamicNGBootstrapDatePickerComponent.prototype.ngbDatePicker;
    /** @type {?} */
    DynamicNGBootstrapDatePickerComponent.prototype.layoutService;
    /** @type {?} */
    DynamicNGBootstrapDatePickerComponent.prototype.validationService;
    /** @type {?} */
    DynamicNGBootstrapDatePickerComponent.prototype.config;
}
//# sourceMappingURL=dynamic-ng-bootstrap-datepicker.component.js.map