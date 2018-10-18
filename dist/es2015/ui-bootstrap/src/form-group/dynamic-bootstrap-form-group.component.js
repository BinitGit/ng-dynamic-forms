/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormControlComponent, DynamicFormGroupModel, DynamicFormLayoutService, DynamicFormValidationService } from "@ng-dynamic-forms/core";
export class DynamicBootstrapFormGroupComponent extends DynamicFormControlComponent {
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
DynamicBootstrapFormGroupComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-bootstrap-form-group",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <fieldset [dynamicId]=\"bindId && model.id\"\r\n              [formGroupName]=\"model.id\"\r\n              [name]=\"model.name\"\r\n              [ngClass]=\"getClass('element', 'control')\">\r\n\r\n        <legend *ngIf=\"model.legend\" [innerHTML]=\"model.legend\"></legend>\r\n\r\n        <dynamic-bootstrap-form-control *ngFor=\"let _model of model.group\"\r\n                                        [asBootstrapFormGroup]=\"false\"\r\n                                        [group]=\"control\"\r\n                                        [hidden]=\"_model.hidden\"\r\n                                        [layout]=\"layout\"\r\n                                        [model]=\"_model\"\r\n                                        [templates]=\"templates\"\r\n                                        [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model),\r\n                                                    getClass('element','children'), getClass('grid','children')]\"\r\n                                        (blur)=\"onBlur($event)\"\r\n                                        (change)=\"onChange($event)\"\r\n                                        (focus)=\"onFocus($event)\"\r\n                                        (bsEvent)=\"onCustomEvent($event, null, true)\"></dynamic-bootstrap-form-control>\r\n    </fieldset>\r\n\r\n</ng-container>"
            }] }
];
/** @nocollapse */
DynamicBootstrapFormGroupComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicBootstrapFormGroupComponent.propDecorators = {
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
    DynamicBootstrapFormGroupComponent.prototype.bindId;
    /** @type {?} */
    DynamicBootstrapFormGroupComponent.prototype.group;
    /** @type {?} */
    DynamicBootstrapFormGroupComponent.prototype.layout;
    /** @type {?} */
    DynamicBootstrapFormGroupComponent.prototype.model;
    /** @type {?} */
    DynamicBootstrapFormGroupComponent.prototype.templates;
    /** @type {?} */
    DynamicBootstrapFormGroupComponent.prototype.blur;
    /** @type {?} */
    DynamicBootstrapFormGroupComponent.prototype.change;
    /** @type {?} */
    DynamicBootstrapFormGroupComponent.prototype.customEvent;
    /** @type {?} */
    DynamicBootstrapFormGroupComponent.prototype.focus;
    /** @type {?} */
    DynamicBootstrapFormGroupComponent.prototype.layoutService;
    /** @type {?} */
    DynamicBootstrapFormGroupComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-bootstrap-form-group.component.js.map