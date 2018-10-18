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
import { DynamicFormControlComponent, DynamicFormLayoutService, DynamicFormValidationService, DynamicSelectModel, } from "@ng-dynamic-forms/core";
var DynamicBasicSelectComponent = /** @class */ (function (_super) {
    __extends(DynamicBasicSelectComponent, _super);
    function DynamicBasicSelectComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicBasicSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-basic-select",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <select [compareWith]=\"model.compareWithFn\"\r\n            [dynamicId]=\"bindId && model.id\"\r\n            [formControlName]=\"model.id\"\r\n            [name]=\"model.name\"\r\n            [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n            [required]=\"model.required\"\r\n            [tabindex]=\"model.tabIndex\"\r\n            (blur)=\"onBlur($event)\"\r\n            (change)=\"onChange($event)\"\r\n            (focus)=\"onFocus($event)\">\r\n\r\n        <option *ngFor=\"let option of model.options$ | async\"\r\n                [disabled]=\"option.disabled\"\r\n                [ngValue]=\"option.value\">{{ option.label }}\r\n        </option>\r\n\r\n    </select>\r\n\r\n</ng-container>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicBasicSelectComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicBasicSelectComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }]
    };
    return DynamicBasicSelectComponent;
}(DynamicFormControlComponent));
export { DynamicBasicSelectComponent };
if (false) {
    /** @type {?} */
    DynamicBasicSelectComponent.prototype.bindId;
    /** @type {?} */
    DynamicBasicSelectComponent.prototype.group;
    /** @type {?} */
    DynamicBasicSelectComponent.prototype.layout;
    /** @type {?} */
    DynamicBasicSelectComponent.prototype.model;
    /** @type {?} */
    DynamicBasicSelectComponent.prototype.blur;
    /** @type {?} */
    DynamicBasicSelectComponent.prototype.change;
    /** @type {?} */
    DynamicBasicSelectComponent.prototype.focus;
    /** @type {?} */
    DynamicBasicSelectComponent.prototype.layoutService;
    /** @type {?} */
    DynamicBasicSelectComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-basic-select.component.js.map