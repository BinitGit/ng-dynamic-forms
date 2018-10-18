/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ContentChildren, EventEmitter, Input, Output, QueryList, ViewChildren } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormComponent, DynamicFormLayoutService, DynamicFormService, DynamicTemplateDirective, } from "@ng-dynamic-forms/core";
import { DynamicBootstrapFormControlContainerComponent } from "./dynamic-bootstrap-form-control-container.component";
export class DynamicBootstrapFormComponent extends DynamicFormComponent {
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
DynamicBootstrapFormComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-bootstrap-form",
                template: "<dynamic-bootstrap-form-control *ngFor=\"let model of formModel; trackBy: trackByFn\"\r\n                                [group]=\"formGroup\"\r\n                                [hidden]=\"model.hidden\"\r\n                                [layout]=\"formLayout\"\r\n                                [model]=\"model\"\r\n                                [ngClass]=\"[getClass(model,'element','host'), getClass(model,'grid','host')]\"\r\n                                [templates]=\"templates\"\r\n                                (blur)=\"onEvent($event, 'blur')\"\r\n                                (change)=\"onEvent($event, 'change')\"\r\n                                (focus)=\"onEvent($event, 'focus')\"\r\n                                (bsEvent)=\"onEvent($event, 'custom')\"></dynamic-bootstrap-form-control>"
            }] }
];
/** @nocollapse */
DynamicBootstrapFormComponent.ctorParameters = () => [
    { type: DynamicFormService },
    { type: DynamicFormLayoutService }
];
DynamicBootstrapFormComponent.propDecorators = {
    formGroup: [{ type: Input, args: ["group",] }],
    formModel: [{ type: Input, args: ["model",] }],
    formLayout: [{ type: Input, args: ["layout",] }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    customEvent: [{ type: Output, args: ["bsEvent",] }],
    templates: [{ type: ContentChildren, args: [DynamicTemplateDirective,] }],
    components: [{ type: ViewChildren, args: [DynamicBootstrapFormControlContainerComponent,] }]
};
if (false) {
    /** @type {?} */
    DynamicBootstrapFormComponent.prototype.formGroup;
    /** @type {?} */
    DynamicBootstrapFormComponent.prototype.formModel;
    /** @type {?} */
    DynamicBootstrapFormComponent.prototype.formLayout;
    /** @type {?} */
    DynamicBootstrapFormComponent.prototype.blur;
    /** @type {?} */
    DynamicBootstrapFormComponent.prototype.change;
    /** @type {?} */
    DynamicBootstrapFormComponent.prototype.focus;
    /** @type {?} */
    DynamicBootstrapFormComponent.prototype.customEvent;
    /** @type {?} */
    DynamicBootstrapFormComponent.prototype.templates;
    /** @type {?} */
    DynamicBootstrapFormComponent.prototype.components;
    /** @type {?} */
    DynamicBootstrapFormComponent.prototype.formService;
    /** @type {?} */
    DynamicBootstrapFormComponent.prototype.layoutService;
}
//# sourceMappingURL=dynamic-bootstrap-form.component.js.map