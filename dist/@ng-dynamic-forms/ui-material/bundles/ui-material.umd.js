/*!
@ng-dynamic-forms/ui-material 6.2.0 2018-10-18 21:38 UTC
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
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ng-dynamic-forms/core'), require('@angular/core'), require('@angular/forms'), require('@angular/material'), require('@angular/common'), require('angular2-text-mask')) :
    typeof define === 'function' && define.amd ? define(['exports', '@ng-dynamic-forms/core', '@angular/core', '@angular/forms', '@angular/material', '@angular/common', 'angular2-text-mask'], factory) :
    (factory((global.ngDF = global.ngDF || {}, global.ngDF.materialUI = {}),global.ngDF.core,global.ng.core,global.ng.forms,global.ng.material,global.ng.common,global['angular2-text-mask']));
}(this, (function (exports,core,core$1,forms,material,common,angular2TextMask) { 'use strict';

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
    DynamicMaterialFormInputControlComponent = /** @class */ (function (_super) {
        __extends(DynamicMaterialFormInputControlComponent, _super);
        function DynamicMaterialFormInputControlComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            return _this;
        }
        Object.defineProperty(DynamicMaterialFormInputControlComponent.prototype, "characterCount", {
            get: /**
             * @return {?}
             */
            function () {
                return this.matInput ? this.matInput.value.length : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DynamicMaterialFormInputControlComponent.prototype, "characterHint", {
            get: /**
             * @return {?}
             */
            function () {
                return this.characterCount + " / " + ((/** @type {?} */ (this.model))).maxLength;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DynamicMaterialFormInputControlComponent.prototype, "showCharacterHint", {
            get: /**
             * @return {?}
             */
            function () {
                return !!((/** @type {?} */ (this.model)).maxLength && this.characterCount);
            },
            enumerable: true,
            configurable: true
        });
        return DynamicMaterialFormInputControlComponent;
    }(core.DynamicFormControlComponent));

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
    var DynamicMaterialCheckboxComponent = /** @class */ (function (_super) {
        __extends$1(DynamicMaterialCheckboxComponent, _super);
        function DynamicMaterialCheckboxComponent(layoutService, validationService, RIPPLE_OPTIONS) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.RIPPLE_OPTIONS = RIPPLE_OPTIONS;
            _this.bindId = true;
            _this.blur = new core$1.EventEmitter();
            _this.change = new core$1.EventEmitter();
            _this.customEvent = new core$1.EventEmitter();
            _this.focus = new core$1.EventEmitter();
            return _this;
        }
        DynamicMaterialCheckboxComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: "dynamic-material-checkbox",
                        template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <mat-checkbox #matCheckbox\r\n                  [checked]=\"model.checked\"\r\n                  [color]=\"model.getAdditional('color', 'accent')\"\r\n                  [disableRipple]=\"model.getAdditional('disableRipple', RIPPLE_OPTIONS && RIPPLE_OPTIONS['disabled'] || false)\"\r\n                  [formControlName]=\"model.id\"\r\n                  [id]=\"bindId ? model.id : null\"\r\n                  [indeterminate]=\"model.indeterminate\"\r\n                  [labelPosition]=\"model.labelPosition || 'after'\"\r\n                  [name]=\"model.name\"\r\n                  [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n                  (blur)=\"onBlur($event)\"\r\n                  (change)=\"onChange($event)\"\r\n                  (focus)=\"onFocus($event)\"\r\n                  (indeterminateChange)=\"onCustomEvent($event, 'indeterminateChange')\">\r\n\r\n        <span [ngClass]=\"getClass('element', 'label')\" [innerHTML]=\"model.label\"></span>\r\n\r\n    </mat-checkbox>\r\n\r\n</ng-container>"
                    }] }
        ];
        /** @nocollapse */
        DynamicMaterialCheckboxComponent.ctorParameters = function () { return [
            { type: core.DynamicFormLayoutService },
            { type: core.DynamicFormValidationService },
            { type: undefined, decorators: [{ type: core$1.Inject, args: [material.MAT_RIPPLE_GLOBAL_OPTIONS,] }, { type: core$1.Optional }] }
        ]; };
        DynamicMaterialCheckboxComponent.propDecorators = {
            bindId: [{ type: core$1.Input }],
            group: [{ type: core$1.Input }],
            layout: [{ type: core$1.Input }],
            model: [{ type: core$1.Input }],
            blur: [{ type: core$1.Output }],
            change: [{ type: core$1.Output }],
            customEvent: [{ type: core$1.Output }],
            focus: [{ type: core$1.Output }],
            matCheckbox: [{ type: core$1.ViewChild, args: ["matCheckbox",] }]
        };
        return DynamicMaterialCheckboxComponent;
    }(core.DynamicFormControlComponent));

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
    var DynamicMaterialChipsComponent = /** @class */ (function (_super) {
        __extends$2(DynamicMaterialChipsComponent, _super);
        function DynamicMaterialChipsComponent(layoutService, validationService, CHIPS_OPTIONS, LABEL_OPTIONS) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.CHIPS_OPTIONS = CHIPS_OPTIONS;
            _this.LABEL_OPTIONS = LABEL_OPTIONS;
            _this.bindId = true;
            _this.blur = new core$1.EventEmitter();
            _this.change = new core$1.EventEmitter();
            _this.customEvent = new core$1.EventEmitter();
            _this.focus = new core$1.EventEmitter();
            return _this;
        }
        Object.defineProperty(DynamicMaterialChipsComponent.prototype, "model", {
            get: /**
             * @return {?}
             */
            function () {
                return this._model;
            },
            set: /**
             * @param {?} model
             * @return {?}
             */
            function (model) {
                var _this = this;
                this.unsubscribe();
                this._model = model;
                this._model.valueUpdates.subscribe(function (value) { return _this.chipList = value; });
                this.chipList = Array.isArray(model.value) ? /** @type {?} */ (model.value) : [];
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        DynamicMaterialChipsComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.unsubscribe();
        };
        /**
         * @return {?}
         */
        DynamicMaterialChipsComponent.prototype.unsubscribe = /**
         * @return {?}
         */
        function () {
            if (this._valueSubscription) {
                this._valueSubscription.unsubscribe();
            }
        };
        Object.defineProperty(DynamicMaterialChipsComponent.prototype, "chipList", {
            get: /**
             * @return {?}
             */
            function () {
                return this._chipList;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._chipList = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} $event
         * @return {?}
         */
        DynamicMaterialChipsComponent.prototype.onChipInputTokenEnd = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            /** @type {?} */
            var inputElement = $event.input;
            /** @type {?} */
            var inputValue = $event.value.trim();
            if (Array.isArray(this.chipList) && inputValue.length > 0) {
                this.chipList.push(inputValue);
                this.control.patchValue(this.chipList);
            }
            if (inputElement instanceof HTMLInputElement) {
                inputElement.value = "";
            }
        };
        /**
         * @param {?} chip
         * @param {?} index
         * @return {?}
         */
        DynamicMaterialChipsComponent.prototype.onChipRemoved = /**
         * @param {?} chip
         * @param {?} index
         * @return {?}
         */
        function (chip, index) {
            if (Array.isArray(this.chipList) && this.chipList[index] === chip) {
                this.chipList.splice(index, 1);
                this.control.patchValue(this.chipList);
            }
        };
        DynamicMaterialChipsComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: "dynamic-material-chips",
                        template: "<mat-form-field [appearance]=\"model.getAdditional('appearance', 'legacy')\"\r\n                [color]=\"model.getAdditional('color', 'primary')\"\r\n                [floatLabel]=\"model.getAdditional('floatLabel', LABEL_OPTIONS && LABEL_OPTIONS['float'] || 'auto')\"\r\n                [formGroup]=\"group\"\r\n                [hideRequiredMarker]=\"model.getAdditional('hideRequiredMarker', false)\"\r\n                [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <mat-chip-list #matChipList\r\n                   [formControlName]=\"model.id\"\r\n                   [id]=\"bindId ? model.id : null\"\r\n                   [multiple]=\"true\">\r\n\r\n        <mat-chip *ngFor=\"let chip of chipList; let index = index\"\r\n                  [selectable]=\"false\"\r\n                  (removed)=\"onChipRemoved(chip, index)\">\r\n\r\n            <span>{{ chip }}</span>\r\n\r\n            <mat-icon matChipRemove>cancel</mat-icon>\r\n\r\n        </mat-chip>\r\n\r\n        <input matInput\r\n               [placeholder]=\"model.placeholder\"\r\n               [matChipInputFor]=\"matChipList\"\r\n               [matChipInputAddOnBlur]=\"model.getAdditional('matChipInputAddOnBlur', true)\"\r\n               [matChipInputSeparatorKeyCodes]=\"model.getAdditional('matChipInputSeparatorKeyCodes', CHIPS_OPTIONS['separatorKeyCodes'])\"\r\n               (matChipInputTokenEnd)=\"onChipInputTokenEnd($event)\"/>\r\n\r\n    </mat-chip-list>\r\n\r\n</mat-form-field>"
                    }] }
        ];
        /** @nocollapse */
        DynamicMaterialChipsComponent.ctorParameters = function () { return [
            { type: core.DynamicFormLayoutService },
            { type: core.DynamicFormValidationService },
            { type: undefined, decorators: [{ type: core$1.Inject, args: [material.MAT_CHIPS_DEFAULT_OPTIONS,] }] },
            { type: undefined, decorators: [{ type: core$1.Inject, args: [material.MAT_LABEL_GLOBAL_OPTIONS,] }, { type: core$1.Optional }] }
        ]; };
        DynamicMaterialChipsComponent.propDecorators = {
            bindId: [{ type: core$1.Input }],
            group: [{ type: core$1.Input }],
            layout: [{ type: core$1.Input }],
            model: [{ type: core$1.Input }],
            blur: [{ type: core$1.Output }],
            change: [{ type: core$1.Output }],
            customEvent: [{ type: core$1.Output }],
            focus: [{ type: core$1.Output }],
            matChipList: [{ type: core$1.ViewChild, args: ["matChipList",] }],
            matInput: [{ type: core$1.ViewChild, args: [material.MatInput,] }]
        };
        return DynamicMaterialChipsComponent;
    }(core.DynamicFormControlComponent));

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
    var DynamicMaterialDatePickerComponent = /** @class */ (function (_super) {
        __extends$3(DynamicMaterialDatePickerComponent, _super);
        function DynamicMaterialDatePickerComponent(layoutService, validationService, LABEL_OPTIONS) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.LABEL_OPTIONS = LABEL_OPTIONS;
            _this.bindId = true;
            _this.blur = new core$1.EventEmitter();
            _this.change = new core$1.EventEmitter();
            _this.customEvent = new core$1.EventEmitter();
            _this.focus = new core$1.EventEmitter();
            return _this;
        }
        DynamicMaterialDatePickerComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: "dynamic-material-datepicker",
                        template: "<mat-form-field [appearance]=\"model.getAdditional('appearance', 'legacy')\"\r\n                [color]=\"model.getAdditional('color', 'primary')\"\r\n                [floatLabel]=\"model.getAdditional('floatLabel', LABEL_OPTIONS && LABEL_OPTIONS['float'] || 'auto')\"\r\n                [formGroup]=\"group\"\r\n                [hideRequiredMarker]=\"model.getAdditional('hideRequiredMarker', false)\"\r\n                [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <ng-container *ngIf=\"model.label\" ngProjectAs=\"mat-label\">\r\n\r\n        <mat-label>{{ model.label }}</mat-label>\r\n\r\n    </ng-container>\r\n\r\n    <span *ngIf=\"model.prefix\" matPrefix [innerHTML]=\"model.prefix\"></span>\r\n\r\n    <input matInput\r\n           [autofocus]=\"model.autoFocus\"\r\n           [formControlName]=\"model.id\"\r\n           [id]=\"bindId ? model.id : null\"\r\n           [max]=\"model.max\"\r\n           [matDatepicker]=\"matDatepicker\"\r\n           [min]=\"model.min\"\r\n           [name]=\"model.name\"\r\n           [ngClass]=\"getClass('element', 'control')\"\r\n           [placeholder]=\"model.placeholder\"\r\n           [readonly]=\"model.readOnly\"\r\n           [required]=\"model.required\"\r\n           (blur)=\"onBlur($event)\"\r\n           (dateChange)=\"onChange($event)\"\r\n           (dateInput)=\"onCustomEvent($event, 'dateInput')\"\r\n           (focus)=\"onFocus($event)\"/>\r\n\r\n    <span *ngIf=\"model.suffix\" matSuffix [innerHTML]=\"model.suffix\"></span>\r\n\r\n    <mat-hint *ngIf=\"model.hint !== null\" align=\"start\" [innerHTML]=\"model.hint\"></mat-hint>\r\n\r\n\r\n    <mat-datepicker-toggle matSuffix [for]=\"matDatepicker\"></mat-datepicker-toggle>\r\n\r\n    <mat-datepicker #matDatepicker\r\n                    [opened]=\"model.getAdditional('opened', false)\"\r\n                    [startAt]=\"model.focusedDate\"\r\n                    [startView]=\"model.getAdditional('startView', 'month')\"\r\n                    [touchUi]=\"model.getAdditional('touchUi', false)\"\r\n                    (closed)=\"onCustomEvent($event, 'closed')\"\r\n                    (opened)=\"onCustomEvent($event, 'opened')\"></mat-datepicker>\r\n\r\n\r\n    <ng-container *ngFor=\"let message of errorMessages\" ngProjectAs=\"mat-error\">\r\n\r\n        <mat-error *ngIf=\"showErrorMessages\">{{ message }}</mat-error>\r\n\r\n    </ng-container>\r\n\r\n</mat-form-field>"
                    }] }
        ];
        /** @nocollapse */
        DynamicMaterialDatePickerComponent.ctorParameters = function () { return [
            { type: core.DynamicFormLayoutService },
            { type: core.DynamicFormValidationService },
            { type: undefined, decorators: [{ type: core$1.Inject, args: [material.MAT_LABEL_GLOBAL_OPTIONS,] }, { type: core$1.Optional }] }
        ]; };
        DynamicMaterialDatePickerComponent.propDecorators = {
            bindId: [{ type: core$1.Input }],
            group: [{ type: core$1.Input }],
            layout: [{ type: core$1.Input }],
            model: [{ type: core$1.Input }],
            blur: [{ type: core$1.Output }],
            change: [{ type: core$1.Output }],
            customEvent: [{ type: core$1.Output }],
            focus: [{ type: core$1.Output }],
            matDatePicker: [{ type: core$1.ViewChild, args: ["matDatepicker",] }],
            matInput: [{ type: core$1.ViewChild, args: [material.MatInput,] }]
        };
        return DynamicMaterialDatePickerComponent;
    }(core.DynamicFormControlComponent));

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
    var DynamicMaterialFormArrayComponent = /** @class */ (function (_super) {
        __extends$4(DynamicMaterialFormArrayComponent, _super);
        function DynamicMaterialFormArrayComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core$1.EventEmitter();
            _this.change = new core$1.EventEmitter();
            _this.customEvent = new core$1.EventEmitter();
            _this.focus = new core$1.EventEmitter();
            return _this;
        }
        DynamicMaterialFormArrayComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: "dynamic-material-form-array",
                        template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <div [dynamicId]=\"bindId && model.id\"\r\n         [formArrayName]=\"model.id\"\r\n         [ngClass]=\"getClass('element', 'control')\">\r\n\r\n        <div *ngFor=\"let groupModel of model.groups; let idx = index\" role=\"group\"\r\n             [formGroupName]=\"idx\" [ngClass]=\"[getClass('element', 'group'), getClass('grid', 'group')]\">\r\n\r\n            <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: groupModel\"></ng-container>\r\n\r\n            <dynamic-material-form-control *ngFor=\"let _model of groupModel.group\"\r\n                                           [bindId]=\"false\"\r\n                                           [context]=\"groupModel\"\r\n                                           [group]=\"control.at(idx)\"\r\n                                           [hidden]=\"_model.hidden\"\r\n                                           [layout]=\"layout\"\r\n                                           [model]=\"_model\"\r\n                                           [templates]=\"templates\"\r\n                                           [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model),\r\n                                                       getClass('element','children'), getClass('grid','children')]\"\r\n                                           (blur)=\"onBlur($event)\"\r\n                                           (change)=\"onChange($event)\"\r\n                                           (focus)=\"onFocus($event)\"\r\n                                           (matEvent)=\"onCustomEvent($event, null, true)\"></dynamic-material-form-control>\r\n\r\n            <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: groupModel\"></ng-container>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</ng-container>"
                    }] }
        ];
        /** @nocollapse */
        DynamicMaterialFormArrayComponent.ctorParameters = function () { return [
            { type: core.DynamicFormLayoutService },
            { type: core.DynamicFormValidationService }
        ]; };
        DynamicMaterialFormArrayComponent.propDecorators = {
            bindId: [{ type: core$1.Input }],
            group: [{ type: core$1.Input }],
            layout: [{ type: core$1.Input }],
            model: [{ type: core$1.Input }],
            templates: [{ type: core$1.Input }],
            blur: [{ type: core$1.Output }],
            change: [{ type: core$1.Output }],
            customEvent: [{ type: core$1.Output }],
            focus: [{ type: core$1.Output }]
        };
        return DynamicMaterialFormArrayComponent;
    }(core.DynamicFormArrayComponent));

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
    var DynamicMaterialFormGroupComponent = /** @class */ (function (_super) {
        __extends$5(DynamicMaterialFormGroupComponent, _super);
        function DynamicMaterialFormGroupComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core$1.EventEmitter();
            _this.change = new core$1.EventEmitter();
            _this.customEvent = new core$1.EventEmitter();
            _this.focus = new core$1.EventEmitter();
            return _this;
        }
        DynamicMaterialFormGroupComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: "dynamic-material-form-group",
                        template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <div role=\"group\"\r\n         [dynamicId]=\"bindId && model.id\"\r\n         [formGroupName]=\"model.id\"\r\n         [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\">\r\n\r\n        <dynamic-material-form-control *ngFor=\"let _model of model.group\"\r\n                                       [group]=\"control\"\r\n                                       [hidden]=\"_model.hidden\"\r\n                                       [layout]=\"layout\"\r\n                                       [model]=\"_model\"\r\n                                       [templates]=\"templates\"\r\n                                       [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model),\r\n                                                   getClass('element','children'), getClass('grid','children')]\"\r\n                                       (blur)=\"onBlur($event)\"\r\n                                       (change)=\"onChange($event)\"\r\n                                       (focus)=\"onFocus($event)\"\r\n                                       (matEvent)=\"onCustomEvent($event, null, true)\"></dynamic-material-form-control>\r\n    </div>\r\n\r\n</ng-container>"
                    }] }
        ];
        /** @nocollapse */
        DynamicMaterialFormGroupComponent.ctorParameters = function () { return [
            { type: core.DynamicFormLayoutService },
            { type: core.DynamicFormValidationService }
        ]; };
        DynamicMaterialFormGroupComponent.propDecorators = {
            bindId: [{ type: core$1.Input }],
            group: [{ type: core$1.Input }],
            layout: [{ type: core$1.Input }],
            model: [{ type: core$1.Input }],
            templates: [{ type: core$1.Input }],
            blur: [{ type: core$1.Output }],
            change: [{ type: core$1.Output }],
            customEvent: [{ type: core$1.Output }],
            focus: [{ type: core$1.Output }]
        };
        return DynamicMaterialFormGroupComponent;
    }(core.DynamicFormControlComponent));

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
    var DynamicMaterialInputComponent = /** @class */ (function (_super) {
        __extends$6(DynamicMaterialInputComponent, _super);
        function DynamicMaterialInputComponent(layoutService, validationService, errorStateMatcher, AUTOCOMPLETE_OPTIONS, LABEL_OPTIONS, RIPPLE_OPTIONS) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.errorStateMatcher = errorStateMatcher;
            _this.AUTOCOMPLETE_OPTIONS = AUTOCOMPLETE_OPTIONS;
            _this.LABEL_OPTIONS = LABEL_OPTIONS;
            _this.RIPPLE_OPTIONS = RIPPLE_OPTIONS;
            _this.bindId = true;
            _this.blur = new core$1.EventEmitter();
            _this.change = new core$1.EventEmitter();
            _this.customEvent = new core$1.EventEmitter();
            _this.focus = new core$1.EventEmitter();
            return _this;
        }
        DynamicMaterialInputComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: "dynamic-material-input",
                        template: "<mat-form-field [appearance]=\"model.getAdditional('appearance', 'legacy')\"\r\n                [color]=\"model.getAdditional('color', 'primary')\"\r\n                [floatLabel]=\"model.getAdditional('floatLabel', LABEL_OPTIONS && LABEL_OPTIONS['float'] || 'auto')\"\r\n                [formGroup]=\"group\"\r\n                [hideRequiredMarker]=\"model.getAdditional('hideRequiredMarker', false)\"\r\n                [ngClass]=\"getClass('grid','control')\"\r\n                [textMask]=\"{mask: (model.mask || false), showMask: model.mask && !(model.placeholder)}\">\r\n\r\n    <ng-container *ngIf=\"model.label\" ngProjectAs=\"mat-label\">\r\n\r\n        <mat-label>{{ model.label }}</mat-label>\r\n\r\n    </ng-container>\r\n\r\n    <span *ngIf=\"model.prefix\" matPrefix [innerHTML]=\"model.prefix\"></span>\r\n\r\n    <input matInput\r\n           [attr.accept]=\"model.accept\"\r\n           [attr.max]=\"model.max\"\r\n           [attr.min]=\"model.min\"\r\n           [attr.multiple]=\"model.multiple\"\r\n           [attr.step]=\"model.step\"\r\n           [autocomplete]=\"model.autoComplete\"\r\n           [autofocus]=\"model.autoFocus\"\r\n           [errorStateMatcher]=\"model.getAdditional('errorStateMatcher', errorStateMatcher)\"\r\n           [formControlName]=\"model.id\"\r\n           [id]=\"bindId ? model.id : null\"\r\n           [maxlength]=\"model.maxLength\"\r\n           [matAutocomplete]=\"matAutocomplete\"\r\n           [minlength]=\"model.minLength\"\r\n           [name]=\"model.name\"\r\n           [ngClass]=\"getClass('element', 'control')\"\r\n           [pattern]=\"model.pattern\"\r\n           [placeholder]=\"model.placeholder\"\r\n           [readonly]=\"model.readOnly\"\r\n           [required]=\"model.required\"\r\n           [spellcheck]=\"model.spellCheck\"\r\n           [tabindex]=\"model.tabIndex\"\r\n           [type]=\"model.inputType\"\r\n           (blur)=\"onBlur($event)\"\r\n           (change)=\"onChange($event)\"\r\n           (focus)=\"onFocus($event)\"/>\r\n\r\n    <span *ngIf=\"model.suffix\" matSuffix [innerHTML]=\"model.suffix\"></span>\r\n\r\n    <mat-hint *ngIf=\"model.hint !== null\" align=\"start\" [innerHTML]=\"model.hint\"></mat-hint>\r\n\r\n    <mat-hint *ngIf=\"showCharacterHint\" align=\"end\">{{ characterHint }}</mat-hint>\r\n\r\n    <ng-container *ngFor=\"let message of errorMessages\" ngProjectAs=\"mat-error\">\r\n\r\n        <mat-error *ngIf=\"showErrorMessages\">{{ message }}</mat-error>\r\n\r\n    </ng-container>\r\n\r\n</mat-form-field>\r\n\r\n<mat-autocomplete #matAutocomplete=\"matAutocomplete\"\r\n                  [autoActiveFirstOption]=\"model.getAdditional('autoActiveFirstOption', AUTOCOMPLETE_OPTIONS['autoActiveFirstOption'])\"\r\n                  [disableRipple]=\"model.getAdditional('disableRipple', RIPPLE_OPTIONS && RIPPLE_OPTIONS['disabled'] || false)\"\r\n                  (optionSelected)=\"onChange($event)\">\r\n\r\n    <mat-option *ngFor=\"let option of model.list$ | async\" [value]=\"option\">{{ option }}</mat-option>\r\n\r\n</mat-autocomplete>"
                    }] }
        ];
        /** @nocollapse */
        DynamicMaterialInputComponent.ctorParameters = function () { return [
            { type: core.DynamicFormLayoutService },
            { type: core.DynamicFormValidationService },
            { type: material.ErrorStateMatcher, decorators: [{ type: core$1.Inject, args: [material.ErrorStateMatcher,] }] },
            { type: undefined, decorators: [{ type: core$1.Inject, args: [material.MAT_AUTOCOMPLETE_DEFAULT_OPTIONS,] }] },
            { type: undefined, decorators: [{ type: core$1.Inject, args: [material.MAT_LABEL_GLOBAL_OPTIONS,] }, { type: core$1.Optional }] },
            { type: undefined, decorators: [{ type: core$1.Inject, args: [material.MAT_RIPPLE_GLOBAL_OPTIONS,] }, { type: core$1.Optional }] }
        ]; };
        DynamicMaterialInputComponent.propDecorators = {
            bindId: [{ type: core$1.Input }],
            group: [{ type: core$1.Input }],
            layout: [{ type: core$1.Input }],
            model: [{ type: core$1.Input }],
            blur: [{ type: core$1.Output }],
            change: [{ type: core$1.Output }],
            customEvent: [{ type: core$1.Output }],
            focus: [{ type: core$1.Output }],
            matAutocomplete: [{ type: core$1.ViewChild, args: ["matAutocomplete",] }],
            matInput: [{ type: core$1.ViewChild, args: [material.MatInput,] }]
        };
        return DynamicMaterialInputComponent;
    }(DynamicMaterialFormInputControlComponent));

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
    var DynamicMaterialRadioGroupComponent = /** @class */ (function (_super) {
        __extends$7(DynamicMaterialRadioGroupComponent, _super);
        function DynamicMaterialRadioGroupComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core$1.EventEmitter();
            _this.change = new core$1.EventEmitter();
            _this.customEvent = new core$1.EventEmitter();
            _this.focus = new core$1.EventEmitter();
            return _this;
        }
        DynamicMaterialRadioGroupComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: "dynamic-material-radio-group",
                        template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <mat-radio-group #matRadioGroup\r\n                     [formControlName]=\"model.id\"\r\n                     [id]=\"bindId ? model.id : null\"\r\n                     [labelPosition]=\"model.getAdditional('labelPosition', 'after')\"\r\n                     [name]=\"model.name\"\r\n                     [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n                     (blur)=\"onBlur($event)\"\r\n                     (change)=\"onChange($event)\"\r\n                     (focus)=\"onFocus($event)\">\r\n\r\n        <mat-radio-button *ngFor=\"let option of model.options$ | async\"\r\n                          [name]=\"model.name\"\r\n                          [ngClass]=\"getClass('element', 'option')\"\r\n                          [value]=\"option.value\"><span [innerHTML]=\"option.label\"></span></mat-radio-button>\r\n\r\n    </mat-radio-group>\r\n\r\n</ng-container>"
                    }] }
        ];
        /** @nocollapse */
        DynamicMaterialRadioGroupComponent.ctorParameters = function () { return [
            { type: core.DynamicFormLayoutService },
            { type: core.DynamicFormValidationService }
        ]; };
        DynamicMaterialRadioGroupComponent.propDecorators = {
            bindId: [{ type: core$1.Input }],
            group: [{ type: core$1.Input }],
            layout: [{ type: core$1.Input }],
            model: [{ type: core$1.Input }],
            blur: [{ type: core$1.Output }],
            change: [{ type: core$1.Output }],
            customEvent: [{ type: core$1.Output }],
            focus: [{ type: core$1.Output }],
            matRadioGroup: [{ type: core$1.ViewChild, args: ["matRadioGroup",] }]
        };
        return DynamicMaterialRadioGroupComponent;
    }(core.DynamicFormControlComponent));

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
    var DynamicMaterialSelectComponent = /** @class */ (function (_super) {
        __extends$8(DynamicMaterialSelectComponent, _super);
        function DynamicMaterialSelectComponent(layoutService, validationService, errorStateMatcher, LABEL_OPTIONS, RIPPLE_OPTIONS) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.errorStateMatcher = errorStateMatcher;
            _this.LABEL_OPTIONS = LABEL_OPTIONS;
            _this.RIPPLE_OPTIONS = RIPPLE_OPTIONS;
            _this.bindId = true;
            _this.blur = new core$1.EventEmitter();
            _this.change = new core$1.EventEmitter();
            _this.customEvent = new core$1.EventEmitter();
            _this.focus = new core$1.EventEmitter();
            return _this;
        }
        DynamicMaterialSelectComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: "dynamic-material-select",
                        template: "<mat-form-field [appearance]=\"model.getAdditional('appearance', 'legacy')\"\r\n                [color]=\"model.getAdditional('color', 'primary')\"\r\n                [ngClass]=\"getClass('grid', 'control')\"\r\n                [floatLabel]=\"model.getAdditional('floatLabel', LABEL_OPTIONS && LABEL_OPTIONS['float'] || 'auto')\"\r\n                [formGroup]=\"group\">\r\n\r\n    <ng-container *ngIf=\"model.label\" ngProjectAs=\"mat-label\">\r\n\r\n        <mat-label>{{ model.label }}</mat-label>\r\n\r\n    </ng-container>\r\n\r\n    <span *ngIf=\"model.prefix\" matPrefix [innerHTML]=\"model.prefix\"></span>\r\n\r\n    <mat-select #matSelect\r\n                [compareWith]=\"model.compareWithFn\"\r\n                [disableRipple]=\"model.getAdditional('disableRipple', RIPPLE_OPTIONS && RIPPLE_OPTIONS['disabled'] || false)\"\r\n                [errorStateMatcher]=\"model.getAdditional('errorStateMatcher', errorStateMatcher)\"\r\n                [formControlName]=\"model.id\"\r\n                [id]=\"bindId ? model.id : null\"\r\n                [multiple]=\"model.multiple\"\r\n                [ngClass]=\"getClass('element', 'control')\"\r\n                [placeholder]=\"model.placeholder\"\r\n                [required]=\"model.required\"\r\n                (openedChange)=\"onCustomEvent($event, 'openedChange')\"\r\n                (selectionChange)=\"onChange($event)\">\r\n\r\n        <mat-option *ngFor=\"let option of model.options$ | async\"\r\n                    [ngClass]=\"getClass('element', 'option')\"\r\n                    [value]=\"option.value\"><span [innerHTML]=\"option.label\"></span></mat-option>\r\n    </mat-select>\r\n\r\n    <span *ngIf=\"model.suffix\" matSuffix [innerHTML]=\"model.suffix\"></span>\r\n\r\n    <mat-hint *ngIf=\"model.hint !== null\" align=\"start\" [innerHTML]=\"model.hint\"></mat-hint>\r\n\r\n    <ng-container *ngFor=\"let message of errorMessages\" ngProjectAs=\"mat-error\">\r\n\r\n        <mat-error *ngIf=\"showErrorMessages\">{{ message }}</mat-error>\r\n\r\n    </ng-container>\r\n\r\n</mat-form-field>"
                    }] }
        ];
        /** @nocollapse */
        DynamicMaterialSelectComponent.ctorParameters = function () { return [
            { type: core.DynamicFormLayoutService },
            { type: core.DynamicFormValidationService },
            { type: material.ErrorStateMatcher, decorators: [{ type: core$1.Inject, args: [material.ErrorStateMatcher,] }] },
            { type: undefined, decorators: [{ type: core$1.Inject, args: [material.MAT_LABEL_GLOBAL_OPTIONS,] }, { type: core$1.Optional }] },
            { type: undefined, decorators: [{ type: core$1.Inject, args: [material.MAT_RIPPLE_GLOBAL_OPTIONS,] }, { type: core$1.Optional }] }
        ]; };
        DynamicMaterialSelectComponent.propDecorators = {
            bindId: [{ type: core$1.Input }],
            group: [{ type: core$1.Input }],
            layout: [{ type: core$1.Input }],
            model: [{ type: core$1.Input }],
            blur: [{ type: core$1.Output }],
            change: [{ type: core$1.Output }],
            customEvent: [{ type: core$1.Output }],
            focus: [{ type: core$1.Output }],
            matSelect: [{ type: core$1.ViewChild, args: ["matSelect",] }]
        };
        return DynamicMaterialSelectComponent;
    }(core.DynamicFormControlComponent));

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
    var DynamicMaterialSlideToggleComponent = /** @class */ (function (_super) {
        __extends$9(DynamicMaterialSlideToggleComponent, _super);
        function DynamicMaterialSlideToggleComponent(layoutService, validationService, RIPPLE_OPTIONS) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.RIPPLE_OPTIONS = RIPPLE_OPTIONS;
            _this.bindId = true;
            _this.blur = new core$1.EventEmitter();
            _this.change = new core$1.EventEmitter();
            _this.customEvent = new core$1.EventEmitter();
            _this.focus = new core$1.EventEmitter();
            return _this;
        }
        DynamicMaterialSlideToggleComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: "dynamic-material-slide-toggle",
                        template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <mat-slide-toggle #matSlideToggle\r\n                      [checked]=\"model.checked\"\r\n                      [color]=\"model.getAdditional('color', 'accent')\"\r\n                      [disableRipple]=\"model.getAdditional('disableRipple', RIPPLE_OPTIONS && RIPPLE_OPTIONS['disabled'] || false)\"\r\n                      [formControlName]=\"model.id\"\r\n                      [id]=\"bindId ? model.id : null\"\r\n                      [labelPosition]=\"model.labelPosition || 'after'\"\r\n                      [name]=\"model.name\"\r\n                      [ngClass]=\"[getClass('element','control'), getClass('grid','control')]\"\r\n                      (change)=\"onChange($event)\">\r\n\r\n        <span *ngIf=\"!model.checked\" [innerHTML]=\"model.offLabel\"></span>\r\n        <span *ngIf=\"model.checked\" [innerHTML]=\"model.onLabel\"></span>\r\n\r\n    </mat-slide-toggle>\r\n\r\n</ng-container>"
                    }] }
        ];
        /** @nocollapse */
        DynamicMaterialSlideToggleComponent.ctorParameters = function () { return [
            { type: core.DynamicFormLayoutService },
            { type: core.DynamicFormValidationService },
            { type: undefined, decorators: [{ type: core$1.Inject, args: [material.MAT_RIPPLE_GLOBAL_OPTIONS,] }, { type: core$1.Optional }] }
        ]; };
        DynamicMaterialSlideToggleComponent.propDecorators = {
            bindId: [{ type: core$1.Input }],
            group: [{ type: core$1.Input }],
            layout: [{ type: core$1.Input }],
            model: [{ type: core$1.Input }],
            blur: [{ type: core$1.Output }],
            change: [{ type: core$1.Output }],
            customEvent: [{ type: core$1.Output }],
            focus: [{ type: core$1.Output }],
            matSlideToggle: [{ type: core$1.ViewChild, args: ["matSlideToggle",] }]
        };
        return DynamicMaterialSlideToggleComponent;
    }(core.DynamicFormControlComponent));

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
    var DynamicMaterialSliderComponent = /** @class */ (function (_super) {
        __extends$a(DynamicMaterialSliderComponent, _super);
        function DynamicMaterialSliderComponent(layoutService, validationService) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.blur = new core$1.EventEmitter();
            _this.change = new core$1.EventEmitter();
            _this.customEvent = new core$1.EventEmitter();
            _this.focus = new core$1.EventEmitter();
            return _this;
        }
        DynamicMaterialSliderComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: "dynamic-material-slider",
                        template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <mat-slider #matSlider\r\n                [color]=\"model.getAdditional('color', 'accent')\"\r\n                [formControlName]=\"model.id\"\r\n                [id]=\"bindId ? model.id : null\"\r\n                [invert]=\"model.getAdditional('invert', false)\"\r\n                [min]=\"model.min\"\r\n                [max]=\"model.max\"\r\n                [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n                [step]=\"model.step\"\r\n                [tabIndex]=\"model.tabIndex\"\r\n                [thumbLabel]=\"model.getAdditional('thumbLabel', true)\"\r\n                [tickInterval]=\"model.getAdditional('tickInterval', 1)\"\r\n                [vertical]=\"model.vertical\"\r\n                (change)=\"onChange($event)\"\r\n                (input)=\"onCustomEvent($event, 'input')\"></mat-slider>\r\n\r\n</ng-container>"
                    }] }
        ];
        /** @nocollapse */
        DynamicMaterialSliderComponent.ctorParameters = function () { return [
            { type: core.DynamicFormLayoutService },
            { type: core.DynamicFormValidationService }
        ]; };
        DynamicMaterialSliderComponent.propDecorators = {
            bindId: [{ type: core$1.Input }],
            group: [{ type: core$1.Input }],
            layout: [{ type: core$1.Input }],
            model: [{ type: core$1.Input }],
            blur: [{ type: core$1.Output }],
            change: [{ type: core$1.Output }],
            customEvent: [{ type: core$1.Output }],
            focus: [{ type: core$1.Output }],
            matSlider: [{ type: core$1.ViewChild, args: ["matSlider",] }]
        };
        return DynamicMaterialSliderComponent;
    }(core.DynamicFormControlComponent));

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
    var DynamicMaterialTextAreaComponent = /** @class */ (function (_super) {
        __extends$b(DynamicMaterialTextAreaComponent, _super);
        function DynamicMaterialTextAreaComponent(layoutService, validationService, LABEL_OPTIONS) {
            var _this = _super.call(this, layoutService, validationService) || this;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.LABEL_OPTIONS = LABEL_OPTIONS;
            _this.bindId = true;
            _this.blur = new core$1.EventEmitter();
            _this.change = new core$1.EventEmitter();
            _this.customEvent = new core$1.EventEmitter();
            _this.focus = new core$1.EventEmitter();
            return _this;
        }
        DynamicMaterialTextAreaComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: "dynamic-material-textarea",
                        template: "<mat-form-field [appearance]=\"model.getAdditional('appearance', 'legacy')\"\r\n                [color]=\"model.getAdditional('color', 'primary')\"\r\n                [floatLabel]=\"model.getAdditional('floatLabel', LABEL_OPTIONS && LABEL_OPTIONS['float'] || 'auto')\"\r\n                [formGroup]=\"group\"\r\n                [hideRequiredMarker]=\"model.getAdditional('hideRequiredMarker', false)\"\r\n                [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <ng-container *ngIf=\"model.label\" ngProjectAs=\"mat-label\">\r\n\r\n        <mat-label>{{ model.label }}</mat-label>\r\n\r\n    </ng-container>\r\n\r\n    <textarea matInput\r\n              [cdkTextareaAutosize]=\"model.getAdditional('cdkTextareaAutosize', true)\"\r\n              [cols]=\"model.cols\"\r\n              [formControlName]=\"model.id\"\r\n              [id]=\"bindId ? model.id : null\"\r\n              [maxlength]=\"model.maxLength\"\r\n              [minlength]=\"model.minLength\"\r\n              [name]=\"model.name\"\r\n              [ngClass]=\"getClass('element', 'control')\"\r\n              [placeholder]=\"model.placeholder\"\r\n              [readonly]=\"model.readOnly\"\r\n              [required]=\"model.required\"\r\n              [rows]=\"model.rows\"\r\n              [spellcheck]=\"model.spellCheck\"\r\n              [tabindex]=\"model.tabIndex\"\r\n              [wrap]=\"model.wrap\"\r\n              (blur)=\"onBlur($event)\"\r\n              (change)=\"onChange($event)\"\r\n              (focus)=\"onFocus($event)\"></textarea>\r\n\r\n    <mat-hint *ngIf=\"model.hint !== null\" align=\"start\" [innerHTML]=\"model.hint\"></mat-hint>\r\n\r\n    <mat-hint *ngIf=\"showCharacterHint\" align=\"end\">{{ characterHint }}</mat-hint>\r\n\r\n    <ng-container *ngFor=\"let message of errorMessages\" ngProjectAs=\"mat-error\">\r\n\r\n        <mat-error *ngIf=\"showErrorMessages\">{{ message }}</mat-error>\r\n\r\n    </ng-container>\r\n\r\n</mat-form-field>"
                    }] }
        ];
        /** @nocollapse */
        DynamicMaterialTextAreaComponent.ctorParameters = function () { return [
            { type: core.DynamicFormLayoutService },
            { type: core.DynamicFormValidationService },
            { type: undefined, decorators: [{ type: core$1.Inject, args: [material.MAT_LABEL_GLOBAL_OPTIONS,] }, { type: core$1.Optional }] }
        ]; };
        DynamicMaterialTextAreaComponent.propDecorators = {
            bindId: [{ type: core$1.Input }],
            group: [{ type: core$1.Input }],
            layout: [{ type: core$1.Input }],
            model: [{ type: core$1.Input }],
            blur: [{ type: core$1.Output }],
            change: [{ type: core$1.Output }],
            customEvent: [{ type: core$1.Output }],
            focus: [{ type: core$1.Output }],
            matInput: [{ type: core$1.ViewChild, args: [material.MatInput,] }]
        };
        return DynamicMaterialTextAreaComponent;
    }(DynamicMaterialFormInputControlComponent));

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
    var DynamicMaterialFormControlContainerComponent = /** @class */ (function (_super) {
        __extends$c(DynamicMaterialFormControlContainerComponent, _super);
        function DynamicMaterialFormControlContainerComponent(componentFactoryResolver, layoutService, validationService) {
            var _this = _super.call(this, componentFactoryResolver, layoutService, validationService) || this;
            _this.componentFactoryResolver = componentFactoryResolver;
            _this.layoutService = layoutService;
            _this.validationService = validationService;
            _this.bindId = true;
            _this.context = null;
            _this.blur = new core$1.EventEmitter();
            _this.change = new core$1.EventEmitter();
            _this.focus = new core$1.EventEmitter();
            _this.customEvent = new core$1.EventEmitter();
            return _this;
        }
        Object.defineProperty(DynamicMaterialFormControlContainerComponent.prototype, "componentType", {
            get: /**
             * @return {?}
             */
            function () {
                return this.layoutService.getCustomComponentType(this.model) || materialUIFormControlMapFn(this.model);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DynamicMaterialFormControlContainerComponent.prototype, "hasMatFormField", {
            get: /**
             * @return {?}
             */
            function () {
                var _this = this;
                /** @type {?} */
                var matFormFieldTypes = [core.DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER, core.DYNAMIC_FORM_CONTROL_TYPE_INPUT,
                    core.DYNAMIC_FORM_CONTROL_TYPE_SELECT, core.DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA];
                return matFormFieldTypes.some(function (type) { return _this.model.type === type; });
            },
            enumerable: true,
            configurable: true
        });
        DynamicMaterialFormControlContainerComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: "dynamic-material-form-control",
                        template: "<div [formGroup]=\"group\" [ngClass]=\"[getClass('element', 'container'), getClass('grid', 'container')]\">\r\n\r\n    <label *ngIf=\"!hasMatFormField && !isCheckbox && hasLabel\"\r\n           [for]=\"model.id\"\r\n           [innerHTML]=\"model.label\"\r\n           [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></label>\r\n\r\n    <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <ng-container #componentViewContainer></ng-container>\r\n\r\n    <ng-container *ngIf=\"!hasMatFormField && showErrorMessages\">\r\n\r\n        <mat-error *ngFor=\"let message of errorMessages\">{{ message }}</mat-error>\r\n\r\n    </ng-container>\r\n\r\n    <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <ng-content></ng-content>\r\n\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        DynamicMaterialFormControlContainerComponent.ctorParameters = function () { return [
            { type: core$1.ComponentFactoryResolver },
            { type: core.DynamicFormLayoutService },
            { type: core.DynamicFormValidationService }
        ]; };
        DynamicMaterialFormControlContainerComponent.propDecorators = {
            contentTemplateList: [{ type: core$1.ContentChildren, args: [core.DynamicTemplateDirective,] }],
            inputTemplateList: [{ type: core$1.Input, args: ["templates",] }],
            bindId: [{ type: core$1.Input }],
            context: [{ type: core$1.Input }],
            group: [{ type: core$1.Input }],
            layout: [{ type: core$1.Input }],
            model: [{ type: core$1.Input }],
            blur: [{ type: core$1.Output }],
            change: [{ type: core$1.Output }],
            focus: [{ type: core$1.Output }],
            customEvent: [{ type: core$1.Output, args: ["matEvent",] }],
            componentViewContainerRef: [{ type: core$1.ViewChild, args: ["componentViewContainer", { read: core$1.ViewContainerRef },] }]
        };
        return DynamicMaterialFormControlContainerComponent;
    }(core.DynamicFormControlContainerComponent));
    /**
     * @param {?} model
     * @return {?}
     */
    function materialUIFormControlMapFn(model) {
        switch (model.type) {
            case core.DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
                return DynamicMaterialFormArrayComponent;
            case core.DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX:
                return DynamicMaterialCheckboxComponent;
            case core.DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
                return DynamicMaterialFormGroupComponent;
            case core.DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER:
                return DynamicMaterialDatePickerComponent;
            case core.DYNAMIC_FORM_CONTROL_TYPE_GROUP:
                return DynamicMaterialFormGroupComponent;
            case core.DYNAMIC_FORM_CONTROL_TYPE_INPUT:
                /** @type {?} */
                var inputModel = /** @type {?} */ (model);
                return inputModel.multiple ? DynamicMaterialChipsComponent : DynamicMaterialInputComponent;
            case core.DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP:
                return DynamicMaterialRadioGroupComponent;
            case core.DYNAMIC_FORM_CONTROL_TYPE_SELECT:
                return DynamicMaterialSelectComponent;
            case core.DYNAMIC_FORM_CONTROL_TYPE_SLIDER:
                return DynamicMaterialSliderComponent;
            case core.DYNAMIC_FORM_CONTROL_TYPE_SWITCH:
                return DynamicMaterialSlideToggleComponent;
            case core.DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA:
                return DynamicMaterialTextAreaComponent;
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
    var DynamicMaterialFormComponent = /** @class */ (function (_super) {
        __extends$d(DynamicMaterialFormComponent, _super);
        function DynamicMaterialFormComponent(formService, layoutService) {
            var _this = _super.call(this, formService, layoutService) || this;
            _this.formService = formService;
            _this.layoutService = layoutService;
            _this.blur = new core$1.EventEmitter();
            _this.change = new core$1.EventEmitter();
            _this.focus = new core$1.EventEmitter();
            _this.customEvent = new core$1.EventEmitter();
            return _this;
        }
        DynamicMaterialFormComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: "dynamic-material-form",
                        template: "<dynamic-material-form-control *ngFor=\"let model of formModel; trackBy: trackByFn\"\r\n                               [group]=\"formGroup\"\r\n                               [hidden]=\"model.hidden\"\r\n                               [layout]=\"formLayout\"\r\n                               [model]=\"model\"\r\n                               [ngClass]=\"[getClass(model, 'element', 'host'), getClass(model, 'grid', 'host')]\"\r\n                               [templates]=\"templates\"\r\n                               (blur)=\"onEvent($event, 'blur')\"\r\n                               (change)=\"onEvent($event, 'change')\"\r\n                               (focus)=\"onEvent($event, 'focus')\"\r\n                               (matEvent)=\"onEvent($event, 'custom')\"></dynamic-material-form-control>"
                    }] }
        ];
        /** @nocollapse */
        DynamicMaterialFormComponent.ctorParameters = function () { return [
            { type: core.DynamicFormService },
            { type: core.DynamicFormLayoutService }
        ]; };
        DynamicMaterialFormComponent.propDecorators = {
            formGroup: [{ type: core$1.Input, args: ["group",] }],
            formModel: [{ type: core$1.Input, args: ["model",] }],
            formLayout: [{ type: core$1.Input, args: ["layout",] }],
            blur: [{ type: core$1.Output }],
            change: [{ type: core$1.Output }],
            focus: [{ type: core$1.Output }],
            customEvent: [{ type: core$1.Output, args: ["matEvent",] }],
            templates: [{ type: core$1.ContentChildren, args: [core.DynamicTemplateDirective,] }],
            components: [{ type: core$1.ViewChildren, args: [DynamicMaterialFormControlContainerComponent,] }]
        };
        return DynamicMaterialFormComponent;
    }(core.DynamicFormComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DynamicFormsMaterialUIModule = /** @class */ (function () {
        function DynamicFormsMaterialUIModule() {
        }
        DynamicFormsMaterialUIModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.ReactiveFormsModule,
                            material.MatAutocompleteModule,
                            material.MatCheckboxModule,
                            material.MatChipsModule,
                            material.MatDatepickerModule,
                            material.MatIconModule,
                            material.MatInputModule,
                            material.MatRadioModule,
                            material.MatSelectModule,
                            material.MatSliderModule,
                            material.MatSlideToggleModule,
                            angular2TextMask.TextMaskModule,
                            core.DynamicFormsCoreModule
                        ],
                        declarations: [
                            DynamicMaterialCheckboxComponent,
                            DynamicMaterialChipsComponent,
                            DynamicMaterialDatePickerComponent,
                            DynamicMaterialFormArrayComponent,
                            DynamicMaterialFormGroupComponent,
                            DynamicMaterialInputComponent,
                            DynamicMaterialRadioGroupComponent,
                            DynamicMaterialSelectComponent,
                            DynamicMaterialSlideToggleComponent,
                            DynamicMaterialSliderComponent,
                            DynamicMaterialTextAreaComponent,
                            DynamicMaterialFormControlContainerComponent,
                            DynamicMaterialFormComponent
                        ],
                        entryComponents: [
                            DynamicMaterialCheckboxComponent,
                            DynamicMaterialChipsComponent,
                            DynamicMaterialDatePickerComponent,
                            DynamicMaterialFormArrayComponent,
                            DynamicMaterialFormGroupComponent,
                            DynamicMaterialInputComponent,
                            DynamicMaterialRadioGroupComponent,
                            DynamicMaterialSelectComponent,
                            DynamicMaterialSlideToggleComponent,
                            DynamicMaterialSliderComponent,
                            DynamicMaterialTextAreaComponent
                        ],
                        exports: [
                            core.DynamicFormsCoreModule,
                            DynamicMaterialFormControlContainerComponent,
                            DynamicMaterialFormComponent
                        ]
                    },] }
        ];
        return DynamicFormsMaterialUIModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.DynamicMaterialFormInputControlComponent = DynamicMaterialFormInputControlComponent;
    exports.DynamicMaterialCheckboxComponent = DynamicMaterialCheckboxComponent;
    exports.DynamicMaterialChipsComponent = DynamicMaterialChipsComponent;
    exports.DynamicMaterialDatePickerComponent = DynamicMaterialDatePickerComponent;
    exports.DynamicMaterialFormArrayComponent = DynamicMaterialFormArrayComponent;
    exports.DynamicMaterialFormGroupComponent = DynamicMaterialFormGroupComponent;
    exports.DynamicMaterialInputComponent = DynamicMaterialInputComponent;
    exports.DynamicMaterialRadioGroupComponent = DynamicMaterialRadioGroupComponent;
    exports.DynamicMaterialSelectComponent = DynamicMaterialSelectComponent;
    exports.DynamicMaterialSlideToggleComponent = DynamicMaterialSlideToggleComponent;
    exports.DynamicMaterialSliderComponent = DynamicMaterialSliderComponent;
    exports.DynamicMaterialTextAreaComponent = DynamicMaterialTextAreaComponent;
    exports.DynamicMaterialFormComponent = DynamicMaterialFormComponent;
    exports.materialUIFormControlMapFn = materialUIFormControlMapFn;
    exports.DynamicMaterialFormControlContainerComponent = DynamicMaterialFormControlContainerComponent;
    exports.DynamicFormsMaterialUIModule = DynamicFormsMaterialUIModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ui-material.umd.js.map
