/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MultiSelectComponent } from "@progress/kendo-angular-dropdowns";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicSelectModel } from "@ng-dynamic-forms/core";
import { KENDO_TEMPLATE_DIRECTIVES } from "../dynamic-kendo-form.const";
import { DynamicKendoTemplateableFormControlComponent } from "../dynamic-kendo-templateable-form-control.component";
export class DynamicKendoMultiSelectComponent extends DynamicKendoTemplateableFormControlComponent {
    /**
     * @param {?} layoutService
     * @param {?} validationService
     */
    constructor(layoutService, validationService) {
        super(layoutService, validationService);
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.templateDirectives = KENDO_TEMPLATE_DIRECTIVES;
        this.bindId = true;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.customEvent = new EventEmitter();
        this.focus = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get viewChild() {
        return this.kendoMultiSelect;
    }
}
DynamicKendoMultiSelectComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-kendo-multiselect",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <kendo-multiselect #kendoMultiSelect\r\n                       [autoClose]=\"model.getAdditional('autoClose', true)\"\r\n                       [clearButton]=\"model.getAdditional('clearButton', true)\"\r\n                       [data]=\"model.options\"\r\n                       [dynamicId]=\"bindId && model.id\"\r\n                       [formControlName]=\"model.id\"\r\n                       [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n                       [placeholder]=\"model.placeholder\"\r\n                       [popupSettings]=\"model.getAdditional('popupSettings', {})\"\r\n                       [tabIndex]=\"model.tabIndex\"\r\n                       [textField]=\"'label'\"\r\n                       [valueField]=\"'value'\"\r\n                       [valuePrimitive]=\"true\"\r\n                       (blur)=\"onBlur($event)\"\r\n                       (close)=\"onCustomEvent($event, 'close')\"\r\n                       (filterChange)=\"onCustomEvent($event, 'filterChange')\"\r\n                       (focus)=\"onFocus($event)\"\r\n                       (open)=\"onCustomEvent($event, 'open')\"\r\n                       (valueChange)=\"onChange($event)\"></kendo-multiselect>\r\n\r\n</ng-container>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicKendoMultiSelectComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicKendoMultiSelectComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    templates: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    customEvent: [{ type: Output }],
    focus: [{ type: Output }],
    kendoMultiSelect: [{ type: ViewChild, args: ["kendoMultiSelect",] }]
};
if (false) {
    /** @type {?} */
    DynamicKendoMultiSelectComponent.prototype.templateDirectives;
    /** @type {?} */
    DynamicKendoMultiSelectComponent.prototype.bindId;
    /** @type {?} */
    DynamicKendoMultiSelectComponent.prototype.group;
    /** @type {?} */
    DynamicKendoMultiSelectComponent.prototype.layout;
    /** @type {?} */
    DynamicKendoMultiSelectComponent.prototype.model;
    /** @type {?} */
    DynamicKendoMultiSelectComponent.prototype.templates;
    /** @type {?} */
    DynamicKendoMultiSelectComponent.prototype.blur;
    /** @type {?} */
    DynamicKendoMultiSelectComponent.prototype.change;
    /** @type {?} */
    DynamicKendoMultiSelectComponent.prototype.customEvent;
    /** @type {?} */
    DynamicKendoMultiSelectComponent.prototype.focus;
    /** @type {?} */
    DynamicKendoMultiSelectComponent.prototype.kendoMultiSelect;
    /** @type {?} */
    DynamicKendoMultiSelectComponent.prototype.layoutService;
    /** @type {?} */
    DynamicKendoMultiSelectComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-kendo-multiselect.component.js.map