/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { TimepickerComponent } from "ngx-bootstrap/timepicker";
import { DynamicFormControlComponent, DynamicFormLayoutService, DynamicFormValidationService, DynamicTimePickerModel } from "@ng-dynamic-forms/core";
export class DynamicBootstrapTimePickerComponent extends DynamicFormControlComponent {
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
        this.focus = new EventEmitter();
    }
}
DynamicBootstrapTimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-bootstrap-timepicker",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <timepicker [arrowkeys]=\"model.getAdditional('arrowkeys', true)\"\r\n                [dynamicId]=\"bindId && model.id\"\r\n                [formControlName]=\"model.id\"\r\n                [hourStep]=\"model.getAdditional('hourStep', 1)\"\r\n                [max]=\"model.max\"\r\n                [min]=\"model.min\"\r\n                [mousewheel]=\"model.getAdditional('mousewheel', true)\"\r\n                [minuteStep]=\"model.getAdditional('minuteStep', 1)\"\r\n                [ngClass]=\"getClass('element', 'control')\"\r\n                [secondsStep]=\"model.getAdditional('secondsStep', 1)\"\r\n                [showMeridian]=\"model.meridian\"\r\n                [showSeconds]=\"model.showSeconds\"\r\n                [showSpinners]=\"model.getAdditional('spinners', true)\"></timepicker>\r\n\r\n</ng-container>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicBootstrapTimePickerComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicBootstrapTimePickerComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    bsTimePicker: [{ type: ViewChild, args: [TimepickerComponent,] }]
};
if (false) {
    /** @type {?} */
    DynamicBootstrapTimePickerComponent.prototype.bindId;
    /** @type {?} */
    DynamicBootstrapTimePickerComponent.prototype.group;
    /** @type {?} */
    DynamicBootstrapTimePickerComponent.prototype.layout;
    /** @type {?} */
    DynamicBootstrapTimePickerComponent.prototype.model;
    /** @type {?} */
    DynamicBootstrapTimePickerComponent.prototype.blur;
    /** @type {?} */
    DynamicBootstrapTimePickerComponent.prototype.change;
    /** @type {?} */
    DynamicBootstrapTimePickerComponent.prototype.focus;
    /** @type {?} */
    DynamicBootstrapTimePickerComponent.prototype.bsTimePicker;
    /** @type {?} */
    DynamicBootstrapTimePickerComponent.prototype.layoutService;
    /** @type {?} */
    DynamicBootstrapTimePickerComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-bootstrap-timepicker.component.js.map