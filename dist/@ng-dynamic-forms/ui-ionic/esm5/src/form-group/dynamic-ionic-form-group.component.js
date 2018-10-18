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
var DynamicIonicFormGroupComponent = /** @class */ (function (_super) {
    __extends(DynamicIonicFormGroupComponent, _super);
    function DynamicIonicFormGroupComponent(layoutService, validationService) {
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
    DynamicIonicFormGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-ionic-form-group",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <fieldset [dynamicId]=\"bindId && model.id\"\r\n              [formGroupName]=\"model.id\"\r\n              [name]=\"model.name\"\r\n              [ngClass]=\"getClass('element', 'control')\">\r\n\r\n        <legend *ngIf=\"model.legend\" [innerHTML]=\"model.legend\"></legend>\r\n\r\n        <dynamic-ionic-form-control *ngFor=\"let _model of model.group\"\r\n                                    [group]=\"control\"\r\n                                    [hidden]=\"_model.hidden\"\r\n                                    [layout]=\"layout\"\r\n                                    [model]=\"_model\"\r\n                                    [templates]=\"templates\"\r\n                                    [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model),\r\n                                                getClass('element','children'), getClass('grid','children')]\"\r\n                                    (blur)=\"onBlur($event)\"\r\n                                    (change)=\"onChange($event)\"\r\n                                    (focus)=\"onFocus($event)\"\r\n                                    (ionEvent)=\"onCustomEvent($event, null, true)\"></dynamic-ionic-form-control>\r\n    </fieldset>\r\n\r\n</ng-container>"
                }] }
    ];
    /** @nocollapse */
    DynamicIonicFormGroupComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
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
    return DynamicIonicFormGroupComponent;
}(DynamicFormControlComponent));
export { DynamicIonicFormGroupComponent };
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