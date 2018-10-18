/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { TimePickerComponent } from "@progress/kendo-angular-dateinputs";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicTimePickerModel } from "@ng-dynamic-forms/core";
export class DynamicKendoTimePickerComponent extends DynamicFormControlComponent {
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
DynamicKendoTimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-kendo-timepicker",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <kendo-timepicker #kendoTimePicker\r\n                      [cancelButton]=\"model.getAdditional('cancelButton', true)\"\r\n                      [dynamicId]=\"bindId && model.id\"\r\n                      [format]=\"model.format\"\r\n                      [formControlName]=\"model.id\"\r\n                      [formatPlaceholder]=\"model.getAdditional('formatPlaceholder', 'wide')\"\r\n                      [max]=\"model.max\"\r\n                      [min]=\"model.min\"\r\n                      [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n                      [nowButton]=\"model.getAdditional('nowButton', true)\"\r\n                      [popupSettings]=\"model.getAdditional('popupSettings', {})\"\r\n                      [rangeValidation]=\"model.getAdditional('rangeValidation', true)\"\r\n                      [steps]=\"model.getAdditional('steps', {})\"\r\n                      [tabindex]=\"model.tabIndex\"\r\n                      (blur)=\"onBlur($event)\"\r\n                      (close)=\"onCustomEvent($event, 'close')\"\r\n                      (focus)=\"onFocus($event)\"\r\n                      (open)=\"onCustomEvent($event, 'open')\"\r\n                      (valueChange)=\"onChange($event)\"></kendo-timepicker>\r\n\r\n</ng-container>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicKendoTimePickerComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicKendoTimePickerComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    customEvent: [{ type: Output }],
    focus: [{ type: Output }],
    kendoTimePicker: [{ type: ViewChild, args: ["kendoTimePicker",] }]
};
if (false) {
    /** @type {?} */
    DynamicKendoTimePickerComponent.prototype.bindId;
    /** @type {?} */
    DynamicKendoTimePickerComponent.prototype.group;
    /** @type {?} */
    DynamicKendoTimePickerComponent.prototype.layout;
    /** @type {?} */
    DynamicKendoTimePickerComponent.prototype.model;
    /** @type {?} */
    DynamicKendoTimePickerComponent.prototype.blur;
    /** @type {?} */
    DynamicKendoTimePickerComponent.prototype.change;
    /** @type {?} */
    DynamicKendoTimePickerComponent.prototype.customEvent;
    /** @type {?} */
    DynamicKendoTimePickerComponent.prototype.focus;
    /** @type {?} */
    DynamicKendoTimePickerComponent.prototype.kendoTimePicker;
    /** @type {?} */
    DynamicKendoTimePickerComponent.prototype.layoutService;
    /** @type {?} */
    DynamicKendoTimePickerComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-kendo-timepicker.component.js.map