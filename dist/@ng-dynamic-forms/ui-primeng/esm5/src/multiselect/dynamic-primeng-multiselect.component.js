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
import { MultiSelect } from "primeng/primeng";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicSelectModel } from "@ng-dynamic-forms/core";
var DynamicPrimeNGMultiSelectComponent = /** @class */ (function (_super) {
    __extends(DynamicPrimeNGMultiSelectComponent, _super);
    function DynamicPrimeNGMultiSelectComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicPrimeNGMultiSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-primeng-multiselect",
                    template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <p-multiSelect #pMultiSelect\r\n                   [defaultLabel]=\"model.getAdditional('defaultLabel', 'Choose')\"\r\n                   [displaySelectedLabel]=\"model.getAdditional('displaySelectedLabel', true)\"\r\n                   [dropdownIcon]=\"model.getAdditional('dropdownIcon', 'pi pi-caret-down')\"\r\n                   [dynamicId]=\"bindId && model.id\"\r\n                   [filter]=\"model.filterable\"\r\n                   [formControlName]=\"model.id\"\r\n                   [maxSelectedLabels]=\"model.getAdditional('maxSelectedLabels', 3)\"\r\n                   [ngClass]=\"getClass('element', 'control')\"\r\n                   [options]=\"model.options\"\r\n                   [overlayVisible]=\"model.getAdditional('overlayVisible', false)\"\r\n                   [resetFilterOnHide]=\"model.getAdditional('resetFilterOnHide', false)\"\r\n                   [scrollHeight]=\"model.getAdditional('scrollHeight', '200px')\"\r\n                   [selectedItemsLabel]=\"model.getAdditional('selectedItemsLabel', '{0} items selected')\"\r\n                   [showToggleAll]=\"model.getAdditional('showToggleAll', true)\"\r\n                   [tabindex]=\"model.tabIndex\"\r\n                   (onBlur)=\"onBlur($event)\"\r\n                   (onChange)=\"onChange($event)\"\r\n                   (onFocus)=\"onFocus($event)\"></p-multiSelect>\r\n\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicPrimeNGMultiSelectComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicPrimeNGMultiSelectComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        pMultiSelect: [{ type: ViewChild, args: ["pMultiSelect",] }]
    };
    return DynamicPrimeNGMultiSelectComponent;
}(DynamicFormControlComponent));
export { DynamicPrimeNGMultiSelectComponent };
if (false) {
    /** @type {?} */
    DynamicPrimeNGMultiSelectComponent.prototype.bindId;
    /** @type {?} */
    DynamicPrimeNGMultiSelectComponent.prototype.group;
    /** @type {?} */
    DynamicPrimeNGMultiSelectComponent.prototype.layout;
    /** @type {?} */
    DynamicPrimeNGMultiSelectComponent.prototype.model;
    /** @type {?} */
    DynamicPrimeNGMultiSelectComponent.prototype.blur;
    /** @type {?} */
    DynamicPrimeNGMultiSelectComponent.prototype.change;
    /** @type {?} */
    DynamicPrimeNGMultiSelectComponent.prototype.focus;
    /** @type {?} */
    DynamicPrimeNGMultiSelectComponent.prototype.pMultiSelect;
    /** @type {?} */
    DynamicPrimeNGMultiSelectComponent.prototype.layoutService;
    /** @type {?} */
    DynamicPrimeNGMultiSelectComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-primeng-multiselect.component.js.map