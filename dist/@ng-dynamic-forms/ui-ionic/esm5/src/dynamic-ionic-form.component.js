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
import { DynamicIonicFormControlContainerComponent } from "./dynamic-ionic-form-control-container.component";
var DynamicIonicFormComponent = /** @class */ (function (_super) {
    __extends(DynamicIonicFormComponent, _super);
    function DynamicIonicFormComponent(formService, layoutService) {
        var _this = _super.call(this, formService, layoutService) || this;
        _this.formService = formService;
        _this.layoutService = layoutService;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        _this.customEvent = new EventEmitter();
        return _this;
    }
    DynamicIonicFormComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-ionic-form",
                    template: "<dynamic-ionic-form-control *ngFor=\"let model of formModel; trackBy: trackByFn\"\r\n                            [group]=\"formGroup\"\r\n                            [hidden]=\"model.hidden\"\r\n                            [layout]=\"formLayout\"\r\n                            [model]=\"model\"\r\n                            [ngClass]=\"[getClass(model,'element','host'), getClass(model,'grid','host')]\"\r\n                            [templates]=\"templates\"\r\n                            (blur)=\"onEvent($event, 'blur')\"\r\n                            (change)=\"onEvent($event, 'change')\"\r\n                            (focus)=\"onEvent($event, 'focus')\"\r\n                            (ionEvent)=\"onEvent($event, 'custom')\"></dynamic-ionic-form-control>"
                }] }
    ];
    /** @nocollapse */
    DynamicIonicFormComponent.ctorParameters = function () { return [
        { type: DynamicFormService },
        { type: DynamicFormLayoutService }
    ]; };
    DynamicIonicFormComponent.propDecorators = {
        formGroup: [{ type: Input, args: ["group",] }],
        formModel: [{ type: Input, args: ["model",] }],
        formLayout: [{ type: Input, args: ["layout",] }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        customEvent: [{ type: Output, args: ["ionEvent",] }],
        templates: [{ type: ContentChildren, args: [DynamicTemplateDirective,] }],
        components: [{ type: ViewChildren, args: [DynamicIonicFormControlContainerComponent,] }]
    };
    return DynamicIonicFormComponent;
}(DynamicFormComponent));
export { DynamicIonicFormComponent };
if (false) {
    /** @type {?} */
    DynamicIonicFormComponent.prototype.formGroup;
    /** @type {?} */
    DynamicIonicFormComponent.prototype.formModel;
    /** @type {?} */
    DynamicIonicFormComponent.prototype.formLayout;
    /** @type {?} */
    DynamicIonicFormComponent.prototype.blur;
    /** @type {?} */
    DynamicIonicFormComponent.prototype.change;
    /** @type {?} */
    DynamicIonicFormComponent.prototype.focus;
    /** @type {?} */
    DynamicIonicFormComponent.prototype.customEvent;
    /** @type {?} */
    DynamicIonicFormComponent.prototype.templates;
    /** @type {?} */
    DynamicIonicFormComponent.prototype.components;
    /** @type {?} */
    DynamicIonicFormComponent.prototype.formService;
    /** @type {?} */
    DynamicIonicFormComponent.prototype.layoutService;
}
//# sourceMappingURL=dynamic-ionic-form.component.js.map