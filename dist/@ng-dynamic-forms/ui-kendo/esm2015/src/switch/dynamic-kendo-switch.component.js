/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { SwitchComponent } from "@progress/kendo-angular-inputs";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicSwitchModel } from "@ng-dynamic-forms/core";
export class DynamicKendoSwitchComponent extends DynamicFormControlComponent {
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
DynamicKendoSwitchComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-kendo-switch",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <kendo-switch #kendoSwitch\r\n                  [checked]=\"model.checked\"\r\n                  [dynamicId]=\"bindId && model.id\"\r\n                  [formControlName]=\"model.id\"\r\n                  [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n                  [offLabel]=\"model.offLabel\"\r\n                  [onLabel]=\"model.onLabel\"\r\n                  [tabIndex]=\"model.tabIndex\"\r\n                  (valueChange)=\"onChange($event)\"></kendo-switch>\r\n\r\n</ng-container>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicKendoSwitchComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicKendoSwitchComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    kendoSwitch: [{ type: ViewChild, args: ["kendoSwitch",] }]
};
if (false) {
    /** @type {?} */
    DynamicKendoSwitchComponent.prototype.bindId;
    /** @type {?} */
    DynamicKendoSwitchComponent.prototype.group;
    /** @type {?} */
    DynamicKendoSwitchComponent.prototype.layout;
    /** @type {?} */
    DynamicKendoSwitchComponent.prototype.model;
    /** @type {?} */
    DynamicKendoSwitchComponent.prototype.blur;
    /** @type {?} */
    DynamicKendoSwitchComponent.prototype.change;
    /** @type {?} */
    DynamicKendoSwitchComponent.prototype.focus;
    /** @type {?} */
    DynamicKendoSwitchComponent.prototype.kendoSwitch;
    /** @type {?} */
    DynamicKendoSwitchComponent.prototype.layoutService;
    /** @type {?} */
    DynamicKendoSwitchComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-kendo-switch.component.js.map