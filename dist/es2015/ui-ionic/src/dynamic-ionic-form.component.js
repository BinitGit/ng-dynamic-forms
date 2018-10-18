/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ContentChildren, EventEmitter, Input, Output, QueryList, ViewChildren } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormComponent, DynamicFormLayoutService, DynamicFormService, DynamicTemplateDirective, } from "@ng-dynamic-forms/core";
import { DynamicIonicFormControlContainerComponent } from "./dynamic-ionic-form-control-container.component";
export class DynamicIonicFormComponent extends DynamicFormComponent {
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
DynamicIonicFormComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-ionic-form",
                template: "<dynamic-ionic-form-control *ngFor=\"let model of formModel; trackBy: trackByFn\"\r\n                            [group]=\"formGroup\"\r\n                            [hidden]=\"model.hidden\"\r\n                            [layout]=\"formLayout\"\r\n                            [model]=\"model\"\r\n                            [ngClass]=\"[getClass(model,'element','host'), getClass(model,'grid','host')]\"\r\n                            [templates]=\"templates\"\r\n                            (blur)=\"onEvent($event, 'blur')\"\r\n                            (change)=\"onEvent($event, 'change')\"\r\n                            (focus)=\"onEvent($event, 'focus')\"\r\n                            (ionEvent)=\"onEvent($event, 'custom')\"></dynamic-ionic-form-control>"
            }] }
];
/** @nocollapse */
DynamicIonicFormComponent.ctorParameters = () => [
    { type: DynamicFormService },
    { type: DynamicFormLayoutService }
];
DynamicIonicFormComponent.propDecorators = {
    formGroup: [{ type: Input, args: ["group",] }],
    formModel: [{ type: Input, args: ["model",] }],
    formLayout: [{ type: Input, args: ["layout",] }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    customEvent: [{ type: Output, args: ["ionEvent",] }],
    templates: [{ type: ContentChildren, args: [DynamicTemplateDirective,] }],
    components: [{ type: ViewChildren, args: [DynamicIonicFormControlContainerComponent,] }]
};
if (false) {
    /** @type {?} */
    DynamicIonicFormComponent.prototype.formGroup;
    /** @type {?} */
    DynamicIonicFormComponent.prototype.formModel;
    /** @type {?} */
    DynamicIonicFormComponent.prototype.formLayout;
    /** @type {?} */
    DynamicIonicFormComponent.prototype.blur;
    /** @type {?} */
    DynamicIonicFormComponent.prototype.change;
    /** @type {?} */
    DynamicIonicFormComponent.prototype.focus;
    /** @type {?} */
    DynamicIonicFormComponent.prototype.customEvent;
    /** @type {?} */
    DynamicIonicFormComponent.prototype.templates;
    /** @type {?} */
    DynamicIonicFormComponent.prototype.components;
    /** @type {?} */
    DynamicIonicFormComponent.prototype.formService;
    /** @type {?} */
    DynamicIonicFormComponent.prototype.layoutService;
}
//# sourceMappingURL=dynamic-ionic-form.component.js.map