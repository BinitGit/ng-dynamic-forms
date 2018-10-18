/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { Checkbox } from "@ionic/angular";
import { FormGroup } from "@angular/forms";
import { DynamicCheckboxModel, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, } from "@ng-dynamic-forms/core";
export class DynamicIonicCheckboxComponent extends DynamicFormControlComponent {
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
DynamicIonicCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-ionic-checkbox",
                template: "<ion-item [formGroup]=\"group\">\r\n\r\n    <ion-label *ngIf=\"model.label !== null\"\r\n               [innerHTML]=\"model.label\"\r\n               [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></ion-label>\r\n\r\n    <ion-checkbox [checked]=\"model.checked\"\r\n                  [dynamicId]=\"bindId && model.id\"\r\n                  [formControlName]=\"model.id\"\r\n                  [ngClass]=\"getClass('element', 'control')\"\r\n                  (ionBlur)=\"onBlur($event)\"\r\n                  (ionChange)=\"onChange($event)\"\r\n                  (ionFocus)=\"onFocus($event)\"></ion-checkbox>\r\n\r\n</ion-item>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicIonicCheckboxComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicIonicCheckboxComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    ionCheckbox: [{ type: ViewChild, args: ["ionCheckbox",] }]
};
if (false) {
    /** @type {?} */
    DynamicIonicCheckboxComponent.prototype.bindId;
    /** @type {?} */
    DynamicIonicCheckboxComponent.prototype.group;
    /** @type {?} */
    DynamicIonicCheckboxComponent.prototype.layout;
    /** @type {?} */
    DynamicIonicCheckboxComponent.prototype.model;
    /** @type {?} */
    DynamicIonicCheckboxComponent.prototype.blur;
    /** @type {?} */
    DynamicIonicCheckboxComponent.prototype.change;
    /** @type {?} */
    DynamicIonicCheckboxComponent.prototype.focus;
    /** @type {?} */
    DynamicIonicCheckboxComponent.prototype.ionCheckbox;
    /** @type {?} */
    DynamicIonicCheckboxComponent.prototype.layoutService;
    /** @type {?} */
    DynamicIonicCheckboxComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-ionic-checkbox.component.js.map