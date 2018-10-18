/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Chips } from "primeng/primeng";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicInputModel } from "@ng-dynamic-forms/core";
import { PRIME_NG_TEMPLATE_DIRECTIVES } from "../dynamic-primeng-form.const";
import { DynamicPrimeNGTemplateableFormControlComponent } from "../dynamic-primeng-templateable-form-control.component";
export class DynamicPrimeNGChipsComponent extends DynamicPrimeNGTemplateableFormControlComponent {
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
    get viewChild() {
        return this.pChips;
    }
}
DynamicPrimeNGChipsComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-primeng-chips",
                template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <p-chips #pChips\r\n             [allowDuplicate]=\"model.getAdditional('allowDuplicate', true)\"\r\n             [dynamicId]=\"bindId && model.id\"\r\n             [formControlName]=\"model.id\"\r\n             [ngClass]=\"getClass('element', 'control')\"\r\n             [tabindex]=\"model.tabIndex\"\r\n             (change)=\"onChange($event)\"\r\n             (onAdd)=\"onCustomEvent($event, 'onAdd')\"\r\n             (onRemove)=\"onCustomEvent($event, 'onRemove')\"></p-chips>\r\n\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicPrimeNGChipsComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicPrimeNGChipsComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    templates: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    customEvent: [{ type: Output }],
    focus: [{ type: Output }],
    pChips: [{ type: ViewChild, args: ["pChips",] }]
};
if (false) {
    /** @type {?} */
    DynamicPrimeNGChipsComponent.prototype.templateDirectives;
    /** @type {?} */
    DynamicPrimeNGChipsComponent.prototype.bindId;
    /** @type {?} */
    DynamicPrimeNGChipsComponent.prototype.group;
    /** @type {?} */
    DynamicPrimeNGChipsComponent.prototype.layout;
    /** @type {?} */
    DynamicPrimeNGChipsComponent.prototype.model;
    /** @type {?} */
    DynamicPrimeNGChipsComponent.prototype.templates;
    /** @type {?} */
    DynamicPrimeNGChipsComponent.prototype.blur;
    /** @type {?} */
    DynamicPrimeNGChipsComponent.prototype.change;
    /** @type {?} */
    DynamicPrimeNGChipsComponent.prototype.customEvent;
    /** @type {?} */
    DynamicPrimeNGChipsComponent.prototype.focus;
    /** @type {?} */
    DynamicPrimeNGChipsComponent.prototype.pChips;
    /** @type {?} */
    DynamicPrimeNGChipsComponent.prototype.layoutService;
    /** @type {?} */
    DynamicPrimeNGChipsComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-primeng-chips.component.js.map