/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormArrayComponent, DynamicFormArrayModel, DynamicFormLayoutService, DynamicFormValidationService } from "@ng-dynamic-forms/core";
export class DynamicBootstrapFormArrayComponent extends DynamicFormArrayComponent {
    /**
     * @param {?} layoutService
     * @param {?} validationService
     */
    constructor(layoutService, validationService) {
        super(layoutService, validationService);
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.bindId = true;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.customEvent = new EventEmitter();
        this.focus = new EventEmitter();
    }
}
DynamicBootstrapFormArrayComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-bootstrap-form-array",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <div [dynamicId]=\"bindId && model.id\"\r\n         [formArrayName]=\"model.id\"\r\n         [ngClass]=\"getClass('element', 'control')\">\r\n\r\n        <div *ngFor=\"let groupModel of model.groups; let idx = index\" role=\"group\"\r\n             [formGroupName]=\"idx\" [ngClass]=\"[getClass('element', 'group'), getClass('grid', 'group')]\">\r\n\r\n            <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: groupModel\"></ng-container>\r\n\r\n            <dynamic-bootstrap-form-control *ngFor=\"let _model of groupModel.group\"\r\n                                            [bindId]=\"false\"\r\n                                            [context]=\"groupModel\"\r\n                                            [group]=\"control.at(idx)\"\r\n                                            [hidden]=\"_model.hidden\"\r\n                                            [layout]=\"layout\"\r\n                                            [model]=\"_model\"\r\n                                            [templates]=\"templates\"\r\n                                            [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model),\r\n                                                        getClass('element','children'), getClass('grid','children')]\"\r\n                                            (blur)=\"onBlur($event)\"\r\n                                            (change)=\"onChange($event)\"\r\n                                            (focus)=\"onFocus($event)\"\r\n                                            (bsEvent)=\"onCustomEvent($event, null, true)\"></dynamic-bootstrap-form-control>\r\n\r\n            <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: groupModel\"></ng-container>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</ng-container>"
            }] }
];
/** @nocollapse */
DynamicBootstrapFormArrayComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicBootstrapFormArrayComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    templates: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    customEvent: [{ type: Output }],
    focus: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DynamicBootstrapFormArrayComponent.prototype.bindId;
    /** @type {?} */
    DynamicBootstrapFormArrayComponent.prototype.group;
    /** @type {?} */
    DynamicBootstrapFormArrayComponent.prototype.layout;
    /** @type {?} */
    DynamicBootstrapFormArrayComponent.prototype.model;
    /** @type {?} */
    DynamicBootstrapFormArrayComponent.prototype.templates;
    /** @type {?} */
    DynamicBootstrapFormArrayComponent.prototype.blur;
    /** @type {?} */
    DynamicBootstrapFormArrayComponent.prototype.change;
    /** @type {?} */
    DynamicBootstrapFormArrayComponent.prototype.customEvent;
    /** @type {?} */
    DynamicBootstrapFormArrayComponent.prototype.focus;
    /** @type {?} */
    DynamicBootstrapFormArrayComponent.prototype.layoutService;
    /** @type {?} */
    DynamicBootstrapFormArrayComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-bootstrap-form-array.component.js.map