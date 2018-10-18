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
import { DynamicBootstrapFormControlContainerComponent } from "./dynamic-bootstrap-form-control-container.component";
var DynamicBootstrapFormComponent = /** @class */ (function (_super) {
    __extends(DynamicBootstrapFormComponent, _super);
    function DynamicBootstrapFormComponent(formService, layoutService) {
        var _this = _super.call(this, formService, layoutService) || this;
        _this.formService = formService;
        _this.layoutService = layoutService;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        _this.customEvent = new EventEmitter();
        return _this;
    }
    DynamicBootstrapFormComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-bootstrap-form",
                    template: "<dynamic-bootstrap-form-control *ngFor=\"let model of formModel; trackBy: trackByFn\"\r\n                                [group]=\"formGroup\"\r\n                                [hidden]=\"model.hidden\"\r\n                                [layout]=\"formLayout\"\r\n                                [model]=\"model\"\r\n                                [ngClass]=\"[getClass(model,'element','host'), getClass(model,'grid','host')]\"\r\n                                [templates]=\"templates\"\r\n                                (blur)=\"onEvent($event, 'blur')\"\r\n                                (change)=\"onEvent($event, 'change')\"\r\n                                (focus)=\"onEvent($event, 'focus')\"\r\n                                (bsEvent)=\"onEvent($event, 'custom')\"></dynamic-bootstrap-form-control>"
                }] }
    ];
    /** @nocollapse */
    DynamicBootstrapFormComponent.ctorParameters = function () { return [
        { type: DynamicFormService },
        { type: DynamicFormLayoutService }
    ]; };
    DynamicBootstrapFormComponent.propDecorators = {
        formGroup: [{ type: Input, args: ["group",] }],
        formModel: [{ type: Input, args: ["model",] }],
        formLayout: [{ type: Input, args: ["layout",] }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        customEvent: [{ type: Output, args: ["bsEvent",] }],
        templates: [{ type: ContentChildren, args: [DynamicTemplateDirective,] }],
        components: [{ type: ViewChildren, args: [DynamicBootstrapFormControlContainerComponent,] }]
    };
    return DynamicBootstrapFormComponent;
}(DynamicFormComponent));
export { DynamicBootstrapFormComponent };
if (false) {
    /** @type {?} */
    DynamicBootstrapFormComponent.prototype.formGroup;
    /** @type {?} */
    DynamicBootstrapFormComponent.prototype.formModel;
    /** @type {?} */
    DynamicBootstrapFormComponent.prototype.formLayout;
    /** @type {?} */
    DynamicBootstrapFormComponent.prototype.blur;
    /** @type {?} */
    DynamicBootstrapFormComponent.prototype.change;
    /** @type {?} */
    DynamicBootstrapFormComponent.prototype.focus;
    /** @type {?} */
    DynamicBootstrapFormComponent.prototype.customEvent;
    /** @type {?} */
    DynamicBootstrapFormComponent.prototype.templates;
    /** @type {?} */
    DynamicBootstrapFormComponent.prototype.components;
    /** @type {?} */
    DynamicBootstrapFormComponent.prototype.formService;
    /** @type {?} */
    DynamicBootstrapFormComponent.prototype.layoutService;
}
//# sourceMappingURL=dynamic-bootstrap-form.component.js.map