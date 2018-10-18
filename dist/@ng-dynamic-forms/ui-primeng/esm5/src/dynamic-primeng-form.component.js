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
import { DynamicPrimeNGFormControlContainerComponent } from "./dynamic-primeng-form-control-container.component";
var DynamicPrimeNGFormComponent = /** @class */ (function (_super) {
    __extends(DynamicPrimeNGFormComponent, _super);
    function DynamicPrimeNGFormComponent(formService, layoutService) {
        var _this = _super.call(this, formService, layoutService) || this;
        _this.formService = formService;
        _this.layoutService = layoutService;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        _this.customEvent = new EventEmitter();
        return _this;
    }
    DynamicPrimeNGFormComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-primeng-form",
                    template: "<dynamic-primeng-form-control *ngFor=\"let model of formModel; trackBy: trackByFn\"\r\n                              [group]=\"formGroup\"\r\n                              [hidden]=\"model.hidden\"\r\n                              [layout]=\"formLayout\"\r\n                              [model]=\"model\"\r\n                              [ngClass]=\"[getClass(model, 'element', 'host'), getClass(model, 'grid', 'host')]\"\r\n                              [templates]=\"templates\"\r\n                              (blur)=\"onEvent($event, 'blur')\"\r\n                              (change)=\"onEvent($event, 'change')\"\r\n                              (focus)=\"onEvent($event, 'focus')\"\r\n                              (pEvent)=\"onEvent($event, 'custom')\"></dynamic-primeng-form-control>"
                }] }
    ];
    /** @nocollapse */
    DynamicPrimeNGFormComponent.ctorParameters = function () { return [
        { type: DynamicFormService },
        { type: DynamicFormLayoutService }
    ]; };
    DynamicPrimeNGFormComponent.propDecorators = {
        formGroup: [{ type: Input, args: ["group",] }],
        formModel: [{ type: Input, args: ["model",] }],
        formLayout: [{ type: Input, args: ["layout",] }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        customEvent: [{ type: Output }],
        templates: [{ type: ContentChildren, args: [DynamicTemplateDirective,] }],
        components: [{ type: ViewChildren, args: [DynamicPrimeNGFormControlContainerComponent,] }]
    };
    return DynamicPrimeNGFormComponent;
}(DynamicFormComponent));
export { DynamicPrimeNGFormComponent };
if (false) {
    /** @type {?} */
    DynamicPrimeNGFormComponent.prototype.formGroup;
    /** @type {?} */
    DynamicPrimeNGFormComponent.prototype.formModel;
    /** @type {?} */
    DynamicPrimeNGFormComponent.prototype.formLayout;
    /** @type {?} */
    DynamicPrimeNGFormComponent.prototype.blur;
    /** @type {?} */
    DynamicPrimeNGFormComponent.prototype.change;
    /** @type {?} */
    DynamicPrimeNGFormComponent.prototype.focus;
    /** @type {?} */
    DynamicPrimeNGFormComponent.prototype.customEvent;
    /** @type {?} */
    DynamicPrimeNGFormComponent.prototype.templates;
    /** @type {?} */
    DynamicPrimeNGFormComponent.prototype.components;
    /** @type {?} */
    DynamicPrimeNGFormComponent.prototype.formService;
    /** @type {?} */
    DynamicPrimeNGFormComponent.prototype.layoutService;
}
//# sourceMappingURL=dynamic-primeng-form.component.js.map