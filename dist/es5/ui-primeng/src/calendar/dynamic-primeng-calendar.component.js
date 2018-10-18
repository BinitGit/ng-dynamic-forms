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
import { Calendar } from "primeng/primeng";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent } from "@ng-dynamic-forms/core";
var DynamicPrimeNGCalendarComponent = /** @class */ (function (_super) {
    __extends(DynamicPrimeNGCalendarComponent, _super);
    function DynamicPrimeNGCalendarComponent(layoutService, validationService) {
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
    Object.defineProperty(DynamicPrimeNGCalendarComponent.prototype, "focusedDate", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.model)).focusedDate || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicPrimeNGCalendarComponent.prototype, "inline", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.model)).inline || false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicPrimeNGCalendarComponent.prototype, "showSeconds", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.model)).showSeconds || false;
        },
        enumerable: true,
        configurable: true
    });
    DynamicPrimeNGCalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-primeng-calendar",
                    template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <p-calendar #pCalendar\r\n                [dateFormat]=\"model.format || 'mm/dd/yy'\"\r\n                [defaultDate]=\"focusedDate\"\r\n                [disabledDates]=\"model.getAdditional('disabledDates')\"\r\n                [disabledDays]=\"model.getAdditional('disabledDays')\"\r\n                [dynamicId]=\"bindId && model.id\"\r\n                [formControlName]=\"model.id\"\r\n                [hourFormat]=\"model.getAdditional('hourFormat', '24')\"\r\n                [icon]=\"model.getAdditional('icon', 'pi pi-calendar')\"\r\n                [inline]=\"inline\"\r\n                [locale]=\"model.getAdditional('locale', { firstDayOfWeek: 0, dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'], monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], today: 'Today', clear: 'Clear' })\"\r\n                [maxDate]=\"model.max\"\r\n                [maxDateCount]=\"model.getAdditional('maxDateCount')\"\r\n                [minDate]=\"model.min\"\r\n                [monthNavigator]=\"model.getAdditional('monthNavigator', false)\"\r\n                [ngClass]=\"getClass('element', 'control')\"\r\n                [placeholder]=\"model.placeholder\"\r\n                [selectionMode]=\"model.getAdditional('selectionMode', 'single')\"\r\n                [selectOtherMonths]=\"model.getAdditional('selectOtherMonths', false)\"\r\n                [shortYearCutoff]=\"model.getAdditional('shortYearCutoff', '+10')\"\r\n                [showButtonBar]=\"model.getAdditional('showButtonBar', false)\"\r\n                [showIcon]=\"model.getAdditional('showIcon', true)\"\r\n                [showOnFocus]=\"model.getAdditional('showOnFocus', true)\"\r\n                [showOtherMonths]=\"model.getAdditional('showOtherMonths', true)\"\r\n                [showSeconds]=\"showSeconds\"\r\n                [showTime]=\"model.getAdditional('showTime', false)\"\r\n                [stepHour]=\"model.getAdditional('stepHour', 1)\"\r\n                [stepMinute]=\"model.getAdditional('stepMinute', 1)\"\r\n                [stepSecond]=\"model.getAdditional('stepSecond', 1)\"\r\n                [tabindex]=\"model.tabIndex\"\r\n                [timeOnly]=\"model.type === 'TIMEPICKER'\"\r\n                [yearNavigator]=\"model.getAdditional('yearNavigator', false)\"\r\n                [yearRange]=\"model.getAdditional('yearRange')\"\r\n                (onBlur)=\"onBlur($event)\"\r\n                (onClearClick)=\"onCustomEvent($event, 'onClearClick')\"\r\n                (onClose)=\"onCustomEvent($event, 'onClose')\"\r\n                (onFocus)=\"onFocus($event)\"\r\n                (onInput)=\"onChange($event)\"\r\n                (onSelect)=\"onChange($event)\"\r\n                (onTodayClick)=\"onCustomEvent($event, 'onTodayClick')\"></p-calendar>\r\n\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicPrimeNGCalendarComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicPrimeNGCalendarComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        customEvent: [{ type: Output }],
        focus: [{ type: Output }],
        pCalendar: [{ type: ViewChild, args: ["pCalendar",] }]
    };
    return DynamicPrimeNGCalendarComponent;
}(DynamicFormControlComponent));
export { DynamicPrimeNGCalendarComponent };
if (false) {
    /** @type {?} */
    DynamicPrimeNGCalendarComponent.prototype.bindId;
    /** @type {?} */
    DynamicPrimeNGCalendarComponent.prototype.group;
    /** @type {?} */
    DynamicPrimeNGCalendarComponent.prototype.layout;
    /** @type {?} */
    DynamicPrimeNGCalendarComponent.prototype.model;
    /** @type {?} */
    DynamicPrimeNGCalendarComponent.prototype.blur;
    /** @type {?} */
    DynamicPrimeNGCalendarComponent.prototype.change;
    /** @type {?} */
    DynamicPrimeNGCalendarComponent.prototype.customEvent;
    /** @type {?} */
    DynamicPrimeNGCalendarComponent.prototype.focus;
    /** @type {?} */
    DynamicPrimeNGCalendarComponent.prototype.pCalendar;
    /** @type {?} */
    DynamicPrimeNGCalendarComponent.prototype.layoutService;
    /** @type {?} */
    DynamicPrimeNGCalendarComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-primeng-calendar.component.js.map