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
import { DynamicBasicFormControlContainerComponent } from "./dynamic-basic-form-control-container.component";
var DynamicBasicFormComponent = /** @class */ (function (_super) {
    __extends(DynamicBasicFormComponent, _super);
    function DynamicBasicFormComponent(formService, layoutService) {
        var _this = _super.call(this, formService, layoutService) || this;
        _this.formService = formService;
        _this.layoutService = layoutService;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicBasicFormComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-basic-form",
                    template: "<dynamic-basic-form-control *ngFor=\"let model of formModel; trackBy: trackByFn\"\r\n                            [group]=\"formGroup\"\r\n                            [hidden]=\"model.hidden\"\r\n                            [layout]=\"formLayout\"\r\n                            [model]=\"model\"\r\n                            [ngClass]=\"[getClass(model,'element','host'), getClass(model,'grid','host')]\"\r\n                            [templates]=\"templates\"\r\n                            (blur)=\"onEvent($event, 'blur')\"\r\n                            (change)=\"onEvent($event, 'change')\"\r\n                            (focus)=\"onEvent($event, 'focus')\"></dynamic-basic-form-control>"
                }] }
    ];
    /** @nocollapse */
    DynamicBasicFormComponent.ctorParameters = function () { return [
        { type: DynamicFormService },
        { type: DynamicFormLayoutService }
    ]; };
    DynamicBasicFormComponent.propDecorators = {
        formGroup: [{ type: Input, args: ["group",] }],
        formModel: [{ type: Input, args: ["model",] }],
        formLayout: [{ type: Input, args: ["layout",] }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        templates: [{ type: ContentChildren, args: [DynamicTemplateDirective,] }],
        components: [{ type: ViewChildren, args: [DynamicBasicFormControlContainerComponent,] }]
    };
    return DynamicBasicFormComponent;
}(DynamicFormComponent));
export { DynamicBasicFormComponent };
if (false) {
    /** @type {?} */
    DynamicBasicFormComponent.prototype.formGroup;
    /** @type {?} */
    DynamicBasicFormComponent.prototype.formModel;
    /** @type {?} */
    DynamicBasicFormComponent.prototype.formLayout;
    /** @type {?} */
    DynamicBasicFormComponent.prototype.blur;
    /** @type {?} */
    DynamicBasicFormComponent.prototype.change;
    /** @type {?} */
    DynamicBasicFormComponent.prototype.focus;
    /** @type {?} */
    DynamicBasicFormComponent.prototype.templates;
    /** @type {?} */
    DynamicBasicFormComponent.prototype.components;
    /** @type {?} */
    DynamicBasicFormComponent.prototype.formService;
    /** @type {?} */
    DynamicBasicFormComponent.prototype.layoutService;
}
//# sourceMappingURL=dynamic-basic-form.component.js.map