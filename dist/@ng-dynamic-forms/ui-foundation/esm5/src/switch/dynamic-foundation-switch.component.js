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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormControlComponent, DynamicFormLayoutService, DynamicFormValidationService, DynamicSwitchModel } from "@ng-dynamic-forms/core";
var DynamicFoundationSwitchComponent = /** @class */ (function (_super) {
    __extends(DynamicFoundationSwitchComponent, _super);
    function DynamicFoundationSwitchComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicFoundationSwitchComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-foundation-switch",
                    template: "<div [formGroup]=\"group\" class=\"switch\" [ngClass]=\"getClass('element', 'control')\">\r\n\r\n    <input type=\"checkbox\" class=\"switch-input\"\r\n           [checked]=\"model.checked\"\r\n           [dynamicId]=\"bindId && model.id\"\r\n           [formControlName]=\"model.id\"\r\n           [name]=\"model.name\"\r\n           [required]=\"model.required\"\r\n           [tabindex]=\"model.tabIndex\"\r\n           [value]=\"model.value\"\r\n           (blur)=\"onBlur($event)\"\r\n           (change)=\"onChange($event)\"\r\n           (focus)=\"onFocus($event)\"/>\r\n\r\n    <label class=\"switch-paddle\" [for]=\"model.id\">\r\n\r\n        <span class=\"switch-active\" aria-hidden=\"true\">{{ model.onLabel }}</span>\r\n        <span class=\"switch-inactive\" aria-hidden=\"true\">{{ model.offLabel }}</span>\r\n\r\n    </label>\r\n\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicFoundationSwitchComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicFoundationSwitchComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }]
    };
    return DynamicFoundationSwitchComponent;
}(DynamicFormControlComponent));
export { DynamicFoundationSwitchComponent };
if (false) {
    /** @type {?} */
    DynamicFoundationSwitchComponent.prototype.bindId;
    /** @type {?} */
    DynamicFoundationSwitchComponent.prototype.group;
    /** @type {?} */
    DynamicFoundationSwitchComponent.prototype.layout;
    /** @type {?} */
    DynamicFoundationSwitchComponent.prototype.model;
    /** @type {?} */
    DynamicFoundationSwitchComponent.prototype.blur;
    /** @type {?} */
    DynamicFoundationSwitchComponent.prototype.change;
    /** @type {?} */
    DynamicFoundationSwitchComponent.prototype.focus;
    /** @type {?} */
    DynamicFoundationSwitchComponent.prototype.layoutService;
    /** @type {?} */
    DynamicFoundationSwitchComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-foundation-switch.component.js.map