/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Datetime } from "@ionic/angular";
import { DynamicDatePickerModel, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent } from "@ng-dynamic-forms/core";
export class DynamicIonicDateTimeComponent extends DynamicFormControlComponent {
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
DynamicIonicDateTimeComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-ionic-datetime",
                template: "<ion-item [formGroup]=\"group\">\r\n\r\n    <ion-label *ngIf=\"model.label !== null\"\r\n               [innerHTML]=\"model.label\"\r\n               [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></ion-label>\r\n\r\n    <ion-datetime #ionDatetime\r\n                  [cancelText]=\"model.getAdditional('cancelText', 'Cancel')\"\r\n                  [doneText]=\"model.getAdditional('doneText', 'Done')\"\r\n                  [displayFormat]=\"model.format || 'MMM D, YYYY'\"\r\n                  [dynamicId]=\"bindId && model.id\"\r\n                  [formControlName]=\"model.id\"\r\n                  [max]=\"model.max\"\r\n                  [min]=\"model.min\"\r\n                  [ngClass]=\"getClass('element', 'control')\"\r\n                  [pickerFormat]=\"model.getAdditional('pickerFormat', 'MMM D, YYYY')\"\r\n                  [placeholder]=\"model.placeholder\"\r\n                  (ionBlur)=\"onBlur($event)\"\r\n                  (ionCancel)=\"onCustomEvent($event, 'ionCancel')\"\r\n                  (ionChange)=\"onChange($event)\"\r\n                  (ionFocus)=\"onFocus($event)\"></ion-datetime>\r\n\r\n</ion-item>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicIonicDateTimeComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicIonicDateTimeComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    customEvent: [{ type: Output }],
    focus: [{ type: Output }],
    ionDatetime: [{ type: ViewChild, args: ["ionDatetime",] }]
};
if (false) {
    /** @type {?} */
    DynamicIonicDateTimeComponent.prototype.bindId;
    /** @type {?} */
    DynamicIonicDateTimeComponent.prototype.group;
    /** @type {?} */
    DynamicIonicDateTimeComponent.prototype.layout;
    /** @type {?} */
    DynamicIonicDateTimeComponent.prototype.model;
    /** @type {?} */
    DynamicIonicDateTimeComponent.prototype.blur;
    /** @type {?} */
    DynamicIonicDateTimeComponent.prototype.change;
    /** @type {?} */
    DynamicIonicDateTimeComponent.prototype.customEvent;
    /** @type {?} */
    DynamicIonicDateTimeComponent.prototype.focus;
    /** @type {?} */
    DynamicIonicDateTimeComponent.prototype.ionDatetime;
    /** @type {?} */
    DynamicIonicDateTimeComponent.prototype.layoutService;
    /** @type {?} */
    DynamicIonicDateTimeComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-ionic-datetime.component.js.map