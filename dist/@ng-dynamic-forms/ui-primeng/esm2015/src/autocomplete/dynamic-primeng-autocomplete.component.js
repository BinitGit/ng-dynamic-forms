/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { AutoComplete } from "primeng/primeng";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicInputModel } from "@ng-dynamic-forms/core";
import { PRIME_NG_TEMPLATE_DIRECTIVES } from "../dynamic-primeng-form.const";
import { DynamicPrimeNGTemplateableFormControlComponent } from "../dynamic-primeng-templateable-form-control.component";
export class DynamicPrimeNGAutoCompleteComponent extends DynamicPrimeNGTemplateableFormControlComponent {
    /**
     * @param {?} layoutService
     * @param {?} validationService
     */
    constructor(layoutService, validationService) {
        super(layoutService, validationService);
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.templateDirectives = PRIME_NG_TEMPLATE_DIRECTIVES;
        this.bindId = true;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.customEvent = new EventEmitter();
        this.focus = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get suggestions() {
        return this._suggestions;
    }
    /**
     * @return {?}
     */
    get viewChild() {
        return this.pAutoComplete;
    }
    /**
     * @param {?} _$event
     * @return {?}
     */
    onAutoComplete(_$event) {
        if (Array.isArray(this.model.list)) {
            this._suggestions = this.model.list.map(item => item);
        }
    }
}
DynamicPrimeNGAutoCompleteComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-primeng-autocomplete",
                template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <p-autoComplete #pAutoComplete\r\n                    [autoHighlight]=\"model.getAdditional('autoHighlight', false)\"\r\n                    [delay]=\"model.getAdditional('delay', 300)\"\r\n                    [dropdown]=\"model.getAdditional('dropdown', false)\"\r\n                    [dynamicId]=\"bindId && model.id\"\r\n                    [emptyMessage]=\"model.getAdditional('emptyMessage', null)\"\r\n                    [forceSelection]=\"model.getAdditional('forceSelection', false)\"\r\n                    [formControlName]=\"model.id\"\r\n                    [minLength]=\"model.getAdditional('minLength', 1)\"\r\n                    [multiple]=\"model.multiple\"\r\n                    [ngClass]=\"getClass('element', 'control')\"\r\n                    [placeholder]=\"model.placeholder\"\r\n                    [scrollHeight]=\"model.getAdditional('scrollHeight', '200px')\"\r\n                    [suggestions]=\"suggestions\"\r\n                    [tabindex]=\"model.tabIndex\"\r\n                    (onBlur)=\"onBlur($event)\"\r\n                    (change)=\"onChange($event)\"\r\n                    (onClear)=\"onCustomEvent($event, 'onClear')\"\r\n                    (onDropdownClick)=\"onCustomEvent($event, 'onDropdownClick')\"\r\n                    (onFocus)=\"onFocus($event)\"\r\n                    (onSelect)=\"onCustomEvent($event, 'onSelect')\"\r\n                    (onUnselect)=\"onCustomEvent($event, 'onUnselect')\"\r\n                    (completeMethod)=\"onAutoComplete($event)\"></p-autoComplete>\r\n\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicPrimeNGAutoCompleteComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicPrimeNGAutoCompleteComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    templates: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    customEvent: [{ type: Output }],
    focus: [{ type: Output }],
    pAutoComplete: [{ type: ViewChild, args: ["pAutoComplete",] }]
};
if (false) {
    /** @type {?} */
    DynamicPrimeNGAutoCompleteComponent.prototype._suggestions;
    /** @type {?} */
    DynamicPrimeNGAutoCompleteComponent.prototype.templateDirectives;
    /** @type {?} */
    DynamicPrimeNGAutoCompleteComponent.prototype.bindId;
    /** @type {?} */
    DynamicPrimeNGAutoCompleteComponent.prototype.group;
    /** @type {?} */
    DynamicPrimeNGAutoCompleteComponent.prototype.layout;
    /** @type {?} */
    DynamicPrimeNGAutoCompleteComponent.prototype.model;
    /** @type {?} */
    DynamicPrimeNGAutoCompleteComponent.prototype.templates;
    /** @type {?} */
    DynamicPrimeNGAutoCompleteComponent.prototype.blur;
    /** @type {?} */
    DynamicPrimeNGAutoCompleteComponent.prototype.change;
    /** @type {?} */
    DynamicPrimeNGAutoCompleteComponent.prototype.customEvent;
    /** @type {?} */
    DynamicPrimeNGAutoCompleteComponent.prototype.focus;
    /** @type {?} */
    DynamicPrimeNGAutoCompleteComponent.prototype.pAutoComplete;
    /** @type {?} */
    DynamicPrimeNGAutoCompleteComponent.prototype.layoutService;
    /** @type {?} */
    DynamicPrimeNGAutoCompleteComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-primeng-autocomplete.component.js.map