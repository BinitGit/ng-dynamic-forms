/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ContentChildren, EventEmitter, Input, Output, QueryList, ViewChildren } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormComponent, DynamicFormLayoutService, DynamicFormService, DynamicTemplateDirective, } from "@ng-dynamic-forms/core";
import { DynamicKendoFormControlContainerComponent } from "./dynamic-kendo-form-control-container.component";
export class DynamicKendoFormComponent extends DynamicFormComponent {
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
DynamicKendoFormComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-kendo-form",
                template: "<dynamic-kendo-form-control *ngFor=\"let model of formModel; trackBy: trackByFn\"\r\n                            [group]=\"formGroup\"\r\n                            [hidden]=\"model.hidden\"\r\n                            [layout]=\"formLayout\"\r\n                            [model]=\"model\"\r\n                            [ngClass]=\"[getClass(model,'element', 'host'), getClass(model,'grid', 'host')]\"\r\n                            [templates]=\"templates\"\r\n                            (blur)=\"onEvent($event, 'blur')\"\r\n                            (change)=\"onEvent($event, 'change')\"\r\n                            (focus)=\"onEvent($event, 'focus')\"\r\n                            (kendoEvent)=\"onEvent($event, 'custom')\"></dynamic-kendo-form-control>"
            }] }
];
/** @nocollapse */
DynamicKendoFormComponent.ctorParameters = () => [
    { type: DynamicFormService },
    { type: DynamicFormLayoutService }
];
DynamicKendoFormComponent.propDecorators = {
    formGroup: [{ type: Input, args: ["group",] }],
    formModel: [{ type: Input, args: ["model",] }],
    formLayout: [{ type: Input, args: ["layout",] }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    customEvent: [{ type: Output, args: ["kendoEvent",] }],
    templates: [{ type: ContentChildren, args: [DynamicTemplateDirective,] }],
    components: [{ type: ViewChildren, args: [DynamicKendoFormControlContainerComponent,] }]
};
if (false) {
    /** @type {?} */
    DynamicKendoFormComponent.prototype.formGroup;
    /** @type {?} */
    DynamicKendoFormComponent.prototype.formModel;
    /** @type {?} */
    DynamicKendoFormComponent.prototype.formLayout;
    /** @type {?} */
    DynamicKendoFormComponent.prototype.blur;
    /** @type {?} */
    DynamicKendoFormComponent.prototype.change;
    /** @type {?} */
    DynamicKendoFormComponent.prototype.focus;
    /** @type {?} */
    DynamicKendoFormComponent.prototype.customEvent;
    /** @type {?} */
    DynamicKendoFormComponent.prototype.templates;
    /** @type {?} */
    DynamicKendoFormComponent.prototype.components;
    /** @type {?} */
    DynamicKendoFormComponent.prototype.formService;
    /** @type {?} */
    DynamicKendoFormComponent.prototype.layoutService;
}
//# sourceMappingURL=dynamic-kendo-form.component.js.map