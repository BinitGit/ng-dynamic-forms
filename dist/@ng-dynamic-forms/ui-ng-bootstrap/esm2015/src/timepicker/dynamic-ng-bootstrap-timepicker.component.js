/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { NgbTimepicker, NgbTimepickerConfig } from "@ng-bootstrap/ng-bootstrap";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicTimePickerModel } from "@ng-dynamic-forms/core";
export class DynamicNGBootstrapTimePickerComponent extends DynamicFormControlComponent {
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
DynamicNGBootstrapTimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-ng-bootstrap-timepicker",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <ngb-timepicker [dynamicId]=\"bindId && model.id\"\r\n                    [formControlName]=\"model.id\"\r\n                    [hourStep]=\"model.getAdditional('hourStep', config['hourStep'])\"\r\n                    [meridian]=\"model.meridian\"\r\n                    [minuteStep]=\"model.getAdditional('minuteStep', config['minuteStep'])\"\r\n                    [ngClass]=\"getClass('element', 'control')\"\r\n                    [seconds]=\"model.showSeconds\"\r\n                    [secondStep]=\"model.getAdditional('secondStep', config['secondStep'])\"\r\n                    [size]=\"model.getAdditional('size', config['size'])\"\r\n                    [spinners]=\"model.getAdditional('spinners', config['spinners'])\"></ngb-timepicker>\r\n\r\n</ng-container>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicNGBootstrapTimePickerComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService },
    { type: NgbTimepickerConfig }
];
DynamicNGBootstrapTimePickerComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    ngbTimePicker: [{ type: ViewChild, args: [NgbTimepicker,] }]
};
if (false) {
    /** @type {?} */
    DynamicNGBootstrapTimePickerComponent.prototype.bindId;
    /** @type {?} */
    DynamicNGBootstrapTimePickerComponent.prototype.group;
    /** @type {?} */
    DynamicNGBootstrapTimePickerComponent.prototype.layout;
    /** @type {?} */
    DynamicNGBootstrapTimePickerComponent.prototype.model;
    /** @type {?} */
    DynamicNGBootstrapTimePickerComponent.prototype.blur;
    /** @type {?} */
    DynamicNGBootstrapTimePickerComponent.prototype.change;
    /** @type {?} */
    DynamicNGBootstrapTimePickerComponent.prototype.focus;
    /** @type {?} */
    DynamicNGBootstrapTimePickerComponent.prototype.ngbTimePicker;
    /** @type {?} */
    DynamicNGBootstrapTimePickerComponent.prototype.layoutService;
    /** @type {?} */
    DynamicNGBootstrapTimePickerComponent.prototype.validationService;
    /** @type {?} */
    DynamicNGBootstrapTimePickerComponent.prototype.config;
}
//# sourceMappingURL=dynamic-ng-bootstrap-timepicker.component.js.map