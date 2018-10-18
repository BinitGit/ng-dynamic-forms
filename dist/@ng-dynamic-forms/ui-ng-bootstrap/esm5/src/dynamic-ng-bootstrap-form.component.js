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
import { DynamicNGBootstrapFormControlContainerComponent } from "./dynamic-ng-bootstrap-form-control-container.component";
var DynamicNGBootstrapFormComponent = /** @class */ (function (_super) {
    __extends(DynamicNGBootstrapFormComponent, _super);
    function DynamicNGBootstrapFormComponent(formService, layoutService) {
        var _this = _super.call(this, formService, layoutService) || this;
        _this.formService = formService;
        _this.layoutService = layoutService;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        _this.customEvent = new EventEmitter();
        return _this;
    }
    DynamicNGBootstrapFormComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-ng-bootstrap-form",
                    template: "<dynamic-ng-bootstrap-form-control *ngFor=\"let model of formModel; trackBy: trackByFn\"\r\n                                   [group]=\"formGroup\"\r\n                                   [hidden]=\"model.hidden\"\r\n                                   [layout]=\"formLayout\"\r\n                                   [model]=\"model\"\r\n                                   [ngClass]=\"[getClass(model, 'element', 'host'), getClass(model, 'grid', 'host')]\"\r\n                                   [templates]=\"templates\"\r\n                                   (blur)=\"onEvent($event, 'blur')\"\r\n                                   (change)=\"onEvent($event, 'change')\"\r\n                                   (focus)=\"onEvent($event, 'focus')\"\r\n                                   (click)=\"onEvent($event, 'focus')\"\r\n                                   (ngbEvent)=\"onEvent($event, 'custom')\"></dynamic-ng-bootstrap-form-control>"
                }] }
    ];
    /** @nocollapse */
    DynamicNGBootstrapFormComponent.ctorParameters = function () { return [
        { type: DynamicFormService },
        { type: DynamicFormLayoutService }
    ]; };
    DynamicNGBootstrapFormComponent.propDecorators = {
        formGroup: [{ type: Input, args: ["group",] }],
        formModel: [{ type: Input, args: ["model",] }],
        formLayout: [{ type: Input, args: ["layout",] }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        customEvent: [{ type: Output, args: ["ngbEvent",] }],
        templates: [{ type: ContentChildren, args: [DynamicTemplateDirective,] }],
        components: [{ type: ViewChildren, args: [DynamicNGBootstrapFormControlContainerComponent,] }]
    };
    return DynamicNGBootstrapFormComponent;
}(DynamicFormComponent));
export { DynamicNGBootstrapFormComponent };
if (false) {
    /** @type {?} */
    DynamicNGBootstrapFormComponent.prototype.formGroup;
    /** @type {?} */
    DynamicNGBootstrapFormComponent.prototype.formModel;
    /** @type {?} */
    DynamicNGBootstrapFormComponent.prototype.formLayout;
    /** @type {?} */
    DynamicNGBootstrapFormComponent.prototype.blur;
    /** @type {?} */
    DynamicNGBootstrapFormComponent.prototype.change;
    /** @type {?} */
    DynamicNGBootstrapFormComponent.prototype.focus;
    /** @type {?} */
    DynamicNGBootstrapFormComponent.prototype.customEvent;
    /** @type {?} */
    DynamicNGBootstrapFormComponent.prototype.templates;
    /** @type {?} */
    DynamicNGBootstrapFormComponent.prototype.components;
    /** @type {?} */
    DynamicNGBootstrapFormComponent.prototype.formService;
    /** @type {?} */
    DynamicNGBootstrapFormComponent.prototype.layoutService;
}
//# sourceMappingURL=dynamic-ng-bootstrap-form.component.js.map