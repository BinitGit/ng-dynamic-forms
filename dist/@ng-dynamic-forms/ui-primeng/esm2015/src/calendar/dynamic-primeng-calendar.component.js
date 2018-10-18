/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Calendar } from "primeng/primeng";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent } from "@ng-dynamic-forms/core";
export class DynamicPrimeNGCalendarComponent extends DynamicFormControlComponent {
    /**
     * @param {?} layoutService
     * @param {?} validationService
     */
    constructor(layoutService, validationService) {
        super(layoutService, validationService);
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.bindId = true;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.customEvent = new EventEmitter();
        this.focus = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get focusedDate() {
        return (/** @type {?} */ (this.model)).focusedDate || null;
    }
    /**
     * @return {?}
     */
    get inline() {
        return (/** @type {?} */ (this.model)).inline || false;
    }
    /**
     * @return {?}
     */
    get showSeconds() {
        return (/** @type {?} */ (this.model)).showSeconds || false;
    }
}
DynamicPrimeNGCalendarComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-primeng-calendar",
                template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <p-calendar #pCalendar\r\n                [dateFormat]=\"model.format || 'mm/dd/yy'\"\r\n                [defaultDate]=\"focusedDate\"\r\n                [disabledDates]=\"model.getAdditional('disabledDates')\"\r\n                [disabledDays]=\"model.getAdditional('disabledDays')\"\r\n                [dynamicId]=\"bindId && model.id\"\r\n                [formControlName]=\"model.id\"\r\n                [hourFormat]=\"model.getAdditional('hourFormat', '24')\"\r\n                [icon]=\"model.getAdditional('icon', 'pi pi-calendar')\"\r\n                [inline]=\"inline\"\r\n                [locale]=\"model.getAdditional('locale', { firstDayOfWeek: 0, dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'], monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], today: 'Today', clear: 'Clear' })\"\r\n                [maxDate]=\"model.max\"\r\n                [maxDateCount]=\"model.getAdditional('maxDateCount')\"\r\n                [minDate]=\"model.min\"\r\n                [monthNavigator]=\"model.getAdditional('monthNavigator', false)\"\r\n                [ngClass]=\"getClass('element', 'control')\"\r\n                [placeholder]=\"model.placeholder\"\r\n                [selectionMode]=\"model.getAdditional('selectionMode', 'single')\"\r\n                [selectOtherMonths]=\"model.getAdditional('selectOtherMonths', false)\"\r\n                [shortYearCutoff]=\"model.getAdditional('shortYearCutoff', '+10')\"\r\n                [showButtonBar]=\"model.getAdditional('showButtonBar', false)\"\r\n                [showIcon]=\"model.getAdditional('showIcon', true)\"\r\n                [showOnFocus]=\"model.getAdditional('showOnFocus', true)\"\r\n                [showOtherMonths]=\"model.getAdditional('showOtherMonths', true)\"\r\n                [showSeconds]=\"showSeconds\"\r\n                [showTime]=\"model.getAdditional('showTime', false)\"\r\n                [stepHour]=\"model.getAdditional('stepHour', 1)\"\r\n                [stepMinute]=\"model.getAdditional('stepMinute', 1)\"\r\n                [stepSecond]=\"model.getAdditional('stepSecond', 1)\"\r\n                [tabindex]=\"model.tabIndex\"\r\n                [timeOnly]=\"model.type === 'TIMEPICKER'\"\r\n                [yearNavigator]=\"model.getAdditional('yearNavigator', false)\"\r\n                [yearRange]=\"model.getAdditional('yearRange')\"\r\n                (onBlur)=\"onBlur($event)\"\r\n                (onClearClick)=\"onCustomEvent($event, 'onClearClick')\"\r\n                (onClose)=\"onCustomEvent($event, 'onClose')\"\r\n                (onFocus)=\"onFocus($event)\"\r\n                (onInput)=\"onChange($event)\"\r\n                (onSelect)=\"onChange($event)\"\r\n                (onTodayClick)=\"onCustomEvent($event, 'onTodayClick')\"></p-calendar>\r\n\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicPrimeNGCalendarComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
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