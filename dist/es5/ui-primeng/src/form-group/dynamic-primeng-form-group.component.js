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
var DynamicPrimeNGFormGroupComponent = /** @class */ (function (_super) {
    __extends(DynamicPrimeNGFormGroupComponent, _super);
    function DynamicPrimeNGFormGroupComponent(layoutService, validationService) {
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
    DynamicPrimeNGFormGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-primeng-form-group",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <div role=\"group\"\r\n         [dynamicId]=\"bindId && model.id\"\r\n         [formGroupName]=\"model.id\"\r\n         [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\">\r\n\r\n        <dynamic-primeng-form-control *ngFor=\"let _model of model.group\"\r\n                                      [group]=\"control\"\r\n                                      [hidden]=\"_model.hidden\"\r\n                                      [layout]=\"layout\"\r\n                                      [model]=\"_model \"\r\n                                      [templates]=\"templates\"\r\n                                      [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model),\r\n                                                  getClass('element','children'), getClass('grid','children')]\"\r\n                                      (blur)=\"onBlur($event)\"\r\n                                      (change)=\"onChange($event)\"\r\n                                      (focus)=\"onFocus($event)\"\r\n                                      (pEvent)=\"onCustomEvent($event, null, true)\"></dynamic-primeng-form-control>\r\n    </div>\r\n\r\n</ng-container>"
                }] }
    ];
    /** @nocollapse */
    DynamicPrimeNGFormGroupComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicPrimeNGFormGroupComponent.propDecorators = {
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
    return DynamicPrimeNGFormGroupComponent;
}(DynamicFormControlComponent));
export { DynamicPrimeNGFormGroupComponent };
if (false) {
    /** @type {?} */
    DynamicPrimeNGFormGroupComponent.prototype.bindId;
    /** @type {?} */
    DynamicPrimeNGFormGroupComponent.prototype.group;
    /** @type {?} */
    DynamicPrimeNGFormGroupComponent.prototype.layout;
    /** @type {?} */
    DynamicPrimeNGFormGroupComponent.prototype.model;
    /** @type {?} */
    DynamicPrimeNGFormGroupComponent.prototype.templates;
    /** @type {?} */
    DynamicPrimeNGFormGroupComponent.prototype.blur;
    /** @type {?} */
    DynamicPrimeNGFormGroupComponent.prototype.change;
    /** @type {?} */
    DynamicPrimeNGFormGroupComponent.prototype.customEvent;
    /** @type {?} */
    DynamicPrimeNGFormGroupComponent.prototype.focus;
    /** @type {?} */
    DynamicPrimeNGFormGroupComponent.prototype.layoutService;
    /** @type {?} */
    DynamicPrimeNGFormGroupComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-primeng-form-group.component.js.map