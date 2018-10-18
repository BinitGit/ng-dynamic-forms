/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Textarea } from "@ionic/angular";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicTextAreaModel } from "@ng-dynamic-forms/core";
export class DynamicIonicTextAreaComponent extends DynamicFormControlComponent {
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
DynamicIonicTextAreaComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-ionic-textarea",
                template: "<ion-item [formGroup]=\"group\">\r\n\r\n    <ion-label *ngIf=\"model.label !== null\"\r\n               [innerHTML]=\"model.label\"\r\n               [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></ion-label>\r\n\r\n    <ion-textarea #ionTextArea clearInput=\"true\"\r\n                  [dynamicId]=\"bindId && model.id\"\r\n                  [formControlName]=\"model.id\"\r\n                  [ngClass]=\"getClass('element', 'control')\"\r\n                  [placeholder]=\"model.placeholder\"\r\n                  [readonly]=\"model.readOnly\"\r\n                  (ionBlur)=\"onBlur($event)\"\r\n                  (ionChange)=\"onChange($event)\"\r\n                  (ionFocus)=\"onFocus($event)\"></ion-textarea>\r\n\r\n</ion-item>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicIonicTextAreaComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicIonicTextAreaComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    ionTextArea: [{ type: ViewChild, args: ["ionTextArea",] }]
};
if (false) {
    /** @type {?} */
    DynamicIonicTextAreaComponent.prototype.bindId;
    /** @type {?} */
    DynamicIonicTextAreaComponent.prototype.group;
    /** @type {?} */
    DynamicIonicTextAreaComponent.prototype.layout;
    /** @type {?} */
    DynamicIonicTextAreaComponent.prototype.model;
    /** @type {?} */
    DynamicIonicTextAreaComponent.prototype.blur;
    /** @type {?} */
    DynamicIonicTextAreaComponent.prototype.change;
    /** @type {?} */
    DynamicIonicTextAreaComponent.prototype.focus;
    /** @type {?} */
    DynamicIonicTextAreaComponent.prototype.ionTextArea;
    /** @type {?} */
    DynamicIonicTextAreaComponent.prototype.layoutService;
    /** @type {?} */
    DynamicIonicTextAreaComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-ionic-textarea.component.js.map