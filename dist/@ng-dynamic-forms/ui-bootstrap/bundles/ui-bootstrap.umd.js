/*!
@ng-dynamic-forms/ui-bootstrap 6.2.0 2018-10-18 21:32 UTC
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
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@ng-dynamic-forms/core'), require('ngx-bootstrap/datepicker'), require('ngx-bootstrap/timepicker'), require('@angular/common'), require('angular2-text-mask')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms', '@ng-dynamic-forms/core', 'ngx-bootstrap/datepicker', 'ngx-bootstrap/timepicker', '@angular/common', 'angular2-text-mask'], factory) :
    (factory((global.ngDF = global.ngDF || {}, global.ngDF.bootstrapUI = {}),global.ng.core,global.ng.forms,global.ngDF.core,global['ngx-bootstrap'].umd,global['ngx-bootstrap'].umd,global.ng.common,global['angular2-text-mask']));
}(this, (function (exports,core,forms,core$1,datepicker,timepicker,common,angular2TextMask) { 'use strict';

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
    var DynamicBootstrapCheckboxComponent = /** @class */ (function (_super) {
        __extends(DynamicBootstrapCheckboxComponent, _super);
        function DynamicBootstrapCheckboxComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicBootstrapCheckboxComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-bootstrap-checkbox",
                        template: "<div [formGroup]=\"group\" [class.disabled]=\"model.disabled\" [ngClass]=\"getClass('element', 'control') || 'checkbox'\">\r\n\r\n    <label>\r\n\r\n        <input type=\"checkbox\"\r\n               [checked]=\"model.checked\"\r\n               [dynamicId]=\"bindId && model.id\"\r\n               [formControlName]=\"model.id\"\r\n               [indeterminate]=\"model.indeterminate\"\r\n               [name]=\"model.name\"\r\n               [ngClass]=\"getClass('element', 'control')\"\r\n               [required]=\"model.required\"\r\n               [tabindex]=\"model.tabIndex\"\r\n               [value]=\"model.value\"\r\n               (blur)=\"onBlur($event)\"\r\n               (change)=\"onChange($event)\"\r\n               (focus)=\"onFocus($event)\"/><span [innerHTML]=\"model.label\"\r\n                                                [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></span></label>\r\n</div>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicBootstrapCheckboxComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicBootstrapCheckboxComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }]
        };
        return DynamicBootstrapCheckboxComponent;
    }(core$1.DynamicFormControlComponent));

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
    var DynamicBootstrapDatePickerComponent = /** @class */ (function (_super) {
        __extends$1(DynamicBootstrapDatePickerComponent, _super);
        function DynamicBootstrapDatePickerComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.customEvent = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicBootstrapDatePickerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-bootstrap-datepicker",
                        template: "<div [formGroup]=\"group\" class=\"input-group\">\r\n\r\n    <input bsDatepicker class=\"form-control\" #bsDatepicker=\"bsDatepicker\"\r\n           [autofocus]=\"model.autoFocus\"\r\n           [bsConfig]=\"model.getAdditional('bsConfig', {containerClass: model.getAdditional('containerClass', 'theme-green'), showWeekNumbers: model.getAdditional('showWeekNumbers', true)})\"\r\n           [dynamicId]=\"bindId && model.id\"\r\n           [formControlName]=\"model.id\"\r\n           [maxDate]=\"model.max\"\r\n           [minDate]=\"model.min\"\r\n           [name]=\"model.name\"\r\n           [ngClass]=\"getClass('element', 'control')\"\r\n           [outsideClick]=\"model.getAdditional('outsideClick', true)\"\r\n           [placeholder]=\"model.placeholder\"\r\n           [placement]=\"model.getAdditional('placement', 'bottom')\"\r\n           [readonly]=\"model.readOnly\"\r\n           [required]=\"model.required\"\r\n           (bsValueChange)=\"onChange($event)\"\r\n           (onHidden)=\"onCustomEvent($event, 'onHidden')\"\r\n           (onShown)=\"onCustomEvent($event, 'onShown')\">\r\n\r\n    <div *ngIf=\"model.toggleLabel\" class=\"input-group-btn\">\r\n\r\n        <button *ngIf=\"model.toggleIcon\" class=\"btn\" (click)=\"bsDatepicker.toggle()\"><img [src]=\"model.toggleIcon\"/></button>\r\n        <button *ngIf=\"model.toggleLabel\" class=\"btn\" (click)=\"bsDatepicker.toggle()\">{{ model.toggleLabel }}</button>\r\n\r\n    </div>\r\n\r\n</div>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicBootstrapDatePickerComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicBootstrapDatePickerComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            customEvent: [{ type: core.Output }],
            focus: [{ type: core.Output }],
            bsDatePicker: [{ type: core.ViewChild, args: [datepicker.BsDatepickerDirective,] }]
        };
        return DynamicBootstrapDatePickerComponent;
    }(core$1.DynamicFormControlComponent));

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
    var DynamicBootstrapFormArrayComponent = /** @class */ (function (_super) {
        __extends$2(DynamicBootstrapFormArrayComponent, _super);
        function DynamicBootstrapFormArrayComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.customEvent = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicBootstrapFormArrayComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-bootstrap-form-array",
                        template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <div [dynamicId]=\"bindId && model.id\"\r\n         [formArrayName]=\"model.id\"\r\n         [ngClass]=\"getClass('element', 'control')\">\r\n\r\n        <div *ngFor=\"let groupModel of model.groups; let idx = index\" role=\"group\"\r\n             [formGroupName]=\"idx\" [ngClass]=\"[getClass('element', 'group'), getClass('grid', 'group')]\">\r\n\r\n            <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: groupModel\"></ng-container>\r\n\r\n            <dynamic-bootstrap-form-control *ngFor=\"let _model of groupModel.group\"\r\n                                            [bindId]=\"false\"\r\n                                            [context]=\"groupModel\"\r\n                                            [group]=\"control.at(idx)\"\r\n                                            [hidden]=\"_model.hidden\"\r\n                                            [layout]=\"layout\"\r\n                                            [model]=\"_model\"\r\n                                            [templates]=\"templates\"\r\n                                            [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model),\r\n                                                        getClass('element','children'), getClass('grid','children')]\"\r\n                                            (blur)=\"onBlur($event)\"\r\n                                            (change)=\"onChange($event)\"\r\n                                            (focus)=\"onFocus($event)\"\r\n                                            (bsEvent)=\"onCustomEvent($event, null, true)\"></dynamic-bootstrap-form-control>\r\n\r\n            <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: groupModel\"></ng-container>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</ng-container>"
                    }] }
        ];
        /** @nocollapse */
        DynamicBootstrapFormArrayComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicBootstrapFormArrayComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            templates: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            customEvent: [{ type: core.Output }],
            focus: [{ type: core.Output }]
        };
        return DynamicBootstrapFormArrayComponent;
    }(core$1.DynamicFormArrayComponent));

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
    var DynamicBootstrapFormGroupComponent = /** @class */ (function (_super) {
        __extends$3(DynamicBootstrapFormGroupComponent, _super);
        function DynamicBootstrapFormGroupComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.customEvent = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicBootstrapFormGroupComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-bootstrap-form-group",
                        template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <fieldset [dynamicId]=\"bindId && model.id\"\r\n              [formGroupName]=\"model.id\"\r\n              [name]=\"model.name\"\r\n              [ngClass]=\"getClass('element', 'control')\">\r\n\r\n        <legend *ngIf=\"model.legend\" [innerHTML]=\"model.legend\"></legend>\r\n\r\n        <dynamic-bootstrap-form-control *ngFor=\"let _model of model.group\"\r\n                                        [asBootstrapFormGroup]=\"false\"\r\n                                        [group]=\"control\"\r\n                                        [hidden]=\"_model.hidden\"\r\n                                        [layout]=\"layout\"\r\n                                        [model]=\"_model\"\r\n                                        [templates]=\"templates\"\r\n                                        [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model),\r\n                                                    getClass('element','children'), getClass('grid','children')]\"\r\n                                        (blur)=\"onBlur($event)\"\r\n                                        (change)=\"onChange($event)\"\r\n                                        (focus)=\"onFocus($event)\"\r\n                                        (bsEvent)=\"onCustomEvent($event, null, true)\"></dynamic-bootstrap-form-control>\r\n    </fieldset>\r\n\r\n</ng-container>"
                    }] }
        ];
        /** @nocollapse */
        DynamicBootstrapFormGroupComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicBootstrapFormGroupComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            templates: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            customEvent: [{ type: core.Output }],
            focus: [{ type: core.Output }]
        };
        return DynamicBootstrapFormGroupComponent;
    }(core$1.DynamicFormControlComponent));

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
    var DynamicBootstrapInputComponent = /** @class */ (function (_super) {
        __extends$4(DynamicBootstrapInputComponent, _super);
        function DynamicBootstrapInputComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicBootstrapInputComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-bootstrap-input",
                        template: "<div [formGroup]=\"group\" [class.input-group]=\"model.prefix || model.suffix\">\r\n\r\n    <div *ngIf=\"model.prefix\" class=\"input-group-addon\" [innerHTML]=\"model.prefix\"></div>\r\n\r\n    <input class=\"form-control\"\r\n           [attr.accept]=\"model.accept\"\r\n           [attr.max]=\"model.max\"\r\n           [attr.min]=\"model.min\"\r\n           [attr.multiple]=\"model.multiple\"\r\n           [attr.step]=\"model.step\"\r\n           [autocomplete]=\"model.autoComplete\"\r\n           [autofocus]=\"model.autoFocus\"\r\n           [dynamicId]=\"bindId && model.id\"\r\n           [dynamicList]=\"model.listId\"\r\n           [formControlName]=\"model.id\"\r\n           [maxlength]=\"model.maxLength\"\r\n           [minlength]=\"model.minLength\"\r\n           [name]=\"model.name\"\r\n           [ngClass]=\"getClass('element', 'control')\"\r\n           [pattern]=\"model.pattern\"\r\n           [placeholder]=\"model.placeholder\"\r\n           [readonly]=\"model.readOnly\"\r\n           [required]=\"model.required\"\r\n           [spellcheck]=\"model.spellCheck\"\r\n           [tabindex]=\"model.tabIndex\"\r\n           [textMask]=\"{mask: (model.mask || false), showMask: model.mask && !(model.placeholder)}\"\r\n           [type]=\"model.inputType\"\r\n           (blur)=\"onBlur($event)\"\r\n           (change)=\"onChange($event)\"\r\n           (focus)=\"onFocus($event)\"/>\r\n\r\n    <div *ngIf=\"model.suffix\" class=\"input-group-addon\" [innerHTML]=\"model.suffix\"></div>\r\n\r\n    <datalist *ngIf=\"model.hasList\" [id]=\"model.listId\">\r\n\r\n        <option *ngFor=\"let option of model.list$ | async\" [value]=\"option\">\r\n\r\n    </datalist>\r\n\r\n</div>\r\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicBootstrapInputComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicBootstrapInputComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }]
        };
        return DynamicBootstrapInputComponent;
    }(core$1.DynamicFormControlComponent));

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
    var DynamicBootstrapRadioGroupComponent = /** @class */ (function (_super) {
        __extends$5(DynamicBootstrapRadioGroupComponent, _super);
        function DynamicBootstrapRadioGroupComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicBootstrapRadioGroupComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-bootstrap-radio-group",
                        template: "<fieldset role=\"radiogroup\"\r\n          [dynamicId]=\"bindId && model.id\"\r\n          [formGroup]=\"group\"\r\n          [name]=\"model.name\"\r\n          [ngClass]=\"getClass('element', 'control')\"\r\n          [tabindex]=\"model.tabIndex\"\r\n          (change)=\"onChange($event)\">\r\n\r\n    <legend *ngIf=\"model.legend\" [innerHTML]=\"model.legend\"></legend>\r\n\r\n    <div *ngFor=\"let option of model.options$ | async\" [ngClass]=\"getClass('element', 'option') || 'radio'\">\r\n\r\n        <label><input type=\"radio\"\r\n                      [formControlName]=\"model.id\"\r\n                      [name]=\"model.name\"\r\n                      [value]=\"option.value\"\r\n                      (blur)=\"onBlur($event)\"\r\n                      (focus)=\"onFocus($event)\"/><span [innerHTML]=\"option.label\"></span></label>\r\n    </div>\r\n\r\n</fieldset>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicBootstrapRadioGroupComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicBootstrapRadioGroupComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }]
        };
        return DynamicBootstrapRadioGroupComponent;
    }(core$1.DynamicFormControlComponent));

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
    var DynamicBootstrapSelectComponent = /** @class */ (function (_super) {
        __extends$6(DynamicBootstrapSelectComponent, _super);
        function DynamicBootstrapSelectComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicBootstrapSelectComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-bootstrap-select",
                        template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <select class=\"form-control\"\r\n            [compareWith]=\"model.compareWithFn\"\r\n            [dynamicId]=\"bindId && model.id\"\r\n            [formControlName]=\"model.id\"\r\n            [name]=\"model.name\"\r\n            [ngClass]=\"getClass('element', 'control')\"\r\n            [required]=\"model.required\"\r\n            [tabindex]=\"model.tabIndex\"\r\n            (blur)=\"onBlur($event)\"\r\n            (change)=\"onChange($event)\"\r\n            (focus)=\"onFocus($event)\">\r\n\r\n        <option *ngFor=\"let option of model.options$ | async\"\r\n                [disabled]=\"option.disabled\"\r\n                [ngValue]=\"option.value\">{{ option.label }}\r\n        </option>\r\n\r\n    </select>\r\n\r\n</ng-container>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicBootstrapSelectComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicBootstrapSelectComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }]
        };
        return DynamicBootstrapSelectComponent;
    }(core$1.DynamicFormControlComponent));

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
    var DynamicBootstrapTextAreaComponent = /** @class */ (function (_super) {
        __extends$7(DynamicBootstrapTextAreaComponent, _super);
        function DynamicBootstrapTextAreaComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicBootstrapTextAreaComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-bootstrap-textarea",
                        template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <textarea class=\"form-control\"\r\n              [dynamicId]=\"bindId && model.id\"\r\n              [cols]=\"model.cols\"\r\n              [formControlName]=\"model.id\"\r\n              [maxlength]=\"model.maxLength\"\r\n              [minlength]=\"model.minLength\"\r\n              [name]=\"model.name\"\r\n              [ngClass]=\"getClass('element', 'control')\"\r\n              [placeholder]=\"model.placeholder\"\r\n              [readonly]=\"model.readOnly\"\r\n              [required]=\"model.required\"\r\n              [rows]=\"model.rows\"\r\n              [spellcheck]=\"model.spellCheck\"\r\n              [tabindex]=\"model.tabIndex\"\r\n              [wrap]=\"model.wrap\"\r\n              (blur)=\"onBlur($event)\"\r\n              (change)=\"onChange($event)\"\r\n              (focus)=\"onFocus($event)\"></textarea>\r\n\r\n</ng-container>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicBootstrapTextAreaComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicBootstrapTextAreaComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }]
        };
        return DynamicBootstrapTextAreaComponent;
    }(core$1.DynamicFormControlComponent));

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
    var DynamicBootstrapTimePickerComponent = /** @class */ (function (_super) {
        __extends$8(DynamicBootstrapTimePickerComponent, _super);
        function DynamicBootstrapTimePickerComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicBootstrapTimePickerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-bootstrap-timepicker",
                        template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <timepicker [arrowkeys]=\"model.getAdditional('arrowkeys', true)\"\r\n                [dynamicId]=\"bindId && model.id\"\r\n                [formControlName]=\"model.id\"\r\n                [hourStep]=\"model.getAdditional('hourStep', 1)\"\r\n                [max]=\"model.max\"\r\n                [min]=\"model.min\"\r\n                [mousewheel]=\"model.getAdditional('mousewheel', true)\"\r\n                [minuteStep]=\"model.getAdditional('minuteStep', 1)\"\r\n                [ngClass]=\"getClass('element', 'control')\"\r\n                [secondsStep]=\"model.getAdditional('secondsStep', 1)\"\r\n                [showMeridian]=\"model.meridian\"\r\n                [showSeconds]=\"model.showSeconds\"\r\n                [showSpinners]=\"model.getAdditional('spinners', true)\"></timepicker>\r\n\r\n</ng-container>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicBootstrapTimePickerComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicBootstrapTimePickerComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }],
            bsTimePicker: [{ type: core.ViewChild, args: [timepicker.TimepickerComponent,] }]
        };
        return DynamicBootstrapTimePickerComponent;
    }(core$1.DynamicFormControlComponent));

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
    var DynamicBootstrapFormControlContainerComponent = /** @class */ (function (_super) {
        __extends$9(DynamicBootstrapFormControlContainerComponent, _super);
        function DynamicBootstrapFormControlContainerComponent(componentFactoryResolver, layoutService, validationService) {
            var _this = _super.call(this, componentFactoryResolver, layoutService, validationService) || this;
            _this.componentFactoryResolver = componentFactoryResolver;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.asBootstrapFormGroup = true;
            _this.bindId = true;
            _this.context = null;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            _this.customEvent = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(DynamicBootstrapFormControlContainerComponent.prototype, "componentType", {
            get: /**
             * @return {?}
             */
            function () {
                return this.layoutService.getCustomComponentType(this.model) || bootstrapUIFormControlMapFn(this.model);
            },
            enumerable: true,
            configurable: true
        });
        DynamicBootstrapFormControlContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-bootstrap-form-control",
                        template: "<div [class.form-group]=\"asBootstrapFormGroup || getClass('element', 'container').includes('form-group')\"\r\n     [class.has-error]=\"showErrorMessages\"\r\n     [formGroup]=\"group\"\r\n     [ngClass]=\"[getClass('element', 'container'), getClass('grid', 'container')]\">\r\n\r\n    <label *ngIf=\"!isCheckbox && hasLabel\"\r\n           [for]=\"model.id\"\r\n           [innerHTML]=\"model.label\"\r\n           [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></label>\r\n\r\n    <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <div [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n        <ng-container #componentViewContainer></ng-container>\r\n\r\n        <span *ngIf=\"hasHint\" class=\"help-block\" [innerHTML]=\"model.hint\"\r\n              [ngClass]=\"getClass('element', 'hint')\"></span>\r\n\r\n    </div>\r\n\r\n    <ul *ngIf=\"showErrorMessages\" class=\"has-error\"\r\n        [ngClass]=\"[getClass('element', 'errors'), getClass('grid', 'errors')]\">\r\n\r\n        <li *ngFor=\"let message of errorMessages\" class=\"help-block\">{{ message }}</li>\r\n\r\n    </ul>\r\n\r\n    <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <ng-content></ng-content>\r\n\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        DynamicBootstrapFormControlContainerComponent.ctorParameters = function () { return [
            { type: core.ComponentFactoryResolver },
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicBootstrapFormControlContainerComponent.propDecorators = {
            contentTemplateList: [{ type: core.ContentChildren, args: [core$1.DynamicTemplateDirective,] }],
            inputTemplateList: [{ type: core.Input, args: ["templates",] }],
            asBootstrapFormGroup: [{ type: core.Input }],
            bindId: [{ type: core.Input }],
            context: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }],
            customEvent: [{ type: core.Output, args: ["bsEvent",] }],
            componentViewContainerRef: [{ type: core.ViewChild, args: ["componentViewContainer", { read: core.ViewContainerRef },] }]
        };
        return DynamicBootstrapFormControlContainerComponent;
    }(core$1.DynamicFormControlContainerComponent));
    /**
     * @param {?} model
     * @return {?}
     */
    function bootstrapUIFormControlMapFn(model) {
        switch (model.type) {
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
                return DynamicBootstrapFormArrayComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX:
                return DynamicBootstrapCheckboxComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
                return DynamicBootstrapFormGroupComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER:
                return DynamicBootstrapDatePickerComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_GROUP:
                return DynamicBootstrapFormGroupComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_INPUT:
                return DynamicBootstrapInputComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP:
                return DynamicBootstrapRadioGroupComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_SELECT:
                return DynamicBootstrapSelectComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA:
                return DynamicBootstrapTextAreaComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER:
                return DynamicBootstrapTimePickerComponent;
            default:
                return null;
        }
    }

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
    var DynamicBootstrapFormComponent = /** @class */ (function (_super) {
        __extends$a(DynamicBootstrapFormComponent, _super);
        function DynamicBootstrapFormComponent(formService, layoutService) {
            var _this = _super.call(this, formService, layoutService) || this;
            _this.formService = formService;
            _this.layoutService = layoutService;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            _this.customEvent = new core.EventEmitter();
            return _this;
        }
        DynamicBootstrapFormComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-bootstrap-form",
                        template: "<dynamic-bootstrap-form-control *ngFor=\"let model of formModel; trackBy: trackByFn\"\r\n                                [group]=\"formGroup\"\r\n                                [hidden]=\"model.hidden\"\r\n                                [layout]=\"formLayout\"\r\n                                [model]=\"model\"\r\n                                [ngClass]=\"[getClass(model,'element','host'), getClass(model,'grid','host')]\"\r\n                                [templates]=\"templates\"\r\n                                (blur)=\"onEvent($event, 'blur')\"\r\n                                (change)=\"onEvent($event, 'change')\"\r\n                                (focus)=\"onEvent($event, 'focus')\"\r\n                                (bsEvent)=\"onEvent($event, 'custom')\"></dynamic-bootstrap-form-control>"
                    }] }
        ];
        /** @nocollapse */
        DynamicBootstrapFormComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormService },
            { type: core$1.DynamicFormLayoutService }
        ]; };
        DynamicBootstrapFormComponent.propDecorators = {
            formGroup: [{ type: core.Input, args: ["group",] }],
            formModel: [{ type: core.Input, args: ["model",] }],
            formLayout: [{ type: core.Input, args: ["layout",] }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }],
            customEvent: [{ type: core.Output, args: ["bsEvent",] }],
            templates: [{ type: core.ContentChildren, args: [core$1.DynamicTemplateDirective,] }],
            components: [{ type: core.ViewChildren, args: [DynamicBootstrapFormControlContainerComponent,] }]
        };
        return DynamicBootstrapFormComponent;
    }(core$1.DynamicFormComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DynamicFormsBootstrapUIModule = /** @class */ (function () {
        function DynamicFormsBootstrapUIModule() {
        }
        DynamicFormsBootstrapUIModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.ReactiveFormsModule,
                            datepicker.BsDatepickerModule,
                            timepicker.TimepickerModule,
                            angular2TextMask.TextMaskModule,
                            core$1.DynamicFormsCoreModule
                        ],
                        declarations: [
                            DynamicBootstrapCheckboxComponent,
                            DynamicBootstrapDatePickerComponent,
                            DynamicBootstrapFormArrayComponent,
                            DynamicBootstrapFormGroupComponent,
                            DynamicBootstrapInputComponent,
                            DynamicBootstrapRadioGroupComponent,
                            DynamicBootstrapSelectComponent,
                            DynamicBootstrapTextAreaComponent,
                            DynamicBootstrapTimePickerComponent,
                            DynamicBootstrapFormControlContainerComponent,
                            DynamicBootstrapFormComponent
                        ],
                        entryComponents: [
                            DynamicBootstrapCheckboxComponent,
                            DynamicBootstrapDatePickerComponent,
                            DynamicBootstrapFormArrayComponent,
                            DynamicBootstrapFormGroupComponent,
                            DynamicBootstrapInputComponent,
                            DynamicBootstrapRadioGroupComponent,
                            DynamicBootstrapSelectComponent,
                            DynamicBootstrapTextAreaComponent,
                            DynamicBootstrapTimePickerComponent
                        ],
                        exports: [
                            core$1.DynamicFormsCoreModule,
                            DynamicBootstrapFormControlContainerComponent,
                            DynamicBootstrapFormComponent
                        ]
                    },] }
        ];
        return DynamicFormsBootstrapUIModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.DynamicBootstrapCheckboxComponent = DynamicBootstrapCheckboxComponent;
    exports.DynamicBootstrapDatePickerComponent = DynamicBootstrapDatePickerComponent;
    exports.DynamicBootstrapFormArrayComponent = DynamicBootstrapFormArrayComponent;
    exports.DynamicBootstrapFormGroupComponent = DynamicBootstrapFormGroupComponent;
    exports.DynamicBootstrapInputComponent = DynamicBootstrapInputComponent;
    exports.DynamicBootstrapRadioGroupComponent = DynamicBootstrapRadioGroupComponent;
    exports.DynamicBootstrapSelectComponent = DynamicBootstrapSelectComponent;
    exports.DynamicBootstrapTextAreaComponent = DynamicBootstrapTextAreaComponent;
    exports.DynamicBootstrapTimePickerComponent = DynamicBootstrapTimePickerComponent;
    exports.DynamicBootstrapFormComponent = DynamicBootstrapFormComponent;
    exports.bootstrapUIFormControlMapFn = bootstrapUIFormControlMapFn;
    exports.DynamicBootstrapFormControlContainerComponent = DynamicBootstrapFormControlContainerComponent;
    exports.DynamicFormsBootstrapUIModule = DynamicFormsBootstrapUIModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ui-bootstrap.umd.js.map
