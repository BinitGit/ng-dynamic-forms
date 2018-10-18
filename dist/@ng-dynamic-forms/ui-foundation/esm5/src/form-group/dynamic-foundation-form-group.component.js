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
var DynamicFoundationFormGroupComponent = /** @class */ (function (_super) {
    __extends(DynamicFoundationFormGroupComponent, _super);
    function DynamicFoundationFormGroupComponent(layoutService, validationService) {
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
    DynamicFoundationFormGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-foundation-form-group",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <fieldset [dynamicId]=\"bindId && model.id\"\r\n              [formGroupName]=\"model.id\"\r\n              [name]=\"model.name\"\r\n              [ngClass]=\"getClass('element', 'control')\">\r\n\r\n        <legend *ngIf=\"model.legend\" [innerHTML]=\"model.legend\"></legend>\r\n\r\n        <dynamic-foundation-form-control *ngFor=\"let _model of model.group\"\r\n                                         [group]=\"control\"\r\n                                         [hidden]=\"_model.hidden\"\r\n                                         [layout]=\"layout\"\r\n                                         [model]=\"_model\"\r\n                                         [templates]=\"templates\"\r\n                                         [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model),\r\n                                                     getClass('element','children'), getClass('grid','children')]\"\r\n                                         (blur)=\"onBlur($event)\"\r\n                                         (change)=\"onChange($event)\"\r\n                                         (focus)=\"onFocus($event)\"\r\n                                         (bsEvent)=\"onCustomEvent($event, null, true)\"></dynamic-foundation-form-control>\r\n    </fieldset>\r\n\r\n</ng-container>"
                }] }
    ];
    /** @nocollapse */
    DynamicFoundationFormGroupComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicFoundationFormGroupComponent.propDecorators = {
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
    return DynamicFoundationFormGroupComponent;
}(DynamicFormControlComponent));
export { DynamicFoundationFormGroupComponent };
if (false) {
    /** @type {?} */
    DynamicFoundationFormGroupComponent.prototype.bindId;
    /** @type {?} */
    DynamicFoundationFormGroupComponent.prototype.group;
    /** @type {?} */
    DynamicFoundationFormGroupComponent.prototype.layout;
    /** @type {?} */
    DynamicFoundationFormGroupComponent.prototype.model;
    /** @type {?} */
    DynamicFoundationFormGroupComponent.prototype.templates;
    /** @type {?} */
    DynamicFoundationFormGroupComponent.prototype.blur;
    /** @type {?} */
    DynamicFoundationFormGroupComponent.prototype.change;
    /** @type {?} */
    DynamicFoundationFormGroupComponent.prototype.customEvent;
    /** @type {?} */
    DynamicFoundationFormGroupComponent.prototype.focus;
    /** @type {?} */
    DynamicFoundationFormGroupComponent.prototype.layoutService;
    /** @type {?} */
    DynamicFoundationFormGroupComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-foundation-form-group.component.js.map