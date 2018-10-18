/*!
@ng-dynamic-forms/ui-ionic 6.2.0 2018-10-18 21:35 UTC
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
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ionic/angular'), require('@angular/forms'), require('@ng-dynamic-forms/core'), require('@angular/common'), require('angular2-text-mask')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@ionic/angular', '@angular/forms', '@ng-dynamic-forms/core', '@angular/common', 'angular2-text-mask'], factory) :
    (factory((global.ngDF = global.ngDF || {}, global.ngDF.ionicUI = {}),global.ng.core,global['@ionic/angular'],global.ng.forms,global.ngDF.core,global.ng.common,global['angular2-text-mask']));
}(this, (function (exports,core,angular,forms,core$1,common,angular2TextMask) { 'use strict';

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
    var DynamicIonicCheckboxComponent = /** @class */ (function (_super) {
        __extends(DynamicIonicCheckboxComponent, _super);
        function DynamicIonicCheckboxComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicIonicCheckboxComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-ionic-checkbox",
                        template: "<ion-item [formGroup]=\"group\">\r\n\r\n    <ion-label *ngIf=\"model.label !== null\"\r\n               [innerHTML]=\"model.label\"\r\n               [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></ion-label>\r\n\r\n    <ion-checkbox [checked]=\"model.checked\"\r\n                  [dynamicId]=\"bindId && model.id\"\r\n                  [formControlName]=\"model.id\"\r\n                  [ngClass]=\"getClass('element', 'control')\"\r\n                  (ionBlur)=\"onBlur($event)\"\r\n                  (ionChange)=\"onChange($event)\"\r\n                  (ionFocus)=\"onFocus($event)\"></ion-checkbox>\r\n\r\n</ion-item>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicIonicCheckboxComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicIonicCheckboxComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }],
            ionCheckbox: [{ type: core.ViewChild, args: ["ionCheckbox",] }]
        };
        return DynamicIonicCheckboxComponent;
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
    var DynamicIonicDateTimeComponent = /** @class */ (function (_super) {
        __extends$1(DynamicIonicDateTimeComponent, _super);
        function DynamicIonicDateTimeComponent(layoutService, validationService) {
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
        DynamicIonicDateTimeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-ionic-datetime",
                        template: "<ion-item [formGroup]=\"group\">\r\n\r\n    <ion-label *ngIf=\"model.label !== null\"\r\n               [innerHTML]=\"model.label\"\r\n               [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></ion-label>\r\n\r\n    <ion-datetime #ionDatetime\r\n                  [cancelText]=\"model.getAdditional('cancelText', 'Cancel')\"\r\n                  [doneText]=\"model.getAdditional('doneText', 'Done')\"\r\n                  [displayFormat]=\"model.format || 'MMM D, YYYY'\"\r\n                  [dynamicId]=\"bindId && model.id\"\r\n                  [formControlName]=\"model.id\"\r\n                  [max]=\"model.max\"\r\n                  [min]=\"model.min\"\r\n                  [ngClass]=\"getClass('element', 'control')\"\r\n                  [pickerFormat]=\"model.getAdditional('pickerFormat', 'MMM D, YYYY')\"\r\n                  [placeholder]=\"model.placeholder\"\r\n                  (ionBlur)=\"onBlur($event)\"\r\n                  (ionCancel)=\"onCustomEvent($event, 'ionCancel')\"\r\n                  (ionChange)=\"onChange($event)\"\r\n                  (ionFocus)=\"onFocus($event)\"></ion-datetime>\r\n\r\n</ion-item>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicIonicDateTimeComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicIonicDateTimeComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            customEvent: [{ type: core.Output }],
            focus: [{ type: core.Output }],
            ionDatetime: [{ type: core.ViewChild, args: ["ionDatetime",] }]
        };
        return DynamicIonicDateTimeComponent;
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
    var DynamicIonicFormArrayComponent = /** @class */ (function (_super) {
        __extends$2(DynamicIonicFormArrayComponent, _super);
        function DynamicIonicFormArrayComponent(layoutService, validationService) {
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
        DynamicIonicFormArrayComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-ionic-form-array",
                        template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <div [dynamicId]=\"bindId && model.id\"\r\n         [formArrayName]=\"model.id\"\r\n         [ngClass]=\"getClass('element', 'control')\">\r\n\r\n        <div *ngFor=\"let groupModel of model.groups; let idx = index\" role=\"group\"\r\n             [formGroupName]=\"idx\" [ngClass]=\"[getClass('element', 'group'), getClass('grid', 'group')]\">\r\n\r\n            <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: groupModel\"></ng-container>\r\n\r\n            <dynamic-ionic-form-control *ngFor=\"let _model of groupModel.group\"\r\n                                        [bindId]=\"false\"\r\n                                        [context]=\"groupModel\"\r\n                                        [group]=\"control.at(idx)\"\r\n                                        [hidden]=\"_model.hidden\"\r\n                                        [layout]=\"layout\"\r\n                                        [model]=\"_model\"\r\n                                        [templates]=\"templates\"\r\n                                        [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model),\r\n                                                    getClass('element','children'), getClass('grid','children')]\"\r\n                                        (blur)=\"onBlur($event)\"\r\n                                        (change)=\"onChange($event)\"\r\n                                        (focus)=\"onFocus($event)\"\r\n                                        (ionEvent)=\"onCustomEvent($event, null, true)\"></dynamic-ionic-form-control>\r\n\r\n            <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: groupModel\"></ng-container>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</ng-container>"
                    }] }
        ];
        /** @nocollapse */
        DynamicIonicFormArrayComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicIonicFormArrayComponent.propDecorators = {
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
        return DynamicIonicFormArrayComponent;
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
    var DynamicIonicFormGroupComponent = /** @class */ (function (_super) {
        __extends$3(DynamicIonicFormGroupComponent, _super);
        function DynamicIonicFormGroupComponent(layoutService, validationService) {
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
        DynamicIonicFormGroupComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-ionic-form-group",
                        template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <fieldset [dynamicId]=\"bindId && model.id\"\r\n              [formGroupName]=\"model.id\"\r\n              [name]=\"model.name\"\r\n              [ngClass]=\"getClass('element', 'control')\">\r\n\r\n        <legend *ngIf=\"model.legend\" [innerHTML]=\"model.legend\"></legend>\r\n\r\n        <dynamic-ionic-form-control *ngFor=\"let _model of model.group\"\r\n                                    [group]=\"control\"\r\n                                    [hidden]=\"_model.hidden\"\r\n                                    [layout]=\"layout\"\r\n                                    [model]=\"_model\"\r\n                                    [templates]=\"templates\"\r\n                                    [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model),\r\n                                                getClass('element','children'), getClass('grid','children')]\"\r\n                                    (blur)=\"onBlur($event)\"\r\n                                    (change)=\"onChange($event)\"\r\n                                    (focus)=\"onFocus($event)\"\r\n                                    (ionEvent)=\"onCustomEvent($event, null, true)\"></dynamic-ionic-form-control>\r\n    </fieldset>\r\n\r\n</ng-container>"
                    }] }
        ];
        /** @nocollapse */
        DynamicIonicFormGroupComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicIonicFormGroupComponent.propDecorators = {
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
        return DynamicIonicFormGroupComponent;
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
    var DynamicIonicInputComponent = /** @class */ (function (_super) {
        __extends$4(DynamicIonicInputComponent, _super);
        function DynamicIonicInputComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicIonicInputComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-ionic-input",
                        template: "<ion-item [formGroup]=\"group\">\r\n\r\n    <ion-label *ngIf=\"model.label !== null\"\r\n               [innerHTML]=\"model.label\"\r\n               [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></ion-label>\r\n\r\n    <ion-input #ionInput\r\n               [autocomplete]=\"model.autocomplete\"\r\n               [autocorrect]=\"model.getAdditional('autocorrect', 'off')\"\r\n               [clearInput]=\"model.getAdditional('clearInput', true)\"\r\n               [dynamicId]=\"bindId && model.id\"\r\n               [formControlName]=\"model.id\"\r\n               [max]=\"model.max\"\r\n               [min]=\"model.min\"\r\n               [ngClass]=\"getClass('element', 'control')\"\r\n               [pattern]=\"model.pattern\"\r\n               [placeholder]=\"model.placeholder\"\r\n               [readonly]=\"model.readOnly\"\r\n               [step]=\"model.step\"\r\n               [textMask]=\"{mask: (model.mask || false), showMask: model.mask && !(model.placeholder)}\"\r\n               [type]=\"model.inputType\"\r\n               (ionBlur)=\"onBlur($event)\"\r\n               (ionChange)=\"onChange($event)\"\r\n               (ionFocus)=\"onFocus($event)\"></ion-input>\r\n\r\n</ion-item>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicIonicInputComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicIonicInputComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }],
            ionInput: [{ type: core.ViewChild, args: ["ionInput",] }]
        };
        return DynamicIonicInputComponent;
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
    var DynamicIonicRadioGroupComponent = /** @class */ (function (_super) {
        __extends$5(DynamicIonicRadioGroupComponent, _super);
        function DynamicIonicRadioGroupComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicIonicRadioGroupComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-ionic-radio-group",
                        template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <ion-list #ionRadioGroup radio-group\r\n              [dynamicId]=\"bindId && model.id\"\r\n              [formControlName]=\"model.id\"\r\n              [ngClass]=\"getClass('element', 'control')\"\r\n              (ionChange)=\"onChange($event)\">\r\n\r\n        <ion-list-header *ngIf=\"model.label !== null\">{{ model.label }}</ion-list-header>\r\n\r\n        <ion-item *ngFor=\"let option of model.options$ | async\" [ngClass]=\"getClass('element', 'option')\">\r\n\r\n            <ion-label>{{ option.label }}</ion-label>\r\n\r\n            <ion-radio [value]=\"option.value\"></ion-radio>\r\n\r\n        </ion-item>\r\n\r\n    </ion-list>\r\n\r\n</ng-container>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicIonicRadioGroupComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicIonicRadioGroupComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }],
            ionRadioGroup: [{ type: core.ViewChild, args: ["ionRadioGroup",] }]
        };
        return DynamicIonicRadioGroupComponent;
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
    var DynamicIonicRangeComponent = /** @class */ (function (_super) {
        __extends$6(DynamicIonicRangeComponent, _super);
        function DynamicIonicRangeComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicIonicRangeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-ionic-range",
                        template: "<ion-item [formGroup]=\"group\">\r\n\r\n    <ion-label *ngIf=\"model.label !== null\"\r\n               [innerHTML]=\"model.label\"\r\n               [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></ion-label>\r\n\r\n    <ion-range #ionRange\r\n               [debounce]=\"model.getAdditional('debounce', 0)\"\r\n               [dualKnobs]=\"model.getAdditional('dualKnobs', false)\"\r\n               [dynamicId]=\"bindId && model.id\"\r\n               [formControlName]=\"model.id\"\r\n               [max]=\"model.max\"\r\n               [min]=\"model.min\"\r\n               [ngClass]=\"getClass('element', 'control')\"\r\n               [pin]=\"model.getAdditional('pin', true)\"\r\n               [snaps]=\"model.getAdditional('snaps', true)\"\r\n               [step]=\"model.step\"\r\n               (ionBlur)=\"onBlur($event)\"\r\n               (ionChange)=\"onChange($event)\"\r\n               (ionFocus)=\"onFocus($event)\"></ion-range>\r\n\r\n</ion-item>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicIonicRangeComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicIonicRangeComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }],
            ionRange: [{ type: core.ViewChild, args: ["ionRange",] }]
        };
        return DynamicIonicRangeComponent;
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
    var DynamicIonicSelectComponent = /** @class */ (function (_super) {
        __extends$7(DynamicIonicSelectComponent, _super);
        function DynamicIonicSelectComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicIonicSelectComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-ionic-select",
                        template: "<ion-item [formGroup]=\"group\">\r\n\r\n    <ion-label *ngIf=\"model.label !== null\"\r\n               [innerHTML]=\"model.label\"\r\n               [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></ion-label>\r\n\r\n    <ion-select [cancelText]=\"model.getAdditional('cancelText', 'Cancel')\"\r\n                [compareWith]=\"model.compareWithFn\"\r\n                [dynamicId]=\"bindId && model.id\"\r\n                [formControlName]=\"model.id\"\r\n                [interface]=\"model.getAdditional('interface', 'alert')\"\r\n                [multiple]=\"model.multiple\"\r\n                [ngClass]=\"getClass('element', 'control')\"\r\n                [okText]=\"model.getAdditional('okText', 'OK')\"\r\n                [placeholder]=\"model.placeholder\"\r\n                (ionBlur)=\"onBlur($event)\"\r\n                (ionChange)=\"onChange($event)\"\r\n                (ionFocus)=\"onFocus($event)\">\r\n\r\n        <ion-option *ngFor=\"let option of model.options$ | async\" [value]=\"option.value\">{{ option.label }}</ion-option>\r\n\r\n    </ion-select>\r\n\r\n</ion-item>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicIonicSelectComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicIonicSelectComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }],
            ionSelect: [{ type: core.ViewChild, args: ["ionSelect",] }]
        };
        return DynamicIonicSelectComponent;
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
    var DynamicIonicTextAreaComponent = /** @class */ (function (_super) {
        __extends$8(DynamicIonicTextAreaComponent, _super);
        function DynamicIonicTextAreaComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicIonicTextAreaComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-ionic-textarea",
                        template: "<ion-item [formGroup]=\"group\">\r\n\r\n    <ion-label *ngIf=\"model.label !== null\"\r\n               [innerHTML]=\"model.label\"\r\n               [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></ion-label>\r\n\r\n    <ion-textarea #ionTextArea clearInput=\"true\"\r\n                  [dynamicId]=\"bindId && model.id\"\r\n                  [formControlName]=\"model.id\"\r\n                  [ngClass]=\"getClass('element', 'control')\"\r\n                  [placeholder]=\"model.placeholder\"\r\n                  [readonly]=\"model.readOnly\"\r\n                  (ionBlur)=\"onBlur($event)\"\r\n                  (ionChange)=\"onChange($event)\"\r\n                  (ionFocus)=\"onFocus($event)\"></ion-textarea>\r\n\r\n</ion-item>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicIonicTextAreaComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicIonicTextAreaComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }],
            ionTextArea: [{ type: core.ViewChild, args: ["ionTextArea",] }]
        };
        return DynamicIonicTextAreaComponent;
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
    var DynamicIonicToggleComponent = /** @class */ (function (_super) {
        __extends$9(DynamicIonicToggleComponent, _super);
        function DynamicIonicToggleComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DynamicIonicToggleComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-ionic-toggle",
                        template: "<ion-item [formGroup]=\"group\">\r\n\r\n    <ion-label *ngIf=\"model.label !== null\"\r\n               [innerHTML]=\"model.label\"\r\n               [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></ion-label>\r\n\r\n    <ion-toggle [checked]=\"model.checked\"\r\n                [dynamicId]=\"bindId && model.id\"\r\n                [formControlName]=\"model.id\"\r\n                [ngClass]=\"getClass('element', 'control')\"\r\n                (ionBlur)=\"onBlur($event)\"\r\n                (ionChange)=\"onChange($event)\"\r\n                (ionFocus)=\"onFocus($event)\"></ion-toggle>\r\n\r\n</ion-item>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DynamicIonicToggleComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicIonicToggleComponent.propDecorators = {
            bindId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            model: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }],
            ionToggle: [{ type: core.ViewChild, args: ["ionToggle",] }]
        };
        return DynamicIonicToggleComponent;
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
    var DynamicIonicFormControlContainerComponent = /** @class */ (function (_super) {
        __extends$a(DynamicIonicFormControlContainerComponent, _super);
        function DynamicIonicFormControlContainerComponent(componentFactoryResolver, layoutService, validationService) {
            var _this = _super.call(this, componentFactoryResolver, layoutService, validationService) || this;
            _this.componentFactoryResolver = componentFactoryResolver;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.context = null;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            _this.customEvent = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(DynamicIonicFormControlContainerComponent.prototype, "componentType", {
            get: /**
             * @return {?}
             */
            function () {
                return this.layoutService.getCustomComponentType(this.model) || ionicUIFormControlMapFn(this.model);
            },
            enumerable: true,
            configurable: true
        });
        DynamicIonicFormControlContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-ionic-form-control",
                        template: "<div [formGroup]=\"group\" [ngClass]=\"[getClass('element', 'container'), getClass('grid', 'container')]\">\r\n\r\n    <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <ng-container #componentViewContainer></ng-container>\r\n\r\n    <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <ng-content></ng-content>\r\n\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        DynamicIonicFormControlContainerComponent.ctorParameters = function () { return [
            { type: core.ComponentFactoryResolver },
            { type: core$1.DynamicFormLayoutService },
            { type: core$1.DynamicFormValidationService }
        ]; };
        DynamicIonicFormControlContainerComponent.propDecorators = {
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
            customEvent: [{ type: core.Output, args: ["ionEvent",] }],
            componentViewContainerRef: [{ type: core.ViewChild, args: ["componentViewContainer", { read: core.ViewContainerRef },] }]
        };
        return DynamicIonicFormControlContainerComponent;
    }(core$1.DynamicFormControlContainerComponent));
    /**
     * @param {?} model
     * @return {?}
     */
    function ionicUIFormControlMapFn(model) {
        switch (model.type) {
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
                return DynamicIonicFormArrayComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX:
                return DynamicIonicCheckboxComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
                return DynamicIonicFormGroupComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER:
                return DynamicIonicDateTimeComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_GROUP:
                return DynamicIonicFormGroupComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_INPUT:
                return DynamicIonicInputComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP:
                return DynamicIonicRadioGroupComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_SELECT:
                return DynamicIonicSelectComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_SLIDER:
                return DynamicIonicRangeComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_SWITCH:
                return DynamicIonicToggleComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA:
                return DynamicIonicTextAreaComponent;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER:
                return DynamicIonicDateTimeComponent;
            default:
                return null;
        }
    }

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
    var DynamicIonicFormComponent = /** @class */ (function (_super) {
        __extends$b(DynamicIonicFormComponent, _super);
        function DynamicIonicFormComponent(formService, layoutService) {
            var _this = _super.call(this, formService, layoutService) || this;
            _this.formService = formService;
            _this.layoutService = layoutService;
            _this.blur = new core.EventEmitter();
            _this.change = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            _this.customEvent = new core.EventEmitter();
            return _this;
        }
        DynamicIonicFormComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-ionic-form",
                        template: "<dynamic-ionic-form-control *ngFor=\"let model of formModel; trackBy: trackByFn\"\r\n                            [group]=\"formGroup\"\r\n                            [hidden]=\"model.hidden\"\r\n                            [layout]=\"formLayout\"\r\n                            [model]=\"model\"\r\n                            [ngClass]=\"[getClass(model,'element','host'), getClass(model,'grid','host')]\"\r\n                            [templates]=\"templates\"\r\n                            (blur)=\"onEvent($event, 'blur')\"\r\n                            (change)=\"onEvent($event, 'change')\"\r\n                            (focus)=\"onEvent($event, 'focus')\"\r\n                            (ionEvent)=\"onEvent($event, 'custom')\"></dynamic-ionic-form-control>"
                    }] }
        ];
        /** @nocollapse */
        DynamicIonicFormComponent.ctorParameters = function () { return [
            { type: core$1.DynamicFormService },
            { type: core$1.DynamicFormLayoutService }
        ]; };
        DynamicIonicFormComponent.propDecorators = {
            formGroup: [{ type: core.Input, args: ["group",] }],
            formModel: [{ type: core.Input, args: ["model",] }],
            formLayout: [{ type: core.Input, args: ["layout",] }],
            blur: [{ type: core.Output }],
            change: [{ type: core.Output }],
            focus: [{ type: core.Output }],
            customEvent: [{ type: core.Output, args: ["ionEvent",] }],
            templates: [{ type: core.ContentChildren, args: [core$1.DynamicTemplateDirective,] }],
            components: [{ type: core.ViewChildren, args: [DynamicIonicFormControlContainerComponent,] }]
        };
        return DynamicIonicFormComponent;
    }(core$1.DynamicFormComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DynamicFormsIonicUIModule = /** @class */ (function () {
        function DynamicFormsIonicUIModule() {
        }
        DynamicFormsIonicUIModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.ReactiveFormsModule,
                            angular.IonicModule,
                            angular2TextMask.TextMaskModule,
                            core$1.DynamicFormsCoreModule
                        ],
                        declarations: [
                            DynamicIonicCheckboxComponent,
                            DynamicIonicDateTimeComponent,
                            DynamicIonicFormArrayComponent,
                            DynamicIonicFormGroupComponent,
                            DynamicIonicInputComponent,
                            DynamicIonicRadioGroupComponent,
                            DynamicIonicRangeComponent,
                            DynamicIonicSelectComponent,
                            DynamicIonicTextAreaComponent,
                            DynamicIonicToggleComponent,
                            DynamicIonicFormControlContainerComponent,
                            DynamicIonicFormComponent
                        ],
                        entryComponents: [
                            DynamicIonicCheckboxComponent,
                            DynamicIonicDateTimeComponent,
                            DynamicIonicFormArrayComponent,
                            DynamicIonicFormGroupComponent,
                            DynamicIonicInputComponent,
                            DynamicIonicRadioGroupComponent,
                            DynamicIonicRangeComponent,
                            DynamicIonicSelectComponent,
                            DynamicIonicTextAreaComponent,
                            DynamicIonicToggleComponent
                        ],
                        exports: [
                            core$1.DynamicFormsCoreModule,
                            DynamicIonicFormControlContainerComponent,
                            DynamicIonicFormComponent
                        ]
                    },] }
        ];
        return DynamicFormsIonicUIModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.DynamicIonicCheckboxComponent = DynamicIonicCheckboxComponent;
    exports.DynamicIonicDateTimeComponent = DynamicIonicDateTimeComponent;
    exports.DynamicIonicFormArrayComponent = DynamicIonicFormArrayComponent;
    exports.DynamicIonicFormGroupComponent = DynamicIonicFormGroupComponent;
    exports.DynamicIonicInputComponent = DynamicIonicInputComponent;
    exports.DynamicIonicRadioGroupComponent = DynamicIonicRadioGroupComponent;
    exports.DynamicIonicRangeComponent = DynamicIonicRangeComponent;
    exports.DynamicIonicSelectComponent = DynamicIonicSelectComponent;
    exports.DynamicIonicTextAreaComponent = DynamicIonicTextAreaComponent;
    exports.DynamicIonicToggleComponent = DynamicIonicToggleComponent;
    exports.DynamicIonicFormComponent = DynamicIonicFormComponent;
    exports.ionicUIFormControlMapFn = ionicUIFormControlMapFn;
    exports.DynamicIonicFormControlContainerComponent = DynamicIonicFormControlContainerComponent;
    exports.DynamicFormsIonicUIModule = DynamicFormsIonicUIModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ui-ionic.umd.js.map
