/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormControlComponent, DynamicFormGroupModel, DynamicFormLayoutService, DynamicFormValidationService } from "@ng-dynamic-forms/core";
export class DynamicNGBootstrapFormGroupComponent extends DynamicFormControlComponent {
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
DynamicNGBootstrapFormGroupComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-ng-bootstrap-form-group",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <div role=\"group\"\r\n         [dynamicId]=\"bindId && model.id\"\r\n         [formGroupName]=\"model.id\"\r\n         [ngClass]=\"getClass('element','control')\">\r\n\r\n        <dynamic-ng-bootstrap-form-control *ngFor=\"let _model of model.group\"\r\n                                           [asBootstrapFormGroup]=\"true\"\r\n                                           [group]=\"control\"\r\n                                           [hidden]=\"_model.hidden\"\r\n                                           [layout]=\"layout\"\r\n                                           [model]=\"_model\"\r\n                                           [templates]=\"templates\"\r\n                                           [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model),\r\n                                                       getClass('element','children'), getClass('grid','children')]\"\r\n                                           (blur)=\"onBlur($event)\"\r\n                                           (change)=\"onChange($event)\"\r\n                                           (focus)=\"onFocus($event)\"\r\n                                           (ngbEvent)=\"onCustomEvent($event, null, true)\"></dynamic-ng-bootstrap-form-control>\r\n    </div>\r\n\r\n</ng-container>"
            }] }
];
/** @nocollapse */
DynamicNGBootstrapFormGroupComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicNGBootstrapFormGroupComponent.propDecorators = {
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
    DynamicNGBootstrapFormGroupComponent.prototype.bindId;
    /** @type {?} */
    DynamicNGBootstrapFormGroupComponent.prototype.group;
    /** @type {?} */
    DynamicNGBootstrapFormGroupComponent.prototype.layout;
    /** @type {?} */
    DynamicNGBootstrapFormGroupComponent.prototype.model;
    /** @type {?} */
    DynamicNGBootstrapFormGroupComponent.prototype.templates;
    /** @type {?} */
    DynamicNGBootstrapFormGroupComponent.prototype.blur;
    /** @type {?} */
    DynamicNGBootstrapFormGroupComponent.prototype.change;
    /** @type {?} */
    DynamicNGBootstrapFormGroupComponent.prototype.customEvent;
    /** @type {?} */
    DynamicNGBootstrapFormGroupComponent.prototype.focus;
    /** @type {?} */
    DynamicNGBootstrapFormGroupComponent.prototype.layoutService;
    /** @type {?} */
    DynamicNGBootstrapFormGroupComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-ng-bootstrap-form-group.component.js.map