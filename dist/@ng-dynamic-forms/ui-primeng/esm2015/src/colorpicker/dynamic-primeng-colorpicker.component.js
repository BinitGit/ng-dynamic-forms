/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ColorPicker } from "primeng/primeng";
import { DynamicColorPickerModel, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, } from "@ng-dynamic-forms/core";
export class DynamicPrimeNGColorPickerComponent extends DynamicFormControlComponent {
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
DynamicPrimeNGColorPickerComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-primeng-colorpicker",
                template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <p-colorPicker #pColorPicker\r\n                   [dynamicId]=\"bindId && model.id\"\r\n                   [format]=\"model.format || 'hex'\"\r\n                   [formControlName]=\"model.id\"\r\n                   [inline]=\"model.inline\"\r\n                   [ngClass]=\"getClass('element','control')\"\r\n                   [tabindex]=\"model.tabIndex\"\r\n                   (onChange)=\"onChange($event)\"></p-colorPicker>\r\n\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicPrimeNGColorPickerComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicPrimeNGColorPickerComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    pColorPicker: [{ type: ViewChild, args: ["pColorPicker",] }]
};
if (false) {
    /** @type {?} */
    DynamicPrimeNGColorPickerComponent.prototype.bindId;
    /** @type {?} */
    DynamicPrimeNGColorPickerComponent.prototype.group;
    /** @type {?} */
    DynamicPrimeNGColorPickerComponent.prototype.layout;
    /** @type {?} */
    DynamicPrimeNGColorPickerComponent.prototype.model;
    /** @type {?} */
    DynamicPrimeNGColorPickerComponent.prototype.blur;
    /** @type {?} */
    DynamicPrimeNGColorPickerComponent.prototype.change;
    /** @type {?} */
    DynamicPrimeNGColorPickerComponent.prototype.focus;
    /** @type {?} */
    DynamicPrimeNGColorPickerComponent.prototype.pColorPicker;
    /** @type {?} */
    DynamicPrimeNGColorPickerComponent.prototype.layoutService;
    /** @type {?} */
    DynamicPrimeNGColorPickerComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-primeng-colorpicker.component.js.map