/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ContentChildren, EventEmitter, Input, Output, QueryList, ViewChildren } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormComponent, DynamicFormLayoutService, DynamicFormService, DynamicTemplateDirective, } from "@ng-dynamic-forms/core";
import { DynamicPrimeNGFormControlContainerComponent } from "./dynamic-primeng-form-control-container.component";
export class DynamicPrimeNGFormComponent extends DynamicFormComponent {
    /**
     * @param {?} formService
     * @param {?} layoutService
     */
    constructor(formService, layoutService) {
        super(formService, layoutService);
        this.formService = formService;
        this.layoutService = layoutService;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.focus = new EventEmitter();
        this.customEvent = new EventEmitter();
    }
}
DynamicPrimeNGFormComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-primeng-form",
                template: "<dynamic-primeng-form-control *ngFor=\"let model of formModel; trackBy: trackByFn\"\r\n                              [group]=\"formGroup\"\r\n                              [hidden]=\"model.hidden\"\r\n                              [layout]=\"formLayout\"\r\n                              [model]=\"model\"\r\n                              [ngClass]=\"[getClass(model, 'element', 'host'), getClass(model, 'grid', 'host')]\"\r\n                              [templates]=\"templates\"\r\n                              (blur)=\"onEvent($event, 'blur')\"\r\n                              (change)=\"onEvent($event, 'change')\"\r\n                              (focus)=\"onEvent($event, 'focus')\"\r\n                              (pEvent)=\"onEvent($event, 'custom')\"></dynamic-primeng-form-control>"
            }] }
];
/** @nocollapse */
DynamicPrimeNGFormComponent.ctorParameters = () => [
    { type: DynamicFormService },
    { type: DynamicFormLayoutService }
];
DynamicPrimeNGFormComponent.propDecorators = {
    formGroup: [{ type: Input, args: ["group",] }],
    formModel: [{ type: Input, args: ["model",] }],
    formLayout: [{ type: Input, args: ["layout",] }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    customEvent: [{ type: Output }],
    templates: [{ type: ContentChildren, args: [DynamicTemplateDirective,] }],
    components: [{ type: ViewChildren, args: [DynamicPrimeNGFormControlContainerComponent,] }]
};
if (false) {
    /** @type {?} */
    DynamicPrimeNGFormComponent.prototype.formGroup;
    /** @type {?} */
    DynamicPrimeNGFormComponent.prototype.formModel;
    /** @type {?} */
    DynamicPrimeNGFormComponent.prototype.formLayout;
    /** @type {?} */
    DynamicPrimeNGFormComponent.prototype.blur;
    /** @type {?} */
    DynamicPrimeNGFormComponent.prototype.change;
    /** @type {?} */
    DynamicPrimeNGFormComponent.prototype.focus;
    /** @type {?} */
    DynamicPrimeNGFormComponent.prototype.customEvent;
    /** @type {?} */
    DynamicPrimeNGFormComponent.prototype.templates;
    /** @type {?} */
    DynamicPrimeNGFormComponent.prototype.components;
    /** @type {?} */
    DynamicPrimeNGFormComponent.prototype.formService;
    /** @type {?} */
    DynamicPrimeNGFormComponent.prototype.layoutService;
}
//# sourceMappingURL=dynamic-primeng-form.component.js.map