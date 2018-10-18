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
import { DynamicFormControlComponent, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormArrayComponent, DYNAMIC_FORM_CONTROL_TYPE_ARRAY, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP, DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER, DYNAMIC_FORM_CONTROL_TYPE_GROUP, DYNAMIC_FORM_CONTROL_TYPE_INPUT, DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP, DYNAMIC_FORM_CONTROL_TYPE_SELECT, DYNAMIC_FORM_CONTROL_TYPE_SLIDER, DYNAMIC_FORM_CONTROL_TYPE_SWITCH, DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA, DynamicFormControlContainerComponent, DynamicTemplateDirective, DynamicFormComponent, DynamicFormService, DynamicFormsCoreModule } from '@ng-dynamic-forms/core';
import { Component, EventEmitter, Inject, Input, Optional, Output, ViewChild, ComponentFactoryResolver, ContentChildren, ViewContainerRef, ViewChildren, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_RIPPLE_GLOBAL_OPTIONS, MAT_CHIPS_DEFAULT_OPTIONS, MAT_LABEL_GLOBAL_OPTIONS, MatInput, ErrorStateMatcher, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, MatAutocompleteModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatIconModule, MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule, MatSlideToggleModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { TextMaskModule } from 'angular2-text-mask';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class DynamicMaterialFormInputControlComponent extends DynamicFormControlComponent {
    /**
     * @param {?} layoutService
     * @param {?} validationService
     */
    constructor(layoutService, validationService) {
        super(layoutService, validationService);
        this.layoutService = layoutService;
        this.validationService = validationService;
    }
    /**
     * @return {?}
     */
    get characterCount() {
        return this.matInput ? this.matInput.value.length : null;
    }
    /**
     * @return {?}
     */
    get characterHint() {
        return `${this.characterCount} / ${((/** @type {?} */ (this.model))).maxLength}`;
    }
    /**
     * @return {?}
     */
    get showCharacterHint() {
        return !!((/** @type {?} */ (this.model)).maxLength && this.characterCount);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DynamicMaterialCheckboxComponent extends DynamicFormControlComponent {
    /**
     * @param {?} layoutService
     * @param {?} validationService
     * @param {?} RIPPLE_OPTIONS
     */
    constructor(layoutService, validationService, RIPPLE_OPTIONS) {
        super(layoutService, validationService);
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.RIPPLE_OPTIONS = RIPPLE_OPTIONS;
        this.bindId = true;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.customEvent = new EventEmitter();
        this.focus = new EventEmitter();
    }
}
DynamicMaterialCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-material-checkbox",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <mat-checkbox #matCheckbox\r\n                  [checked]=\"model.checked\"\r\n                  [color]=\"model.getAdditional('color', 'accent')\"\r\n                  [disableRipple]=\"model.getAdditional('disableRipple', RIPPLE_OPTIONS && RIPPLE_OPTIONS['disabled'] || false)\"\r\n                  [formControlName]=\"model.id\"\r\n                  [id]=\"bindId ? model.id : null\"\r\n                  [indeterminate]=\"model.indeterminate\"\r\n                  [labelPosition]=\"model.labelPosition || 'after'\"\r\n                  [name]=\"model.name\"\r\n                  [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n                  (blur)=\"onBlur($event)\"\r\n                  (change)=\"onChange($event)\"\r\n                  (focus)=\"onFocus($event)\"\r\n                  (indeterminateChange)=\"onCustomEvent($event, 'indeterminateChange')\">\r\n\r\n        <span [ngClass]=\"getClass('element', 'label')\" [innerHTML]=\"model.label\"></span>\r\n\r\n    </mat-checkbox>\r\n\r\n</ng-container>"
            }] }
];
/** @nocollapse */
DynamicMaterialCheckboxComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_RIPPLE_GLOBAL_OPTIONS,] }, { type: Optional }] }
];
DynamicMaterialCheckboxComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    customEvent: [{ type: Output }],
    focus: [{ type: Output }],
    matCheckbox: [{ type: ViewChild, args: ["matCheckbox",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DynamicMaterialChipsComponent extends DynamicFormControlComponent {
    /**
     * @param {?} layoutService
     * @param {?} validationService
     * @param {?} CHIPS_OPTIONS
     * @param {?} LABEL_OPTIONS
     */
    constructor(layoutService, validationService, CHIPS_OPTIONS, LABEL_OPTIONS) {
        super(layoutService, validationService);
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.CHIPS_OPTIONS = CHIPS_OPTIONS;
        this.LABEL_OPTIONS = LABEL_OPTIONS;
        this.bindId = true;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.customEvent = new EventEmitter();
        this.focus = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get model() {
        return this._model;
    }
    /**
     * @param {?} model
     * @return {?}
     */
    set model(model) {
        this.unsubscribe();
        this._model = model;
        this._model.valueUpdates.subscribe((value) => this.chipList = value);
        this.chipList = Array.isArray(model.value) ? /** @type {?} */ (model.value) : [];
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe();
    }
    /**
     * @return {?}
     */
    unsubscribe() {
        if (this._valueSubscription) {
            this._valueSubscription.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    get chipList() {
        return this._chipList;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set chipList(value) {
        this._chipList = value;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onChipInputTokenEnd($event) {
        /** @type {?} */
        let inputElement = $event.input;
        /** @type {?} */
        let inputValue = $event.value.trim();
        if (Array.isArray(this.chipList) && inputValue.length > 0) {
            this.chipList.push(inputValue);
            this.control.patchValue(this.chipList);
        }
        if (inputElement instanceof HTMLInputElement) {
            inputElement.value = "";
        }
    }
    /**
     * @param {?} chip
     * @param {?} index
     * @return {?}
     */
    onChipRemoved(chip, index) {
        if (Array.isArray(this.chipList) && this.chipList[index] === chip) {
            this.chipList.splice(index, 1);
            this.control.patchValue(this.chipList);
        }
    }
}
DynamicMaterialChipsComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-material-chips",
                template: "<mat-form-field [appearance]=\"model.getAdditional('appearance', 'legacy')\"\r\n                [color]=\"model.getAdditional('color', 'primary')\"\r\n                [floatLabel]=\"model.getAdditional('floatLabel', LABEL_OPTIONS && LABEL_OPTIONS['float'] || 'auto')\"\r\n                [formGroup]=\"group\"\r\n                [hideRequiredMarker]=\"model.getAdditional('hideRequiredMarker', false)\"\r\n                [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <mat-chip-list #matChipList\r\n                   [formControlName]=\"model.id\"\r\n                   [id]=\"bindId ? model.id : null\"\r\n                   [multiple]=\"true\">\r\n\r\n        <mat-chip *ngFor=\"let chip of chipList; let index = index\"\r\n                  [selectable]=\"false\"\r\n                  (removed)=\"onChipRemoved(chip, index)\">\r\n\r\n            <span>{{ chip }}</span>\r\n\r\n            <mat-icon matChipRemove>cancel</mat-icon>\r\n\r\n        </mat-chip>\r\n\r\n        <input matInput\r\n               [placeholder]=\"model.placeholder\"\r\n               [matChipInputFor]=\"matChipList\"\r\n               [matChipInputAddOnBlur]=\"model.getAdditional('matChipInputAddOnBlur', true)\"\r\n               [matChipInputSeparatorKeyCodes]=\"model.getAdditional('matChipInputSeparatorKeyCodes', CHIPS_OPTIONS['separatorKeyCodes'])\"\r\n               (matChipInputTokenEnd)=\"onChipInputTokenEnd($event)\"/>\r\n\r\n    </mat-chip-list>\r\n\r\n</mat-form-field>"
            }] }
];
/** @nocollapse */
DynamicMaterialChipsComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_CHIPS_DEFAULT_OPTIONS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_LABEL_GLOBAL_OPTIONS,] }, { type: Optional }] }
];
DynamicMaterialChipsComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    customEvent: [{ type: Output }],
    focus: [{ type: Output }],
    matChipList: [{ type: ViewChild, args: ["matChipList",] }],
    matInput: [{ type: ViewChild, args: [MatInput,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DynamicMaterialDatePickerComponent extends DynamicFormControlComponent {
    /**
     * @param {?} layoutService
     * @param {?} validationService
     * @param {?} LABEL_OPTIONS
     */
    constructor(layoutService, validationService, LABEL_OPTIONS) {
        super(layoutService, validationService);
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.LABEL_OPTIONS = LABEL_OPTIONS;
        this.bindId = true;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.customEvent = new EventEmitter();
        this.focus = new EventEmitter();
    }
}
DynamicMaterialDatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-material-datepicker",
                template: "<mat-form-field [appearance]=\"model.getAdditional('appearance', 'legacy')\"\r\n                [color]=\"model.getAdditional('color', 'primary')\"\r\n                [floatLabel]=\"model.getAdditional('floatLabel', LABEL_OPTIONS && LABEL_OPTIONS['float'] || 'auto')\"\r\n                [formGroup]=\"group\"\r\n                [hideRequiredMarker]=\"model.getAdditional('hideRequiredMarker', false)\"\r\n                [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <ng-container *ngIf=\"model.label\" ngProjectAs=\"mat-label\">\r\n\r\n        <mat-label>{{ model.label }}</mat-label>\r\n\r\n    </ng-container>\r\n\r\n    <span *ngIf=\"model.prefix\" matPrefix [innerHTML]=\"model.prefix\"></span>\r\n\r\n    <input matInput\r\n           [autofocus]=\"model.autoFocus\"\r\n           [formControlName]=\"model.id\"\r\n           [id]=\"bindId ? model.id : null\"\r\n           [max]=\"model.max\"\r\n           [matDatepicker]=\"matDatepicker\"\r\n           [min]=\"model.min\"\r\n           [name]=\"model.name\"\r\n           [ngClass]=\"getClass('element', 'control')\"\r\n           [placeholder]=\"model.placeholder\"\r\n           [readonly]=\"model.readOnly\"\r\n           [required]=\"model.required\"\r\n           (blur)=\"onBlur($event)\"\r\n           (dateChange)=\"onChange($event)\"\r\n           (dateInput)=\"onCustomEvent($event, 'dateInput')\"\r\n           (focus)=\"onFocus($event)\"/>\r\n\r\n    <span *ngIf=\"model.suffix\" matSuffix [innerHTML]=\"model.suffix\"></span>\r\n\r\n    <mat-hint *ngIf=\"model.hint !== null\" align=\"start\" [innerHTML]=\"model.hint\"></mat-hint>\r\n\r\n\r\n    <mat-datepicker-toggle matSuffix [for]=\"matDatepicker\"></mat-datepicker-toggle>\r\n\r\n    <mat-datepicker #matDatepicker\r\n                    [opened]=\"model.getAdditional('opened', false)\"\r\n                    [startAt]=\"model.focusedDate\"\r\n                    [startView]=\"model.getAdditional('startView', 'month')\"\r\n                    [touchUi]=\"model.getAdditional('touchUi', false)\"\r\n                    (closed)=\"onCustomEvent($event, 'closed')\"\r\n                    (opened)=\"onCustomEvent($event, 'opened')\"></mat-datepicker>\r\n\r\n\r\n    <ng-container *ngFor=\"let message of errorMessages\" ngProjectAs=\"mat-error\">\r\n\r\n        <mat-error *ngIf=\"showErrorMessages\">{{ message }}</mat-error>\r\n\r\n    </ng-container>\r\n\r\n</mat-form-field>"
            }] }
];
/** @nocollapse */
DynamicMaterialDatePickerComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_LABEL_GLOBAL_OPTIONS,] }, { type: Optional }] }
];
DynamicMaterialDatePickerComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    customEvent: [{ type: Output }],
    focus: [{ type: Output }],
    matDatePicker: [{ type: ViewChild, args: ["matDatepicker",] }],
    matInput: [{ type: ViewChild, args: [MatInput,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DynamicMaterialFormArrayComponent extends DynamicFormArrayComponent {
    /**
     * @param {?} layoutService
     * @param {?} validationService
     */
    constructor(layoutService, validationService) {
        super(layoutService, validationService);
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.bindId = true;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.customEvent = new EventEmitter();
        this.focus = new EventEmitter();
    }
}
DynamicMaterialFormArrayComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-material-form-array",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <div [dynamicId]=\"bindId && model.id\"\r\n         [formArrayName]=\"model.id\"\r\n         [ngClass]=\"getClass('element', 'control')\">\r\n\r\n        <div *ngFor=\"let groupModel of model.groups; let idx = index\" role=\"group\"\r\n             [formGroupName]=\"idx\" [ngClass]=\"[getClass('element', 'group'), getClass('grid', 'group')]\">\r\n\r\n            <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: groupModel\"></ng-container>\r\n\r\n            <dynamic-material-form-control *ngFor=\"let _model of groupModel.group\"\r\n                                           [bindId]=\"false\"\r\n                                           [context]=\"groupModel\"\r\n                                           [group]=\"control.at(idx)\"\r\n                                           [hidden]=\"_model.hidden\"\r\n                                           [layout]=\"layout\"\r\n                                           [model]=\"_model\"\r\n                                           [templates]=\"templates\"\r\n                                           [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model),\r\n                                                       getClass('element','children'), getClass('grid','children')]\"\r\n                                           (blur)=\"onBlur($event)\"\r\n                                           (change)=\"onChange($event)\"\r\n                                           (focus)=\"onFocus($event)\"\r\n                                           (matEvent)=\"onCustomEvent($event, null, true)\"></dynamic-material-form-control>\r\n\r\n            <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: groupModel\"></ng-container>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</ng-container>"
            }] }
];
/** @nocollapse */
DynamicMaterialFormArrayComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicMaterialFormArrayComponent.propDecorators = {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DynamicMaterialFormGroupComponent extends DynamicFormControlComponent {
    /**
     * @param {?} layoutService
     * @param {?} validationService
     */
    constructor(layoutService, validationService) {
        super(layoutService, validationService);
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.bindId = true;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.customEvent = new EventEmitter();
        this.focus = new EventEmitter();
    }
}
DynamicMaterialFormGroupComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-material-form-group",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <div role=\"group\"\r\n         [dynamicId]=\"bindId && model.id\"\r\n         [formGroupName]=\"model.id\"\r\n         [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\">\r\n\r\n        <dynamic-material-form-control *ngFor=\"let _model of model.group\"\r\n                                       [group]=\"control\"\r\n                                       [hidden]=\"_model.hidden\"\r\n                                       [layout]=\"layout\"\r\n                                       [model]=\"_model\"\r\n                                       [templates]=\"templates\"\r\n                                       [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model),\r\n                                                   getClass('element','children'), getClass('grid','children')]\"\r\n                                       (blur)=\"onBlur($event)\"\r\n                                       (change)=\"onChange($event)\"\r\n                                       (focus)=\"onFocus($event)\"\r\n                                       (matEvent)=\"onCustomEvent($event, null, true)\"></dynamic-material-form-control>\r\n    </div>\r\n\r\n</ng-container>"
            }] }
];
/** @nocollapse */
DynamicMaterialFormGroupComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicMaterialFormGroupComponent.propDecorators = {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DynamicMaterialInputComponent extends DynamicMaterialFormInputControlComponent {
    /**
     * @param {?} layoutService
     * @param {?} validationService
     * @param {?} errorStateMatcher
     * @param {?} AUTOCOMPLETE_OPTIONS
     * @param {?} LABEL_OPTIONS
     * @param {?} RIPPLE_OPTIONS
     */
    constructor(layoutService, validationService, errorStateMatcher, AUTOCOMPLETE_OPTIONS, LABEL_OPTIONS, RIPPLE_OPTIONS) {
        super(layoutService, validationService);
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.errorStateMatcher = errorStateMatcher;
        this.AUTOCOMPLETE_OPTIONS = AUTOCOMPLETE_OPTIONS;
        this.LABEL_OPTIONS = LABEL_OPTIONS;
        this.RIPPLE_OPTIONS = RIPPLE_OPTIONS;
        this.bindId = true;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.customEvent = new EventEmitter();
        this.focus = new EventEmitter();
    }
}
DynamicMaterialInputComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-material-input",
                template: "<mat-form-field [appearance]=\"model.getAdditional('appearance', 'legacy')\"\r\n                [color]=\"model.getAdditional('color', 'primary')\"\r\n                [floatLabel]=\"model.getAdditional('floatLabel', LABEL_OPTIONS && LABEL_OPTIONS['float'] || 'auto')\"\r\n                [formGroup]=\"group\"\r\n                [hideRequiredMarker]=\"model.getAdditional('hideRequiredMarker', false)\"\r\n                [ngClass]=\"getClass('grid','control')\"\r\n                [textMask]=\"{mask: (model.mask || false), showMask: model.mask && !(model.placeholder)}\">\r\n\r\n    <ng-container *ngIf=\"model.label\" ngProjectAs=\"mat-label\">\r\n\r\n        <mat-label>{{ model.label }}</mat-label>\r\n\r\n    </ng-container>\r\n\r\n    <span *ngIf=\"model.prefix\" matPrefix [innerHTML]=\"model.prefix\"></span>\r\n\r\n    <input matInput\r\n           [attr.accept]=\"model.accept\"\r\n           [attr.max]=\"model.max\"\r\n           [attr.min]=\"model.min\"\r\n           [attr.multiple]=\"model.multiple\"\r\n           [attr.step]=\"model.step\"\r\n           [autocomplete]=\"model.autoComplete\"\r\n           [autofocus]=\"model.autoFocus\"\r\n           [errorStateMatcher]=\"model.getAdditional('errorStateMatcher', errorStateMatcher)\"\r\n           [formControlName]=\"model.id\"\r\n           [id]=\"bindId ? model.id : null\"\r\n           [maxlength]=\"model.maxLength\"\r\n           [matAutocomplete]=\"matAutocomplete\"\r\n           [minlength]=\"model.minLength\"\r\n           [name]=\"model.name\"\r\n           [ngClass]=\"getClass('element', 'control')\"\r\n           [pattern]=\"model.pattern\"\r\n           [placeholder]=\"model.placeholder\"\r\n           [readonly]=\"model.readOnly\"\r\n           [required]=\"model.required\"\r\n           [spellcheck]=\"model.spellCheck\"\r\n           [tabindex]=\"model.tabIndex\"\r\n           [type]=\"model.inputType\"\r\n           (blur)=\"onBlur($event)\"\r\n           (change)=\"onChange($event)\"\r\n           (focus)=\"onFocus($event)\"/>\r\n\r\n    <span *ngIf=\"model.suffix\" matSuffix [innerHTML]=\"model.suffix\"></span>\r\n\r\n    <mat-hint *ngIf=\"model.hint !== null\" align=\"start\" [innerHTML]=\"model.hint\"></mat-hint>\r\n\r\n    <mat-hint *ngIf=\"showCharacterHint\" align=\"end\">{{ characterHint }}</mat-hint>\r\n\r\n    <ng-container *ngFor=\"let message of errorMessages\" ngProjectAs=\"mat-error\">\r\n\r\n        <mat-error *ngIf=\"showErrorMessages\">{{ message }}</mat-error>\r\n\r\n    </ng-container>\r\n\r\n</mat-form-field>\r\n\r\n<mat-autocomplete #matAutocomplete=\"matAutocomplete\"\r\n                  [autoActiveFirstOption]=\"model.getAdditional('autoActiveFirstOption', AUTOCOMPLETE_OPTIONS['autoActiveFirstOption'])\"\r\n                  [disableRipple]=\"model.getAdditional('disableRipple', RIPPLE_OPTIONS && RIPPLE_OPTIONS['disabled'] || false)\"\r\n                  (optionSelected)=\"onChange($event)\">\r\n\r\n    <mat-option *ngFor=\"let option of model.list$ | async\" [value]=\"option\">{{ option }}</mat-option>\r\n\r\n</mat-autocomplete>"
            }] }
];
/** @nocollapse */
DynamicMaterialInputComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService },
    { type: ErrorStateMatcher, decorators: [{ type: Inject, args: [ErrorStateMatcher,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_LABEL_GLOBAL_OPTIONS,] }, { type: Optional }] },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_RIPPLE_GLOBAL_OPTIONS,] }, { type: Optional }] }
];
DynamicMaterialInputComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    customEvent: [{ type: Output }],
    focus: [{ type: Output }],
    matAutocomplete: [{ type: ViewChild, args: ["matAutocomplete",] }],
    matInput: [{ type: ViewChild, args: [MatInput,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DynamicMaterialRadioGroupComponent extends DynamicFormControlComponent {
    /**
     * @param {?} layoutService
     * @param {?} validationService
     */
    constructor(layoutService, validationService) {
        super(layoutService, validationService);
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.bindId = true;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.customEvent = new EventEmitter();
        this.focus = new EventEmitter();
    }
}
DynamicMaterialRadioGroupComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-material-radio-group",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <mat-radio-group #matRadioGroup\r\n                     [formControlName]=\"model.id\"\r\n                     [id]=\"bindId ? model.id : null\"\r\n                     [labelPosition]=\"model.getAdditional('labelPosition', 'after')\"\r\n                     [name]=\"model.name\"\r\n                     [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n                     (blur)=\"onBlur($event)\"\r\n                     (change)=\"onChange($event)\"\r\n                     (focus)=\"onFocus($event)\">\r\n\r\n        <mat-radio-button *ngFor=\"let option of model.options$ | async\"\r\n                          [name]=\"model.name\"\r\n                          [ngClass]=\"getClass('element', 'option')\"\r\n                          [value]=\"option.value\"><span [innerHTML]=\"option.label\"></span></mat-radio-button>\r\n\r\n    </mat-radio-group>\r\n\r\n</ng-container>"
            }] }
];
/** @nocollapse */
DynamicMaterialRadioGroupComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicMaterialRadioGroupComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    customEvent: [{ type: Output }],
    focus: [{ type: Output }],
    matRadioGroup: [{ type: ViewChild, args: ["matRadioGroup",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DynamicMaterialSelectComponent extends DynamicFormControlComponent {
    /**
     * @param {?} layoutService
     * @param {?} validationService
     * @param {?} errorStateMatcher
     * @param {?} LABEL_OPTIONS
     * @param {?} RIPPLE_OPTIONS
     */
    constructor(layoutService, validationService, errorStateMatcher, LABEL_OPTIONS, RIPPLE_OPTIONS) {
        super(layoutService, validationService);
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.errorStateMatcher = errorStateMatcher;
        this.LABEL_OPTIONS = LABEL_OPTIONS;
        this.RIPPLE_OPTIONS = RIPPLE_OPTIONS;
        this.bindId = true;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.customEvent = new EventEmitter();
        this.focus = new EventEmitter();
    }
}
DynamicMaterialSelectComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-material-select",
                template: "<mat-form-field [appearance]=\"model.getAdditional('appearance', 'legacy')\"\r\n                [color]=\"model.getAdditional('color', 'primary')\"\r\n                [ngClass]=\"getClass('grid', 'control')\"\r\n                [floatLabel]=\"model.getAdditional('floatLabel', LABEL_OPTIONS && LABEL_OPTIONS['float'] || 'auto')\"\r\n                [formGroup]=\"group\">\r\n\r\n    <ng-container *ngIf=\"model.label\" ngProjectAs=\"mat-label\">\r\n\r\n        <mat-label>{{ model.label }}</mat-label>\r\n\r\n    </ng-container>\r\n\r\n    <span *ngIf=\"model.prefix\" matPrefix [innerHTML]=\"model.prefix\"></span>\r\n\r\n    <mat-select #matSelect\r\n                [compareWith]=\"model.compareWithFn\"\r\n                [disableRipple]=\"model.getAdditional('disableRipple', RIPPLE_OPTIONS && RIPPLE_OPTIONS['disabled'] || false)\"\r\n                [errorStateMatcher]=\"model.getAdditional('errorStateMatcher', errorStateMatcher)\"\r\n                [formControlName]=\"model.id\"\r\n                [id]=\"bindId ? model.id : null\"\r\n                [multiple]=\"model.multiple\"\r\n                [ngClass]=\"getClass('element', 'control')\"\r\n                [placeholder]=\"model.placeholder\"\r\n                [required]=\"model.required\"\r\n                (openedChange)=\"onCustomEvent($event, 'openedChange')\"\r\n                (selectionChange)=\"onChange($event)\">\r\n\r\n        <mat-option *ngFor=\"let option of model.options$ | async\"\r\n                    [ngClass]=\"getClass('element', 'option')\"\r\n                    [value]=\"option.value\"><span [innerHTML]=\"option.label\"></span></mat-option>\r\n    </mat-select>\r\n\r\n    <span *ngIf=\"model.suffix\" matSuffix [innerHTML]=\"model.suffix\"></span>\r\n\r\n    <mat-hint *ngIf=\"model.hint !== null\" align=\"start\" [innerHTML]=\"model.hint\"></mat-hint>\r\n\r\n    <ng-container *ngFor=\"let message of errorMessages\" ngProjectAs=\"mat-error\">\r\n\r\n        <mat-error *ngIf=\"showErrorMessages\">{{ message }}</mat-error>\r\n\r\n    </ng-container>\r\n\r\n</mat-form-field>"
            }] }
];
/** @nocollapse */
DynamicMaterialSelectComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService },
    { type: ErrorStateMatcher, decorators: [{ type: Inject, args: [ErrorStateMatcher,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_LABEL_GLOBAL_OPTIONS,] }, { type: Optional }] },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_RIPPLE_GLOBAL_OPTIONS,] }, { type: Optional }] }
];
DynamicMaterialSelectComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    customEvent: [{ type: Output }],
    focus: [{ type: Output }],
    matSelect: [{ type: ViewChild, args: ["matSelect",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DynamicMaterialSlideToggleComponent extends DynamicFormControlComponent {
    /**
     * @param {?} layoutService
     * @param {?} validationService
     * @param {?} RIPPLE_OPTIONS
     */
    constructor(layoutService, validationService, RIPPLE_OPTIONS) {
        super(layoutService, validationService);
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.RIPPLE_OPTIONS = RIPPLE_OPTIONS;
        this.bindId = true;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.customEvent = new EventEmitter();
        this.focus = new EventEmitter();
    }
}
DynamicMaterialSlideToggleComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-material-slide-toggle",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <mat-slide-toggle #matSlideToggle\r\n                      [checked]=\"model.checked\"\r\n                      [color]=\"model.getAdditional('color', 'accent')\"\r\n                      [disableRipple]=\"model.getAdditional('disableRipple', RIPPLE_OPTIONS && RIPPLE_OPTIONS['disabled'] || false)\"\r\n                      [formControlName]=\"model.id\"\r\n                      [id]=\"bindId ? model.id : null\"\r\n                      [labelPosition]=\"model.labelPosition || 'after'\"\r\n                      [name]=\"model.name\"\r\n                      [ngClass]=\"[getClass('element','control'), getClass('grid','control')]\"\r\n                      (change)=\"onChange($event)\">\r\n\r\n        <span *ngIf=\"!model.checked\" [innerHTML]=\"model.offLabel\"></span>\r\n        <span *ngIf=\"model.checked\" [innerHTML]=\"model.onLabel\"></span>\r\n\r\n    </mat-slide-toggle>\r\n\r\n</ng-container>"
            }] }
];
/** @nocollapse */
DynamicMaterialSlideToggleComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_RIPPLE_GLOBAL_OPTIONS,] }, { type: Optional }] }
];
DynamicMaterialSlideToggleComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    customEvent: [{ type: Output }],
    focus: [{ type: Output }],
    matSlideToggle: [{ type: ViewChild, args: ["matSlideToggle",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DynamicMaterialSliderComponent extends DynamicFormControlComponent {
    /**
     * @param {?} layoutService
     * @param {?} validationService
     */
    constructor(layoutService, validationService) {
        super(layoutService, validationService);
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.bindId = true;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.customEvent = new EventEmitter();
        this.focus = new EventEmitter();
    }
}
DynamicMaterialSliderComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-material-slider",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <mat-slider #matSlider\r\n                [color]=\"model.getAdditional('color', 'accent')\"\r\n                [formControlName]=\"model.id\"\r\n                [id]=\"bindId ? model.id : null\"\r\n                [invert]=\"model.getAdditional('invert', false)\"\r\n                [min]=\"model.min\"\r\n                [max]=\"model.max\"\r\n                [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n                [step]=\"model.step\"\r\n                [tabIndex]=\"model.tabIndex\"\r\n                [thumbLabel]=\"model.getAdditional('thumbLabel', true)\"\r\n                [tickInterval]=\"model.getAdditional('tickInterval', 1)\"\r\n                [vertical]=\"model.vertical\"\r\n                (change)=\"onChange($event)\"\r\n                (input)=\"onCustomEvent($event, 'input')\"></mat-slider>\r\n\r\n</ng-container>"
            }] }
];
/** @nocollapse */
DynamicMaterialSliderComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicMaterialSliderComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    customEvent: [{ type: Output }],
    focus: [{ type: Output }],
    matSlider: [{ type: ViewChild, args: ["matSlider",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DynamicMaterialTextAreaComponent extends DynamicMaterialFormInputControlComponent {
    /**
     * @param {?} layoutService
     * @param {?} validationService
     * @param {?} LABEL_OPTIONS
     */
    constructor(layoutService, validationService, LABEL_OPTIONS) {
        super(layoutService, validationService);
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.LABEL_OPTIONS = LABEL_OPTIONS;
        this.bindId = true;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.customEvent = new EventEmitter();
        this.focus = new EventEmitter();
    }
}
DynamicMaterialTextAreaComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-material-textarea",
                template: "<mat-form-field [appearance]=\"model.getAdditional('appearance', 'legacy')\"\r\n                [color]=\"model.getAdditional('color', 'primary')\"\r\n                [floatLabel]=\"model.getAdditional('floatLabel', LABEL_OPTIONS && LABEL_OPTIONS['float'] || 'auto')\"\r\n                [formGroup]=\"group\"\r\n                [hideRequiredMarker]=\"model.getAdditional('hideRequiredMarker', false)\"\r\n                [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <ng-container *ngIf=\"model.label\" ngProjectAs=\"mat-label\">\r\n\r\n        <mat-label>{{ model.label }}</mat-label>\r\n\r\n    </ng-container>\r\n\r\n    <textarea matInput\r\n              [cdkTextareaAutosize]=\"model.getAdditional('cdkTextareaAutosize', true)\"\r\n              [cols]=\"model.cols\"\r\n              [formControlName]=\"model.id\"\r\n              [id]=\"bindId ? model.id : null\"\r\n              [maxlength]=\"model.maxLength\"\r\n              [minlength]=\"model.minLength\"\r\n              [name]=\"model.name\"\r\n              [ngClass]=\"getClass('element', 'control')\"\r\n              [placeholder]=\"model.placeholder\"\r\n              [readonly]=\"model.readOnly\"\r\n              [required]=\"model.required\"\r\n              [rows]=\"model.rows\"\r\n              [spellcheck]=\"model.spellCheck\"\r\n              [tabindex]=\"model.tabIndex\"\r\n              [wrap]=\"model.wrap\"\r\n              (blur)=\"onBlur($event)\"\r\n              (change)=\"onChange($event)\"\r\n              (focus)=\"onFocus($event)\"></textarea>\r\n\r\n    <mat-hint *ngIf=\"model.hint !== null\" align=\"start\" [innerHTML]=\"model.hint\"></mat-hint>\r\n\r\n    <mat-hint *ngIf=\"showCharacterHint\" align=\"end\">{{ characterHint }}</mat-hint>\r\n\r\n    <ng-container *ngFor=\"let message of errorMessages\" ngProjectAs=\"mat-error\">\r\n\r\n        <mat-error *ngIf=\"showErrorMessages\">{{ message }}</mat-error>\r\n\r\n    </ng-container>\r\n\r\n</mat-form-field>"
            }] }
];
/** @nocollapse */
DynamicMaterialTextAreaComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_LABEL_GLOBAL_OPTIONS,] }, { type: Optional }] }
];
DynamicMaterialTextAreaComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    customEvent: [{ type: Output }],
    focus: [{ type: Output }],
    matInput: [{ type: ViewChild, args: [MatInput,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DynamicMaterialFormControlContainerComponent extends DynamicFormControlContainerComponent {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} layoutService
     * @param {?} validationService
     */
    constructor(componentFactoryResolver, layoutService, validationService) {
        super(componentFactoryResolver, layoutService, validationService);
        this.componentFactoryResolver = componentFactoryResolver;
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.bindId = true;
        this.context = null;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.focus = new EventEmitter();
        this.customEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get componentType() {
        return this.layoutService.getCustomComponentType(this.model) || materialUIFormControlMapFn(this.model);
    }
    /**
     * @return {?}
     */
    get hasMatFormField() {
        /** @type {?} */
        let matFormFieldTypes = [DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER, DYNAMIC_FORM_CONTROL_TYPE_INPUT,
            DYNAMIC_FORM_CONTROL_TYPE_SELECT, DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA];
        return matFormFieldTypes.some(type => this.model.type === type);
    }
}
DynamicMaterialFormControlContainerComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-material-form-control",
                template: "<div [formGroup]=\"group\" [ngClass]=\"[getClass('element', 'container'), getClass('grid', 'container')]\">\r\n\r\n    <label *ngIf=\"!hasMatFormField && !isCheckbox && hasLabel\"\r\n           [for]=\"model.id\"\r\n           [innerHTML]=\"model.label\"\r\n           [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></label>\r\n\r\n    <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <ng-container #componentViewContainer></ng-container>\r\n\r\n    <ng-container *ngIf=\"!hasMatFormField && showErrorMessages\">\r\n\r\n        <mat-error *ngFor=\"let message of errorMessages\">{{ message }}</mat-error>\r\n\r\n    </ng-container>\r\n\r\n    <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <ng-content></ng-content>\r\n\r\n</div>"
            }] }
];
/** @nocollapse */
DynamicMaterialFormControlContainerComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicMaterialFormControlContainerComponent.propDecorators = {
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
    customEvent: [{ type: Output, args: ["matEvent",] }],
    componentViewContainerRef: [{ type: ViewChild, args: ["componentViewContainer", { read: ViewContainerRef },] }]
};
/**
 * @param {?} model
 * @return {?}
 */
function materialUIFormControlMapFn(model) {
    switch (model.type) {
        case DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
            return DynamicMaterialFormArrayComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX:
            return DynamicMaterialCheckboxComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
            return DynamicMaterialFormGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER:
            return DynamicMaterialDatePickerComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_GROUP:
            return DynamicMaterialFormGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_INPUT:
            /** @type {?} */
            let inputModel = /** @type {?} */ (model);
            return inputModel.multiple ? DynamicMaterialChipsComponent : DynamicMaterialInputComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP:
            return DynamicMaterialRadioGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_SELECT:
            return DynamicMaterialSelectComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_SLIDER:
            return DynamicMaterialSliderComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_SWITCH:
            return DynamicMaterialSlideToggleComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA:
            return DynamicMaterialTextAreaComponent;
        default:
            return null;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DynamicMaterialFormComponent extends DynamicFormComponent {
    /**
     * @param {?} formService
     * @param {?} layoutService
     */
    constructor(formService, layoutService) {
        super(formService, layoutService);
        this.formService = formService;
        this.layoutService = layoutService;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.focus = new EventEmitter();
        this.customEvent = new EventEmitter();
    }
}
DynamicMaterialFormComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-material-form",
                template: "<dynamic-material-form-control *ngFor=\"let model of formModel; trackBy: trackByFn\"\r\n                               [group]=\"formGroup\"\r\n                               [hidden]=\"model.hidden\"\r\n                               [layout]=\"formLayout\"\r\n                               [model]=\"model\"\r\n                               [ngClass]=\"[getClass(model, 'element', 'host'), getClass(model, 'grid', 'host')]\"\r\n                               [templates]=\"templates\"\r\n                               (blur)=\"onEvent($event, 'blur')\"\r\n                               (change)=\"onEvent($event, 'change')\"\r\n                               (focus)=\"onEvent($event, 'focus')\"\r\n                               (matEvent)=\"onEvent($event, 'custom')\"></dynamic-material-form-control>"
            }] }
];
/** @nocollapse */
DynamicMaterialFormComponent.ctorParameters = () => [
    { type: DynamicFormService },
    { type: DynamicFormLayoutService }
];
DynamicMaterialFormComponent.propDecorators = {
    formGroup: [{ type: Input, args: ["group",] }],
    formModel: [{ type: Input, args: ["model",] }],
    formLayout: [{ type: Input, args: ["layout",] }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    customEvent: [{ type: Output, args: ["matEvent",] }],
    templates: [{ type: ContentChildren, args: [DynamicTemplateDirective,] }],
    components: [{ type: ViewChildren, args: [DynamicMaterialFormControlContainerComponent,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DynamicFormsMaterialUIModule {
}
DynamicFormsMaterialUIModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    MatAutocompleteModule,
                    MatCheckboxModule,
                    MatChipsModule,
                    MatDatepickerModule,
                    MatIconModule,
                    MatInputModule,
                    MatRadioModule,
                    MatSelectModule,
                    MatSliderModule,
                    MatSlideToggleModule,
                    TextMaskModule,
                    DynamicFormsCoreModule
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
                    DynamicFormsCoreModule,
                    DynamicMaterialFormControlContainerComponent,
                    DynamicMaterialFormComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { DynamicMaterialFormInputControlComponent, DynamicMaterialCheckboxComponent, DynamicMaterialChipsComponent, DynamicMaterialDatePickerComponent, DynamicMaterialFormArrayComponent, DynamicMaterialFormGroupComponent, DynamicMaterialInputComponent, DynamicMaterialRadioGroupComponent, DynamicMaterialSelectComponent, DynamicMaterialSlideToggleComponent, DynamicMaterialSliderComponent, DynamicMaterialTextAreaComponent, DynamicMaterialFormComponent, materialUIFormControlMapFn, DynamicMaterialFormControlContainerComponent, DynamicFormsMaterialUIModule };
//# sourceMappingURL=ui-material.js.map
