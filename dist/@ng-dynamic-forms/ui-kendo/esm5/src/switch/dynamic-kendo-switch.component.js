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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { SwitchComponent } from "@progress/kendo-angular-inputs";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicSwitchModel } from "@ng-dynamic-forms/core";
var DynamicKendoSwitchComponent = /** @class */ (function (_super) {
    __extends(DynamicKendoSwitchComponent, _super);
    function DynamicKendoSwitchComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicKendoSwitchComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-kendo-switch",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <kendo-switch #kendoSwitch\r\n                  [checked]=\"model.checked\"\r\n                  [dynamicId]=\"bindId && model.id\"\r\n                  [formControlName]=\"model.id\"\r\n                  [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n                  [offLabel]=\"model.offLabel\"\r\n                  [onLabel]=\"model.onLabel\"\r\n                  [tabIndex]=\"model.tabIndex\"\r\n                  (valueChange)=\"onChange($event)\"></kendo-switch>\r\n\r\n</ng-container>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicKendoSwitchComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicKendoSwitchComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        kendoSwitch: [{ type: ViewChild, args: ["kendoSwitch",] }]
    };
    return DynamicKendoSwitchComponent;
}(DynamicFormControlComponent));
export { DynamicKendoSwitchComponent };
if (false) {
    /** @type {?} */
    DynamicKendoSwitchComponent.prototype.bindId;
    /** @type {?} */
    DynamicKendoSwitchComponent.prototype.group;
    /** @type {?} */
    DynamicKendoSwitchComponent.prototype.layout;
    /** @type {?} */
    DynamicKendoSwitchComponent.prototype.model;
    /** @type {?} */
    DynamicKendoSwitchComponent.prototype.blur;
    /** @type {?} */
    DynamicKendoSwitchComponent.prototype.change;
    /** @type {?} */
    DynamicKendoSwitchComponent.prototype.focus;
    /** @type {?} */
    DynamicKendoSwitchComponent.prototype.kendoSwitch;
    /** @type {?} */
    DynamicKendoSwitchComponent.prototype.layoutService;
    /** @type {?} */
    DynamicKendoSwitchComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-kendo-switch.component.js.map