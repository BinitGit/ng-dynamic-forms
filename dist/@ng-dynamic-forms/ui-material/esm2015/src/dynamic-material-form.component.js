/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ContentChildren, EventEmitter, Input, Output, QueryList, ViewChildren } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormComponent, DynamicFormLayoutService, DynamicFormService, DynamicTemplateDirective, } from "@ng-dynamic-forms/core";
import { DynamicMaterialFormControlContainerComponent } from "./dynamic-material-form-control-container.component";
export class DynamicMaterialFormComponent extends DynamicFormComponent {
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
DynamicMaterialFormComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-material-form",
                template: "<dynamic-material-form-control *ngFor=\"let model of formModel; trackBy: trackByFn\"\r\n                               [group]=\"formGroup\"\r\n                               [hidden]=\"model.hidden\"\r\n                               [layout]=\"formLayout\"\r\n                               [model]=\"model\"\r\n                               [ngClass]=\"[getClass(model, 'element', 'host'), getClass(model, 'grid', 'host')]\"\r\n                               [templates]=\"templates\"\r\n                               (blur)=\"onEvent($event, 'blur')\"\r\n                               (change)=\"onEvent($event, 'change')\"\r\n                               (focus)=\"onEvent($event, 'focus')\"\r\n                               (matEvent)=\"onEvent($event, 'custom')\"></dynamic-material-form-control>"
            }] }
];
/** @nocollapse */
DynamicMaterialFormComponent.ctorParameters = () => [
    { type: DynamicFormService },
    { type: DynamicFormLayoutService }
];
DynamicMaterialFormComponent.propDecorators = {
    formGroup: [{ type: Input, args: ["group",] }],
    formModel: [{ type: Input, args: ["model",] }],
    formLayout: [{ type: Input, args: ["layout",] }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    customEvent: [{ type: Output, args: ["matEvent",] }],
    templates: [{ type: ContentChildren, args: [DynamicTemplateDirective,] }],
    components: [{ type: ViewChildren, args: [DynamicMaterialFormControlContainerComponent,] }]
};
if (false) {
    /** @type {?} */
    DynamicMaterialFormComponent.prototype.formGroup;
    /** @type {?} */
    DynamicMaterialFormComponent.prototype.formModel;
    /** @type {?} */
    DynamicMaterialFormComponent.prototype.formLayout;
    /** @type {?} */
    DynamicMaterialFormComponent.prototype.blur;
    /** @type {?} */
    DynamicMaterialFormComponent.prototype.change;
    /** @type {?} */
    DynamicMaterialFormComponent.prototype.focus;
    /** @type {?} */
    DynamicMaterialFormComponent.prototype.customEvent;
    /** @type {?} */
    DynamicMaterialFormComponent.prototype.templates;
    /** @type {?} */
    DynamicMaterialFormComponent.prototype.components;
    /** @type {?} */
    DynamicMaterialFormComponent.prototype.formService;
    /** @type {?} */
    DynamicMaterialFormComponent.prototype.layoutService;
}
//# sourceMappingURL=dynamic-material-form.component.js.map