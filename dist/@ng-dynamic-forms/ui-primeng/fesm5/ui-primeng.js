/*!
@ng-dynamic-forms/ui-primeng 6.2.0 2018-10-18 21:42 UTC
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
import { DynamicTemplateableFormControlComponent, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicFormArrayComponent, DynamicFormControlContainerComponent, DynamicTemplateDirective, DYNAMIC_FORM_CONTROL_TYPE_ARRAY, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP, DYNAMIC_FORM_CONTROL_TYPE_COLORPICKER, DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER, DYNAMIC_FORM_CONTROL_TYPE_EDITOR, DYNAMIC_FORM_CONTROL_TYPE_GROUP, DYNAMIC_FORM_CONTROL_TYPE_INPUT, DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER, DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP, DYNAMIC_FORM_CONTROL_TYPE_RATING, DYNAMIC_FORM_CONTROL_TYPE_SELECT, DYNAMIC_FORM_CONTROL_TYPE_SLIDER, DYNAMIC_FORM_CONTROL_TYPE_SWITCH, DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA, DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER, DynamicFormComponent, DynamicFormService, DynamicFormsCoreModule } from '@ng-dynamic-forms/core';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ComponentFactoryResolver, ContentChildren, ViewContainerRef, ViewChildren, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule, CalendarModule, CheckboxModule, ChipsModule, ColorPickerModule, DropdownModule, EditorModule, InputMaskModule, InputSwitchModule, InputTextModule, InputTextareaModule, MultiSelectModule, RadioButtonModule, RatingModule, SliderModule, SpinnerModule } from 'primeng/primeng';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var PRIME_NG_TEMPLATE_DIRECTIVES = new Map([
    ["itemTemplate", "itemTemplate"],
    ["selectedItemTemplate", "selectedItemTemplate"]
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
DynamicPrimeNGTemplateableFormControlComponent = /** @class */ (function (_super) {
    __extends(DynamicPrimeNGTemplateableFormControlComponent, _super);
    function DynamicPrimeNGTemplateableFormControlComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} template
     * @return {?}
     */
    DynamicPrimeNGTemplateableFormControlComponent.prototype.mapTemplate = /**
     * @param {?} template
     * @return {?}
     */
    function (template) {
        return template.templateRef;
    };
    return DynamicPrimeNGTemplateableFormControlComponent;
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
var DynamicPrimeNGAutoCompleteComponent = /** @class */ (function (_super) {
    __extends$1(DynamicPrimeNGAutoCompleteComponent, _super);
    function DynamicPrimeNGAutoCompleteComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.templateDirectives = PRIME_NG_TEMPLATE_DIRECTIVES;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.customEvent = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    Object.defineProperty(DynamicPrimeNGAutoCompleteComponent.prototype, "suggestions", {
        get: /**
         * @return {?}
         */
        function () {
            return this._suggestions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicPrimeNGAutoCompleteComponent.prototype, "viewChild", {
        get: /**
         * @return {?}
         */
        function () {
            return this.pAutoComplete;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} _$event
     * @return {?}
     */
    DynamicPrimeNGAutoCompleteComponent.prototype.onAutoComplete = /**
     * @param {?} _$event
     * @return {?}
     */
    function (_$event) {
        if (Array.isArray(this.model.list)) {
            this._suggestions = this.model.list.map(function (item) { return item; });
        }
    };
    DynamicPrimeNGAutoCompleteComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-primeng-autocomplete",
                    template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <p-autoComplete #pAutoComplete\r\n                    [autoHighlight]=\"model.getAdditional('autoHighlight', false)\"\r\n                    [delay]=\"model.getAdditional('delay', 300)\"\r\n                    [dropdown]=\"model.getAdditional('dropdown', false)\"\r\n                    [dynamicId]=\"bindId && model.id\"\r\n                    [emptyMessage]=\"model.getAdditional('emptyMessage', null)\"\r\n                    [forceSelection]=\"model.getAdditional('forceSelection', false)\"\r\n                    [formControlName]=\"model.id\"\r\n                    [minLength]=\"model.getAdditional('minLength', 1)\"\r\n                    [multiple]=\"model.multiple\"\r\n                    [ngClass]=\"getClass('element', 'control')\"\r\n                    [placeholder]=\"model.placeholder\"\r\n                    [scrollHeight]=\"model.getAdditional('scrollHeight', '200px')\"\r\n                    [suggestions]=\"suggestions\"\r\n                    [tabindex]=\"model.tabIndex\"\r\n                    (onBlur)=\"onBlur($event)\"\r\n                    (change)=\"onChange($event)\"\r\n                    (onClear)=\"onCustomEvent($event, 'onClear')\"\r\n                    (onDropdownClick)=\"onCustomEvent($event, 'onDropdownClick')\"\r\n                    (onFocus)=\"onFocus($event)\"\r\n                    (onSelect)=\"onCustomEvent($event, 'onSelect')\"\r\n                    (onUnselect)=\"onCustomEvent($event, 'onUnselect')\"\r\n                    (completeMethod)=\"onAutoComplete($event)\"></p-autoComplete>\r\n\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicPrimeNGAutoCompleteComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicPrimeNGAutoCompleteComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        templates: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        customEvent: [{ type: Output }],
        focus: [{ type: Output }],
        pAutoComplete: [{ type: ViewChild, args: ["pAutoComplete",] }]
    };
    return DynamicPrimeNGAutoCompleteComponent;
}(DynamicPrimeNGTemplateableFormControlComponent));

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
var DynamicPrimeNGCalendarComponent = /** @class */ (function (_super) {
    __extends$2(DynamicPrimeNGCalendarComponent, _super);
    function DynamicPrimeNGCalendarComponent(layoutService, validationService) {
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
    Object.defineProperty(DynamicPrimeNGCalendarComponent.prototype, "focusedDate", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.model)).focusedDate || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicPrimeNGCalendarComponent.prototype, "inline", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.model)).inline || false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicPrimeNGCalendarComponent.prototype, "showSeconds", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.model)).showSeconds || false;
        },
        enumerable: true,
        configurable: true
    });
    DynamicPrimeNGCalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-primeng-calendar",
                    template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <p-calendar #pCalendar\r\n                [dateFormat]=\"model.format || 'mm/dd/yy'\"\r\n                [defaultDate]=\"focusedDate\"\r\n                [disabledDates]=\"model.getAdditional('disabledDates')\"\r\n                [disabledDays]=\"model.getAdditional('disabledDays')\"\r\n                [dynamicId]=\"bindId && model.id\"\r\n                [formControlName]=\"model.id\"\r\n                [hourFormat]=\"model.getAdditional('hourFormat', '24')\"\r\n                [icon]=\"model.getAdditional('icon', 'pi pi-calendar')\"\r\n                [inline]=\"inline\"\r\n                [locale]=\"model.getAdditional('locale', { firstDayOfWeek: 0, dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'], monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], today: 'Today', clear: 'Clear' })\"\r\n                [maxDate]=\"model.max\"\r\n                [maxDateCount]=\"model.getAdditional('maxDateCount')\"\r\n                [minDate]=\"model.min\"\r\n                [monthNavigator]=\"model.getAdditional('monthNavigator', false)\"\r\n                [ngClass]=\"getClass('element', 'control')\"\r\n                [placeholder]=\"model.placeholder\"\r\n                [selectionMode]=\"model.getAdditional('selectionMode', 'single')\"\r\n                [selectOtherMonths]=\"model.getAdditional('selectOtherMonths', false)\"\r\n                [shortYearCutoff]=\"model.getAdditional('shortYearCutoff', '+10')\"\r\n                [showButtonBar]=\"model.getAdditional('showButtonBar', false)\"\r\n                [showIcon]=\"model.getAdditional('showIcon', true)\"\r\n                [showOnFocus]=\"model.getAdditional('showOnFocus', true)\"\r\n                [showOtherMonths]=\"model.getAdditional('showOtherMonths', true)\"\r\n                [showSeconds]=\"showSeconds\"\r\n                [showTime]=\"model.getAdditional('showTime', false)\"\r\n                [stepHour]=\"model.getAdditional('stepHour', 1)\"\r\n                [stepMinute]=\"model.getAdditional('stepMinute', 1)\"\r\n                [stepSecond]=\"model.getAdditional('stepSecond', 1)\"\r\n                [tabindex]=\"model.tabIndex\"\r\n                [timeOnly]=\"model.type === 'TIMEPICKER'\"\r\n                [yearNavigator]=\"model.getAdditional('yearNavigator', false)\"\r\n                [yearRange]=\"model.getAdditional('yearRange')\"\r\n                (onBlur)=\"onBlur($event)\"\r\n                (onClearClick)=\"onCustomEvent($event, 'onClearClick')\"\r\n                (onClose)=\"onCustomEvent($event, 'onClose')\"\r\n                (onFocus)=\"onFocus($event)\"\r\n                (onInput)=\"onChange($event)\"\r\n                (onSelect)=\"onChange($event)\"\r\n                (onTodayClick)=\"onCustomEvent($event, 'onTodayClick')\"></p-calendar>\r\n\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicPrimeNGCalendarComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicPrimeNGCalendarComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        customEvent: [{ type: Output }],
        focus: [{ type: Output }],
        pCalendar: [{ type: ViewChild, args: ["pCalendar",] }]
    };
    return DynamicPrimeNGCalendarComponent;
}(DynamicFormControlComponent));

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
var DynamicPrimeNGCheckboxComponent = /** @class */ (function (_super) {
    __extends$3(DynamicPrimeNGCheckboxComponent, _super);
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
var DynamicPrimeNGChipsComponent = /** @class */ (function (_super) {
    __extends$4(DynamicPrimeNGChipsComponent, _super);
    function DynamicPrimeNGChipsComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.templateDirectives = PRIME_NG_TEMPLATE_DIRECTIVES;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.customEvent = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    Object.defineProperty(DynamicPrimeNGChipsComponent.prototype, "viewChild", {
        get: /**
         * @return {?}
         */
        function () {
            return this.pChips;
        },
        enumerable: true,
        configurable: true
    });
    DynamicPrimeNGChipsComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-primeng-chips",
                    template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <p-chips #pChips\r\n             [allowDuplicate]=\"model.getAdditional('allowDuplicate', true)\"\r\n             [dynamicId]=\"bindId && model.id\"\r\n             [formControlName]=\"model.id\"\r\n             [ngClass]=\"getClass('element', 'control')\"\r\n             [tabindex]=\"model.tabIndex\"\r\n             (change)=\"onChange($event)\"\r\n             (onAdd)=\"onCustomEvent($event, 'onAdd')\"\r\n             (onRemove)=\"onCustomEvent($event, 'onRemove')\"></p-chips>\r\n\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicPrimeNGChipsComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicPrimeNGChipsComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        templates: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        customEvent: [{ type: Output }],
        focus: [{ type: Output }],
        pChips: [{ type: ViewChild, args: ["pChips",] }]
    };
    return DynamicPrimeNGChipsComponent;
}(DynamicPrimeNGTemplateableFormControlComponent));

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
var DynamicPrimeNGColorPickerComponent = /** @class */ (function (_super) {
    __extends$5(DynamicPrimeNGColorPickerComponent, _super);
    function DynamicPrimeNGColorPickerComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicPrimeNGColorPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-primeng-colorpicker",
                    template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <p-colorPicker #pColorPicker\r\n                   [dynamicId]=\"bindId && model.id\"\r\n                   [format]=\"model.format || 'hex'\"\r\n                   [formControlName]=\"model.id\"\r\n                   [inline]=\"model.inline\"\r\n                   [ngClass]=\"getClass('element','control')\"\r\n                   [tabindex]=\"model.tabIndex\"\r\n                   (onChange)=\"onChange($event)\"></p-colorPicker>\r\n\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicPrimeNGColorPickerComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicPrimeNGColorPickerComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        pColorPicker: [{ type: ViewChild, args: ["pColorPicker",] }]
    };
    return DynamicPrimeNGColorPickerComponent;
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
var DynamicPrimeNGDropdownComponent = /** @class */ (function (_super) {
    __extends$6(DynamicPrimeNGDropdownComponent, _super);
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
var DynamicPrimeNGEditorComponent = /** @class */ (function (_super) {
    __extends$7(DynamicPrimeNGEditorComponent, _super);
    function DynamicPrimeNGEditorComponent(layoutService, validationService) {
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
    DynamicPrimeNGEditorComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-primeng-editor",
                    template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <p-editor #pEditor\r\n              [dynamicId]=\"bindId && model.id\"\r\n              [formats]=\"model.getAdditional('formats', null)\"\r\n              [formControlName]=\"model.id\"\r\n              [ngClass]=\"getClass('element','control')\"\r\n              (onSelectionChange)=\"onCustomEvent($event, 'onSelectionChange')\"\r\n              (onTextChange)=\"onChange($event)\"></p-editor>\r\n\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicPrimeNGEditorComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicPrimeNGEditorComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        customEvent: [{ type: Output }],
        focus: [{ type: Output }],
        pEditor: [{ type: ViewChild, args: ["pEditor",] }]
    };
    return DynamicPrimeNGEditorComponent;
}(DynamicFormControlComponent));

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
var DynamicPrimeNGFormArrayComponent = /** @class */ (function (_super) {
    __extends$8(DynamicPrimeNGFormArrayComponent, _super);
    function DynamicPrimeNGFormArrayComponent(layoutService, validationService) {
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
    DynamicPrimeNGFormArrayComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-primeng-form-array",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <div [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n        <div [dynamicId]=\"bindId && model.id\" [formArrayName]=\"model.id\" [ngClass]=\"getClass('element', 'control')\">\r\n\r\n            <div *ngFor=\"let groupModel of model.groups; let idx = index\" role=\"group\"\r\n                 [formGroupName]=\"idx\" [ngClass]=\"[getClass('element', 'group'), getClass('grid', 'group')]\">\r\n\r\n                <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: groupModel\"></ng-container>\r\n\r\n                <dynamic-primeng-form-control *ngFor=\"let _model of groupModel.group\"\r\n                                              [bindId]=\"false\"\r\n                                              [context]=\"groupModel\"\r\n                                              [group]=\"control.at(idx)\"\r\n                                              [hidden]=\"_model.hidden\"\r\n                                              [layout]=\"layout\"\r\n                                              [model]=\"_model\"\r\n                                              [templates]=\"templates\"\r\n                                              [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model),\r\n                                                          getClass('element','children'), getClass('grid','children')]\"\r\n                                              (blur)=\"onBlur($event)\"\r\n                                              (change)=\"onChange($event)\"\r\n                                              (focus)=\"onFocus($event)\"\r\n                                              (pEvent)=\"onCustomEvent($event, null, true)\"></dynamic-primeng-form-control>\r\n\r\n                <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: groupModel\"></ng-container>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</ng-container>"
                }] }
    ];
    /** @nocollapse */
    DynamicPrimeNGFormArrayComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicPrimeNGFormArrayComponent.propDecorators = {
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
    return DynamicPrimeNGFormArrayComponent;
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
var DynamicPrimeNGFormGroupComponent = /** @class */ (function (_super) {
    __extends$9(DynamicPrimeNGFormGroupComponent, _super);
    function DynamicPrimeNGFormGroupComponent(layoutService, validationService) {
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
    DynamicPrimeNGFormGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-primeng-form-group",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <div role=\"group\"\r\n         [dynamicId]=\"bindId && model.id\"\r\n         [formGroupName]=\"model.id\"\r\n         [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\">\r\n\r\n        <dynamic-primeng-form-control *ngFor=\"let _model of model.group\"\r\n                                      [group]=\"control\"\r\n                                      [hidden]=\"_model.hidden\"\r\n                                      [layout]=\"layout\"\r\n                                      [model]=\"_model \"\r\n                                      [templates]=\"templates\"\r\n                                      [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model),\r\n                                                  getClass('element','children'), getClass('grid','children')]\"\r\n                                      (blur)=\"onBlur($event)\"\r\n                                      (change)=\"onChange($event)\"\r\n                                      (focus)=\"onFocus($event)\"\r\n                                      (pEvent)=\"onCustomEvent($event, null, true)\"></dynamic-primeng-form-control>\r\n    </div>\r\n\r\n</ng-container>"
                }] }
    ];
    /** @nocollapse */
    DynamicPrimeNGFormGroupComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicPrimeNGFormGroupComponent.propDecorators = {
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
    return DynamicPrimeNGFormGroupComponent;
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
var DynamicPrimeNGInputComponent = /** @class */ (function (_super) {
    __extends$a(DynamicPrimeNGInputComponent, _super);
    function DynamicPrimeNGInputComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicPrimeNGInputComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-primeng-input",
                    template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <input pInputText #pInputText\r\n           [attr.accept]=\"model.accept\"\r\n           [attr.max]=\"model.max\"\r\n           [attr.min]=\"model.min\"\r\n           [attr.multiple]=\"model.multiple\"\r\n           [attr.step]=\"model.step\"\r\n           [autocomplete]=\"model.autoComplete\"\r\n           [autofocus]=\"model.autoFocus\"\r\n           [dynamicId]=\"bindId && model.id\"\r\n           [dynamicList]=\"model.listId\"\r\n           [formControlName]=\"model.id\"\r\n           [maxlength]=\"model.maxLength\"\r\n           [minlength]=\"model.minLength\"\r\n           [name]=\"model.name\"\r\n           [ngClass]=\"getClass('element', 'control')\"\r\n           [pattern]=\"model.pattern\"\r\n           [placeholder]=\"model.placeholder\"\r\n           [readonly]=\"model.readOnly\"\r\n           [required]=\"model.required\"\r\n           [spellcheck]=\"model.spellCheck\"\r\n           [tabindex]=\"model.tabIndex\"\r\n           [type]=\"model.inputType\"\r\n           (blur)=\"onBlur($event)\"\r\n           (change)=\"onChange($event)\"\r\n           (focus)=\"onFocus($event)\"/>\r\n\r\n    <datalist *ngIf=\"model.hasList\" [id]=\"model.listId\">\r\n\r\n        <option *ngFor=\"let option of model.list$ | async\" [value]=\"option\">\r\n\r\n    </datalist>\r\n\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicPrimeNGInputComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicPrimeNGInputComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        pInputText: [{ type: ViewChild, args: ["pInputText",] }]
    };
    return DynamicPrimeNGInputComponent;
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
var DynamicPrimeNGInputMaskComponent = /** @class */ (function (_super) {
    __extends$b(DynamicPrimeNGInputMaskComponent, _super);
    function DynamicPrimeNGInputMaskComponent(layoutService, validationService) {
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
    DynamicPrimeNGInputMaskComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-primeng-input-mask",
                    template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <p-inputMask #pInputMask\r\n                 [autoClear]=\"model.getAdditional('autoClear', true)\"\r\n                 [dynamicId]=\"bindId && model.id\"\r\n                 [formControlName]=\"model.id\"\r\n                 [mask]=\"model.mask\"\r\n                 [ngClass]=\"getClass('element', 'control')\"\r\n                 [placeholder]=\"model.placeholder\"\r\n                 [readonly]=\"model.readOnly\"\r\n                 [slotChar]=\"model.getAdditional('slotChar', '_')\"\r\n                 [tabindex]=\"model.tabIndex\"\r\n                 (change)=\"onChange($event)\"\r\n                 (onBlur)=\"onBlur($event)\"\r\n                 (onComplete)=\"onCustomEvent($event, 'onComplete')\"\r\n                 (onFocus)=\"onFocus($event)\"></p-inputMask>\r\n\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicPrimeNGInputMaskComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicPrimeNGInputMaskComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        customEvent: [{ type: Output }],
        focus: [{ type: Output }],
        pInputMask: [{ type: ViewChild, args: ["pInputMask",] }]
    };
    return DynamicPrimeNGInputMaskComponent;
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
var DynamicPrimeNGInputSwitchComponent = /** @class */ (function (_super) {
    __extends$c(DynamicPrimeNGInputSwitchComponent, _super);
    function DynamicPrimeNGInputSwitchComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicPrimeNGInputSwitchComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-primeng-input-switch",
                    template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <p-inputSwitch #pInputSwitch\r\n                   [dynamicId]=\"bindId && model.id\"\r\n                   [formControlName]=\"model.id\"\r\n                   [ngClass]=\"getClass('element', 'control')\"\r\n                   [tabindex]=\"model.tabIndex\"\r\n                   (onChange)=\"onChange($event)\"></p-inputSwitch>\r\n\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicPrimeNGInputSwitchComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicPrimeNGInputSwitchComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        pInputSwitch: [{ type: ViewChild, args: ["pInputSwitch",] }]
    };
    return DynamicPrimeNGInputSwitchComponent;
}(DynamicFormControlComponent));

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
var DynamicPrimeNGMultiSelectComponent = /** @class */ (function (_super) {
    __extends$d(DynamicPrimeNGMultiSelectComponent, _super);
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
var DynamicPrimeNGRadioGroupComponent = /** @class */ (function (_super) {
    __extends$e(DynamicPrimeNGRadioGroupComponent, _super);
    function DynamicPrimeNGRadioGroupComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicPrimeNGRadioGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-primeng-radio-group",
                    template: "<div role=\"radiogroup\"\r\n     [dynamicId]=\"bindId && model.id\"\r\n     [formGroup]=\"group\"\r\n     [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n     [tabindex]=\"model.tabIndex\">\r\n\r\n    <div *ngFor=\"let option of model.options$ | async\" [ngClass]=\"getClass('grid', 'option')\">\r\n\r\n        <p-radioButton [formControlName]=\"model.id\"\r\n                       [label]=\"option.label\"\r\n                       [name]=\"model.id\"\r\n                       [ngClass]=\"getClass('element', 'option')\"\r\n                       [value]=\"option.value\"\r\n                       (click)=\"onChange($event)\"></p-radioButton>\r\n    </div>\r\n\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicPrimeNGRadioGroupComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicPrimeNGRadioGroupComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }]
    };
    return DynamicPrimeNGRadioGroupComponent;
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
var DynamicPrimeNGRatingComponent = /** @class */ (function (_super) {
    __extends$f(DynamicPrimeNGRatingComponent, _super);
    function DynamicPrimeNGRatingComponent(layoutService, validationService) {
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
    DynamicPrimeNGRatingComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-primeng-rating",
                    template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <p-rating #pRating\r\n              [cancel]=\"model.getAdditional('cancel', true)\"\r\n              [dynamicId]=\"bindId && model.id\"\r\n              [formControlName]=\"model.id\"\r\n              [iconCancelClass]=\"model.getAdditional('iconCancelClass', 'pi pi-ban')\"\r\n              [iconOffClass]=\"model.getAdditional('iconOffClass', 'pi pi-star-o')\"\r\n              [iconOnClass]=\"model.getAdditional('iconOnClass', 'pi pi-star')\"\r\n              [ngClass]=\"getClass('element', 'control')\"\r\n              [stars]=\"model.max\"\r\n              (onCancel)=\"onCustomEvent($event, 'onCancel')\"\r\n              (onRate)=\"onChange($event)\"></p-rating>\r\n\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicPrimeNGRatingComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicPrimeNGRatingComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        customEvent: [{ type: Output }],
        focus: [{ type: Output }],
        pRating: [{ type: ViewChild, args: ["pRating",] }]
    };
    return DynamicPrimeNGRatingComponent;
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
var DynamicPrimeNGSliderComponent = /** @class */ (function (_super) {
    __extends$g(DynamicPrimeNGSliderComponent, _super);
    function DynamicPrimeNGSliderComponent(layoutService, validationService) {
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
    DynamicPrimeNGSliderComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-primeng-slider",
                    template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <p-slider #pSlider\r\n              [animate]=\"model.getAdditional('animate', false)\"\r\n              [dynamicId]=\"bindId && model.id\"\r\n              [formControlName]=\"model.id\"\r\n              [min]=\"model.min\"\r\n              [max]=\"model.max\"\r\n              [ngClass]=\"getClass('element', 'control')\"\r\n              [orientation]=\"model.vertical ? 'vertical' : 'horizontal'\"\r\n              [range]=\"model.getAdditional('range', false)\"\r\n              [step]=\"model.step\"\r\n              (onChange)=\"onChange($event)\"\r\n              (onSlideEnd)=\"onCustomEvent($event, 'onSlideEnd')\"></p-slider>\r\n\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicPrimeNGSliderComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicPrimeNGSliderComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        customEvent: [{ type: Output }],
        focus: [{ type: Output }],
        pSlider: [{ type: ViewChild, args: ["pSlider",] }]
    };
    return DynamicPrimeNGSliderComponent;
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
var DynamicPrimeNGSpinnerComponent = /** @class */ (function (_super) {
    __extends$h(DynamicPrimeNGSpinnerComponent, _super);
    function DynamicPrimeNGSpinnerComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicPrimeNGSpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-primeng-spinner",
                    template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <p-spinner #pSpinner\r\n               [decimalSeparator]=\"model.getAdditional('decimalSeparator', '.')\"\r\n               [dynamicId]=\"bindId && model.id\"\r\n               [formatInput]=\"model.getAdditional('formatInput', true)\"\r\n               [formControlName]=\"model.id\"\r\n               [min]=\"model.min\"\r\n               [max]=\"model.max\"\r\n               [ngClass]=\"getClass('element', 'control')\"\r\n               [placeholder]=\"model.placeholder\"\r\n               [step]=\"model.step || 1\"\r\n               [tabindex]=\"model.tabIndex\"\r\n               [thousandSeparator]=\"model.getAdditional('thousandSeparator', ',')\"\r\n               (onBlur)=\"onBlur($event)\"\r\n               (onChange)=\"onChange($event)\"\r\n               (onFocus)=\"onFocus($event)\"></p-spinner>\r\n\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicPrimeNGSpinnerComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicPrimeNGSpinnerComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        pSpinner: [{ type: ViewChild, args: ["pSpinner",] }]
    };
    return DynamicPrimeNGSpinnerComponent;
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
var DynamicPrimeNGTextAreaComponent = /** @class */ (function (_super) {
    __extends$i(DynamicPrimeNGTextAreaComponent, _super);
    function DynamicPrimeNGTextAreaComponent(layoutService, validationService) {
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
    DynamicPrimeNGTextAreaComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-primeng-textarea",
                    template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <textarea pInputTextarea #pInputTextarea\r\n              [cols]=\"model.cols\"\r\n              [dynamicId]=\"bindId && model.id\"\r\n              [formControlName]=\"model.id\"\r\n              [maxlength]=\"model.maxLength\"\r\n              [minlength]=\"model.minLength\"\r\n              [name]=\"model.name\"\r\n              [ngClass]=\"getClass('element', 'control')\"\r\n              [placeholder]=\"model.placeholder\"\r\n              [readonly]=\"model.readOnly\"\r\n              [required]=\"model.required\"\r\n              [rows]=\"model.rows\"\r\n              [spellcheck]=\"model.spellCheck\"\r\n              [tabindex]=\"model.tabIndex\"\r\n              [wrap]=\"model.wrap\"\r\n              (blur)=\"onBlur($event)\"\r\n              (change)=\"onChange($event)\"\r\n              (focus)=\"onFocus($event)\"\r\n              (onResize)=\"onCustomEvent($event, 'onResize')\"></textarea>\r\n\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicPrimeNGTextAreaComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicPrimeNGTextAreaComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        customEvent: [{ type: Output }],
        focus: [{ type: Output }],
        pInputTextArea: [{ type: ViewChild, args: ["pInputTextarea",] }]
    };
    return DynamicPrimeNGTextAreaComponent;
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
var DynamicPrimeNGFormControlContainerComponent = /** @class */ (function (_super) {
    __extends$j(DynamicPrimeNGFormControlContainerComponent, _super);
    function DynamicPrimeNGFormControlContainerComponent(componentFactoryResolver, layoutService, validationService) {
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
    Object.defineProperty(DynamicPrimeNGFormControlContainerComponent.prototype, "componentType", {
        get: /**
         * @return {?}
         */
        function () {
            return this.layoutService.getCustomComponentType(this.model) || primeNGUIFormControlMapFn(this.model);
        },
        enumerable: true,
        configurable: true
    });
    DynamicPrimeNGFormControlContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-primeng-form-control",
                    template: "<div [formGroup]=\"group\" [ngClass]=\"[getClass('element', 'container'), getClass('grid', 'container')]\">\r\n\r\n    <div *ngIf=\"!isCheckbox && hasLabel\" [ngClass]=\"getClass('grid', 'label')\">\r\n\r\n        <label [for]=\"model.id\" [innerHTML]=\"model.label\" [ngClass]=\"getClass('element', 'label')\"></label>\r\n\r\n    </div>\r\n\r\n    <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <ng-container #componentViewContainer></ng-container>\r\n\r\n    <ul *ngIf=\"showErrorMessages\" [ngClass]=\"[getClass('element', 'errors'), getClass('grid', 'errors')]\">\r\n        <li *ngFor=\"let message of errorMessages\" class=\"ui-message ui-messages-error ui-corner-all\">{{ message }}</li>\r\n    </ul>\r\n\r\n    <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <ng-content></ng-content>\r\n\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    DynamicPrimeNGFormControlContainerComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicPrimeNGFormControlContainerComponent.propDecorators = {
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
        customEvent: [{ type: Output, args: ["pEvent",] }],
        componentViewContainerRef: [{ type: ViewChild, args: ["componentViewContainer", { read: ViewContainerRef },] }]
    };
    return DynamicPrimeNGFormControlContainerComponent;
}(DynamicFormControlContainerComponent));
/**
 * @param {?} model
 * @return {?}
 */
function primeNGUIFormControlMapFn(model) {
    switch (model.type) {
        case DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
            return DynamicPrimeNGFormArrayComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX:
            return DynamicPrimeNGCheckboxComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
            return DynamicPrimeNGFormGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_COLORPICKER:
            return DynamicPrimeNGColorPickerComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER:
            return DynamicPrimeNGCalendarComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_EDITOR:
            return DynamicPrimeNGEditorComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_GROUP:
            return DynamicPrimeNGFormGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_INPUT:
            /** @type {?} */
            var inputModel = /** @type {?} */ (model);
            if (inputModel.inputType === DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER) {
                return DynamicPrimeNGSpinnerComponent;
            }
            else if (inputModel.mask) {
                return DynamicPrimeNGInputMaskComponent;
            }
            else if (Array.isArray(inputModel.list)) {
                return DynamicPrimeNGAutoCompleteComponent;
            }
            else if (inputModel.multiple) {
                return DynamicPrimeNGChipsComponent;
            }
            else {
                return DynamicPrimeNGInputComponent;
            }
        case DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP:
            return DynamicPrimeNGRadioGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_RATING:
            return DynamicPrimeNGRatingComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_SELECT:
            /** @type {?} */
            var selectModel = /** @type {?} */ (model);
            return selectModel.multiple ? DynamicPrimeNGMultiSelectComponent : DynamicPrimeNGDropdownComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_SLIDER:
            return DynamicPrimeNGSliderComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_SWITCH:
            return DynamicPrimeNGInputSwitchComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA:
            return DynamicPrimeNGTextAreaComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER:
            return DynamicPrimeNGCalendarComponent;
        default:
            return null;
    }
}

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
var DynamicPrimeNGFormComponent = /** @class */ (function (_super) {
    __extends$k(DynamicPrimeNGFormComponent, _super);
    function DynamicPrimeNGFormComponent(formService, layoutService) {
        var _this = _super.call(this, formService, layoutService) || this;
        _this.formService = formService;
        _this.layoutService = layoutService;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        _this.customEvent = new EventEmitter();
        return _this;
    }
    DynamicPrimeNGFormComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-primeng-form",
                    template: "<dynamic-primeng-form-control *ngFor=\"let model of formModel; trackBy: trackByFn\"\r\n                              [group]=\"formGroup\"\r\n                              [hidden]=\"model.hidden\"\r\n                              [layout]=\"formLayout\"\r\n                              [model]=\"model\"\r\n                              [ngClass]=\"[getClass(model, 'element', 'host'), getClass(model, 'grid', 'host')]\"\r\n                              [templates]=\"templates\"\r\n                              (blur)=\"onEvent($event, 'blur')\"\r\n                              (change)=\"onEvent($event, 'change')\"\r\n                              (focus)=\"onEvent($event, 'focus')\"\r\n                              (pEvent)=\"onEvent($event, 'custom')\"></dynamic-primeng-form-control>"
                }] }
    ];
    /** @nocollapse */
    DynamicPrimeNGFormComponent.ctorParameters = function () { return [
        { type: DynamicFormService },
        { type: DynamicFormLayoutService }
    ]; };
    DynamicPrimeNGFormComponent.propDecorators = {
        formGroup: [{ type: Input, args: ["group",] }],
        formModel: [{ type: Input, args: ["model",] }],
        formLayout: [{ type: Input, args: ["layout",] }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        customEvent: [{ type: Output }],
        templates: [{ type: ContentChildren, args: [DynamicTemplateDirective,] }],
        components: [{ type: ViewChildren, args: [DynamicPrimeNGFormControlContainerComponent,] }]
    };
    return DynamicPrimeNGFormComponent;
}(DynamicFormComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DynamicFormsPrimeNGUIModule = /** @class */ (function () {
    function DynamicFormsPrimeNGUIModule() {
    }
    DynamicFormsPrimeNGUIModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        DynamicFormsCoreModule,
                        AutoCompleteModule,
                        CalendarModule,
                        CheckboxModule,
                        ChipsModule,
                        ColorPickerModule,
                        DropdownModule,
                        EditorModule,
                        InputMaskModule,
                        InputSwitchModule,
                        InputTextModule,
                        InputTextareaModule,
                        MultiSelectModule,
                        RadioButtonModule,
                        RatingModule,
                        SliderModule,
                        SpinnerModule
                    ],
                    declarations: [
                        DynamicPrimeNGAutoCompleteComponent,
                        DynamicPrimeNGCalendarComponent,
                        DynamicPrimeNGCheckboxComponent,
                        DynamicPrimeNGChipsComponent,
                        DynamicPrimeNGColorPickerComponent,
                        DynamicPrimeNGDropdownComponent,
                        DynamicPrimeNGEditorComponent,
                        DynamicPrimeNGFormArrayComponent,
                        DynamicPrimeNGFormGroupComponent,
                        DynamicPrimeNGInputComponent,
                        DynamicPrimeNGInputMaskComponent,
                        DynamicPrimeNGInputSwitchComponent,
                        DynamicPrimeNGMultiSelectComponent,
                        DynamicPrimeNGRadioGroupComponent,
                        DynamicPrimeNGRatingComponent,
                        DynamicPrimeNGSliderComponent,
                        DynamicPrimeNGSpinnerComponent,
                        DynamicPrimeNGTextAreaComponent,
                        DynamicPrimeNGFormControlContainerComponent,
                        DynamicPrimeNGFormComponent
                    ],
                    entryComponents: [
                        DynamicPrimeNGAutoCompleteComponent,
                        DynamicPrimeNGCalendarComponent,
                        DynamicPrimeNGCheckboxComponent,
                        DynamicPrimeNGChipsComponent,
                        DynamicPrimeNGColorPickerComponent,
                        DynamicPrimeNGDropdownComponent,
                        DynamicPrimeNGEditorComponent,
                        DynamicPrimeNGFormArrayComponent,
                        DynamicPrimeNGFormGroupComponent,
                        DynamicPrimeNGInputComponent,
                        DynamicPrimeNGInputMaskComponent,
                        DynamicPrimeNGInputSwitchComponent,
                        DynamicPrimeNGMultiSelectComponent,
                        DynamicPrimeNGRadioGroupComponent,
                        DynamicPrimeNGRatingComponent,
                        DynamicPrimeNGSliderComponent,
                        DynamicPrimeNGSpinnerComponent,
                        DynamicPrimeNGTextAreaComponent
                    ],
                    exports: [
                        DynamicFormsCoreModule,
                        DynamicPrimeNGFormControlContainerComponent,
                        DynamicPrimeNGFormComponent
                    ]
                },] }
    ];
    return DynamicFormsPrimeNGUIModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { DynamicPrimeNGAutoCompleteComponent, DynamicPrimeNGCalendarComponent, DynamicPrimeNGCheckboxComponent, DynamicPrimeNGChipsComponent, DynamicPrimeNGColorPickerComponent, DynamicPrimeNGDropdownComponent, DynamicPrimeNGEditorComponent, DynamicPrimeNGFormArrayComponent, DynamicPrimeNGFormGroupComponent, DynamicPrimeNGInputComponent, DynamicPrimeNGInputMaskComponent, DynamicPrimeNGInputSwitchComponent, DynamicPrimeNGMultiSelectComponent, DynamicPrimeNGRadioGroupComponent, DynamicPrimeNGRatingComponent, DynamicPrimeNGSliderComponent, DynamicPrimeNGSpinnerComponent, DynamicPrimeNGTextAreaComponent, DynamicPrimeNGFormComponent, PRIME_NG_TEMPLATE_DIRECTIVES, primeNGUIFormControlMapFn, DynamicPrimeNGFormControlContainerComponent, DynamicPrimeNGTemplateableFormControlComponent, DynamicFormsPrimeNGUIModule };
//# sourceMappingURL=ui-primeng.js.map
