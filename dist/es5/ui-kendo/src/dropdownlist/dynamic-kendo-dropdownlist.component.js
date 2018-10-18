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
import { DropDownListComponent } from "@progress/kendo-angular-dropdowns";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicSelectModel } from "@ng-dynamic-forms/core";
import { KENDO_TEMPLATE_DIRECTIVES } from "../dynamic-kendo-form.const";
import { DynamicKendoTemplateableFormControlComponent } from "../dynamic-kendo-templateable-form-control.component";
var DynamicKendoDropdownListComponent = /** @class */ (function (_super) {
    __extends(DynamicKendoDropdownListComponent, _super);
    function DynamicKendoDropdownListComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.templateDirectives = KENDO_TEMPLATE_DIRECTIVES;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.customEvent = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    Object.defineProperty(DynamicKendoDropdownListComponent.prototype, "viewChild", {
        get: /**
         * @return {?}
         */
        function () {
            return this.kendoDropDownList;
        },
        enumerable: true,
        configurable: true
    });
    DynamicKendoDropdownListComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-kendo-dropdownlist",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <kendo-dropdownlist #kendoDropDownList\r\n                        [data]=\"model.options\"\r\n                        [delay]=\"model.getAdditional('delay', 500)\"\r\n                        [dynamicId]=\"bindId && model.id\"\r\n                        [filterable]=\"model.filterable\"\r\n                        [formControlName]=\"model.id\"\r\n                        [ignoreCase]=\"model.getAdditional('ignoreCase', true)\"\r\n                        [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n                        [popupSettings]=\"model.getAdditional('popupSettings', {})\"\r\n                        [tabIndex]=\"model.tabIndex\"\r\n                        [textField]=\"'label'\"\r\n                        [valueField]=\"'value'\"\r\n                        [valuePrimitive]=\"true\"\r\n                        (blur)=\"onBlur($event)\"\r\n                        (close)=\"onCustomEvent($event, 'close')\"\r\n                        (filterChange)=\"onCustomEvent($event, 'filterChange')\"\r\n                        (focus)=\"onFocus($event)\"\r\n                        (open)=\"onCustomEvent($event, 'open')\"\r\n                        (selectionChange)=\"onCustomEvent($event, 'selectionChange')\"\r\n                        (valueChange)=\"onChange($event)\"></kendo-dropdownlist>\r\n\r\n</ng-container>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicKendoDropdownListComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicKendoDropdownListComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        templates: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        customEvent: [{ type: Output }],
        focus: [{ type: Output }],
        kendoDropDownList: [{ type: ViewChild, args: ["kendoDropDownList",] }]
    };
    return DynamicKendoDropdownListComponent;
}(DynamicKendoTemplateableFormControlComponent));
export { DynamicKendoDropdownListComponent };
if (false) {
    /** @type {?} */
    DynamicKendoDropdownListComponent.prototype.templateDirectives;
    /** @type {?} */
    DynamicKendoDropdownListComponent.prototype.bindId;
    /** @type {?} */
    DynamicKendoDropdownListComponent.prototype.group;
    /** @type {?} */
    DynamicKendoDropdownListComponent.prototype.layout;
    /** @type {?} */
    DynamicKendoDropdownListComponent.prototype.model;
    /** @type {?} */
    DynamicKendoDropdownListComponent.prototype.templates;
    /** @type {?} */
    DynamicKendoDropdownListComponent.prototype.blur;
    /** @type {?} */
    DynamicKendoDropdownListComponent.prototype.change;
    /** @type {?} */
    DynamicKendoDropdownListComponent.prototype.customEvent;
    /** @type {?} */
    DynamicKendoDropdownListComponent.prototype.focus;
    /** @type {?} */
    DynamicKendoDropdownListComponent.prototype.kendoDropDownList;
    /** @type {?} */
    DynamicKendoDropdownListComponent.prototype.layoutService;
    /** @type {?} */
    DynamicKendoDropdownListComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-kendo-dropdownlist.component.js.map