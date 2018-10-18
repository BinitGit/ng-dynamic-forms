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
import { DynamicFormArrayComponent, DynamicFormArrayModel, DynamicFormLayoutService, DynamicFormValidationService } from "@ng-dynamic-forms/core";
var DynamicMaterialFormArrayComponent = /** @class */ (function (_super) {
    __extends(DynamicMaterialFormArrayComponent, _super);
    function DynamicMaterialFormArrayComponent(layoutService, validationService) {
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
    DynamicMaterialFormArrayComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-material-form-array",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <div [dynamicId]=\"bindId && model.id\"\r\n         [formArrayName]=\"model.id\"\r\n         [ngClass]=\"getClass('element', 'control')\">\r\n\r\n        <div *ngFor=\"let groupModel of model.groups; let idx = index\" role=\"group\"\r\n             [formGroupName]=\"idx\" [ngClass]=\"[getClass('element', 'group'), getClass('grid', 'group')]\">\r\n\r\n            <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: groupModel\"></ng-container>\r\n\r\n            <dynamic-material-form-control *ngFor=\"let _model of groupModel.group\"\r\n                                           [bindId]=\"false\"\r\n                                           [context]=\"groupModel\"\r\n                                           [group]=\"control.at(idx)\"\r\n                                           [hidden]=\"_model.hidden\"\r\n                                           [layout]=\"layout\"\r\n                                           [model]=\"_model\"\r\n                                           [templates]=\"templates\"\r\n                                           [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model),\r\n                                                       getClass('element','children'), getClass('grid','children')]\"\r\n                                           (blur)=\"onBlur($event)\"\r\n                                           (change)=\"onChange($event)\"\r\n                                           (focus)=\"onFocus($event)\"\r\n                                           (matEvent)=\"onCustomEvent($event, null, true)\"></dynamic-material-form-control>\r\n\r\n            <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: groupModel\"></ng-container>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</ng-container>"
                }] }
    ];
    /** @nocollapse */
    DynamicMaterialFormArrayComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicMaterialFormArrayComponent.propDecorators = {
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
    return DynamicMaterialFormArrayComponent;
}(DynamicFormArrayComponent));
export { DynamicMaterialFormArrayComponent };
if (false) {
    /** @type {?} */
    DynamicMaterialFormArrayComponent.prototype.bindId;
    /** @type {?} */
    DynamicMaterialFormArrayComponent.prototype.group;
    /** @type {?} */
    DynamicMaterialFormArrayComponent.prototype.layout;
    /** @type {?} */
    DynamicMaterialFormArrayComponent.prototype.model;
    /** @type {?} */
    DynamicMaterialFormArrayComponent.prototype.templates;
    /** @type {?} */
    DynamicMaterialFormArrayComponent.prototype.blur;
    /** @type {?} */
    DynamicMaterialFormArrayComponent.prototype.change;
    /** @type {?} */
    DynamicMaterialFormArrayComponent.prototype.customEvent;
    /** @type {?} */
    DynamicMaterialFormArrayComponent.prototype.focus;
    /** @type {?} */
    DynamicMaterialFormArrayComponent.prototype.layoutService;
    /** @type {?} */
    DynamicMaterialFormArrayComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-material-form-array.component.js.map