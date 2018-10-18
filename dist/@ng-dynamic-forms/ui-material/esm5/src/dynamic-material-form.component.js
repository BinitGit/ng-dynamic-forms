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
import { Component, ContentChildren, EventEmitter, Input, Output, QueryList, ViewChildren } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormComponent, DynamicFormLayoutService, DynamicFormService, DynamicTemplateDirective, } from "@ng-dynamic-forms/core";
import { DynamicMaterialFormControlContainerComponent } from "./dynamic-material-form-control-container.component";
var DynamicMaterialFormComponent = /** @class */ (function (_super) {
    __extends(DynamicMaterialFormComponent, _super);
    function DynamicMaterialFormComponent(formService, layoutService) {
        var _this = _super.call(this, formService, layoutService) || this;
        _this.formService = formService;
        _this.layoutService = layoutService;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        _this.customEvent = new EventEmitter();
        return _this;
    }
    DynamicMaterialFormComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-material-form",
                    template: "<dynamic-material-form-control *ngFor=\"let model of formModel; trackBy: trackByFn\"\r\n                               [group]=\"formGroup\"\r\n                               [hidden]=\"model.hidden\"\r\n                               [layout]=\"formLayout\"\r\n                               [model]=\"model\"\r\n                               [ngClass]=\"[getClass(model, 'element', 'host'), getClass(model, 'grid', 'host')]\"\r\n                               [templates]=\"templates\"\r\n                               (blur)=\"onEvent($event, 'blur')\"\r\n                               (change)=\"onEvent($event, 'change')\"\r\n                               (focus)=\"onEvent($event, 'focus')\"\r\n                               (matEvent)=\"onEvent($event, 'custom')\"></dynamic-material-form-control>"
                }] }
    ];
    /** @nocollapse */
    DynamicMaterialFormComponent.ctorParameters = function () { return [
        { type: DynamicFormService },
        { type: DynamicFormLayoutService }
    ]; };
    DynamicMaterialFormComponent.propDecorators = {
        formGroup: [{ type: Input, args: ["group",] }],
        formModel: [{ type: Input, args: ["model",] }],
        formLayout: [{ type: Input, args: ["layout",] }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        customEvent: [{ type: Output, args: ["matEvent",] }],
        templates: [{ type: ContentChildren, args: [DynamicTemplateDirective,] }],
        components: [{ type: ViewChildren, args: [DynamicMaterialFormControlContainerComponent,] }]
    };
    return DynamicMaterialFormComponent;
}(DynamicFormComponent));
export { DynamicMaterialFormComponent };
if (false) {
    /** @type {?} */
    DynamicMaterialFormComponent.prototype.formGroup;
    /** @type {?} */
    DynamicMaterialFormComponent.prototype.formModel;
    /** @type {?} */
    DynamicMaterialFormComponent.prototype.formLayout;
    /** @type {?} */
    DynamicMaterialFormComponent.prototype.blur;
    /** @type {?} */
    DynamicMaterialFormComponent.prototype.change;
    /** @type {?} */
    DynamicMaterialFormComponent.prototype.focus;
    /** @type {?} */
    DynamicMaterialFormComponent.prototype.customEvent;
    /** @type {?} */
    DynamicMaterialFormComponent.prototype.templates;
    /** @type {?} */
    DynamicMaterialFormComponent.prototype.components;
    /** @type {?} */
    DynamicMaterialFormComponent.prototype.formService;
    /** @type {?} */
    DynamicMaterialFormComponent.prototype.layoutService;
}
//# sourceMappingURL=dynamic-material-form.component.js.map