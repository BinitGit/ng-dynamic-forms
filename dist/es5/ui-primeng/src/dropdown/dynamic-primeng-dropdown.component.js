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
import { Dropdown } from "primeng/primeng";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicSelectModel } from "@ng-dynamic-forms/core";
import { PRIME_NG_TEMPLATE_DIRECTIVES } from "../dynamic-primeng-form.const";
import { DynamicPrimeNGTemplateableFormControlComponent } from "../dynamic-primeng-templateable-form-control.component";
var DynamicPrimeNGDropdownComponent = /** @class */ (function (_super) {
    __extends(DynamicPrimeNGDropdownComponent, _super);
    function DynamicPrimeNGDropdownComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.templateDirectives = PRIME_NG_TEMPLATE_DIRECTIVES;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    Object.defineProperty(DynamicPrimeNGDropdownComponent.prototype, "viewChild", {
        get: /**
         * @return {?}
         */
        function () {
            return this.pDropdown;
        },
        enumerable: true,
        configurable: true
    });
    DynamicPrimeNGDropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-primeng-dropdown",
                    template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <p-dropdown #pDropdown\r\n                [autoWidth]=\"model.getAdditional('autoWidth', true)\"\r\n                [dropdownIcon]=\"model.getAdditional('dropdownIcon', 'pi pi-caret-down')\"\r\n                [dynamicId]=\"bindId && model.id\"\r\n                [editable]=\"model.getAdditional('editable', false)\"\r\n                [filter]=\"model.filterable\"\r\n                [filterBy]=\"model.getAdditional('filterBy', null)\"\r\n                [filterPlaceholder]=\"model.getAdditional('filterPlaceholder', null)\"\r\n                [formControlName]=\"model.id\"\r\n                [ngClass]=\"getClass('element', 'control')\"\r\n                [options]=\"model.options\"\r\n                [resetFilterOnHide]=\"model.getAdditional('resetFilterOnHide', false)\"\r\n                [scrollHeight]=\"model.getAdditional('scrollHeight', '200px')\"\r\n                [tabindex]=\"model.tabIndex\"\r\n                (onBlur)=\"onBlur($event)\"\r\n                (onChange)=\"onChange($event)\"\r\n                (onFocus)=\"onFocus($event)\"></p-dropdown>\r\n\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicPrimeNGDropdownComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicPrimeNGDropdownComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        templates: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        pDropdown: [{ type: ViewChild, args: ["pDropdown",] }]
    };
    return DynamicPrimeNGDropdownComponent;
}(DynamicPrimeNGTemplateableFormControlComponent));
export { DynamicPrimeNGDropdownComponent };
if (false) {
    /** @type {?} */
    DynamicPrimeNGDropdownComponent.prototype.templateDirectives;
    /** @type {?} */
    DynamicPrimeNGDropdownComponent.prototype.bindId;
    /** @type {?} */
    DynamicPrimeNGDropdownComponent.prototype.group;
    /** @type {?} */
    DynamicPrimeNGDropdownComponent.prototype.layout;
    /** @type {?} */
    DynamicPrimeNGDropdownComponent.prototype.model;
    /** @type {?} */
    DynamicPrimeNGDropdownComponent.prototype.templates;
    /** @type {?} */
    DynamicPrimeNGDropdownComponent.prototype.blur;
    /** @type {?} */
    DynamicPrimeNGDropdownComponent.prototype.change;
    /** @type {?} */
    DynamicPrimeNGDropdownComponent.prototype.focus;
    /** @type {?} */
    DynamicPrimeNGDropdownComponent.prototype.pDropdown;
    /** @type {?} */
    DynamicPrimeNGDropdownComponent.prototype.layoutService;
    /** @type {?} */
    DynamicPrimeNGDropdownComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-primeng-dropdown.component.js.map