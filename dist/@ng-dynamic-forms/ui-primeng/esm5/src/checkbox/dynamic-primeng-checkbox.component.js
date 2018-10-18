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
import { Checkbox } from "primeng/primeng";
import { DynamicCheckboxModel, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, } from "@ng-dynamic-forms/core";
var DynamicPrimeNGCheckboxComponent = /** @class */ (function (_super) {
    __extends(DynamicPrimeNGCheckboxComponent, _super);
    function DynamicPrimeNGCheckboxComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicPrimeNGCheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-primeng-checkbox",
                    template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <p-checkbox #pCheckbox\r\n                binary=\"true\"\r\n                [dynamicId]=\"bindId && model.id\"\r\n                [formControlName]=\"model.id\"\r\n                [label]=\"model.label\"\r\n                [name]=\"model.name\"\r\n                [ngClass]=\"getClass('element', 'control')\"\r\n                [tabindex]=\"model.tabIndex\"\r\n                [value]=\"model.value\"\r\n                (onChange)=\"onChange($event)\"></p-checkbox>\r\n\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicPrimeNGCheckboxComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicPrimeNGCheckboxComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        pCheckbox: [{ type: ViewChild, args: ["pCheckbox",] }]
    };
    return DynamicPrimeNGCheckboxComponent;
}(DynamicFormControlComponent));
export { DynamicPrimeNGCheckboxComponent };
if (false) {
    /** @type {?} */
    DynamicPrimeNGCheckboxComponent.prototype.bindId;
    /** @type {?} */
    DynamicPrimeNGCheckboxComponent.prototype.group;
    /** @type {?} */
    DynamicPrimeNGCheckboxComponent.prototype.layout;
    /** @type {?} */
    DynamicPrimeNGCheckboxComponent.prototype.model;
    /** @type {?} */
    DynamicPrimeNGCheckboxComponent.prototype.blur;
    /** @type {?} */
    DynamicPrimeNGCheckboxComponent.prototype.change;
    /** @type {?} */
    DynamicPrimeNGCheckboxComponent.prototype.focus;
    /** @type {?} */
    DynamicPrimeNGCheckboxComponent.prototype.pCheckbox;
    /** @type {?} */
    DynamicPrimeNGCheckboxComponent.prototype.layoutService;
    /** @type {?} */
    DynamicPrimeNGCheckboxComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-primeng-checkbox.component.js.map