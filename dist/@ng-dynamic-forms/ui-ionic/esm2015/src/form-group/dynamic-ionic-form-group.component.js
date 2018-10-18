/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormControlComponent, DynamicFormGroupModel, DynamicFormLayoutService, DynamicFormValidationService } from "@ng-dynamic-forms/core";
export class DynamicIonicFormGroupComponent extends DynamicFormControlComponent {
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
DynamicIonicFormGroupComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-ionic-form-group",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <fieldset [dynamicId]=\"bindId && model.id\"\r\n              [formGroupName]=\"model.id\"\r\n              [name]=\"model.name\"\r\n              [ngClass]=\"getClass('element', 'control')\">\r\n\r\n        <legend *ngIf=\"model.legend\" [innerHTML]=\"model.legend\"></legend>\r\n\r\n        <dynamic-ionic-form-control *ngFor=\"let _model of model.group\"\r\n                                    [group]=\"control\"\r\n                                    [hidden]=\"_model.hidden\"\r\n                                    [layout]=\"layout\"\r\n                                    [model]=\"_model\"\r\n                                    [templates]=\"templates\"\r\n                                    [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model),\r\n                                                getClass('element','children'), getClass('grid','children')]\"\r\n                                    (blur)=\"onBlur($event)\"\r\n                                    (change)=\"onChange($event)\"\r\n                                    (focus)=\"onFocus($event)\"\r\n                                    (ionEvent)=\"onCustomEvent($event, null, true)\"></dynamic-ionic-form-control>\r\n    </fieldset>\r\n\r\n</ng-container>"
            }] }
];
/** @nocollapse */
DynamicIonicFormGroupComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicIonicFormGroupComponent.propDecorators = {
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
    DynamicIonicFormGroupComponent.prototype.bindId;
    /** @type {?} */
    DynamicIonicFormGroupComponent.prototype.group;
    /** @type {?} */
    DynamicIonicFormGroupComponent.prototype.layout;
    /** @type {?} */
    DynamicIonicFormGroupComponent.prototype.model;
    /** @type {?} */
    DynamicIonicFormGroupComponent.prototype.templates;
    /** @type {?} */
    DynamicIonicFormGroupComponent.prototype.blur;
    /** @type {?} */
    DynamicIonicFormGroupComponent.prototype.change;
    /** @type {?} */
    DynamicIonicFormGroupComponent.prototype.customEvent;
    /** @type {?} */
    DynamicIonicFormGroupComponent.prototype.focus;
    /** @type {?} */
    DynamicIonicFormGroupComponent.prototype.layoutService;
    /** @type {?} */
    DynamicIonicFormGroupComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-ionic-form-group.component.js.map