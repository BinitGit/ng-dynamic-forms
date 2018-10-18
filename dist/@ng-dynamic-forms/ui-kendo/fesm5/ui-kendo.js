/*!
@ng-dynamic-forms/ui-kendo 6.2.0 2018-10-18 21:36 UTC
Copyright (c) 2016-2018, Udo Schöfer http://www.udos86.de

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/
import { DynamicTemplateableFormControlComponent, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicFormArrayComponent, DynamicFormControlContainerComponent, DynamicTemplateDirective, DYNAMIC_FORM_CONTROL_TYPE_ARRAY, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP, DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER, DYNAMIC_FORM_CONTROL_TYPE_FILE_UPLOAD, DYNAMIC_FORM_CONTROL_TYPE_GROUP, DYNAMIC_FORM_CONTROL_TYPE_INPUT, DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP, DYNAMIC_FORM_CONTROL_TYPE_SELECT, DYNAMIC_FORM_CONTROL_TYPE_SLIDER, DYNAMIC_FORM_CONTROL_TYPE_SWITCH, DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA, DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER, DYNAMIC_FORM_CONTROL_INPUT_TYPE_DATE, DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER, isString, DynamicFormComponent, DynamicFormService, DynamicFormsCoreModule } from '@ng-dynamic-forms/core';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ComponentFactoryResolver, ContentChildren, ViewContainerRef, ViewChildren, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { UploadModule } from '@progress/kendo-angular-upload';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var KENDO_TEMPLATE_DIRECTIVES = new Map([
    ["kendoAutoCompleteFooterTemplate", "footerTemplate"],
    ["kendoAutoCompleteHeaderTemplate", "headerTemplate"],
    ["kendoAutoCompleteItemTemplate", "itemTemplate"],
    ["kendoAutoCompleteNoDataTemplate", "noDataTemplate"],
    ["kendoCalendarCellTemplate", "cellTemplate"],
    ["kendoCalendarCenturyCellTemplate", "centuryCellTemplate"],
    ["kendoCalendarDecadeCellTemplate", "decadeCellTemplate"],
    ["kendoCalendarMonthCellTemplate", "monthCellTemplate"],
    ["kendoCalendarWeekNumberCellTemplate", "weekNumberCellTemplate"],
    ["kendoCalendarYearCellTemplate", "yearCellTemplate"],
    ["kendoDropDownListFooterTemplate", "footerTemplate"],
    ["kendoDropDownListHeaderTemplate", "headerTemplate"],
    ["kendoDropDownListItemTemplate", "itemTemplate"],
    ["kendoDropDownListNoDataTemplate", "noDataTemplate"],
    ["kendoDropDownListValueTemplate", "valueTemplate"],
    ["kendoMultiSelectListFooterTemplate", "footerTemplate"],
    ["kendoMultiSelectDropDownListHeaderTemplate", "headerTemplate"],
    ["kendoMultiSelectDropDownListItemTemplate", "itemTemplate"],
    ["kendoMultiSelectDropDownListNoDataTemplate", "noDataTemplate"],
    ["kendoMultiSelectDropDownListValueTemplate", "valueTemplate"],
    ["kendoUploadFileTemplate", "fileTemplate"]
]);

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
 * @abstract
 */
var  /**
 * @abstract
 */
DynamicKendoTemplateableFormControlComponent = /** @class */ (function (_super) {
    __extends(DynamicKendoTemplateableFormControlComponent, _super);
    function DynamicKendoTemplateableFormControlComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} template
     * @return {?}
     */
    DynamicKendoTemplateableFormControlComponent.prototype.mapTemplate = /**
     * @param {?} template
     * @return {?}
     */
    function (template) {
        return template;
    };
    return DynamicKendoTemplateableFormControlComponent;
}(DynamicTemplateableFormControlComponent));

var __extends$1 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicKendoAutoCompleteComponent = /** @class */ (function (_super) {
    __extends$1(DynamicKendoAutoCompleteComponent, _super);
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

var __extends$2 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicKendoCalendarComponent = /** @class */ (function (_super) {
    __extends$2(DynamicKendoCalendarComponent, _super);
    function DynamicKendoCalendarComponent(layoutService, validationService) {
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
    Object.defineProperty(DynamicKendoCalendarComponent.prototype, "viewChild", {
        get: /**
         * @return {?}
         */
        function () {
            return this.kendoCalendar;
        },
        enumerable: true,
        configurable: true
    });
    DynamicKendoCalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-kendo-calendar",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <kendo-calendar #kendoCalendar\r\n                    [activeView]=\"model.getAdditional('activeView', 'month')\"\r\n                    [bottomView]=\"model.getAdditional('bottomView', 'month')\"\r\n                    [dynamicId]=\"bindId && model.id\"\r\n                    [focusedDate]=\"model.focusedDate\"\r\n                    [formControlName]=\"model.id\"\r\n                    [max]=\"model.max\"\r\n                    [min]=\"model.min\"\r\n                    [navigation]=\"model.getAdditional('navigation', true)\"\r\n                    [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n                    [rangeValidation]=\"model.getAdditional('rangeValidation', true)\"\r\n                    [tabindex]=\"model.tabIndex\"\r\n                    [topView]=\"model.getAdditional('topView', 'century')\"\r\n                    [weekNumber]=\"model.getAdditional('weekNumber', false)\"\r\n                    (activeViewChange)=\"onCustomEvent($event, 'activeViewChange')\"\r\n                    (activeViewDateChange)=\"onCustomEvent($event, 'activeViewDateChange')\"\r\n                    (valueChange)=\"onChange($event)\"></kendo-calendar>\r\n\r\n</ng-container>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicKendoCalendarComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicKendoCalendarComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        templates: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        customEvent: [{ type: Output }],
        focus: [{ type: Output }],
        kendoCalendar: [{ type: ViewChild, args: ["kendoCalendar",] }]
    };
    return DynamicKendoCalendarComponent;
}(DynamicKendoTemplateableFormControlComponent));

var __extends$3 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicKendoCheckboxComponent = /** @class */ (function (_super) {
    __extends$3(DynamicKendoCheckboxComponent, _super);
    function DynamicKendoCheckboxComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicKendoCheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-kendo-checkbox",
                    template: "<label [formGroup]=\"group\" class=\"k-form-field\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <input type=\"checkbox\" class=\"k-checkbox\"\r\n           [checked]=\"model.checked\"\r\n           [dynamicId]=\"bindId && model.id\"\r\n           [formControlName]=\"model.id\"\r\n           [indeterminate]=\"model.indeterminate\"\r\n           [name]=\"model.name\"\r\n           [ngClass]=\"getClass('element', 'control')\"\r\n           [required]=\"model.required\"\r\n           [tabindex]=\"model.tabIndex\"\r\n           [value]=\"model.value\"\r\n           (blur)=\"onBlur($event)\"\r\n           (change)=\"onChange($event)\"\r\n           (focus)=\"onFocus($event)\"/>\r\n\r\n    <label class=\"k-checkbox-label\" [for]=\"model.id\" [innerHTML]=\"model.label\"></label>\r\n\r\n</label>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicKendoCheckboxComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicKendoCheckboxComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }]
    };
    return DynamicKendoCheckboxComponent;
}(DynamicFormControlComponent));

var __extends$4 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicKendoCheckboxGroupComponent = /** @class */ (function (_super) {
    __extends$4(DynamicKendoCheckboxGroupComponent, _super);
    function DynamicKendoCheckboxGroupComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicKendoCheckboxGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-kendo-checkbox-group",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <fieldset class=\"k-form-field\"\r\n              [dynamicId]=\"bindId && model.id\"\r\n              [formGroupName]=\"model.id\"\r\n              [name]=\"model.name\"\r\n              [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\">\r\n\r\n        <legend *ngIf=\"model.legend\" [innerHTML]=\"model.legend\"></legend>\r\n\r\n        <ng-container *ngFor=\"let checkboxModel of model.group\">\r\n\r\n            <input type=\"checkbox\" class=\"k-checkbox\"\r\n                   [checked]=\"checkboxModel.checked\"\r\n                   [dynamicId]=\"bindId && checkboxModel.id\"\r\n                   [formControlName]=\"checkboxModel.id\"\r\n                   [indeterminate]=\"checkboxModel.indeterminate\"\r\n                   [name]=\"checkboxModel.name\"\r\n                   [ngClass]=\"getClass('element', 'control', checkboxModel)\"\r\n                   [required]=\"checkboxModel.required\"\r\n                   [tabindex]=\"checkboxModel.tabIndex\"\r\n                   [value]=\"checkboxModel.value\"\r\n                   (blur)=\"onBlur($event)\"\r\n                   (change)=\"onEmbeddedCheckboxChange($event, model)\"\r\n                   (focus)=\"onFocus($event)\"/>\r\n\r\n            <label class=\"k-checkbox-label\" [for]=\"checkboxModel.id\" [innerHTML]=\"checkboxModel.label\"></label>\r\n\r\n        </ng-container>\r\n\r\n    </fieldset>\r\n\r\n</ng-container>"
                }] }
    ];
    /** @nocollapse */
    DynamicKendoCheckboxGroupComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicKendoCheckboxGroupComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }]
    };
    return DynamicKendoCheckboxGroupComponent;
}(DynamicFormControlComponent));

var __extends$5 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicKendoDateInputComponent = /** @class */ (function (_super) {
    __extends$5(DynamicKendoDateInputComponent, _super);
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

var __extends$6 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicKendoDatePickerComponent = /** @class */ (function (_super) {
    __extends$6(DynamicKendoDatePickerComponent, _super);
    function DynamicKendoDatePickerComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.customEvent = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicKendoDatePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-kendo-datepicker",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <kendo-datepicker #kendoDatePicker\r\n                      [activeView]=\"model.getAdditional('activeView', 'month')\"\r\n                      [bottomView]=\"model.getAdditional('bottomView', 'month')\"\r\n                      [dynamicId]=\"bindId && model.id\"\r\n                      [focusedDate]=\"model.focusedDate\"\r\n                      [format]=\"model.format || 'd'\"\r\n                      [formControlName]=\"model.id\"\r\n                      [max]=\"model.max\"\r\n                      [min]=\"model.min\"\r\n                      [navigation]=\"model.getAdditional('navigation', true)\"\r\n                      [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n                      [popupSettings]=\"model.getAdditional('popupSettings', {})\"\r\n                      [rangeValidation]=\"model.getAdditional('rangeValidation', true)\"\r\n                      [tabindex]=\"model.tabIndex\"\r\n                      [topView]=\"model.getAdditional('topView', 'century')\"\r\n                      [weekNumber]=\"model.getAdditional('weekNumber', false)\"\r\n                      (blur)=\"onBlur($event)\"\r\n                      (close)=\"onCustomEvent($event, 'close')\"\r\n                      (focus)=\"onFocus($event)\"\r\n                      (open)=\"onCustomEvent($event, 'open')\"\r\n                      (valueChange)=\"onChange($event)\"></kendo-datepicker>\r\n\r\n</ng-container>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicKendoDatePickerComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicKendoDatePickerComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        customEvent: [{ type: Output }],
        focus: [{ type: Output }],
        kendoDatePicker: [{ type: ViewChild, args: ["kendoDatePicker",] }]
    };
    return DynamicKendoDatePickerComponent;
}(DynamicFormControlComponent));

var __extends$7 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicKendoDropdownListComponent = /** @class */ (function (_super) {
    __extends$7(DynamicKendoDropdownListComponent, _super);
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

var __extends$8 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicKendoFormArrayComponent = /** @class */ (function (_super) {
    __extends$8(DynamicKendoFormArrayComponent, _super);
    function DynamicKendoFormArrayComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.customEvent = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicKendoFormArrayComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-kendo-form-array",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <div [dynamicId]=\"bindId && model.id\"\r\n         [formArrayName]=\"model.id\"\r\n         [ngClass]=\"getClass('element', 'control')\">\r\n\r\n        <div *ngFor=\"let groupModel of model.groups; let idx = index\" role=\"group\"\r\n             [formGroupName]=\"idx\" [ngClass]=\"[getClass('element', 'group'), getClass('grid', 'group')]\">\r\n\r\n            <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: groupModel\"></ng-container>\r\n\r\n            <dynamic-kendo-form-control *ngFor=\"let _model of groupModel.group\"\r\n                                        [bindId]=\"false\"\r\n                                        [context]=\"groupModel\"\r\n                                        [group]=\"control.at(idx)\"\r\n                                        [hidden]=\"_model.hidden\"\r\n                                        [layout]=\"layout\"\r\n                                        [model]=\"_model\"\r\n                                        [templates]=\"templates\"\r\n                                        [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model),\r\n                                                    getClass('element','children'), getClass('grid','children')]\"\r\n                                        (blur)=\"onBlur($event)\"\r\n                                        (change)=\"onChange($event)\"\r\n                                        (focus)=\"onFocus($event)\"\r\n                                        (kendoEvent)=\"onCustomEvent($event, null, true)\"></dynamic-kendo-form-control>\r\n\r\n            <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: groupModel\"></ng-container>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</ng-container>"
                }] }
    ];
    /** @nocollapse */
    DynamicKendoFormArrayComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicKendoFormArrayComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        templates: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        customEvent: [{ type: Output }],
        focus: [{ type: Output }]
    };
    return DynamicKendoFormArrayComponent;
}(DynamicFormArrayComponent));

var __extends$9 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicKendoFormGroupComponent = /** @class */ (function (_super) {
    __extends$9(DynamicKendoFormGroupComponent, _super);
    function DynamicKendoFormGroupComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.customEvent = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicKendoFormGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-kendo-form-group",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <div role=\"group\"\r\n         [dynamicId]=\"bindId && model.id\"\r\n         [formGroupName]=\"model.id\"\r\n         [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\">\r\n\r\n        <dynamic-kendo-form-control *ngFor=\"let _model of model.group\"\r\n                                    [group]=\"control\"\r\n                                    [hidden]=\"_model.hidden\"\r\n                                    [layout]=\"layout\"\r\n                                    [model]=\"_model\"\r\n                                    [templates]=\"templates\"\r\n                                    [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model),\r\n                                                getClass('element','children'), getClass('grid','children')]\"\r\n                                    (blur)=\"onBlur($event)\"\r\n                                    (change)=\"onChange($event)\"\r\n                                    (focus)=\"onFocus($event)\"\r\n                                    (kendoEvent)=\"onCustomEvent($event, null, true)\"></dynamic-kendo-form-control>\r\n    </div>\r\n\r\n</ng-container>"
                }] }
    ];
    /** @nocollapse */
    DynamicKendoFormGroupComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicKendoFormGroupComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        templates: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        customEvent: [{ type: Output }],
        focus: [{ type: Output }]
    };
    return DynamicKendoFormGroupComponent;
}(DynamicFormControlComponent));

var __extends$a = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicKendoInputComponent = /** @class */ (function (_super) {
    __extends$a(DynamicKendoInputComponent, _super);
    function DynamicKendoInputComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicKendoInputComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-kendo-input",
                    template: "<label [formGroup]=\"group\" class=\"k-form-field\" [ngClass]=\"getClass('grid','control')\">\r\n\r\n    <span>\r\n\r\n        <span [innerHTML]=\"model.label\" [ngClass]=\"getClass('element','label')\"></span>\r\n\r\n        <span *ngIf=\"model.hint !== null\" class=\"k-field-info\" [innerHTML]=\"model.hint\"\r\n              [ngClass]=\"getClass('element','hint')\"></span>\r\n\r\n    </span>\r\n\r\n    <input class=\"k-textbox\"\r\n           [attr.accept]=\"model.accept\"\r\n           [attr.max]=\"model.max\"\r\n           [attr.min]=\"model.min\"\r\n           [attr.multiple]=\"model.multiple\"\r\n           [attr.step]=\"model.step\"\r\n           [autocomplete]=\"model.autoComplete\"\r\n           [autofocus]=\"model.autoFocus\"\r\n           [dynamicId]=\"bindId && model.id\"\r\n           [dynamicList]=\"model.listId\"\r\n           [formControlName]=\"model.id\"\r\n           [maxlength]=\"model.maxLength\"\r\n           [minlength]=\"model.minLength\"\r\n           [name]=\"model.name\"\r\n           [ngClass]=\"getClass('element','control')\"\r\n           [pattern]=\"model.pattern\"\r\n           [placeholder]=\"model.placeholder\"\r\n           [readonly]=\"model.readOnly\"\r\n           [required]=\"model.required\"\r\n           [spellcheck]=\"model.spellCheck\"\r\n           [tabindex]=\"model.tabIndex\"\r\n           [type]=\"model.inputType\"\r\n           (blur)=\"onBlur($event)\"\r\n           (change)=\"onChange($event)\"\r\n           (focus)=\"onFocus($event)\"/></label>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicKendoInputComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicKendoInputComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }]
    };
    return DynamicKendoInputComponent;
}(DynamicFormControlComponent));

var __extends$b = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicKendoMaskedTextBoxComponent = /** @class */ (function (_super) {
    __extends$b(DynamicKendoMaskedTextBoxComponent, _super);
    function DynamicKendoMaskedTextBoxComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicKendoMaskedTextBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-kendo-maskedtextbox",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <kendo-maskedtextbox #kendoMaskedTextBox\r\n                         [dynamicId]=\"bindId && model.id\"\r\n                         [formControlName]=\"model.id\"\r\n                         [includeLiterals]=\"model.getAdditional('includeLiterals', false)\"\r\n                         [mask]=\"model.mask\"\r\n                         [maskValidation]=\"model.getAdditional('maskValidation', true)\"\r\n                         [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n                         [prompt]=\"model.getAdditional('prompt', '_')\"\r\n                         [promptPlaceholder]=\"model.getAdditional('promptPlaceholder', '')\"\r\n                         [tabIndex]=\"model.tabIndex\"\r\n                         (blur)=\"onBlur($event)\"\r\n                         (focus)=\"onFocus($event)\"\r\n                         (valueChange)=\"onChange($event)\"></kendo-maskedtextbox>\r\n\r\n</ng-container>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicKendoMaskedTextBoxComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicKendoMaskedTextBoxComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        kendoMaskedTextBox: [{ type: ViewChild, args: ["kendoMaskedTextBox",] }]
    };
    return DynamicKendoMaskedTextBoxComponent;
}(DynamicFormControlComponent));

var __extends$c = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicKendoMultiSelectComponent = /** @class */ (function (_super) {
    __extends$c(DynamicKendoMultiSelectComponent, _super);
    function DynamicKendoMultiSelectComponent(layoutService, validationService) {
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
    Object.defineProperty(DynamicKendoMultiSelectComponent.prototype, "viewChild", {
        get: /**
         * @return {?}
         */
        function () {
            return this.kendoMultiSelect;
        },
        enumerable: true,
        configurable: true
    });
    DynamicKendoMultiSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-kendo-multiselect",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <kendo-multiselect #kendoMultiSelect\r\n                       [autoClose]=\"model.getAdditional('autoClose', true)\"\r\n                       [clearButton]=\"model.getAdditional('clearButton', true)\"\r\n                       [data]=\"model.options\"\r\n                       [dynamicId]=\"bindId && model.id\"\r\n                       [formControlName]=\"model.id\"\r\n                       [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n                       [placeholder]=\"model.placeholder\"\r\n                       [popupSettings]=\"model.getAdditional('popupSettings', {})\"\r\n                       [tabIndex]=\"model.tabIndex\"\r\n                       [textField]=\"'label'\"\r\n                       [valueField]=\"'value'\"\r\n                       [valuePrimitive]=\"true\"\r\n                       (blur)=\"onBlur($event)\"\r\n                       (close)=\"onCustomEvent($event, 'close')\"\r\n                       (filterChange)=\"onCustomEvent($event, 'filterChange')\"\r\n                       (focus)=\"onFocus($event)\"\r\n                       (open)=\"onCustomEvent($event, 'open')\"\r\n                       (valueChange)=\"onChange($event)\"></kendo-multiselect>\r\n\r\n</ng-container>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicKendoMultiSelectComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicKendoMultiSelectComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        templates: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        customEvent: [{ type: Output }],
        focus: [{ type: Output }],
        kendoMultiSelect: [{ type: ViewChild, args: ["kendoMultiSelect",] }]
    };
    return DynamicKendoMultiSelectComponent;
}(DynamicKendoTemplateableFormControlComponent));

var __extends$d = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicKendoNumericTextBoxComponent = /** @class */ (function (_super) {
    __extends$d(DynamicKendoNumericTextBoxComponent, _super);
    function DynamicKendoNumericTextBoxComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicKendoNumericTextBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-kendo-numerictextbox",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <kendo-numerictextbox #kendoNumericTextBox\r\n                          [autoCorrect]=\"model.getAdditional('autoCorrect', false)\"\r\n                          [decimals]=\"model.getAdditional('decimals')\"\r\n                          [dynamicId]=\"bindId && model.id\"\r\n                          [format]=\"model.getAdditional('format', 'n0')\"\r\n                          [formControlName]=\"model.id\"\r\n                          [max]=\"model.max\"\r\n                          [min]=\"model.min\"\r\n                          [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n                          [placeholder]=\"model.placeholder\"\r\n                          [rangeValidation]=\"model.getAdditional('rangeValidation', true)\"\r\n                          [spinners]=\"model.getAdditional('spinners', true)\"\r\n                          [step]=\"model.step\"\r\n                          [tabIndex]=\"model.tabIndex\"\r\n                          (blur)=\"onBlur($event)\"\r\n                          (focus)=\"onFocus($event)\"\r\n                          (valueChange)=\"onChange($event)\"></kendo-numerictextbox>\r\n\r\n</ng-container>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicKendoNumericTextBoxComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicKendoNumericTextBoxComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        kendoNumericTextBox: [{ type: ViewChild, args: ["kendoNumericTextBox",] }]
    };
    return DynamicKendoNumericTextBoxComponent;
}(DynamicFormControlComponent));

var __extends$e = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicKendoRadioGroupComponent = /** @class */ (function (_super) {
    __extends$e(DynamicKendoRadioGroupComponent, _super);
    function DynamicKendoRadioGroupComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicKendoRadioGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-kendo-radio-group",
                    template: "<fieldset [formGroup]=\"group\" class=\"k-form-field\" role=\"radiogroup\"\r\n          [ngClass]=\"[getClass('element','control'), getClass('grid','control')]\">\r\n\r\n    <legend *ngIf=\"model.legend\" [innerHTML]=\"model.legend\"></legend>\r\n\r\n    <ng-container *ngFor=\"let option of model.options$ | async; let idx = index\">\r\n\r\n        <input type=\"radio\" class=\"k-radio\"\r\n               [formControlName]=\"model.id\"\r\n               [id]=\"'option' + idx + model.id\"\r\n               [name]=\"model.name\"\r\n               [ngClass]=\"[getClass('element','option'), getClass('grid','option')]\"\r\n               [value]=\"option.value\"\r\n               (blur)=\"onBlur($event)\"\r\n               (change)=\"onChange($event)\"\r\n               (focus)=\"onFocus($event)\"/>\r\n\r\n        <label class=\"k-radio-label\" [for]=\"'option' + idx + model.id\" [innerHTML]=\"option.label\"></label>\r\n\r\n    </ng-container>\r\n\r\n</fieldset>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicKendoRadioGroupComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicKendoRadioGroupComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }]
    };
    return DynamicKendoRadioGroupComponent;
}(DynamicFormControlComponent));

var __extends$f = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicKendoSliderComponent = /** @class */ (function (_super) {
    __extends$f(DynamicKendoSliderComponent, _super);
    function DynamicKendoSliderComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicKendoSliderComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-kendo-slider",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <kendo-slider #kendoSlider\r\n                  [dynamicId]=\"bindId && model.id\"\r\n                  [formControlName]=\"model.id\"\r\n                  [min]=\"model.min\"\r\n                  [max]=\"model.max\"\r\n                  [ngClass]=\"[getClass('element','control'), getClass('grid','control')]\"\r\n                  [showButtons]=\"model.getAdditional('showButtons', true)\"\r\n                  [smallStep]=\"model.step\"\r\n                  [tabIndex]=\"model.tabIndex\"\r\n                  [tickPlacement]=\"model.getAdditional('tickPlacement', 'both')\"\r\n                  [vertical]=\"model.vertical\"\r\n                  (valueChange)=\"onChange($event)\"></kendo-slider>\r\n\r\n</ng-container>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicKendoSliderComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicKendoSliderComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        kendoSlider: [{ type: ViewChild, args: ["kendoSlider",] }]
    };
    return DynamicKendoSliderComponent;
}(DynamicFormControlComponent));

var __extends$g = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicKendoSwitchComponent = /** @class */ (function (_super) {
    __extends$g(DynamicKendoSwitchComponent, _super);
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

var __extends$h = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicKendoTextAreaComponent = /** @class */ (function (_super) {
    __extends$h(DynamicKendoTextAreaComponent, _super);
    function DynamicKendoTextAreaComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicKendoTextAreaComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-kendo-textarea",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n        <textarea class=\"k-textarea\"\r\n                  [cols]=\"model.cols\"\r\n                  [dynamicId]=\"bindId && model.id\"\r\n                  [formControlName]=\"model.id\"\r\n                  [maxlength]=\"model.maxLength\"\r\n                  [minlength]=\"model.minLength\"\r\n                  [name]=\"model.name\"\r\n                  [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n                  [placeholder]=\"model.placeholder\"\r\n                  [readonly]=\"model.readOnly\"\r\n                  [required]=\"model.required\"\r\n                  [rows]=\"model.rows\"\r\n                  [spellcheck]=\"model.spellCheck\"\r\n                  [tabindex]=\"model.tabIndex\"\r\n                  [wrap]=\"model.wrap\"\r\n                  (blur)=\"onBlur($event)\"\r\n                  (change)=\"onChange($event)\"\r\n                  (focus)=\"onFocus($event)\"></textarea>\r\n\r\n</ng-container>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicKendoTextAreaComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicKendoTextAreaComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }]
    };
    return DynamicKendoTextAreaComponent;
}(DynamicFormControlComponent));

var __extends$i = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicKendoTimePickerComponent = /** @class */ (function (_super) {
    __extends$i(DynamicKendoTimePickerComponent, _super);
    function DynamicKendoTimePickerComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.customEvent = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicKendoTimePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-kendo-timepicker",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <kendo-timepicker #kendoTimePicker\r\n                      [cancelButton]=\"model.getAdditional('cancelButton', true)\"\r\n                      [dynamicId]=\"bindId && model.id\"\r\n                      [format]=\"model.format\"\r\n                      [formControlName]=\"model.id\"\r\n                      [formatPlaceholder]=\"model.getAdditional('formatPlaceholder', 'wide')\"\r\n                      [max]=\"model.max\"\r\n                      [min]=\"model.min\"\r\n                      [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n                      [nowButton]=\"model.getAdditional('nowButton', true)\"\r\n                      [popupSettings]=\"model.getAdditional('popupSettings', {})\"\r\n                      [rangeValidation]=\"model.getAdditional('rangeValidation', true)\"\r\n                      [steps]=\"model.getAdditional('steps', {})\"\r\n                      [tabindex]=\"model.tabIndex\"\r\n                      (blur)=\"onBlur($event)\"\r\n                      (close)=\"onCustomEvent($event, 'close')\"\r\n                      (focus)=\"onFocus($event)\"\r\n                      (open)=\"onCustomEvent($event, 'open')\"\r\n                      (valueChange)=\"onChange($event)\"></kendo-timepicker>\r\n\r\n</ng-container>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicKendoTimePickerComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicKendoTimePickerComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        customEvent: [{ type: Output }],
        focus: [{ type: Output }],
        kendoTimePicker: [{ type: ViewChild, args: ["kendoTimePicker",] }]
    };
    return DynamicKendoTimePickerComponent;
}(DynamicFormControlComponent));

var __extends$j = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicKendoUploadComponent = /** @class */ (function (_super) {
    __extends$j(DynamicKendoUploadComponent, _super);
    function DynamicKendoUploadComponent(layoutService, validationService) {
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
    Object.defineProperty(DynamicKendoUploadComponent.prototype, "viewChild", {
        get: /**
         * @return {?}
         */
        function () {
            return this.kendoUpload;
        },
        enumerable: true,
        configurable: true
    });
    DynamicKendoUploadComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-kendo-upload",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <kendo-upload #kendoUpload\r\n                  [accept]=\"model.getAdditional('accept')\"\r\n                  [autoUpload]=\"model.autoUpload\"\r\n                  [batch]=\"model.getAdditional('batch', false)\"\r\n                  [dynamicId]=\"bindId && model.id\"\r\n                  [formControlName]=\"model.id\"\r\n                  [multiple]=\"model.multiple\"\r\n                  [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n                  [removeField]=\"model.getAdditional('removeField', 'fileNames')\"\r\n                  [removeMethod]=\"model.getAdditional('removeMethod', 'POST')\"\r\n                  [removeUrl]=\"model.removeUrl\"\r\n                  [responseType]=\"model.getAdditional('responseType', 'json')\"\r\n                  [saveField]=\"model.getAdditional('saveField', 'files')\"\r\n                  [saveMethod]=\"model.getAdditional('saveMethod', 'POST')\"\r\n                  [saveUrl]=\"model.url\"\r\n                  [showFileList]=\"model.showFileList\"\r\n                  [tabIndex]=\"model.tabIndex\"\r\n                  [withCredentials]=\"model.getAdditional('withCredentials', true)\"\r\n                  (blur)=\"onBlur($event)\"\r\n                  (cancel)=\"onCustomEvent($event, 'cancel')\"\r\n                  (change)=\"onChange($event)\"\r\n                  (clear)=\"onCustomEvent($event, 'clear')\"\r\n                  (complete)=\"onCustomEvent($event, 'complete')\"\r\n                  (error)=\"onCustomEvent($event, 'error')\"\r\n                  (focus)=\"onFocus($event)\"\r\n                  (remove)=\"onCustomEvent($event, 'remove')\"\r\n                  (select)=\"onCustomEvent($event, 'select')\"\r\n                  (success)=\"onCustomEvent($event, 'succes')\"\r\n                  (upload)=\"onCustomEvent($event, 'upload')\"\r\n                  (uploadProgress)=\"onCustomEvent($event, 'uploadProgress')\"\r\n                  (valueChange)=\"onChange($event)\"></kendo-upload>\r\n\r\n</ng-container>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicKendoUploadComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicKendoUploadComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        templates: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        customEvent: [{ type: Output }],
        focus: [{ type: Output }],
        kendoUpload: [{ type: ViewChild, args: ["kendoUpload",] }]
    };
    return DynamicKendoUploadComponent;
}(DynamicKendoTemplateableFormControlComponent));

var __extends$k = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicKendoFormControlContainerComponent = /** @class */ (function (_super) {
    __extends$k(DynamicKendoFormControlContainerComponent, _super);
    function DynamicKendoFormControlContainerComponent(componentFactoryResolver, layoutService, validationService) {
        var _this = _super.call(this, componentFactoryResolver, layoutService, validationService) || this;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.context = null;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        _this.customEvent = new EventEmitter();
        return _this;
    }
    Object.defineProperty(DynamicKendoFormControlContainerComponent.prototype, "componentType", {
        get: /**
         * @return {?}
         */
        function () {
            return this.layoutService.getCustomComponentType(this.model) || kendoUIFormControlMapFn(this.model);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicKendoFormControlContainerComponent.prototype, "hasHint", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isTextBox && isString((/** @type {?} */ (this.model)).hint);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicKendoFormControlContainerComponent.prototype, "hasLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this.model.type !== DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX && this.componentType !== DynamicKendoInputComponent && isString(this.model.label);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicKendoFormControlContainerComponent.prototype, "isTextBox", {
        get: /**
         * @return {?}
         */
        function () {
            return this.componentType === DynamicKendoMaskedTextBoxComponent || this.componentType === DynamicKendoNumericTextBoxComponent;
        },
        enumerable: true,
        configurable: true
    });
    DynamicKendoFormControlContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-kendo-form-control",
                    template: "<div [formGroup]=\"group\" [ngClass]=\"[getClass('element', 'container'), getClass('grid', 'container')]\">\r\n\r\n    <label *ngIf=\"hasLabel\" [for]=\"model.id\" [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\">\r\n\r\n        <span [innerHTML]=\"model.label\"></span>\r\n\r\n        <span *ngIf=\"hasHint\" class=\"k-field-info\" [innerHTML]=\"model.hint\" [ngClass]=\"getClass('element', 'hint')\"></span>\r\n\r\n    </label>\r\n\r\n    <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <ng-container #componentViewContainer></ng-container>\r\n\r\n    <ul *ngIf=\"showErrorMessages\" [ngClass]=\"[getClass('element', 'errors'), getClass('grid', 'errors')]\">\r\n        <li *ngFor=\"let message of errorMessages\" class=\"k-field-info k-required\">{{ message }}</li>\r\n    </ul>\r\n\r\n    <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <ng-content></ng-content>\r\n\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    DynamicKendoFormControlContainerComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicKendoFormControlContainerComponent.propDecorators = {
        contentTemplateList: [{ type: ContentChildren, args: [DynamicTemplateDirective,] }],
        inputTemplateList: [{ type: Input, args: ["templates",] }],
        bindId: [{ type: Input }],
        context: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        customEvent: [{ type: Output, args: ["kendoEvent",] }],
        componentViewContainerRef: [{ type: ViewChild, args: ["componentViewContainer", { read: ViewContainerRef },] }]
    };
    return DynamicKendoFormControlContainerComponent;
}(DynamicFormControlContainerComponent));
/**
 * @param {?} model
 * @return {?}
 */
function kendoUIFormControlMapFn(model) {
    switch (model.type) {
        case DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
            return DynamicKendoFormArrayComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX:
            return DynamicKendoCheckboxComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
            return DynamicKendoCheckboxGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER:
            /** @type {?} */
            var datepickerModel = /** @type {?} */ (model);
            return datepickerModel.inline ? DynamicKendoCalendarComponent : DynamicKendoDatePickerComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_FILE_UPLOAD:
            return DynamicKendoUploadComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_GROUP:
            return DynamicKendoFormGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_INPUT:
            /** @type {?} */
            var inputModel = /** @type {?} */ (model);
            if (inputModel.inputType === DYNAMIC_FORM_CONTROL_INPUT_TYPE_DATE) {
                return DynamicKendoDateInputComponent;
            }
            else if (!inputModel.mask && inputModel.list && inputModel.inputType !== DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER) {
                return DynamicKendoAutoCompleteComponent;
            }
            else if (inputModel.mask && inputModel.inputType !== DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER) {
                return DynamicKendoMaskedTextBoxComponent;
            }
            else if (!inputModel.mask && inputModel.inputType === DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER) {
                return DynamicKendoNumericTextBoxComponent;
            }
            else {
                return DynamicKendoInputComponent;
            }
        case DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP:
            return DynamicKendoRadioGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_SELECT:
            /** @type {?} */
            var selectModel = /** @type {?} */ (model);
            return selectModel.multiple ? DynamicKendoMultiSelectComponent : DynamicKendoDropdownListComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_SLIDER:
            return DynamicKendoSliderComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_SWITCH:
            return DynamicKendoSwitchComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA:
            return DynamicKendoTextAreaComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER:
            return DynamicKendoTimePickerComponent;
        default:
            return null;
    }
}

var __extends$l = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicKendoFormComponent = /** @class */ (function (_super) {
    __extends$l(DynamicKendoFormComponent, _super);
    function DynamicKendoFormComponent(formService, layoutService) {
        var _this = _super.call(this, formService, layoutService) || this;
        _this.formService = formService;
        _this.layoutService = layoutService;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        _this.customEvent = new EventEmitter();
        return _this;
    }
    DynamicKendoFormComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-kendo-form",
                    template: "<dynamic-kendo-form-control *ngFor=\"let model of formModel; trackBy: trackByFn\"\r\n                            [group]=\"formGroup\"\r\n                            [hidden]=\"model.hidden\"\r\n                            [layout]=\"formLayout\"\r\n                            [model]=\"model\"\r\n                            [ngClass]=\"[getClass(model,'element', 'host'), getClass(model,'grid', 'host')]\"\r\n                            [templates]=\"templates\"\r\n                            (blur)=\"onEvent($event, 'blur')\"\r\n                            (change)=\"onEvent($event, 'change')\"\r\n                            (focus)=\"onEvent($event, 'focus')\"\r\n                            (kendoEvent)=\"onEvent($event, 'custom')\"></dynamic-kendo-form-control>"
                }] }
    ];
    /** @nocollapse */
    DynamicKendoFormComponent.ctorParameters = function () { return [
        { type: DynamicFormService },
        { type: DynamicFormLayoutService }
    ]; };
    DynamicKendoFormComponent.propDecorators = {
        formGroup: [{ type: Input, args: ["group",] }],
        formModel: [{ type: Input, args: ["model",] }],
        formLayout: [{ type: Input, args: ["layout",] }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        customEvent: [{ type: Output, args: ["kendoEvent",] }],
        templates: [{ type: ContentChildren, args: [DynamicTemplateDirective,] }],
        components: [{ type: ViewChildren, args: [DynamicKendoFormControlContainerComponent,] }]
    };
    return DynamicKendoFormComponent;
}(DynamicFormComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DynamicFormsKendoUIModule = /** @class */ (function () {
    function DynamicFormsKendoUIModule() {
    }
    DynamicFormsKendoUIModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        DateInputsModule,
                        DropDownsModule,
                        InputsModule,
                        UploadModule,
                        DynamicFormsCoreModule
                    ],
                    declarations: [
                        DynamicKendoAutoCompleteComponent,
                        DynamicKendoCalendarComponent,
                        DynamicKendoCheckboxComponent,
                        DynamicKendoCheckboxGroupComponent,
                        DynamicKendoDateInputComponent,
                        DynamicKendoDatePickerComponent,
                        DynamicKendoDropdownListComponent,
                        DynamicKendoFormArrayComponent,
                        DynamicKendoFormGroupComponent,
                        DynamicKendoInputComponent,
                        DynamicKendoMaskedTextBoxComponent,
                        DynamicKendoMultiSelectComponent,
                        DynamicKendoNumericTextBoxComponent,
                        DynamicKendoRadioGroupComponent,
                        DynamicKendoSliderComponent,
                        DynamicKendoSwitchComponent,
                        DynamicKendoTextAreaComponent,
                        DynamicKendoTimePickerComponent,
                        DynamicKendoUploadComponent,
                        DynamicKendoFormControlContainerComponent,
                        DynamicKendoFormComponent
                    ],
                    entryComponents: [
                        DynamicKendoAutoCompleteComponent,
                        DynamicKendoCalendarComponent,
                        DynamicKendoCheckboxComponent,
                        DynamicKendoCheckboxGroupComponent,
                        DynamicKendoDateInputComponent,
                        DynamicKendoDatePickerComponent,
                        DynamicKendoDropdownListComponent,
                        DynamicKendoFormArrayComponent,
                        DynamicKendoFormGroupComponent,
                        DynamicKendoInputComponent,
                        DynamicKendoMaskedTextBoxComponent,
                        DynamicKendoMultiSelectComponent,
                        DynamicKendoNumericTextBoxComponent,
                        DynamicKendoRadioGroupComponent,
                        DynamicKendoSliderComponent,
                        DynamicKendoSwitchComponent,
                        DynamicKendoTextAreaComponent,
                        DynamicKendoTimePickerComponent,
                        DynamicKendoUploadComponent
                    ],
                    exports: [
                        DynamicFormsCoreModule,
                        DynamicKendoFormControlContainerComponent,
                        DynamicKendoFormComponent
                    ]
                },] }
    ];
    return DynamicFormsKendoUIModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { DynamicKendoAutoCompleteComponent, DynamicKendoCalendarComponent, DynamicKendoCheckboxComponent, DynamicKendoCheckboxGroupComponent, DynamicKendoDateInputComponent, DynamicKendoDatePickerComponent, DynamicKendoDropdownListComponent, DynamicKendoFormArrayComponent, DynamicKendoFormGroupComponent, DynamicKendoInputComponent, DynamicKendoMaskedTextBoxComponent, DynamicKendoMultiSelectComponent, DynamicKendoNumericTextBoxComponent, DynamicKendoRadioGroupComponent, DynamicKendoSliderComponent, DynamicKendoSwitchComponent, DynamicKendoTextAreaComponent, DynamicKendoTimePickerComponent, DynamicKendoUploadComponent, DynamicKendoFormComponent, kendoUIFormControlMapFn, DynamicKendoFormControlContainerComponent, DynamicKendoTemplateableFormControlComponent, KENDO_TEMPLATE_DIRECTIVES, DynamicFormsKendoUIModule };
//# sourceMappingURL=ui-kendo.js.map
