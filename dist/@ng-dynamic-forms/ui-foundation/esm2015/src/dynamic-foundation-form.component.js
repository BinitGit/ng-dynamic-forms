/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ContentChildren, EventEmitter, Input, Output, QueryList, ViewChildren } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormComponent, DynamicFormLayoutService, DynamicFormService, DynamicTemplateDirective, } from "@ng-dynamic-forms/core";
import { DynamicFoundationFormControlContainerComponent } from "./dynamic-foundation-form-control-container.component";
export class DynamicFoundationFormComponent extends DynamicFormComponent {
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
    }
}
DynamicFoundationFormComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-foundation-form",
                template: "<dynamic-foundation-form-control *ngFor=\"let model of formModel; trackBy: trackByFn\"\r\n                                 [group]=\"formGroup\"\r\n                                 [hidden]=\"model.hidden\"\r\n                                 [layout]=\"formLayout\"\r\n                                 [model]=\"model\"\r\n                                 [ngClass]=\"[getClass(model,'element','host'), getClass(model,'grid','host')]\"\r\n                                 [templates]=\"templates\"\r\n                                 (blur)=\"onEvent($event, 'blur')\"\r\n                                 (change)=\"onEvent($event, 'change')\"\r\n                                 (focus)=\"onEvent($event, 'focus')\"></dynamic-foundation-form-control>"
            }] }
];
/** @nocollapse */
DynamicFoundationFormComponent.ctorParameters = () => [
    { type: DynamicFormService },
    { type: DynamicFormLayoutService }
];
DynamicFoundationFormComponent.propDecorators = {
    formGroup: [{ type: Input, args: ["group",] }],
    formModel: [{ type: Input, args: ["model",] }],
    formLayout: [{ type: Input, args: ["layout",] }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    templates: [{ type: ContentChildren, args: [DynamicTemplateDirective,] }],
    components: [{ type: ViewChildren, args: [DynamicFoundationFormControlContainerComponent,] }]
};
if (false) {
    /** @type {?} */
    DynamicFoundationFormComponent.prototype.formGroup;
    /** @type {?} */
    DynamicFoundationFormComponent.prototype.formModel;
    /** @type {?} */
    DynamicFoundationFormComponent.prototype.formLayout;
    /** @type {?} */
    DynamicFoundationFormComponent.prototype.blur;
    /** @type {?} */
    DynamicFoundationFormComponent.prototype.change;
    /** @type {?} */
    DynamicFoundationFormComponent.prototype.focus;
    /** @type {?} */
    DynamicFoundationFormComponent.prototype.templates;
    /** @type {?} */
    DynamicFoundationFormComponent.prototype.components;
    /** @type {?} */
    DynamicFoundationFormComponent.prototype.formService;
    /** @type {?} */
    DynamicFoundationFormComponent.prototype.layoutService;
}
//# sourceMappingURL=dynamic-foundation-form.component.js.map