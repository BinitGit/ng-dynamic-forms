/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormControlComponent, DynamicFormGroupModel, DynamicFormLayoutService, DynamicFormValidationService } from "@ng-dynamic-forms/core";
export class DynamicBasicFormGroupComponent extends DynamicFormControlComponent {
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
DynamicBasicFormGroupComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-basic-form-group",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <fieldset [dynamicId]=\"bindId && model.id\"\r\n              [formGroupName]=\"model.id\"\r\n              [name]=\"model.name\"\r\n              [ngClass]=\"getClass('element', 'control')\">\r\n\r\n        <legend *ngIf=\"model.legend\" [innerHTML]=\"model.legend\"></legend>\r\n\r\n        <dynamic-basic-form-control *ngFor=\"let _model of model.group\"\r\n                                    [group]=\"control\"\r\n                                    [hidden]=\"_model.hidden\"\r\n                                    [layout]=\"layout\"\r\n                                    [model]=\"_model\"\r\n                                    [templates]=\"templates\"\r\n                                    [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model),\r\n                                                getClass('element','children'), getClass('grid','children')]\"\r\n                                    (blur)=\"onBlur($event)\"\r\n                                    (change)=\"onChange($event)\"\r\n                                    (focus)=\"onFocus($event)\"\r\n                                    (bsEvent)=\"onCustomEvent($event, null, true)\"></dynamic-basic-form-control>\r\n    </fieldset>\r\n\r\n</ng-container>"
            }] }
];
/** @nocollapse */
DynamicBasicFormGroupComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicBasicFormGroupComponent.propDecorators = {
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
    DynamicBasicFormGroupComponent.prototype.bindId;
    /** @type {?} */
    DynamicBasicFormGroupComponent.prototype.group;
    /** @type {?} */
    DynamicBasicFormGroupComponent.prototype.layout;
    /** @type {?} */
    DynamicBasicFormGroupComponent.prototype.model;
    /** @type {?} */
    DynamicBasicFormGroupComponent.prototype.templates;
    /** @type {?} */
    DynamicBasicFormGroupComponent.prototype.blur;
    /** @type {?} */
    DynamicBasicFormGroupComponent.prototype.change;
    /** @type {?} */
    DynamicBasicFormGroupComponent.prototype.customEvent;
    /** @type {?} */
    DynamicBasicFormGroupComponent.prototype.focus;
    /** @type {?} */
    DynamicBasicFormGroupComponent.prototype.layoutService;
    /** @type {?} */
    DynamicBasicFormGroupComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-basic-form-group.component.js.map