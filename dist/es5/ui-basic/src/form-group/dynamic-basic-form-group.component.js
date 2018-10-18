var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormControlComponent, DynamicFormGroupModel, DynamicFormLayoutService, DynamicFormValidationService } from "@ng-dynamic-forms/core";
var DynamicBasicFormGroupComponent = /** @class */ (function (_super) {
    __extends(DynamicBasicFormGroupComponent, _super);
    function DynamicBasicFormGroupComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.customEvent = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicBasicFormGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-basic-form-group",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <fieldset [dynamicId]=\"bindId && model.id\"\r\n              [formGroupName]=\"model.id\"\r\n              [name]=\"model.name\"\r\n              [ngClass]=\"getClass('element', 'control')\">\r\n\r\n        <legend *ngIf=\"model.legend\" [innerHTML]=\"model.legend\"></legend>\r\n\r\n        <dynamic-basic-form-control *ngFor=\"let _model of model.group\"\r\n                                    [group]=\"control\"\r\n                                    [hidden]=\"_model.hidden\"\r\n                                    [layout]=\"layout\"\r\n                                    [model]=\"_model\"\r\n                                    [templates]=\"templates\"\r\n                                    [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model),\r\n                                                getClass('element','children'), getClass('grid','children')]\"\r\n                                    (blur)=\"onBlur($event)\"\r\n                                    (change)=\"onChange($event)\"\r\n                                    (focus)=\"onFocus($event)\"\r\n                                    (bsEvent)=\"onCustomEvent($event, null, true)\"></dynamic-basic-form-control>\r\n    </fieldset>\r\n\r\n</ng-container>"
                }] }
    ];
    /** @nocollapse */
    DynamicBasicFormGroupComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
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
    return DynamicBasicFormGroupComponent;
}(DynamicFormControlComponent));
export { DynamicBasicFormGroupComponent };
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