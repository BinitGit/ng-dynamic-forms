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
var DynamicNGBootstrapCalendarComponent = /** @class */ (function (_super) {
    __extends(DynamicNGBootstrapCalendarComponent, _super);
    function DynamicNGBootstrapCalendarComponent(layoutService, validationService, config) {
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
    DynamicNGBootstrapCalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-ng-bootstrap-calendar",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <ngb-datepicker [displayMonths]=\"model.getAdditional('displayMonths', config['displayMonths'])\"\r\n                    [dynamicId]=\"bindId && model.id\"\r\n                    [firstDayOfWeek]=\"model.getAdditional('firstDayOfWeek', config['firstDayOfWeek'])\"\r\n                    [formControlName]=\"model.id\"\r\n                    [maxDate]=\"model.max\"\r\n                    [minDate]=\"model.min\"\r\n                    [navigation]=\"model.getAdditional('navigation', config['navigation'])\"\r\n                    [ngClass]=\"getClass('element', 'control')\"\r\n                    [outsideDays]=\"model.getAdditional('outsideDays', config['outsideDays'])\"\r\n                    [showWeekdays]=\"model.getAdditional('showWeekdays', config['showWeekdays'])\"\r\n                    [showWeekNumbers]=\"model.getAdditional('showWeekNumbers', config['showWeekNumbers'])\"\r\n                    [startDate]=\"model.focusedDate\"\r\n                    (select)=\"onChange($event)\"></ngb-datepicker>\r\n\r\n</ng-container>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicNGBootstrapCalendarComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService },
        { type: NgbDatepickerConfig }
    ]; };
    DynamicNGBootstrapCalendarComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        ngbCalendar: [{ type: ViewChild, args: [NgbDatepicker,] }]
    };
    return DynamicNGBootstrapCalendarComponent;
}(DynamicFormControlComponent));
export { DynamicNGBootstrapCalendarComponent };
if (false) {
    /** @type {?} */
    DynamicNGBootstrapCalendarComponent.prototype.bindId;
    /** @type {?} */
    DynamicNGBootstrapCalendarComponent.prototype.group;
    /** @type {?} */
    DynamicNGBootstrapCalendarComponent.prototype.layout;
    /** @type {?} */
    DynamicNGBootstrapCalendarComponent.prototype.model;
    /** @type {?} */
    DynamicNGBootstrapCalendarComponent.prototype.blur;
    /** @type {?} */
    DynamicNGBootstrapCalendarComponent.prototype.change;
    /** @type {?} */
    DynamicNGBootstrapCalendarComponent.prototype.focus;
    /** @type {?} */
    DynamicNGBootstrapCalendarComponent.prototype.ngbCalendar;
    /** @type {?} */
    DynamicNGBootstrapCalendarComponent.prototype.layoutService;
    /** @type {?} */
    DynamicNGBootstrapCalendarComponent.prototype.validationService;
    /** @type {?} */
    DynamicNGBootstrapCalendarComponent.prototype.config;
}
//# sourceMappingURL=dynamic-ng-bootstrap-calendar.component.js.map