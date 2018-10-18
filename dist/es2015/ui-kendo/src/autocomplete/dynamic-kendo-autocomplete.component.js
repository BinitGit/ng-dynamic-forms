/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { AutoCompleteComponent } from "@progress/kendo-angular-dropdowns";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicInputModel } from "@ng-dynamic-forms/core";
import { KENDO_TEMPLATE_DIRECTIVES } from "../dynamic-kendo-form.const";
import { DynamicKendoTemplateableFormControlComponent } from "../dynamic-kendo-templateable-form-control.component";
export class DynamicKendoAutoCompleteComponent extends DynamicKendoTemplateableFormControlComponent {
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
        return this.kendoAutoComplete;
    }
}
DynamicKendoAutoCompleteComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-kendo-autocomplete",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <kendo-autocomplete #kendoAutoComplete\r\n                        [data]=\"model.list\"\r\n                        [dynamicId]=\"bindId && model.id\"\r\n                        [formControlName]=\"model.id\"\r\n                        [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n                        [placeholder]=\"model.placeholder\"\r\n                        [popupSettings]=\"model.getAdditional('popupSettings', {})\"\r\n                        [suggest]=\"model.getAdditional('suggest', false)\"\r\n                        [tabIndex]=\"model.tabIndex\"\r\n                        (blur)=\"onBlur($event)\"\r\n                        (close)=\"onCustomEvent($event, 'close')\"\r\n                        (filterChange)=\"onCustomEvent($event, 'filterChange')\"\r\n                        (focus)=\"onFocus($event)\"\r\n                        (open)=\"onCustomEvent($event, 'open')\"\r\n                        (valueChange)=\"onChange($event)\"></kendo-autocomplete>\r\n\r\n</ng-container>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicKendoAutoCompleteComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicKendoAutoCompleteComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    templates: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    customEvent: [{ type: Output }],
    focus: [{ type: Output }],
    kendoAutoComplete: [{ type: ViewChild, args: ["kendoAutoComplete",] }]
};
if (false) {
    /** @type {?} */
    DynamicKendoAutoCompleteComponent.prototype.templateDirectives;
    /** @type {?} */
    DynamicKendoAutoCompleteComponent.prototype.bindId;
    /** @type {?} */
    DynamicKendoAutoCompleteComponent.prototype.group;
    /** @type {?} */
    DynamicKendoAutoCompleteComponent.prototype.layout;
    /** @type {?} */
    DynamicKendoAutoCompleteComponent.prototype.model;
    /** @type {?} */
    DynamicKendoAutoCompleteComponent.prototype.templates;
    /** @type {?} */
    DynamicKendoAutoCompleteComponent.prototype.blur;
    /** @type {?} */
    DynamicKendoAutoCompleteComponent.prototype.change;
    /** @type {?} */
    DynamicKendoAutoCompleteComponent.prototype.customEvent;
    /** @type {?} */
    DynamicKendoAutoCompleteComponent.prototype.focus;
    /** @type {?} */
    DynamicKendoAutoCompleteComponent.prototype.kendoAutoComplete;
    /** @type {?} */
    DynamicKendoAutoCompleteComponent.prototype.layoutService;
    /** @type {?} */
    DynamicKendoAutoCompleteComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-kendo-autocomplete.component.js.map