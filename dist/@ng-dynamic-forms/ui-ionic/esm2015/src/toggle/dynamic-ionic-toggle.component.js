/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Toggle } from "@ionic/angular";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicSwitchModel } from "@ng-dynamic-forms/core";
export class DynamicIonicToggleComponent extends DynamicFormControlComponent {
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
DynamicIonicToggleComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-ionic-toggle",
                template: "<ion-item [formGroup]=\"group\">\r\n\r\n    <ion-label *ngIf=\"model.label !== null\"\r\n               [innerHTML]=\"model.label\"\r\n               [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></ion-label>\r\n\r\n    <ion-toggle [checked]=\"model.checked\"\r\n                [dynamicId]=\"bindId && model.id\"\r\n                [formControlName]=\"model.id\"\r\n                [ngClass]=\"getClass('element', 'control')\"\r\n                (ionBlur)=\"onBlur($event)\"\r\n                (ionChange)=\"onChange($event)\"\r\n                (ionFocus)=\"onFocus($event)\"></ion-toggle>\r\n\r\n</ion-item>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicIonicToggleComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicIonicToggleComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    ionToggle: [{ type: ViewChild, args: ["ionToggle",] }]
};
if (false) {
    /** @type {?} */
    DynamicIonicToggleComponent.prototype.bindId;
    /** @type {?} */
    DynamicIonicToggleComponent.prototype.group;
    /** @type {?} */
    DynamicIonicToggleComponent.prototype.layout;
    /** @type {?} */
    DynamicIonicToggleComponent.prototype.model;
    /** @type {?} */
    DynamicIonicToggleComponent.prototype.blur;
    /** @type {?} */
    DynamicIonicToggleComponent.prototype.change;
    /** @type {?} */
    DynamicIonicToggleComponent.prototype.focus;
    /** @type {?} */
    DynamicIonicToggleComponent.prototype.ionToggle;
    /** @type {?} */
    DynamicIonicToggleComponent.prototype.layoutService;
    /** @type {?} */
    DynamicIonicToggleComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-ionic-toggle.component.js.map