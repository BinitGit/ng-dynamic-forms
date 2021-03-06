/*!
@ng-dynamic-forms/ui-foundation 6.2.0 2018-10-18 21:33 UTC
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
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@ng-dynamic-forms/core'), require('@angular/common'), require('angular2-text-mask')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms', '@ng-dynamic-forms/core', '@angular/common', 'angular2-text-mask'], factory) :
    (factory((global.ngDF = global.ngDF || {}, global.ngDF.foundationUI = {}),global.ng.core,global.ng.forms,global.ngDF.core,global.ng.common,global['angular2-text-mask']));
}(this, (function (exports,core,forms,core$1,common,angular2TextMask) { 'use strict';

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
    var DynamicFoundationCheckboxComponent = /** @class */ (function (_super) {
        __extends(DynamicFoundationCheckboxComponent, _super);
        function DynamicFoundationCheckboxComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicFoundationCheckboxComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-foundation-checkbox",
                        template: "<label [formGroup]=\"group\">\r\n\r\n    <input type=\"checkbox\"\r\n           [checked]=\"model.checked\"\r\n           [dynamicId]=\"bindId && model.id\"\r\n           [formControlName]=\"model.id\"\r\n           [indeterminate]=\"model.indeterminate\"\r\n           [name]=\"model.name\"\r\n           [ngClass]=\"getClass('element', 'control')\"\r\n           [required]=\"model.required\"\r\n           [tabindex]=\"model.tabIndex\"\r\n           [value]=\"model.value\"\r\n           (blur)=\"onBlur($event)\"\r\n           (change)=\"onChange($event)\"\r\n           (focus)=\"onFocus($event)\"/><span [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"\r\n                                            [innerHTML]=\"model.label\"></span></label>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicFoundationCheckboxComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicFoundationCheckboxComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }]
        };
        return DynamicFoundationCheckboxComponent;
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
    var DynamicFoundationFormArrayComponent = /** @class */ (function (_super) {
        __extends$1(DynamicFoundationFormArrayComponent, _super);
        function DynamicFoundationFormArrayComponent(layoutService, validationService) {
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
        DynamicFoundationFormArrayComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-foundation-form-array",
                        template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <div [dynamicId]=\"bindId && model.id\"\r\n         [formArrayName]=\"model.id\"\r\n         [ngClass]=\"getClass('element', 'control')\">\r\n\r\n        <div *ngFor=\"let groupModel of model.groups; let idx = index\" role=\"group\"\r\n             [formGroupName]=\"idx\" [ngClass]=\"[getClass('element', 'group'), getClass('grid', 'group')]\">\r\n\r\n            <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: groupModel\"></ng-container>\r\n\r\n            <dynamic-foundation-form-control *ngFor=\"let _model of groupModel.group\"\r\n                                             [bindId]=\"false\"\r\n                                             [context]=\"groupModel\"\r\n                                             [group]=\"control.at(idx)\"\r\n                                             [hidden]=\"_model.hidden\"\r\n                                             [layout]=\"layout\"\r\n                                             [model]=\"_model\"\r\n                                             [templates]=\"templates\"\r\n                                             [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model),\r\n                                                         getClass('element','children'), getClass('grid','children')]\"\r\n                                             (blur)=\"onBlur($event)\"\r\n                                             (change)=\"onChange($event)\"\r\n                                             (focus)=\"onFocus($event)\"\r\n                                             (bsEvent)=\"onCustomEvent($event, null, true)\"></dynamic-foundation-form-control>\r\n\r\n            <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: groupModel\"></ng-container>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</ng-container>"
                    }] }
        ];
        /** @nocollapse */
        DynamicFoundationFormArrayComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicFoundationFormArrayComponent.propDecorators = {
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
        return DynamicFoundationFormArrayComponent;
    }(core$1.DynamicFormArrayComponent));

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
    var DynamicFoundationFormGroupComponent = /** @class */ (function (_super) {
        __extends$2(DynamicFoundationFormGroupComponent, _super);
        function DynamicFoundationFormGroupComponent(layoutService, validationService) {
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
        DynamicFoundationFormGroupComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-foundation-form-group",
                        template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <fieldset [dynamicId]=\"bindId && model.id\"\r\n              [formGroupName]=\"model.id\"\r\n              [name]=\"model.name\"\r\n              [ngClass]=\"getClass('element', 'control')\">\r\n\r\n        <legend *ngIf=\"model.legend\" [innerHTML]=\"model.legend\"></legend>\r\n\r\n        <dynamic-foundation-form-control *ngFor=\"let _model of model.group\"\r\n                                         [group]=\"control\"\r\n                                         [hidden]=\"_model.hidden\"\r\n                                         [layout]=\"layout\"\r\n                                         [model]=\"_model\"\r\n                                         [templates]=\"templates\"\r\n                                         [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model),\r\n                                                     getClass('element','children'), getClass('grid','children')]\"\r\n                                         (blur)=\"onBlur($event)\"\r\n                                         (change)=\"onChange($event)\"\r\n                                         (focus)=\"onFocus($event)\"\r\n                                         (bsEvent)=\"onCustomEvent($event, null, true)\"></dynamic-foundation-form-control>\r\n    </fieldset>\r\n\r\n</ng-container>"
                    }] }
        ];
        /** @nocollapse */
        DynamicFoundationFormGroupComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicFoundationFormGroupComponent.propDecorators = {
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
        return DynamicFoundationFormGroupComponent;
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
    var DynamicFoundationInputComponent = /** @class */ (function (_super) {
        __extends$3(DynamicFoundationInputComponent, _super);
        function DynamicFoundationInputComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicFoundationInputComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-foundation-input",
                        template: "<div [formGroup]=\"group\" class=\"input-group\">\r\n\r\n    <span *ngIf=\"model.prefix\" class=\"input-group-label\" [innerHTML]=\"model.prefix\"></span>\r\n\r\n    <input class=\"input-group-field\"\r\n           [attr.accept]=\"model.accept\"\r\n           [attr.max]=\"model.max\"\r\n           [attr.min]=\"model.min\"\r\n           [attr.multiple]=\"model.multiple\"\r\n           [attr.step]=\"model.step\"\r\n           [autocomplete]=\"model.autoComplete\"\r\n           [autofocus]=\"model.autoFocus\"\r\n           [class.is-invalid-input]=\"showErrorMessages\"\r\n           [dynamicId]=\"bindId && model.id\"\r\n           [dynamicList]=\"model.listId\"\r\n           [formControlName]=\"model.id\"\r\n           [maxlength]=\"model.maxLength\"\r\n           [minlength]=\"model.minLength\"\r\n           [name]=\"model.name\"\r\n           [ngClass]=\"getClass('element', 'control')\"\r\n           [pattern]=\"model.pattern\"\r\n           [placeholder]=\"model.placeholder\"\r\n           [readonly]=\"model.readOnly\"\r\n           [required]=\"model.required\"\r\n           [spellcheck]=\"model.spellCheck\"\r\n           [tabindex]=\"model.tabIndex\"\r\n           [textMask]=\"{mask: (model.mask || false), showMask: model.mask && !(model.placeholder)}\"\r\n           [type]=\"model.inputType\"\r\n           (blur)=\"onBlur($event)\"\r\n           (change)=\"onChange($event)\"\r\n           (focus)=\"onFocus($event)\"/>\r\n\r\n    <span *ngIf=\"model.suffix\" class=\"input-group-label\" [innerHTML]=\"model.suffix\"></span>\r\n\r\n    <datalist *ngIf=\"model.hasList\" [id]=\"model.listId\">\r\n\r\n        <option *ngFor=\"let option of model.list$ | async\" [value]=\"option\">\r\n\r\n    </datalist>\r\n\r\n</div>\r\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicFoundationInputComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicFoundationInputComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }]
        };
        return DynamicFoundationInputComponent;
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
    var DynamicFoundationRadioGroupComponent = /** @class */ (function (_super) {
        __extends$4(DynamicFoundationRadioGroupComponent, _super);
        function DynamicFoundationRadioGroupComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicFoundationRadioGroupComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-foundation-radio-group",
                        template: "<fieldset role=\"radiogroup\"\r\n          [dynamicId]=\"bindId && model.id\"\r\n          [formGroup]=\"group\"\r\n          [name]=\"model.name\"\r\n          [ngClass]=\"getClass('element', 'control')\"\r\n          [tabindex]=\"model.tabIndex\"\r\n          (change)=\"onChange($event)\">\r\n\r\n    <legend *ngIf=\"model.legend\" [innerHTML]=\"model.legend\"></legend>\r\n\r\n    <label *ngFor=\"let option of model.options$ | async\" [ngClass]=\"getClass('element', 'option')\">\r\n\r\n        <input type=\"radio\"\r\n               [formControlName]=\"model.id\"\r\n               [name]=\"model.name\"\r\n               [value]=\"option.value\"\r\n               (blur)=\"onBlur($event)\"\r\n               (focus)=\"onFocus($event)\"/><span [innerHTML]=\"option.label\"></span></label>\r\n\r\n</fieldset>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicFoundationRadioGroupComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicFoundationRadioGroupComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }]
        };
        return DynamicFoundationRadioGroupComponent;
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
    var DynamicFoundationSelectComponent = /** @class */ (function (_super) {
        __extends$5(DynamicFoundationSelectComponent, _super);
        function DynamicFoundationSelectComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicFoundationSelectComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-foundation-select",
                        template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <select [compareWith]=\"model.compareWithFn\"\r\n            [dynamicId]=\"bindId && model.id\"\r\n            [formControlName]=\"model.id\"\r\n            [name]=\"model.name\"\r\n            [ngClass]=\"getClass('element', 'control')\"\r\n            [required]=\"model.required\"\r\n            [tabindex]=\"model.tabIndex\"\r\n            (blur)=\"onBlur($event)\"\r\n            (change)=\"onChange($event)\"\r\n            (focus)=\"onFocus($event)\">\r\n\r\n        <option *ngFor=\"let option of model.options$ | async\"\r\n                [disabled]=\"option.disabled\"\r\n                [ngValue]=\"option.value\">{{ option.label }}\r\n        </option>\r\n\r\n    </select>\r\n\r\n</ng-container>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicFoundationSelectComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicFoundationSelectComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }]
        };
        return DynamicFoundationSelectComponent;
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
    var DynamicFoundationSwitchComponent = /** @class */ (function (_super) {
        __extends$6(DynamicFoundationSwitchComponent, _super);
        function DynamicFoundationSwitchComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicFoundationSwitchComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-foundation-switch",
                        template: "<div [formGroup]=\"group\" class=\"switch\" [ngClass]=\"getClass('element', 'control')\">\r\n\r\n    <input type=\"checkbox\" class=\"switch-input\"\r\n           [checked]=\"model.checked\"\r\n           [dynamicId]=\"bindId && model.id\"\r\n           [formControlName]=\"model.id\"\r\n           [name]=\"model.name\"\r\n           [required]=\"model.required\"\r\n           [tabindex]=\"model.tabIndex\"\r\n           [value]=\"model.value\"\r\n           (blur)=\"onBlur($event)\"\r\n           (change)=\"onChange($event)\"\r\n           (focus)=\"onFocus($event)\"/>\r\n\r\n    <label class=\"switch-paddle\" [for]=\"model.id\">\r\n\r\n        <span class=\"switch-active\" aria-hidden=\"true\">{{ model.onLabel }}</span>\r\n        <span class=\"switch-inactive\" aria-hidden=\"true\">{{ model.offLabel }}</span>\r\n\r\n    </label>\r\n\r\n</div>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicFoundationSwitchComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicFoundationSwitchComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }]
        };
        return DynamicFoundationSwitchComponent;
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
    var DynamicFoundationTextAreaComponent = /** @class */ (function (_super) {
        __extends$7(DynamicFoundationTextAreaComponent, _super);
        function DynamicFoundationTextAreaComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicFoundationTextAreaComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-foundation-textarea",
                        template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <textarea [class.is-invalid-input]=\"showErrorMessages\"\r\n              [cols]=\"model.cols\"\r\n              [dynamicId]=\"bindId && model.id\"\r\n              [formControlName]=\"model.id\"\r\n              [maxlength]=\"model.maxLength\"\r\n              [minlength]=\"model.minLength\"\r\n              [name]=\"model.name\"\r\n              [ngClass]=\"getClass('element', 'control')\"\r\n              [placeholder]=\"model.placeholder\"\r\n              [readonly]=\"model.readOnly\"\r\n              [required]=\"model.required\"\r\n              [rows]=\"model.rows\"\r\n              [spellcheck]=\"model.spellCheck\"\r\n              [tabindex]=\"model.tabIndex\"\r\n              [wrap]=\"model.wrap\"\r\n              (blur)=\"onBlur($event)\"\r\n              (change)=\"onChange($event)\"\r\n              (focus)=\"onFocus($event)\"></textarea>\r\n\r\n</ng-container>\r\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicFoundationTextAreaComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicFoundationTextAreaComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }]
        };
        return DynamicFoundationTextAreaComponent;
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
    var DynamicFoundationFormControlContainerComponent = /** @class */ (function (_super) {
        __extends$8(DynamicFoundationFormControlContainerComponent, _super);
        function DynamicFoundationFormControlContainerComponent(componentFactoryResolver, layoutService, validationService) {
            var _this = _super.call(this, componentFactoryResolver, layoutService, validationService) || this;
            _this.componentFactoryResolver = componentFactoryResolver;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.context = null;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(DynamicFoundationFormControlContainerComponent.prototype, "componentType", {
            get: /**
             * @return {?}
             */
            function () {
                return this.layoutService.getCustomComponentType(this.model) || foundationUIFormControlMapFn(this.model);
            },
            enumerable: true,
            configurable: true
        });
        DynamicFoundationFormControlContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-foundation-form-control",
                        template: "<div [formGroup]=\"group\" [ngClass]=\"[getClass('element', 'container'), getClass('grid', 'container')]\">\r\n\r\n    <div *ngIf=\"!isCheckbox && hasLabel\" [ngClass]=\"getClass('grid', 'label')\">\r\n\r\n        <label [class.is-invalid-label]=\"showErrorMessages\"\r\n               [for]=\"model.id\"\r\n               [innerHTML]=\"model.label\"\r\n               [ngClass]=\"getClass('element', 'label')\"></label>\r\n    </div>\r\n\r\n    <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <div [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n        <ng-container #componentViewContainer></ng-container>\r\n\r\n    </div>\r\n\r\n    <ul *ngIf=\"showErrorMessages\" [ngClass]=\"[getClass('element', 'errors'), getClass('grid', 'errors')]\">\r\n        <li *ngFor=\"let message of errorMessages\" class=\"form-error is-visible\">{{ message }}</li>\r\n    </ul>\r\n\r\n    <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <ng-content></ng-content>\r\n\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        DynamicFoundationFormControlContainerComponent.ctorParameters = function () { return [
            { type: core.ComponentFactoryResolver },
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicFoundationFormControlContainerComponent.propDecorators = {
            contentTemplateList: [{ type: core.ContentChildren, args: [core$1.DynamicTemplateDirective,] }],
            inputTemplateList: [{ type: core.Input, args: ["templates",] }],
            bindId: [{ type: core.Input }],
            context: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }],
            componentViewContainerRef: [{ type: core.ViewChild, args: ["componentViewContainer", { read: core.ViewContainerRef },] }]
        };
        return DynamicFoundationFormControlContainerComponent;
    }(core$1.DynamicFormControlContainerComponent));
    /**
     * @param {?} model
     * @return {?}
     */
    function foundationUIFormControlMapFn(model) {
        switch (model.type) {
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
                return DynamicFoundationFormArrayComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX:
                return DynamicFoundationCheckboxComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
                return DynamicFoundationFormGroupComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_GROUP:
                return DynamicFoundationFormGroupComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_INPUT:
                return DynamicFoundationInputComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP:
                return DynamicFoundationRadioGroupComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_SELECT:
                return DynamicFoundationSelectComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_SWITCH:
                return DynamicFoundationSwitchComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA:
                return DynamicFoundationTextAreaComponent;
            default:
                return null;
        }
    }

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
    var DynamicFoundationFormComponent = /** @class */ (function (_super) {
        __extends$9(DynamicFoundationFormComponent, _super);
        function DynamicFoundationFormComponent(formService, layoutService) {
            var _this = _super.call(this, formService, layoutService) || this;
            _this.formService = formService;
            _this.layoutService = layoutService;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicFoundationFormComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-foundation-form",
                        template: "<dynamic-foundation-form-control *ngFor=\"let model of formModel; trackBy: trackByFn\"\r\n                                 [group]=\"formGroup\"\r\n                                 [hidden]=\"model.hidden\"\r\n                                 [layout]=\"formLayout\"\r\n                                 [model]=\"model\"\r\n                                 [ngClass]=\"[getClass(model,'element','host'), getClass(model,'grid','host')]\"\r\n                                 [templates]=\"templates\"\r\n                                 (blur)=\"onEvent($event, 'blur')\"\r\n                                 (change)=\"onEvent($event, 'change')\"\r\n                                 (focus)=\"onEvent($event, 'focus')\"></dynamic-foundation-form-control>"
                    }] }
        ];
        /** @nocollapse */
        DynamicFoundationFormComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormService },
            { type: core$1.DynamicFormLayoutService }
        ]; };
        DynamicFoundationFormComponent.propDecorators = {
            formGroup: [{ type: core.Input, args: ["group",] }],
            formModel: [{ type: core.Input, args: ["model",] }],
            formLayout: [{ type: core.Input, args: ["layout",] }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }],
            templates: [{ type: core.ContentChildren, args: [core$1.DynamicTemplateDirective,] }],
            components: [{ type: core.ViewChildren, args: [DynamicFoundationFormControlContainerComponent,] }]
        };
        return DynamicFoundationFormComponent;
    }(core$1.DynamicFormComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DynamicFormsFoundationUIModule = /** @class */ (function () {
        function DynamicFormsFoundationUIModule() {
        }
        DynamicFormsFoundationUIModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.ReactiveFormsModule,
                            angular2TextMask.TextMaskModule,
                            core$1.DynamicFormsCoreModule
                        ],
                        declarations: [
                            DynamicFoundationCheckboxComponent,
                            DynamicFoundationFormArrayComponent,
                            DynamicFoundationFormGroupComponent,
                            DynamicFoundationInputComponent,
                            DynamicFoundationRadioGroupComponent,
                            DynamicFoundationSelectComponent,
                            DynamicFoundationSwitchComponent,
                            DynamicFoundationTextAreaComponent,
                            DynamicFoundationFormControlContainerComponent,
                            DynamicFoundationFormComponent
                        ],
                        entryComponents: [
                            DynamicFoundationCheckboxComponent,
                            DynamicFoundationFormArrayComponent,
                            DynamicFoundationFormGroupComponent,
                            DynamicFoundationInputComponent,
                            DynamicFoundationRadioGroupComponent,
                            DynamicFoundationSelectComponent,
                            DynamicFoundationSwitchComponent,
                            DynamicFoundationTextAreaComponent
                        ],
                        exports: [
                            core$1.DynamicFormsCoreModule,
                            DynamicFoundationFormControlContainerComponent,
                            DynamicFoundationFormComponent
                        ]
                    },] }
        ];
        return DynamicFormsFoundationUIModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.DynamicFoundationCheckboxComponent = DynamicFoundationCheckboxComponent;
    exports.DynamicFoundationFormArrayComponent = DynamicFoundationFormArrayComponent;
    exports.DynamicFoundationFormGroupComponent = DynamicFoundationFormGroupComponent;
    exports.DynamicFoundationInputComponent = DynamicFoundationInputComponent;
    exports.DynamicFoundationRadioGroupComponent = DynamicFoundationRadioGroupComponent;
    exports.DynamicFoundationSelectComponent = DynamicFoundationSelectComponent;
    exports.DynamicFoundationSwitchComponent = DynamicFoundationSwitchComponent;
    exports.DynamicFoundationTextAreaComponent = DynamicFoundationTextAreaComponent;
    exports.DynamicFoundationFormComponent = DynamicFoundationFormComponent;
    exports.foundationUIFormControlMapFn = foundationUIFormControlMapFn;
    exports.DynamicFoundationFormControlContainerComponent = DynamicFoundationFormControlContainerComponent;
    exports.DynamicFormsFoundationUIModule = DynamicFormsFoundationUIModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ui-foundation.umd.js.map
