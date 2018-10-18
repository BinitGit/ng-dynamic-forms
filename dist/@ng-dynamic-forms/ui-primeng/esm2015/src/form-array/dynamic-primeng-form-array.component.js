/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormArrayComponent, DynamicFormArrayModel, DynamicFormLayoutService, DynamicFormValidationService } from "@ng-dynamic-forms/core";
export class DynamicPrimeNGFormArrayComponent extends DynamicFormArrayComponent {
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
DynamicPrimeNGFormArrayComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-primeng-form-array",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <div [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n        <div [dynamicId]=\"bindId && model.id\" [formArrayName]=\"model.id\" [ngClass]=\"getClass('element', 'control')\">\r\n\r\n            <div *ngFor=\"let groupModel of model.groups; let idx = index\" role=\"group\"\r\n                 [formGroupName]=\"idx\" [ngClass]=\"[getClass('element', 'group'), getClass('grid', 'group')]\">\r\n\r\n                <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: groupModel\"></ng-container>\r\n\r\n                <dynamic-primeng-form-control *ngFor=\"let _model of groupModel.group\"\r\n                                              [bindId]=\"false\"\r\n                                              [context]=\"groupModel\"\r\n                                              [group]=\"control.at(idx)\"\r\n                                              [hidden]=\"_model.hidden\"\r\n                                              [layout]=\"layout\"\r\n                                              [model]=\"_model\"\r\n                                              [templates]=\"templates\"\r\n                                              [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model),\r\n                                                          getClass('element','children'), getClass('grid','children')]\"\r\n                                              (blur)=\"onBlur($event)\"\r\n                                              (change)=\"onChange($event)\"\r\n                                              (focus)=\"onFocus($event)\"\r\n                                              (pEvent)=\"onCustomEvent($event, null, true)\"></dynamic-primeng-form-control>\r\n\r\n                <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: groupModel\"></ng-container>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</ng-container>"
            }] }
];
/** @nocollapse */
DynamicPrimeNGFormArrayComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicPrimeNGFormArrayComponent.propDecorators = {
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
    DynamicPrimeNGFormArrayComponent.prototype.bindId;
    /** @type {?} */
    DynamicPrimeNGFormArrayComponent.prototype.group;
    /** @type {?} */
    DynamicPrimeNGFormArrayComponent.prototype.layout;
    /** @type {?} */
    DynamicPrimeNGFormArrayComponent.prototype.model;
    /** @type {?} */
    DynamicPrimeNGFormArrayComponent.prototype.templates;
    /** @type {?} */
    DynamicPrimeNGFormArrayComponent.prototype.blur;
    /** @type {?} */
    DynamicPrimeNGFormArrayComponent.prototype.change;
    /** @type {?} */
    DynamicPrimeNGFormArrayComponent.prototype.customEvent;
    /** @type {?} */
    DynamicPrimeNGFormArrayComponent.prototype.focus;
    /** @type {?} */
    DynamicPrimeNGFormArrayComponent.prototype.layoutService;
    /** @type {?} */
    DynamicPrimeNGFormArrayComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-primeng-form-array.component.js.map