/*!
@ng-dynamic-forms/ui-basic 6.2.0 2018-10-18 21:30 UTC
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
    (factory((global.ngDF = global.ngDF || {}, global.ngDF.basicUI = {}),global.ng.core,global.ng.forms,global.ngDF.core,global.ng.common,global['angular2-text-mask']));
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
    var DynamicBasicCheckboxComponent = /** @class */ (function (_super) {
        __extends(DynamicBasicCheckboxComponent, _super);
        function DynamicBasicCheckboxComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicBasicCheckboxComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-basic-checkbox",
                        template: "<label [formGroup]=\"group\" [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\">\r\n\r\n    <input type=\"checkbox\"\r\n           [checked]=\"model.checked\"\r\n           [dynamicId]=\"bindId && model.id\"\r\n           [formControlName]=\"model.id\"\r\n           [indeterminate]=\"model.indeterminate\"\r\n           [name]=\"model.name\"\r\n           [required]=\"model.required\"\r\n           [tabindex]=\"model.tabIndex\"\r\n           [value]=\"model.value\"\r\n           (blur)=\"onBlur($event)\"\r\n           (change)=\"onChange($event)\"\r\n           (focus)=\"onFocus($event)\"/><span [ngClass]=\"getClass('element', 'label')\"\r\n                                            [innerHTML]=\"model.label\"></span></label>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicBasicCheckboxComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicBasicCheckboxComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }]
        };
        return DynamicBasicCheckboxComponent;
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
    var DynamicBasicFormArrayComponent = /** @class */ (function (_super) {
        __extends$1(DynamicBasicFormArrayComponent, _super);
        function DynamicBasicFormArrayComponent(layoutService, validationService) {
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
        DynamicBasicFormArrayComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-basic-form-array",
                        template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <div [dynamicId]=\"bindId && model.id\"\r\n         [formArrayName]=\"model.id\"\r\n         [ngClass]=\"getClass('element', 'control')\">\r\n\r\n        <div *ngFor=\"let groupModel of model.groups; let idx = index\" role=\"group\"\r\n             [formGroupName]=\"idx\" [ngClass]=\"[getClass('element', 'group'), getClass('grid', 'group')]\">\r\n\r\n            <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: groupModel\"></ng-container>\r\n\r\n            <dynamic-basic-form-control *ngFor=\"let _model of groupModel.group\"\r\n                                        [bindId]=\"false\"\r\n                                        [context]=\"groupModel\"\r\n                                        [group]=\"control.at(idx)\"\r\n                                        [hidden]=\"_model.hidden\"\r\n                                        [layout]=\"layout\"\r\n                                        [model]=\"_model\"\r\n                                        [templates]=\"templates\"\r\n                                        [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model),\r\n                                                    getClass('element','children'), getClass('grid','children')]\"\r\n                                        (blur)=\"onBlur($event)\"\r\n                                        (change)=\"onChange($event)\"\r\n                                        (focus)=\"onFocus($event)\"\r\n                                        (bsEvent)=\"onCustomEvent($event, null, true)\"></dynamic-basic-form-control>\r\n\r\n            <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: groupModel\"></ng-container>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</ng-container>"
                    }] }
        ];
        /** @nocollapse */
        DynamicBasicFormArrayComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicBasicFormArrayComponent.propDecorators = {
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
        return DynamicBasicFormArrayComponent;
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
    var DynamicBasicFormGroupComponent = /** @class */ (function (_super) {
        __extends$2(DynamicBasicFormGroupComponent, _super);
        function DynamicBasicFormGroupComponent(layoutService, validationService) {
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
        DynamicBasicFormGroupComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-basic-form-group",
                        template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <fieldset [dynamicId]=\"bindId && model.id\"\r\n              [formGroupName]=\"model.id\"\r\n              [name]=\"model.name\"\r\n              [ngClass]=\"getClass('element', 'control')\">\r\n\r\n        <legend *ngIf=\"model.legend\" [innerHTML]=\"model.legend\"></legend>\r\n\r\n        <dynamic-basic-form-control *ngFor=\"let _model of model.group\"\r\n                                    [group]=\"control\"\r\n                                    [hidden]=\"_model.hidden\"\r\n                                    [layout]=\"layout\"\r\n                                    [model]=\"_model\"\r\n                                    [templates]=\"templates\"\r\n                                    [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model),\r\n                                                getClass('element','children'), getClass('grid','children')]\"\r\n                                    (blur)=\"onBlur($event)\"\r\n                                    (change)=\"onChange($event)\"\r\n                                    (focus)=\"onFocus($event)\"\r\n                                    (bsEvent)=\"onCustomEvent($event, null, true)\"></dynamic-basic-form-control>\r\n    </fieldset>\r\n\r\n</ng-container>"
                    }] }
        ];
        /** @nocollapse */
        DynamicBasicFormGroupComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicBasicFormGroupComponent.propDecorators = {
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
        return DynamicBasicFormGroupComponent;
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
    var DynamicBasicInputComponent = /** @class */ (function (_super) {
        __extends$3(DynamicBasicInputComponent, _super);
        function DynamicBasicInputComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicBasicInputComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-basic-input",
                        template: "<div [formGroup]=\"group\">\r\n\r\n    <input [attr.accept]=\"model.accept\"\r\n           [attr.max]=\"model.max\"\r\n           [attr.min]=\"model.min\"\r\n           [attr.multiple]=\"model.multiple\"\r\n           [attr.step]=\"model.step\"\r\n           [autocomplete]=\"model.autoComplete\"\r\n           [autofocus]=\"model.autoFocus\"\r\n           [dynamicId]=\"bindId && model.id\"\r\n           [dynamicList]=\"model.listId\"\r\n           [formControlName]=\"model.id\"\r\n           [maxlength]=\"model.maxLength\"\r\n           [minlength]=\"model.minLength\"\r\n           [name]=\"model.name\"\r\n           [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n           [pattern]=\"model.pattern\"\r\n           [placeholder]=\"model.placeholder\"\r\n           [readonly]=\"model.readOnly\"\r\n           [required]=\"model.required\"\r\n           [spellcheck]=\"model.spellCheck\"\r\n           [tabindex]=\"model.tabIndex\"\r\n           [textMask]=\"{mask: (model.mask || false), showMask: model.mask && !(model.placeholder)}\"\r\n           [type]=\"model.inputType\"\r\n           (blur)=\"onBlur($event)\"\r\n           (change)=\"onChange($event)\"\r\n           (focus)=\"onFocus($event)\"/>\r\n\r\n    <datalist *ngIf=\"model.hasList\" [id]=\"model.listId\">\r\n\r\n        <option *ngFor=\"let option of model.list$ | async\" [value]=\"option\">\r\n\r\n    </datalist>\r\n\r\n</div>\r\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicBasicInputComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicBasicInputComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }]
        };
        return DynamicBasicInputComponent;
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
    var DynamicBasicRadioGroupComponent = /** @class */ (function (_super) {
        __extends$4(DynamicBasicRadioGroupComponent, _super);
        function DynamicBasicRadioGroupComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicBasicRadioGroupComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-basic-radio-group",
                        template: "<fieldset role=\"radiogroup\"\r\n          [dynamicId]=\"bindId && model.id\"\r\n          [formGroup]=\"group\"\r\n          [name]=\"model.name\"\r\n          [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n          [tabindex]=\"model.tabIndex\"\r\n          (change)=\"onChange($event)\">\r\n\r\n    <legend *ngIf=\"model.legend\" [innerHTML]=\"model.legend\"></legend>\r\n\r\n    <label *ngFor=\"let option of model.options$ | async\" [ngClass]=\"getClass('element', 'option')\">\r\n\r\n        <input type=\"radio\"\r\n               [formControlName]=\"model.id\"\r\n               [name]=\"model.name\"\r\n               [value]=\"option.value\"\r\n               (blur)=\"onBlur($event)\"\r\n               (focus)=\"onFocus($event)\"/><span [innerHTML]=\"option.label\"></span></label>\r\n</fieldset>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicBasicRadioGroupComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicBasicRadioGroupComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }]
        };
        return DynamicBasicRadioGroupComponent;
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
    var DynamicBasicSelectComponent = /** @class */ (function (_super) {
        __extends$5(DynamicBasicSelectComponent, _super);
        function DynamicBasicSelectComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicBasicSelectComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-basic-select",
                        template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <select [compareWith]=\"model.compareWithFn\"\r\n            [dynamicId]=\"bindId && model.id\"\r\n            [formControlName]=\"model.id\"\r\n            [name]=\"model.name\"\r\n            [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n            [required]=\"model.required\"\r\n            [tabindex]=\"model.tabIndex\"\r\n            (blur)=\"onBlur($event)\"\r\n            (change)=\"onChange($event)\"\r\n            (focus)=\"onFocus($event)\">\r\n\r\n        <option *ngFor=\"let option of model.options$ | async\"\r\n                [disabled]=\"option.disabled\"\r\n                [ngValue]=\"option.value\">{{ option.label }}\r\n        </option>\r\n\r\n    </select>\r\n\r\n</ng-container>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicBasicSelectComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicBasicSelectComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }]
        };
        return DynamicBasicSelectComponent;
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
    var DynamicBasicTextAreaComponent = /** @class */ (function (_super) {
        __extends$6(DynamicBasicTextAreaComponent, _super);
        function DynamicBasicTextAreaComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicBasicTextAreaComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-basic-textarea",
                        template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <textarea [cols]=\"model.cols\"\r\n              [dynamicId]=\"bindId && model.id\"\r\n              [formControlName]=\"model.id\"\r\n              [maxlength]=\"model.maxLength\"\r\n              [minlength]=\"model.minLength\"\r\n              [name]=\"model.name\"\r\n              [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n              [placeholder]=\"model.placeholder\"\r\n              [readonly]=\"model.readOnly\"\r\n              [required]=\"model.required\"\r\n              [rows]=\"model.rows\"\r\n              [spellcheck]=\"model.spellCheck\"\r\n              [tabindex]=\"model.tabIndex\"\r\n              [wrap]=\"model.wrap\"\r\n              (blur)=\"onBlur($event)\"\r\n              (change)=\"onChange($event)\"\r\n              (focus)=\"onFocus($event)\"></textarea>\r\n\r\n</ng-container>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicBasicTextAreaComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicBasicTextAreaComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }]
        };
        return DynamicBasicTextAreaComponent;
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
    var DynamicBasicFormControlContainerComponent = /** @class */ (function (_super) {
        __extends$7(DynamicBasicFormControlContainerComponent, _super);
        function DynamicBasicFormControlContainerComponent(componentFactoryResolver, layoutService, validationService) {
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
        Object.defineProperty(DynamicBasicFormControlContainerComponent.prototype, "componentType", {
            get: /**
             * @return {?}
             */
            function () {
                return this.layoutService.getCustomComponentType(this.model) || basicUIFormControlMapFn(this.model);
            },
            enumerable: true,
            configurable: true
        });
        DynamicBasicFormControlContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-basic-form-control",
                        template: "<div [formGroup]=\"group\" [ngClass]=\"[getClass('element', 'container'), getClass('grid', 'container')]\">\r\n\r\n    <label *ngIf=\"!isCheckbox && hasLabel\"\r\n           [for]=\"model.id\"\r\n           [innerHTML]=\"model.label\"\r\n           [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></label>\r\n\r\n    <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <ng-container #componentViewContainer></ng-container>\r\n\r\n    <div *ngIf=\"hasHint\" [ngClass]=\"[getClass('element', 'hint'), getClass('grid', 'hint')]\">\r\n        <span [innerHTML]=\"model.hint\"></span>\r\n    </div>\r\n\r\n    <ul *ngIf=\"showErrorMessages\" [ngClass]=\"[getClass('element', 'errors'), getClass('grid', 'errors')]\">\r\n        <li *ngFor=\"let message of errorMessages\">{{ message }}</li>\r\n    </ul>\r\n\r\n    <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <ng-content></ng-content>\r\n\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        DynamicBasicFormControlContainerComponent.ctorParameters = function () { return [
            { type: core.ComponentFactoryResolver },
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicBasicFormControlContainerComponent.propDecorators = {
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
        return DynamicBasicFormControlContainerComponent;
    }(core$1.DynamicFormControlContainerComponent));
    /**
     * @param {?} model
     * @return {?}
     */
    function basicUIFormControlMapFn(model) {
        switch (model.type) {
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
                return DynamicBasicFormArrayComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX:
                return DynamicBasicCheckboxComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
                return DynamicBasicFormGroupComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_GROUP:
                return DynamicBasicFormGroupComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_INPUT:
                return DynamicBasicInputComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP:
                return DynamicBasicRadioGroupComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_SELECT:
                return DynamicBasicSelectComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA:
                return DynamicBasicTextAreaComponent;
            default:
                return null;
        }
    }

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
    var DynamicBasicFormComponent = /** @class */ (function (_super) {
        __extends$8(DynamicBasicFormComponent, _super);
        function DynamicBasicFormComponent(formService, layoutService) {
            var _this = _super.call(this, formService, layoutService) || this;
            _this.formService = formService;
            _this.layoutService = layoutService;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicBasicFormComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-basic-form",
                        template: "<dynamic-basic-form-control *ngFor=\"let model of formModel; trackBy: trackByFn\"\r\n                            [group]=\"formGroup\"\r\n                            [hidden]=\"model.hidden\"\r\n                            [layout]=\"formLayout\"\r\n                            [model]=\"model\"\r\n                            [ngClass]=\"[getClass(model,'element','host'), getClass(model,'grid','host')]\"\r\n                            [templates]=\"templates\"\r\n                            (blur)=\"onEvent($event, 'blur')\"\r\n                            (change)=\"onEvent($event, 'change')\"\r\n                            (focus)=\"onEvent($event, 'focus')\"></dynamic-basic-form-control>"
                    }] }
        ];
        /** @nocollapse */
        DynamicBasicFormComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormService },
            { type: core$1.DynamicFormLayoutService }
        ]; };
        DynamicBasicFormComponent.propDecorators = {
            formGroup: [{ type: core.Input, args: ["group",] }],
            formModel: [{ type: core.Input, args: ["model",] }],
            formLayout: [{ type: core.Input, args: ["layout",] }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }],
            templates: [{ type: core.ContentChildren, args: [core$1.DynamicTemplateDirective,] }],
            components: [{ type: core.ViewChildren, args: [DynamicBasicFormControlContainerComponent,] }]
        };
        return DynamicBasicFormComponent;
    }(core$1.DynamicFormComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DynamicFormsBasicUIModule = /** @class */ (function () {
        function DynamicFormsBasicUIModule() {
        }
        DynamicFormsBasicUIModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            forms.FormsModule,
                            common.CommonModule,
                            forms.ReactiveFormsModule,
                            angular2TextMask.TextMaskModule,
                            core$1.DynamicFormsCoreModule
                        ],
                        declarations: [
                            DynamicBasicCheckboxComponent,
                            DynamicBasicFormArrayComponent,
                            DynamicBasicFormGroupComponent,
                            DynamicBasicInputComponent,
                            DynamicBasicRadioGroupComponent,
                            DynamicBasicSelectComponent,
                            DynamicBasicTextAreaComponent,
                            DynamicBasicFormControlContainerComponent,
                            DynamicBasicFormComponent
                        ],
                        entryComponents: [
                            DynamicBasicCheckboxComponent,
                            DynamicBasicFormArrayComponent,
                            DynamicBasicFormGroupComponent,
                            DynamicBasicInputComponent,
                            DynamicBasicRadioGroupComponent,
                            DynamicBasicSelectComponent,
                            DynamicBasicTextAreaComponent
                        ],
                        exports: [
                            core$1.DynamicFormsCoreModule,
                            DynamicBasicFormControlContainerComponent,
                            DynamicBasicFormComponent
                        ]
                    },] }
        ];
        return DynamicFormsBasicUIModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.DynamicBasicCheckboxComponent = DynamicBasicCheckboxComponent;
    exports.DynamicBasicFormArrayComponent = DynamicBasicFormArrayComponent;
    exports.DynamicBasicFormGroupComponent = DynamicBasicFormGroupComponent;
    exports.DynamicBasicInputComponent = DynamicBasicInputComponent;
    exports.DynamicBasicRadioGroupComponent = DynamicBasicRadioGroupComponent;
    exports.DynamicBasicSelectComponent = DynamicBasicSelectComponent;
    exports.DynamicBasicTextAreaComponent = DynamicBasicTextAreaComponent;
    exports.DynamicBasicFormComponent = DynamicBasicFormComponent;
    exports.basicUIFormControlMapFn = basicUIFormControlMapFn;
    exports.DynamicBasicFormControlContainerComponent = DynamicBasicFormControlContainerComponent;
    exports.DynamicFormsBasicUIModule = DynamicFormsBasicUIModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ui-basic.umd.js.map