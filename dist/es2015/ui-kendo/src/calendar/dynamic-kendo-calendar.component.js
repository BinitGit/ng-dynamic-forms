/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { CalendarComponent } from "@progress/kendo-angular-dateinputs";
import { DynamicDatePickerModel, DynamicFormLayoutService, DynamicFormValidationService } from "@ng-dynamic-forms/core";
import { KENDO_TEMPLATE_DIRECTIVES } from "../dynamic-kendo-form.const";
import { DynamicKendoTemplateableFormControlComponent } from "../dynamic-kendo-templateable-form-control.component";
export class DynamicKendoCalendarComponent extends DynamicKendoTemplateableFormControlComponent {
    /**
     * @param {?} layoutService
     * @param {?} validationService
     */
    constructor(layoutService, validationService) {
        super(layoutService, validationService);
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.templateDirectives = KENDO_TEMPLATE_DIRECTIVES;
        this.bindId = true;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.customEvent = new EventEmitter();
        this.focus = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get viewChild() {
        return this.kendoCalendar;
    }
}
DynamicKendoCalendarComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-kendo-calendar",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <kendo-calendar #kendoCalendar\r\n                    [activeView]=\"model.getAdditional('activeView', 'month')\"\r\n                    [bottomView]=\"model.getAdditional('bottomView', 'month')\"\r\n                    [dynamicId]=\"bindId && model.id\"\r\n                    [focusedDate]=\"model.focusedDate\"\r\n                    [formControlName]=\"model.id\"\r\n                    [max]=\"model.max\"\r\n                    [min]=\"model.min\"\r\n                    [navigation]=\"model.getAdditional('navigation', true)\"\r\n                    [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n                    [rangeValidation]=\"model.getAdditional('rangeValidation', true)\"\r\n                    [tabindex]=\"model.tabIndex\"\r\n                    [topView]=\"model.getAdditional('topView', 'century')\"\r\n                    [weekNumber]=\"model.getAdditional('weekNumber', false)\"\r\n                    (activeViewChange)=\"onCustomEvent($event, 'activeViewChange')\"\r\n                    (activeViewDateChange)=\"onCustomEvent($event, 'activeViewDateChange')\"\r\n                    (valueChange)=\"onChange($event)\"></kendo-calendar>\r\n\r\n</ng-container>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicKendoCalendarComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicKendoCalendarComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    templates: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    customEvent: [{ type: Output }],
    focus: [{ type: Output }],
    kendoCalendar: [{ type: ViewChild, args: ["kendoCalendar",] }]
};
if (false) {
    /** @type {?} */
    DynamicKendoCalendarComponent.prototype.templateDirectives;
    /** @type {?} */
    DynamicKendoCalendarComponent.prototype.bindId;
    /** @type {?} */
    DynamicKendoCalendarComponent.prototype.group;
    /** @type {?} */
    DynamicKendoCalendarComponent.prototype.layout;
    /** @type {?} */
    DynamicKendoCalendarComponent.prototype.model;
    /** @type {?} */
    DynamicKendoCalendarComponent.prototype.templates;
    /** @type {?} */
    DynamicKendoCalendarComponent.prototype.blur;
    /** @type {?} */
    DynamicKendoCalendarComponent.prototype.change;
    /** @type {?} */
    DynamicKendoCalendarComponent.prototype.customEvent;
    /** @type {?} */
    DynamicKendoCalendarComponent.prototype.focus;
    /** @type {?} */
    DynamicKendoCalendarComponent.prototype.kendoCalendar;
    /** @type {?} */
    DynamicKendoCalendarComponent.prototype.layoutService;
    /** @type {?} */
    DynamicKendoCalendarComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-kendo-calendar.component.js.map