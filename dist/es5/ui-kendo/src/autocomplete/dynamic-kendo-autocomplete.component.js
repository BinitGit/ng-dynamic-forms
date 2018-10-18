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
import { AutoCompleteComponent } from "@progress/kendo-angular-dropdowns";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicInputModel } from "@ng-dynamic-forms/core";
import { KENDO_TEMPLATE_DIRECTIVES } from "../dynamic-kendo-form.const";
import { DynamicKendoTemplateableFormControlComponent } from "../dynamic-kendo-templateable-form-control.component";
var DynamicKendoAutoCompleteComponent = /** @class */ (function (_super) {
    __extends(DynamicKendoAutoCompleteComponent, _super);
    function DynamicKendoAutoCompleteComponent(layoutService, validationService) {
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
    Object.defineProperty(DynamicKendoAutoCompleteComponent.prototype, "viewChild", {
        get: /**
         * @return {?}
         */
        function () {
            return this.kendoAutoComplete;
        },
        enumerable: true,
        configurable: true
    });
    DynamicKendoAutoCompleteComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-kendo-autocomplete",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <kendo-autocomplete #kendoAutoComplete\r\n                        [data]=\"model.list\"\r\n                        [dynamicId]=\"bindId && model.id\"\r\n                        [formControlName]=\"model.id\"\r\n                        [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n                        [placeholder]=\"model.placeholder\"\r\n                        [popupSettings]=\"model.getAdditional('popupSettings', {})\"\r\n                        [suggest]=\"model.getAdditional('suggest', false)\"\r\n                        [tabIndex]=\"model.tabIndex\"\r\n                        (blur)=\"onBlur($event)\"\r\n                        (close)=\"onCustomEvent($event, 'close')\"\r\n                        (filterChange)=\"onCustomEvent($event, 'filterChange')\"\r\n                        (focus)=\"onFocus($event)\"\r\n                        (open)=\"onCustomEvent($event, 'open')\"\r\n                        (valueChange)=\"onChange($event)\"></kendo-autocomplete>\r\n\r\n</ng-container>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicKendoAutoCompleteComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicKendoAutoCompleteComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        templates: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        customEvent: [{ type: Output }],
        focus: [{ type: Output }],
        kendoAutoComplete: [{ type: ViewChild, args: ["kendoAutoComplete",] }]
    };
    return DynamicKendoAutoCompleteComponent;
}(DynamicKendoTemplateableFormControlComponent));
export { DynamicKendoAutoCompleteComponent };
if (false) {
    /** @type {?} */
    DynamicKendoAutoCompleteComponent.prototype.templateDirectives;
    /** @type {?} */
    DynamicKendoAutoCompleteComponent.prototype.bindId;
    /** @type {?} */
    DynamicKendoAutoCompleteComponent.prototype.group;
    /** @type {?} */
    DynamicKendoAutoCompleteComponent.prototype.layout;
    /** @type {?} */
    DynamicKendoAutoCompleteComponent.prototype.model;
    /** @type {?} */
    DynamicKendoAutoCompleteComponent.prototype.templates;
    /** @type {?} */
    DynamicKendoAutoCompleteComponent.prototype.blur;
    /** @type {?} */
    DynamicKendoAutoCompleteComponent.prototype.change;
    /** @type {?} */
    DynamicKendoAutoCompleteComponent.prototype.customEvent;
    /** @type {?} */
    DynamicKendoAutoCompleteComponent.prototype.focus;
    /** @type {?} */
    DynamicKendoAutoCompleteComponent.prototype.kendoAutoComplete;
    /** @type {?} */
    DynamicKendoAutoCompleteComponent.prototype.layoutService;
    /** @type {?} */
    DynamicKendoAutoCompleteComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-kendo-autocomplete.component.js.map