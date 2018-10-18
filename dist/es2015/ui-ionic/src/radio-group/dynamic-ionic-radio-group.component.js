/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { RadioGroup } from "@ionic/angular";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicRadioGroupModel } from "@ng-dynamic-forms/core";
export class DynamicIonicRadioGroupComponent extends DynamicFormControlComponent {
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
DynamicIonicRadioGroupComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-ionic-radio-group",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <ion-list #ionRadioGroup radio-group\r\n              [dynamicId]=\"bindId && model.id\"\r\n              [formControlName]=\"model.id\"\r\n              [ngClass]=\"getClass('element', 'control')\"\r\n              (ionChange)=\"onChange($event)\">\r\n\r\n        <ion-list-header *ngIf=\"model.label !== null\">{{ model.label }}</ion-list-header>\r\n\r\n        <ion-item *ngFor=\"let option of model.options$ | async\" [ngClass]=\"getClass('element', 'option')\">\r\n\r\n            <ion-label>{{ option.label }}</ion-label>\r\n\r\n            <ion-radio [value]=\"option.value\"></ion-radio>\r\n\r\n        </ion-item>\r\n\r\n    </ion-list>\r\n\r\n</ng-container>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicIonicRadioGroupComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicIonicRadioGroupComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    ionRadioGroup: [{ type: ViewChild, args: ["ionRadioGroup",] }]
};
if (false) {
    /** @type {?} */
    DynamicIonicRadioGroupComponent.prototype.bindId;
    /** @type {?} */
    DynamicIonicRadioGroupComponent.prototype.group;
    /** @type {?} */
    DynamicIonicRadioGroupComponent.prototype.layout;
    /** @type {?} */
    DynamicIonicRadioGroupComponent.prototype.model;
    /** @type {?} */
    DynamicIonicRadioGroupComponent.prototype.blur;
    /** @type {?} */
    DynamicIonicRadioGroupComponent.prototype.change;
    /** @type {?} */
    DynamicIonicRadioGroupComponent.prototype.focus;
    /** @type {?} */
    DynamicIonicRadioGroupComponent.prototype.ionRadioGroup;
    /** @type {?} */
    DynamicIonicRadioGroupComponent.prototype.layoutService;
    /** @type {?} */
    DynamicIonicRadioGroupComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-ionic-radio-group.component.js.map