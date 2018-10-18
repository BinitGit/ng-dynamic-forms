/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ContentChildren, EventEmitter, Input, Output, QueryList, ViewChildren } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormComponent, DynamicFormLayoutService, DynamicFormService, DynamicTemplateDirective, } from "@ng-dynamic-forms/core";
import { DynamicBasicFormControlContainerComponent } from "./dynamic-basic-form-control-container.component";
export class DynamicBasicFormComponent extends DynamicFormComponent {
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
DynamicBasicFormComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-basic-form",
                template: "<dynamic-basic-form-control *ngFor=\"let model of formModel; trackBy: trackByFn\"\r\n                            [group]=\"formGroup\"\r\n                            [hidden]=\"model.hidden\"\r\n                            [layout]=\"formLayout\"\r\n                            [model]=\"model\"\r\n                            [ngClass]=\"[getClass(model,'element','host'), getClass(model,'grid','host')]\"\r\n                            [templates]=\"templates\"\r\n                            (blur)=\"onEvent($event, 'blur')\"\r\n                            (change)=\"onEvent($event, 'change')\"\r\n                            (focus)=\"onEvent($event, 'focus')\"></dynamic-basic-form-control>"
            }] }
];
/** @nocollapse */
DynamicBasicFormComponent.ctorParameters = () => [
    { type: DynamicFormService },
    { type: DynamicFormLayoutService }
];
DynamicBasicFormComponent.propDecorators = {
    formGroup: [{ type: Input, args: ["group",] }],
    formModel: [{ type: Input, args: ["model",] }],
    formLayout: [{ type: Input, args: ["layout",] }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    templates: [{ type: ContentChildren, args: [DynamicTemplateDirective,] }],
    components: [{ type: ViewChildren, args: [DynamicBasicFormControlContainerComponent,] }]
};
if (false) {
    /** @type {?} */
    DynamicBasicFormComponent.prototype.formGroup;
    /** @type {?} */
    DynamicBasicFormComponent.prototype.formModel;
    /** @type {?} */
    DynamicBasicFormComponent.prototype.formLayout;
    /** @type {?} */
    DynamicBasicFormComponent.prototype.blur;
    /** @type {?} */
    DynamicBasicFormComponent.prototype.change;
    /** @type {?} */
    DynamicBasicFormComponent.prototype.focus;
    /** @type {?} */
    DynamicBasicFormComponent.prototype.templates;
    /** @type {?} */
    DynamicBasicFormComponent.prototype.components;
    /** @type {?} */
    DynamicBasicFormComponent.prototype.formService;
    /** @type {?} */
    DynamicBasicFormComponent.prototype.layoutService;
}
//# sourceMappingURL=dynamic-basic-form.component.js.map