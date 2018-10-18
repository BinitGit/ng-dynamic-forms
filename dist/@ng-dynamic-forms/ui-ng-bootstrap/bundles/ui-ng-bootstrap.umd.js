/*!
@ng-dynamic-forms/ui-ng-bootstrap 6.2.0 2018-10-18 21:40 UTC
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
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@ng-bootstrap/ng-bootstrap'), require('@ng-dynamic-forms/core'), require('@angular/common'), require('angular2-text-mask')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms', '@ng-bootstrap/ng-bootstrap', '@ng-dynamic-forms/core', '@angular/common', 'angular2-text-mask'], factory) :
    (factory((global.ngDF = global.ngDF || {}, global.ngDF.ngBootstrapUI = {}),global.ng.core,global.ng.forms,global['@ng-bootstrap/ng-bootstrap'],global.ngDF.core,global.ng.common,global['angular2-text-mask']));
}(this, (function (exports,core,forms,ngBootstrap,core$1,common,angular2TextMask) { 'use strict';

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
    var DynamicNGBootstrapCalendarComponent = /** @class */ (function (_super) {
        __extends(DynamicNGBootstrapCalendarComponent, _super);
        function DynamicNGBootstrapCalendarComponent(layoutService, validationService, config) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.config = config;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicNGBootstrapCalendarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-ng-bootstrap-calendar",
                        template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <ngb-datepicker [displayMonths]=\"model.getAdditional('displayMonths', config['displayMonths'])\"\r\n                    [dynamicId]=\"bindId && model.id\"\r\n                    [firstDayOfWeek]=\"model.getAdditional('firstDayOfWeek', config['firstDayOfWeek'])\"\r\n                    [formControlName]=\"model.id\"\r\n                    [maxDate]=\"model.max\"\r\n                    [minDate]=\"model.min\"\r\n                    [navigation]=\"model.getAdditional('navigation', config['navigation'])\"\r\n                    [ngClass]=\"getClass('element', 'control')\"\r\n                    [outsideDays]=\"model.getAdditional('outsideDays', config['outsideDays'])\"\r\n                    [showWeekdays]=\"model.getAdditional('showWeekdays', config['showWeekdays'])\"\r\n                    [showWeekNumbers]=\"model.getAdditional('showWeekNumbers', config['showWeekNumbers'])\"\r\n                    [startDate]=\"model.focusedDate\"\r\n                    (select)=\"onChange($event)\"></ngb-datepicker>\r\n\r\n</ng-container>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicNGBootstrapCalendarComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService },
            { type: ngBootstrap.NgbDatepickerConfig }
        ]; };
        DynamicNGBootstrapCalendarComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }],
            ngbCalendar: [{ type: core.ViewChild, args: [ngBootstrap.NgbDatepicker,] }]
        };
        return DynamicNGBootstrapCalendarComponent;
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
    var DynamicNGBootstrapCheckboxComponent = /** @class */ (function (_super) {
        __extends$1(DynamicNGBootstrapCheckboxComponent, _super);
        function DynamicNGBootstrapCheckboxComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicNGBootstrapCheckboxComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-ng-bootstrap-checkbox",
                        template: "<div [formGroup]=\"group\" class=\"form-check\" [class.disabled]=\"model.disabled\">\r\n\r\n    <label class=\"form-check-label\">\r\n\r\n        <input type=\"checkbox\" class=\"form-check-input\"\r\n               [checked]=\"model.checked\"\r\n               [class.is-invalid]=\"showErrorMessages\"\r\n               [dynamicId]=\"bindId && model.id\"\r\n               [formControlName]=\"model.id\"\r\n               [indeterminate]=\"model.indeterminate\"\r\n               [name]=\"model.name\"\r\n               [ngClass]=\"getClass('element', 'control')\"\r\n               [required]=\"model.required\"\r\n               [tabindex]=\"model.tabIndex\"\r\n               [value]=\"model.value\"\r\n               (blur)=\"onBlur($event)\"\r\n               (change)=\"onChange($event)\"\r\n               (focus)=\"onFocus($event)\"/><span [innerHTML]=\"model.label\"\r\n                                                [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></span>\r\n    </label>\r\n\r\n</div>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicNGBootstrapCheckboxComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicNGBootstrapCheckboxComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }]
        };
        return DynamicNGBootstrapCheckboxComponent;
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
    var DynamicNGBootstrapCheckboxGroupComponent = /** @class */ (function (_super) {
        __extends$2(DynamicNGBootstrapCheckboxGroupComponent, _super);
        function DynamicNGBootstrapCheckboxGroupComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicNGBootstrapCheckboxGroupComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-ng-bootstrap-checkbox-group",
                        template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\"\r\n         [dynamicId]=\"bindId && model.id\"\r\n         [formGroupName]=\"model.id\"\r\n         [ngClass]=\"getClass('element', 'control')\">\r\n\r\n        <label *ngFor=\"let checkboxModel of model.group\" ngbButtonLabel\r\n               [hidden]=\"checkboxModel.hidden\"\r\n               [ngClass]=\"getClass('element', 'control', checkboxModel)\">\r\n\r\n            <input type=\"checkbox\" ngbButton\r\n                   [checked]=\"checkboxModel.checked\"\r\n                   [dynamicId]=\"bindId && checkboxModel.id\"\r\n                   [formControlName]=\"checkboxModel.id\"\r\n                   [name]=\"checkboxModel.name\"\r\n                   [required]=\"checkboxModel.required\"\r\n                   [tabindex]=\"checkboxModel.tabIndex\"\r\n                   [value]=\"checkboxModel.value\"\r\n                   (blur)=\"onBlur($event)\"\r\n                   (change)=\"onEmbeddedCheckboxChange($event, checkboxModel)\"\r\n                   (focus)=\"onFocus($event)\"/><span [ngClass]=\"getClass('element', 'label', checkboxModel)\"\r\n                                                    [innerHTML]=\"checkboxModel.label\"></span></label>\r\n    </div>\r\n\r\n</ng-container>"
                    }] }
        ];
        /** @nocollapse */
        DynamicNGBootstrapCheckboxGroupComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicNGBootstrapCheckboxGroupComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }]
        };
        return DynamicNGBootstrapCheckboxGroupComponent;
    }(core$1.DynamicFormControlComponent));

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
    var DynamicNGBootstrapDatePickerComponent = /** @class */ (function (_super) {
        __extends$3(DynamicNGBootstrapDatePickerComponent, _super);
        function DynamicNGBootstrapDatePickerComponent(layoutService, validationService, config) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.config = config;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicNGBootstrapDatePickerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-ng-bootstrap-datepicker",
                        template: "<div [formGroup]=\"group\" class=\"input-group\">\r\n\r\n    <input ngbDatepicker class=\"form-control\" #datepicker=\"ngbDatepicker\"\r\n           [class.is-invalid]=\"showErrorMessages\"\r\n           [displayMonths]=\"model.getAdditional('displayMonths', config['displayMonths'])\"\r\n           [dynamicId]=\"bindId && model.id\"\r\n           [firstDayOfWeek]=\"model.getAdditional('firstDayOfWeek', config['firstDayOfWeek'])\"\r\n           [formControlName]=\"model.id\"\r\n           [maxDate]=\"model.max\"\r\n           [minDate]=\"model.min\"\r\n           [name]=\"model.name\"\r\n           [navigation]=\"model.getAdditional('navigation', config['navigation'])\"\r\n           [ngClass]=\"getClass('element', 'control')\"\r\n           [outsideDays]=\"model.getAdditional('outsideDays', config['outsideDays'])\"\r\n           [placeholder]=\"model.placeholder\"\r\n           [placement]=\"model.getAdditional('placement', 'bottom-left')\"\r\n           [showWeekdays]=\"model.getAdditional('showWeekdays', config['showWeekdays'])\"\r\n           [showWeekNumbers]=\"model.getAdditional('showWeekNumbers', config['showWeekNumbers'])\"\r\n           [startDate]=\"model.focusedDate\"\r\n           (blur)=\"onBlur($event)\"\r\n           (change)=\"onChange($event)\"\r\n           (focus)=\"onFocus($event)\">\r\n\r\n    <div class=\"input-group-append\">\r\n\r\n        <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"datepicker.toggle()\">\r\n\r\n            <img *ngIf=\"model.toggleIcon\" [src]=\"model.toggleIcon\" style=\"cursor: pointer;\"/>\r\n            <span *ngIf=\"model.toggleLabel\">{{ model.toggleLabel }}</span>\r\n\r\n        </button>\r\n\r\n    </div>\r\n\r\n</div>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicNGBootstrapDatePickerComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService },
            { type: ngBootstrap.NgbDatepickerConfig }
        ]; };
        DynamicNGBootstrapDatePickerComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }],
            ngbDatePicker: [{ type: core.ViewChild, args: [ngBootstrap.NgbDatepicker,] }]
        };
        return DynamicNGBootstrapDatePickerComponent;
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
    var DynamicNGBootstrapFormArrayComponent = /** @class */ (function (_super) {
        __extends$4(DynamicNGBootstrapFormArrayComponent, _super);
        function DynamicNGBootstrapFormArrayComponent(layoutService, validationService) {
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
        DynamicNGBootstrapFormArrayComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-ng-bootstrap-form-array",
                        template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <div [dynamicId]=\"bindId && model.id\"\r\n         [formArrayName]=\"model.id\"\r\n         [ngClass]=\"getClass('element', 'control')\">\r\n\r\n        <div *ngFor=\"let groupModel of model.groups; let idx = index\" role=\"group\"\r\n             [formGroupName]=\"idx\" [ngClass]=\"[getClass('element', 'group'), getClass('grid', 'group')]\">\r\n\r\n            <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: groupModel\"></ng-container>\r\n\r\n            <dynamic-ng-bootstrap-form-control *ngFor=\"let _model of groupModel.group\"\r\n                                               [bindId]=\"false\"\r\n                                               [context]=\"groupModel\"\r\n                                               [group]=\"control.at(idx)\"\r\n                                               [hidden]=\"_model.hidden\"\r\n                                               [layout]=\"layout\"\r\n                                               [model]=\"_model\"\r\n                                               [templates]=\"templates\"\r\n                                               [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model),\r\n                                                           getClass('element','children'), getClass('grid','children')]\"\r\n                                               (blur)=\"onBlur($event)\"\r\n                                               (change)=\"onChange($event)\"\r\n                                               (focus)=\"onFocus($event)\"\r\n                                               (ngbEvent)=\"onCustomEvent($event, null, true)\"></dynamic-ng-bootstrap-form-control>\r\n\r\n            <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: groupModel\"></ng-container>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</ng-container>"
                    }] }
        ];
        /** @nocollapse */
        DynamicNGBootstrapFormArrayComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicNGBootstrapFormArrayComponent.propDecorators = {
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
        return DynamicNGBootstrapFormArrayComponent;
    }(core$1.DynamicFormArrayComponent));

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
    var DynamicNGBootstrapFormGroupComponent = /** @class */ (function (_super) {
        __extends$5(DynamicNGBootstrapFormGroupComponent, _super);
        function DynamicNGBootstrapFormGroupComponent(layoutService, validationService) {
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
        DynamicNGBootstrapFormGroupComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-ng-bootstrap-form-group",
                        template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <div role=\"group\"\r\n         [dynamicId]=\"bindId && model.id\"\r\n         [formGroupName]=\"model.id\"\r\n         [ngClass]=\"getClass('element','control')\">\r\n\r\n        <dynamic-ng-bootstrap-form-control *ngFor=\"let _model of model.group\"\r\n                                           [asBootstrapFormGroup]=\"true\"\r\n                                           [group]=\"control\"\r\n                                           [hidden]=\"_model.hidden\"\r\n                                           [layout]=\"layout\"\r\n                                           [model]=\"_model\"\r\n                                           [templates]=\"templates\"\r\n                                           [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model),\r\n                                                       getClass('element','children'), getClass('grid','children')]\"\r\n                                           (blur)=\"onBlur($event)\"\r\n                                           (change)=\"onChange($event)\"\r\n                                           (focus)=\"onFocus($event)\"\r\n                                           (ngbEvent)=\"onCustomEvent($event, null, true)\"></dynamic-ng-bootstrap-form-control>\r\n    </div>\r\n\r\n</ng-container>"
                    }] }
        ];
        /** @nocollapse */
        DynamicNGBootstrapFormGroupComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicNGBootstrapFormGroupComponent.propDecorators = {
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
        return DynamicNGBootstrapFormGroupComponent;
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
    var DynamicNGBootstrapInputComponent = /** @class */ (function (_super) {
        __extends$6(DynamicNGBootstrapInputComponent, _super);
        function DynamicNGBootstrapInputComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            _this.click = new core.EventEmitter();
            return _this;
        }
        DynamicNGBootstrapInputComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-ng-bootstrap-input",
                        template: "<div [formGroup]=\"group\" [class.input-group]=\"model.prefix || model.suffix\">\r\n\r\n    <div *ngIf=\"model.prefix\" class=\"input-group-prepend\">\r\n        <span class=\"input-group-text\" [innerHTML]=\"model.prefix\"></span>\r\n    </div>\r\n\r\n    <input [attr.accept]=\"model.accept\"\r\n           [attr.max]=\"model.max\"\r\n           [attr.min]=\"model.min\"\r\n           [attr.multiple]=\"model.multiple\"\r\n           [attr.step]=\"model.step\"\r\n           [autocomplete]=\"model.autoComplete\"\r\n           [autofocus]=\"model.autoFocus\"\r\n           [class.form-control]=\"model.inputType !== 'file'\"\r\n           [class.form-control-file]=\"model.inputType === 'file'\"\r\n           [class.is-invalid]=\"showErrorMessages\"\r\n           [dynamicId]=\"bindId && model.id\"\r\n           [dynamicList]=\"model.listId\"\r\n           [formControlName]=\"model.id\"\r\n           [maxlength]=\"model.maxLength\"\r\n           [minlength]=\"model.minLength\"\r\n           [name]=\"model.name\"\r\n           [ngClass]=\"getClass('element', 'control')\"\r\n           [pattern]=\"model.pattern\"\r\n           [placeholder]=\"model.placeholder\"\r\n           [readonly]=\"model.readOnly\"\r\n           [required]=\"model.required\"\r\n           [spellcheck]=\"model.spellCheck\"\r\n           [tabindex]=\"model.tabIndex\"\r\n           [textMask]=\"{mask: (model.mask || false), showMask: model.mask && !(model.placeholder)}\"\r\n           [type]=\"model.inputType\"\r\n           (blur)=\"onBlur($event)\"\r\n           (change)=\"onChange($event)\"\r\n           (focus)=\"onFocus($event)\"\r\n           (click)=\"onClick($event)\"/>\r\n\r\n    <div *ngIf=\"model.suffix\" class=\"input-group-append\">\r\n        <span class=\"input-group-text\" [innerHTML]=\"model.suffix\"></span>\r\n    </div>\r\n\r\n    <datalist *ngIf=\"model.hasList\" [id]=\"model.listId\">\r\n\r\n        <option *ngFor=\"let option of model.list$ | async\" [value]=\"option\">\r\n\r\n    </datalist>\r\n\r\n</div>\r\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicNGBootstrapInputComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicNGBootstrapInputComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }],
            click: [{ type: core.Output }]
        };
        return DynamicNGBootstrapInputComponent;
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
    var DynamicNGBootstrapRadioGroupComponent = /** @class */ (function (_super) {
        __extends$7(DynamicNGBootstrapRadioGroupComponent, _super);
        function DynamicNGBootstrapRadioGroupComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicNGBootstrapRadioGroupComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-ng-bootstrap-radio-group",
                        template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <div ngbRadioGroup class=\"btn-group btn-group-toggle\" role=\"radiogroup\"\r\n         [dynamicId]=\"bindId && model.id\"\r\n         [formControlName]=\"model.id\"\r\n         [ngClass]=\"getClass('element', 'control')\"\r\n         [tabindex]=\"model.tabIndex\"\r\n         (change)=\"onChange($event)\">\r\n\r\n        <legend *ngIf=\"model.legend\" [innerHTML]=\"model.legend\"></legend>\r\n\r\n        <label *ngFor=\"let option of model.options$ | async\" ngbButtonLabel\r\n               [ngClass]=\"[getClass('element', 'option'), getClass('grid', 'option')]\">\r\n\r\n            <input type=\"radio\" ngbButton\r\n                   [disabled]=\"option.disabled\"\r\n                   [name]=\"model.name\"\r\n                   [value]=\"option.value\"\r\n                   (blur)=\"onBlur($event)\"\r\n                   (focus)=\"onFocus($event)\"/><span [innerHTML]=\"option.label\"></span>\r\n        </label>\r\n\r\n    </div>\r\n\r\n</ng-container>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicNGBootstrapRadioGroupComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicNGBootstrapRadioGroupComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }]
        };
        return DynamicNGBootstrapRadioGroupComponent;
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
    var DynamicNGBootstrapRatingComponent = /** @class */ (function (_super) {
        __extends$8(DynamicNGBootstrapRatingComponent, _super);
        function DynamicNGBootstrapRatingComponent(layoutService, validationService, config) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.config = config;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicNGBootstrapRatingComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-ng-bootstrap-rating",
                        template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <ngb-rating [dynamicId]=\"bindId && model.id\"\r\n                [formControlName]=\"model.id\"\r\n                [max]=\"model.max\"\r\n                [ngClass]=\"getClass('element', 'control')\"\r\n                [resettable]=\"model.getAdditional('resettable', config['resettable'])\"\r\n                (rateChange)=\"onChange($event)\"></ngb-rating>\r\n\r\n</ng-container>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicNGBootstrapRatingComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService },
            { type: ngBootstrap.NgbRatingConfig }
        ]; };
        DynamicNGBootstrapRatingComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }],
            ngbRating: [{ type: core.ViewChild, args: [ngBootstrap.NgbRating,] }]
        };
        return DynamicNGBootstrapRatingComponent;
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
    var DynamicNGBootstrapSelectComponent = /** @class */ (function (_super) {
        __extends$9(DynamicNGBootstrapSelectComponent, _super);
        function DynamicNGBootstrapSelectComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicNGBootstrapSelectComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-ng-bootstrap-select",
                        template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <select class=\"form-control\"\r\n            [class.is-invalid]=\"showErrorMessages\"\r\n            [compareWith]=\"model.compareWithFn\"\r\n            [dynamicId]=\"bindId && model.id\"\r\n            [formControlName]=\"model.id\"\r\n            [name]=\"model.name\"\r\n            [ngClass]=\"getClass('element', 'control')\"\r\n            [required]=\"model.required\"\r\n            [tabindex]=\"model.tabIndex\"\r\n            (blur)=\"onBlur($event)\"\r\n            (change)=\"onChange($event)\"\r\n            (focus)=\"onFocus($event)\">\r\n\r\n        <option *ngFor=\"let option of model.options$ | async\"\r\n                [disabled]=\"option.disabled\"\r\n                [ngValue]=\"option.value\">{{ option.label }}</option>\r\n\r\n    </select>\r\n\r\n</ng-container>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicNGBootstrapSelectComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicNGBootstrapSelectComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }]
        };
        return DynamicNGBootstrapSelectComponent;
    }(core$1.DynamicFormControlComponent));

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
    var DynamicNGBootstrapTextAreaComponent = /** @class */ (function (_super) {
        __extends$a(DynamicNGBootstrapTextAreaComponent, _super);
        function DynamicNGBootstrapTextAreaComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicNGBootstrapTextAreaComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-ng-bootstrap-textarea",
                        template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <textarea class=\"form-control\"\r\n              [class.is-invalid]=\"showErrorMessages\"\r\n              [dynamicId]=\"bindId && model.id\"\r\n              [cols]=\"model.cols\"\r\n              [formControlName]=\"model.id\"\r\n              [maxlength]=\"model.maxLength\"\r\n              [minlength]=\"model.minLength\"\r\n              [name]=\"model.name\"\r\n              [ngClass]=\"getClass('element', 'control')\"\r\n              [placeholder]=\"model.placeholder\"\r\n              [readonly]=\"model.readOnly\"\r\n              [required]=\"model.required\"\r\n              [rows]=\"model.rows\"\r\n              [spellcheck]=\"model.spellCheck\"\r\n              [tabindex]=\"model.tabIndex\"\r\n              [wrap]=\"model.wrap\"\r\n              (blur)=\"onBlur($event)\"\r\n              (change)=\"onChange($event)\"\r\n              (focus)=\"onFocus($event)\"></textarea>\r\n\r\n</ng-container>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicNGBootstrapTextAreaComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicNGBootstrapTextAreaComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }]
        };
        return DynamicNGBootstrapTextAreaComponent;
    }(core$1.DynamicFormControlComponent));

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
    var DynamicNGBootstrapTimePickerComponent = /** @class */ (function (_super) {
        __extends$b(DynamicNGBootstrapTimePickerComponent, _super);
        function DynamicNGBootstrapTimePickerComponent(layoutService, validationService, config) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.config = config;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicNGBootstrapTimePickerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-ng-bootstrap-timepicker",
                        template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <ngb-timepicker [dynamicId]=\"bindId && model.id\"\r\n                    [formControlName]=\"model.id\"\r\n                    [hourStep]=\"model.getAdditional('hourStep', config['hourStep'])\"\r\n                    [meridian]=\"model.meridian\"\r\n                    [minuteStep]=\"model.getAdditional('minuteStep', config['minuteStep'])\"\r\n                    [ngClass]=\"getClass('element', 'control')\"\r\n                    [seconds]=\"model.showSeconds\"\r\n                    [secondStep]=\"model.getAdditional('secondStep', config['secondStep'])\"\r\n                    [size]=\"model.getAdditional('size', config['size'])\"\r\n                    [spinners]=\"model.getAdditional('spinners', config['spinners'])\"></ngb-timepicker>\r\n\r\n</ng-container>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicNGBootstrapTimePickerComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService },
            { type: ngBootstrap.NgbTimepickerConfig }
        ]; };
        DynamicNGBootstrapTimePickerComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }],
            ngbTimePicker: [{ type: core.ViewChild, args: [ngBootstrap.NgbTimepicker,] }]
        };
        return DynamicNGBootstrapTimePickerComponent;
    }(core$1.DynamicFormControlComponent));

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
    var DynamicNGBootstrapFormControlContainerComponent = /** @class */ (function (_super) {
        __extends$c(DynamicNGBootstrapFormControlContainerComponent, _super);
        function DynamicNGBootstrapFormControlContainerComponent(componentFactoryResolver, layoutService, validationService) {
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
            _this.click = new core.EventEmitter();
            _this.customEvent = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(DynamicNGBootstrapFormControlContainerComponent.prototype, "componentType", {
            get: /**
             * @return {?}
             */
            function () {
                return this.layoutService.getCustomComponentType(this.model) || ngBootstrapUIFormControlMapFn(this.model);
            },
            enumerable: true,
            configurable: true
        });
        DynamicNGBootstrapFormControlContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-ng-bootstrap-form-control",
                        template: "<div [class.form-group]=\"(model.type !== 'GROUP' && asBootstrapFormGroup) || getClass('element', 'container').includes('form-group')\"\r\n     [formGroup]=\"group\"\r\n     [ngClass]=\"[getClass('element', 'container'), getClass('grid', 'container')]\">\r\n\r\n    <label *ngIf=\"!isCheckbox && hasLabel\"\r\n           [for]=\"model.id\"\r\n           [innerHTML]=\"model.label\"\r\n           [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></label>\r\n\r\n    <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <div [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n        <ng-container #componentViewContainer></ng-container>\r\n\r\n        <small *ngIf=\"hasHint\" class=\"text-muted\" [innerHTML]=\"model.hint\" [ngClass]=\"getClass('element', 'hint')\"></small>\r\n\r\n        <div *ngIf=\"showErrorMessages\" [ngClass]=\"[getClass('element', 'errors'), getClass('grid', 'errors')]\">\r\n            <small *ngFor=\"let message of errorMessages\" class=\"invalid-feedback d-block\">{{ message }}</small>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <ng-content></ng-content>\r\n\r\n</div>\r\n"
                    }] }
        ];
        /** @nocollapse */
        DynamicNGBootstrapFormControlContainerComponent.ctorParameters = function () { return [
            { type: core.ComponentFactoryResolver },
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicNGBootstrapFormControlContainerComponent.propDecorators = {
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
            click: [{ type: core.Output }],
            customEvent: [{ type: core.Output, args: ["ngbEvent",] }],
            componentViewContainerRef: [{ type: core.ViewChild, args: ["componentViewContainer", { read: core.ViewContainerRef },] }]
        };
        return DynamicNGBootstrapFormControlContainerComponent;
    }(core$1.DynamicFormControlContainerComponent));
    /**
     * @param {?} model
     * @return {?}
     */
    function ngBootstrapUIFormControlMapFn(model) {
        switch (model.type) {
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
                return DynamicNGBootstrapFormArrayComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX:
                return DynamicNGBootstrapCheckboxComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
                return DynamicNGBootstrapCheckboxGroupComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER:
                /** @type {?} */
                var datePickerModel = /** @type {?} */ (model);
                return datePickerModel.inline ? DynamicNGBootstrapCalendarComponent : DynamicNGBootstrapDatePickerComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_GROUP:
                return DynamicNGBootstrapFormGroupComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_INPUT:
                return DynamicNGBootstrapInputComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP:
                return DynamicNGBootstrapRadioGroupComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_RATING:
                return DynamicNGBootstrapRatingComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_SELECT:
                return DynamicNGBootstrapSelectComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA:
                return DynamicNGBootstrapTextAreaComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER:
                return DynamicNGBootstrapTimePickerComponent;
            default:
                return null;
        }
    }

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
    var DynamicNGBootstrapFormComponent = /** @class */ (function (_super) {
        __extends$d(DynamicNGBootstrapFormComponent, _super);
        function DynamicNGBootstrapFormComponent(formService, layoutService) {
            var _this = _super.call(this, formService, layoutService) || this;
            _this.formService = formService;
            _this.layoutService = layoutService;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            _this.customEvent = new core.EventEmitter();
            return _this;
        }
        DynamicNGBootstrapFormComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-ng-bootstrap-form",
                        template: "<dynamic-ng-bootstrap-form-control *ngFor=\"let model of formModel; trackBy: trackByFn\"\r\n                                   [group]=\"formGroup\"\r\n                                   [hidden]=\"model.hidden\"\r\n                                   [layout]=\"formLayout\"\r\n                                   [model]=\"model\"\r\n                                   [ngClass]=\"[getClass(model, 'element', 'host'), getClass(model, 'grid', 'host')]\"\r\n                                   [templates]=\"templates\"\r\n                                   (blur)=\"onEvent($event, 'blur')\"\r\n                                   (change)=\"onEvent($event, 'change')\"\r\n                                   (focus)=\"onEvent($event, 'focus')\"\r\n                                   (click)=\"onEvent($event, 'focus')\"\r\n                                   (ngbEvent)=\"onEvent($event, 'custom')\"></dynamic-ng-bootstrap-form-control>"
                    }] }
        ];
        /** @nocollapse */
        DynamicNGBootstrapFormComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormService },
            { type: core$1.DynamicFormLayoutService }
        ]; };
        DynamicNGBootstrapFormComponent.propDecorators = {
            formGroup: [{ type: core.Input, args: ["group",] }],
            formModel: [{ type: core.Input, args: ["model",] }],
            formLayout: [{ type: core.Input, args: ["layout",] }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }],
            customEvent: [{ type: core.Output, args: ["ngbEvent",] }],
            templates: [{ type: core.ContentChildren, args: [core$1.DynamicTemplateDirective,] }],
            components: [{ type: core.ViewChildren, args: [DynamicNGBootstrapFormControlContainerComponent,] }]
        };
        return DynamicNGBootstrapFormComponent;
    }(core$1.DynamicFormComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DynamicFormsNGBootstrapUIModule = /** @class */ (function () {
        function DynamicFormsNGBootstrapUIModule() {
        }
        DynamicFormsNGBootstrapUIModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.ReactiveFormsModule,
                            ngBootstrap.NgbButtonsModule,
                            ngBootstrap.NgbDatepickerModule,
                            ngBootstrap.NgbRatingModule,
                            ngBootstrap.NgbTimepickerModule,
                            angular2TextMask.TextMaskModule,
                            core$1.DynamicFormsCoreModule
                        ],
                        declarations: [
                            DynamicNGBootstrapCalendarComponent,
                            DynamicNGBootstrapCheckboxComponent,
                            DynamicNGBootstrapCheckboxGroupComponent,
                            DynamicNGBootstrapDatePickerComponent,
                            DynamicNGBootstrapFormArrayComponent,
                            DynamicNGBootstrapFormGroupComponent,
                            DynamicNGBootstrapInputComponent,
                            DynamicNGBootstrapRadioGroupComponent,
                            DynamicNGBootstrapRatingComponent,
                            DynamicNGBootstrapSelectComponent,
                            DynamicNGBootstrapTextAreaComponent,
                            DynamicNGBootstrapTimePickerComponent,
                            DynamicNGBootstrapFormControlContainerComponent,
                            DynamicNGBootstrapFormComponent
                        ],
                        entryComponents: [
                            DynamicNGBootstrapCalendarComponent,
                            DynamicNGBootstrapCheckboxComponent,
                            DynamicNGBootstrapCheckboxGroupComponent,
                            DynamicNGBootstrapDatePickerComponent,
                            DynamicNGBootstrapFormArrayComponent,
                            DynamicNGBootstrapFormGroupComponent,
                            DynamicNGBootstrapInputComponent,
                            DynamicNGBootstrapRadioGroupComponent,
                            DynamicNGBootstrapRatingComponent,
                            DynamicNGBootstrapSelectComponent,
                            DynamicNGBootstrapTextAreaComponent,
                            DynamicNGBootstrapTimePickerComponent
                        ],
                        exports: [
                            core$1.DynamicFormsCoreModule,
                            DynamicNGBootstrapFormControlContainerComponent,
                            DynamicNGBootstrapFormComponent
                        ]
                    },] }
        ];
        return DynamicFormsNGBootstrapUIModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.DynamicNGBootstrapCalendarComponent = DynamicNGBootstrapCalendarComponent;
    exports.DynamicNGBootstrapCheckboxComponent = DynamicNGBootstrapCheckboxComponent;
    exports.DynamicNGBootstrapCheckboxGroupComponent = DynamicNGBootstrapCheckboxGroupComponent;
    exports.DynamicNGBootstrapDatePickerComponent = DynamicNGBootstrapDatePickerComponent;
    exports.DynamicNGBootstrapFormArrayComponent = DynamicNGBootstrapFormArrayComponent;
    exports.DynamicNGBootstrapFormGroupComponent = DynamicNGBootstrapFormGroupComponent;
    exports.DynamicNGBootstrapInputComponent = DynamicNGBootstrapInputComponent;
    exports.DynamicNGBootstrapRadioGroupComponent = DynamicNGBootstrapRadioGroupComponent;
    exports.DynamicNGBootstrapRatingComponent = DynamicNGBootstrapRatingComponent;
    exports.DynamicNGBootstrapSelectComponent = DynamicNGBootstrapSelectComponent;
    exports.DynamicNGBootstrapTextAreaComponent = DynamicNGBootstrapTextAreaComponent;
    exports.DynamicNGBootstrapTimePickerComponent = DynamicNGBootstrapTimePickerComponent;
    exports.DynamicNGBootstrapFormComponent = DynamicNGBootstrapFormComponent;
    exports.ngBootstrapUIFormControlMapFn = ngBootstrapUIFormControlMapFn;
    exports.DynamicNGBootstrapFormControlContainerComponent = DynamicNGBootstrapFormControlContainerComponent;
    exports.DynamicFormsNGBootstrapUIModule = DynamicFormsNGBootstrapUIModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ui-ng-bootstrap.umd.js.map
