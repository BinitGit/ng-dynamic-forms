/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { NgbDatepicker, NgbDatepickerConfig } from "@ng-bootstrap/ng-bootstrap";
import { DynamicDatePickerModel, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent } from "@ng-dynamic-forms/core";
export class DynamicNGBootstrapCalendarComponent extends DynamicFormControlComponent {
    /**
     * @param {?} layoutService
     * @param {?} validationService
     * @param {?} config
     */
    constructor(layoutService, validationService, config) {
        super(layoutService, validationService);
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.config = config;
        this.bindId = true;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.focus = new EventEmitter();
    }
}
DynamicNGBootstrapCalendarComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-ng-bootstrap-calendar",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <ngb-datepicker [displayMonths]=\"model.getAdditional('displayMonths', config['displayMonths'])\"\r\n                    [dynamicId]=\"bindId && model.id\"\r\n                    [firstDayOfWeek]=\"model.getAdditional('firstDayOfWeek', config['firstDayOfWeek'])\"\r\n                    [formControlName]=\"model.id\"\r\n                    [maxDate]=\"model.max\"\r\n                    [minDate]=\"model.min\"\r\n                    [navigation]=\"model.getAdditional('navigation', config['navigation'])\"\r\n                    [ngClass]=\"getClass('element', 'control')\"\r\n                    [outsideDays]=\"model.getAdditional('outsideDays', config['outsideDays'])\"\r\n                    [showWeekdays]=\"model.getAdditional('showWeekdays', config['showWeekdays'])\"\r\n                    [showWeekNumbers]=\"model.getAdditional('showWeekNumbers', config['showWeekNumbers'])\"\r\n                    [startDate]=\"model.focusedDate\"\r\n                    (select)=\"onChange($event)\"></ngb-datepicker>\r\n\r\n</ng-container>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicNGBootstrapCalendarComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService },
    { type: NgbDatepickerConfig }
];
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