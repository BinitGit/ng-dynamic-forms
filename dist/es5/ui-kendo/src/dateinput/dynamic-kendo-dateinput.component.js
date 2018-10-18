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
import { DateInputComponent } from "@progress/kendo-angular-dateinputs";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicInputModel } from "@ng-dynamic-forms/core";
var DynamicKendoDateInputComponent = /** @class */ (function (_super) {
    __extends(DynamicKendoDateInputComponent, _super);
    function DynamicKendoDateInputComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicKendoDateInputComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-kendo-dateinput",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <kendo-dateinput #kendoDateInput\r\n                     [dynamicId]=\"bindId && model.id\"\r\n                     [format]=\"model.getAdditional('format', 'd')\"\r\n                     [formatPlaceholder]=\"model.getAdditional('formatPlaceholder', 'wide')\"\r\n                     [formControlName]=\"model.id\"\r\n                     [max]=\"model.max\"\r\n                     [min]=\"model.min\"\r\n                     [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n                     [rangeValidation]=\"model.getAdditional('rangeValidation', true)\"\r\n                     [spinners]=\"model.getAdditional('spinners', true)\"\r\n                     [tabindex]=\"model.tabIndex\"\r\n                     (blur)=\"onBlur($event)\"\r\n                     (focus)=\"onFocus($event)\"\r\n                     (valueChange)=\"onChange($event)\"></kendo-dateinput>\r\n\r\n</ng-container>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicKendoDateInputComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicKendoDateInputComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        kendoDateInput: [{ type: ViewChild, args: ["kendoDateInput",] }]
    };
    return DynamicKendoDateInputComponent;
}(DynamicFormControlComponent));
export { DynamicKendoDateInputComponent };
if (false) {
    /** @type {?} */
    DynamicKendoDateInputComponent.prototype.bindId;
    /** @type {?} */
    DynamicKendoDateInputComponent.prototype.group;
    /** @type {?} */
    DynamicKendoDateInputComponent.prototype.layout;
    /** @type {?} */
    DynamicKendoDateInputComponent.prototype.model;
    /** @type {?} */
    DynamicKendoDateInputComponent.prototype.blur;
    /** @type {?} */
    DynamicKendoDateInputComponent.prototype.change;
    /** @type {?} */
    DynamicKendoDateInputComponent.prototype.focus;
    /** @type {?} */
    DynamicKendoDateInputComponent.prototype.kendoDateInput;
    /** @type {?} */
    DynamicKendoDateInputComponent.prototype.layoutService;
    /** @type {?} */
    DynamicKendoDateInputComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-kendo-dateinput.component.js.map