/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DatePickerComponent } from "@progress/kendo-angular-dateinputs";
import { DynamicDatePickerModel, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent } from "@ng-dynamic-forms/core";
export class DynamicKendoDatePickerComponent extends DynamicFormControlComponent {
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
}
DynamicKendoDatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-kendo-datepicker",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <kendo-datepicker #kendoDatePicker\r\n                      [activeView]=\"model.getAdditional('activeView', 'month')\"\r\n                      [bottomView]=\"model.getAdditional('bottomView', 'month')\"\r\n                      [dynamicId]=\"bindId && model.id\"\r\n                      [focusedDate]=\"model.focusedDate\"\r\n                      [format]=\"model.format || 'd'\"\r\n                      [formControlName]=\"model.id\"\r\n                      [max]=\"model.max\"\r\n                      [min]=\"model.min\"\r\n                      [navigation]=\"model.getAdditional('navigation', true)\"\r\n                      [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n                      [popupSettings]=\"model.getAdditional('popupSettings', {})\"\r\n                      [rangeValidation]=\"model.getAdditional('rangeValidation', true)\"\r\n                      [tabindex]=\"model.tabIndex\"\r\n                      [topView]=\"model.getAdditional('topView', 'century')\"\r\n                      [weekNumber]=\"model.getAdditional('weekNumber', false)\"\r\n                      (blur)=\"onBlur($event)\"\r\n                      (close)=\"onCustomEvent($event, 'close')\"\r\n                      (focus)=\"onFocus($event)\"\r\n                      (open)=\"onCustomEvent($event, 'open')\"\r\n                      (valueChange)=\"onChange($event)\"></kendo-datepicker>\r\n\r\n</ng-container>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicKendoDatePickerComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicKendoDatePickerComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    customEvent: [{ type: Output }],
    focus: [{ type: Output }],
    kendoDatePicker: [{ type: ViewChild, args: ["kendoDatePicker",] }]
};
if (false) {
    /** @type {?} */
    DynamicKendoDatePickerComponent.prototype.bindId;
    /** @type {?} */
    DynamicKendoDatePickerComponent.prototype.group;
    /** @type {?} */
    DynamicKendoDatePickerComponent.prototype.layout;
    /** @type {?} */
    DynamicKendoDatePickerComponent.prototype.model;
    /** @type {?} */
    DynamicKendoDatePickerComponent.prototype.blur;
    /** @type {?} */
    DynamicKendoDatePickerComponent.prototype.change;
    /** @type {?} */
    DynamicKendoDatePickerComponent.prototype.customEvent;
    /** @type {?} */
    DynamicKendoDatePickerComponent.prototype.focus;
    /** @type {?} */
    DynamicKendoDatePickerComponent.prototype.kendoDatePicker;
    /** @type {?} */
    DynamicKendoDatePickerComponent.prototype.layoutService;
    /** @type {?} */
    DynamicKendoDatePickerComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-kendo-datepicker.component.js.map