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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ComponentFactoryResolver, ContentChildren, ViewContainerRef, ViewChildren, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbDatepicker, NgbDatepickerConfig, NgbRating, NgbRatingConfig, NgbTimepicker, NgbTimepickerConfig, NgbDatepickerModule, NgbButtonsModule, NgbTimepickerModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicFormArrayComponent, DynamicFormControlContainerComponent, DynamicTemplateDirective, DYNAMIC_FORM_CONTROL_TYPE_ARRAY, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP, DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER, DYNAMIC_FORM_CONTROL_TYPE_GROUP, DYNAMIC_FORM_CONTROL_TYPE_INPUT, DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP, DYNAMIC_FORM_CONTROL_TYPE_RATING, DYNAMIC_FORM_CONTROL_TYPE_SELECT, DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA, DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER, DynamicFormComponent, DynamicFormService, DynamicFormsCoreModule } from '@ng-dynamic-forms/core';
import { CommonModule } from '@angular/common';
import { TextMaskModule } from 'angular2-text-mask';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DynamicNGBootstrapCalendarComponent extends DynamicFormControlComponent {
    /**
     * @param {?} layoutService
     * @param {?} validationService
     * @param {?} config
     */
    constructor(layoutService, validationService, config) {
        super(layoutService, validationService);
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.config = config;
        this.bindId = true;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.focus = new EventEmitter();
    }
}
DynamicNGBootstrapCalendarComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-ng-bootstrap-calendar",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <ngb-datepicker [displayMonths]=\"model.getAdditional('displayMonths', config['displayMonths'])\"\r\n                    [dynamicId]=\"bindId && model.id\"\r\n                    [firstDayOfWeek]=\"model.getAdditional('firstDayOfWeek', config['firstDayOfWeek'])\"\r\n                    [formControlName]=\"model.id\"\r\n                    [maxDate]=\"model.max\"\r\n                    [minDate]=\"model.min\"\r\n                    [navigation]=\"model.getAdditional('navigation', config['navigation'])\"\r\n                    [ngClass]=\"getClass('element', 'control')\"\r\n                    [outsideDays]=\"model.getAdditional('outsideDays', config['outsideDays'])\"\r\n                    [showWeekdays]=\"model.getAdditional('showWeekdays', config['showWeekdays'])\"\r\n                    [showWeekNumbers]=\"model.getAdditional('showWeekNumbers', config['showWeekNumbers'])\"\r\n                    [startDate]=\"model.focusedDate\"\r\n                    (select)=\"onChange($event)\"></ngb-datepicker>\r\n\r\n</ng-container>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicNGBootstrapCalendarComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService },
    { type: NgbDatepickerConfig }
];
DynamicNGBootstrapCalendarComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    ngbCalendar: [{ type: ViewChild, args: [NgbDatepicker,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DynamicNGBootstrapCheckboxComponent extends DynamicFormControlComponent {
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
        this.focus = new EventEmitter();
    }
}
DynamicNGBootstrapCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-ng-bootstrap-checkbox",
                template: "<div [formGroup]=\"group\" class=\"form-check\" [class.disabled]=\"model.disabled\">\r\n\r\n    <label class=\"form-check-label\">\r\n\r\n        <input type=\"checkbox\" class=\"form-check-input\"\r\n               [checked]=\"model.checked\"\r\n               [class.is-invalid]=\"showErrorMessages\"\r\n               [dynamicId]=\"bindId && model.id\"\r\n               [formControlName]=\"model.id\"\r\n               [indeterminate]=\"model.indeterminate\"\r\n               [name]=\"model.name\"\r\n               [ngClass]=\"getClass('element', 'control')\"\r\n               [required]=\"model.required\"\r\n               [tabindex]=\"model.tabIndex\"\r\n               [value]=\"model.value\"\r\n               (blur)=\"onBlur($event)\"\r\n               (change)=\"onChange($event)\"\r\n               (focus)=\"onFocus($event)\"/><span [innerHTML]=\"model.label\"\r\n                                                [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></span>\r\n    </label>\r\n\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicNGBootstrapCheckboxComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicNGBootstrapCheckboxComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DynamicNGBootstrapCheckboxGroupComponent extends DynamicFormControlComponent {
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
        this.focus = new EventEmitter();
    }
}
DynamicNGBootstrapCheckboxGroupComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-ng-bootstrap-checkbox-group",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\"\r\n         [dynamicId]=\"bindId && model.id\"\r\n         [formGroupName]=\"model.id\"\r\n         [ngClass]=\"getClass('element', 'control')\">\r\n\r\n        <label *ngFor=\"let checkboxModel of model.group\" ngbButtonLabel\r\n               [hidden]=\"checkboxModel.hidden\"\r\n               [ngClass]=\"getClass('element', 'control', checkboxModel)\">\r\n\r\n            <input type=\"checkbox\" ngbButton\r\n                   [checked]=\"checkboxModel.checked\"\r\n                   [dynamicId]=\"bindId && checkboxModel.id\"\r\n                   [formControlName]=\"checkboxModel.id\"\r\n                   [name]=\"checkboxModel.name\"\r\n                   [required]=\"checkboxModel.required\"\r\n                   [tabindex]=\"checkboxModel.tabIndex\"\r\n                   [value]=\"checkboxModel.value\"\r\n                   (blur)=\"onBlur($event)\"\r\n                   (change)=\"onEmbeddedCheckboxChange($event, checkboxModel)\"\r\n                   (focus)=\"onFocus($event)\"/><span [ngClass]=\"getClass('element', 'label', checkboxModel)\"\r\n                                                    [innerHTML]=\"checkboxModel.label\"></span></label>\r\n    </div>\r\n\r\n</ng-container>"
            }] }
];
/** @nocollapse */
DynamicNGBootstrapCheckboxGroupComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicNGBootstrapCheckboxGroupComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DynamicNGBootstrapDatePickerComponent extends DynamicFormControlComponent {
    /**
     * @param {?} layoutService
     * @param {?} validationService
     * @param {?} config
     */
    constructor(layoutService, validationService, config) {
        super(layoutService, validationService);
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.config = config;
        this.bindId = true;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.focus = new EventEmitter();
    }
}
DynamicNGBootstrapDatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-ng-bootstrap-datepicker",
                template: "<div [formGroup]=\"group\" class=\"input-group\">\r\n\r\n    <input ngbDatepicker class=\"form-control\" #datepicker=\"ngbDatepicker\"\r\n           [class.is-invalid]=\"showErrorMessages\"\r\n           [displayMonths]=\"model.getAdditional('displayMonths', config['displayMonths'])\"\r\n           [dynamicId]=\"bindId && model.id\"\r\n           [firstDayOfWeek]=\"model.getAdditional('firstDayOfWeek', config['firstDayOfWeek'])\"\r\n           [formControlName]=\"model.id\"\r\n           [maxDate]=\"model.max\"\r\n           [minDate]=\"model.min\"\r\n           [name]=\"model.name\"\r\n           [navigation]=\"model.getAdditional('navigation', config['navigation'])\"\r\n           [ngClass]=\"getClass('element', 'control')\"\r\n           [outsideDays]=\"model.getAdditional('outsideDays', config['outsideDays'])\"\r\n           [placeholder]=\"model.placeholder\"\r\n           [placement]=\"model.getAdditional('placement', 'bottom-left')\"\r\n           [showWeekdays]=\"model.getAdditional('showWeekdays', config['showWeekdays'])\"\r\n           [showWeekNumbers]=\"model.getAdditional('showWeekNumbers', config['showWeekNumbers'])\"\r\n           [startDate]=\"model.focusedDate\"\r\n           (blur)=\"onBlur($event)\"\r\n           (change)=\"onChange($event)\"\r\n           (focus)=\"onFocus($event)\">\r\n\r\n    <div class=\"input-group-append\">\r\n\r\n        <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"datepicker.toggle()\">\r\n\r\n            <img *ngIf=\"model.toggleIcon\" [src]=\"model.toggleIcon\" style=\"cursor: pointer;\"/>\r\n            <span *ngIf=\"model.toggleLabel\">{{ model.toggleLabel }}</span>\r\n\r\n        </button>\r\n\r\n    </div>\r\n\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicNGBootstrapDatePickerComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService },
    { type: NgbDatepickerConfig }
];
DynamicNGBootstrapDatePickerComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    ngbDatePicker: [{ type: ViewChild, args: [NgbDatepicker,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DynamicNGBootstrapFormArrayComponent extends DynamicFormArrayComponent {
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
DynamicNGBootstrapFormArrayComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-ng-bootstrap-form-array",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <div [dynamicId]=\"bindId && model.id\"\r\n         [formArrayName]=\"model.id\"\r\n         [ngClass]=\"getClass('element', 'control')\">\r\n\r\n        <div *ngFor=\"let groupModel of model.groups; let idx = index\" role=\"group\"\r\n             [formGroupName]=\"idx\" [ngClass]=\"[getClass('element', 'group'), getClass('grid', 'group')]\">\r\n\r\n            <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: groupModel\"></ng-container>\r\n\r\n            <dynamic-ng-bootstrap-form-control *ngFor=\"let _model of groupModel.group\"\r\n                                               [bindId]=\"false\"\r\n                                               [context]=\"groupModel\"\r\n                                               [group]=\"control.at(idx)\"\r\n                                               [hidden]=\"_model.hidden\"\r\n                                               [layout]=\"layout\"\r\n                                               [model]=\"_model\"\r\n                                               [templates]=\"templates\"\r\n                                               [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model),\r\n                                                           getClass('element','children'), getClass('grid','children')]\"\r\n                                               (blur)=\"onBlur($event)\"\r\n                                               (change)=\"onChange($event)\"\r\n                                               (focus)=\"onFocus($event)\"\r\n                                               (ngbEvent)=\"onCustomEvent($event, null, true)\"></dynamic-ng-bootstrap-form-control>\r\n\r\n            <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: groupModel\"></ng-container>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</ng-container>"
            }] }
];
/** @nocollapse */
DynamicNGBootstrapFormArrayComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicNGBootstrapFormArrayComponent.propDecorators = {
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
class DynamicNGBootstrapFormGroupComponent extends DynamicFormControlComponent {
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
DynamicNGBootstrapFormGroupComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-ng-bootstrap-form-group",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <div role=\"group\"\r\n         [dynamicId]=\"bindId && model.id\"\r\n         [formGroupName]=\"model.id\"\r\n         [ngClass]=\"getClass('element','control')\">\r\n\r\n        <dynamic-ng-bootstrap-form-control *ngFor=\"let _model of model.group\"\r\n                                           [asBootstrapFormGroup]=\"true\"\r\n                                           [group]=\"control\"\r\n                                           [hidden]=\"_model.hidden\"\r\n                                           [layout]=\"layout\"\r\n                                           [model]=\"_model\"\r\n                                           [templates]=\"templates\"\r\n                                           [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model),\r\n                                                       getClass('element','children'), getClass('grid','children')]\"\r\n                                           (blur)=\"onBlur($event)\"\r\n                                           (change)=\"onChange($event)\"\r\n                                           (focus)=\"onFocus($event)\"\r\n                                           (ngbEvent)=\"onCustomEvent($event, null, true)\"></dynamic-ng-bootstrap-form-control>\r\n    </div>\r\n\r\n</ng-container>"
            }] }
];
/** @nocollapse */
DynamicNGBootstrapFormGroupComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicNGBootstrapFormGroupComponent.propDecorators = {
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
class DynamicNGBootstrapInputComponent extends DynamicFormControlComponent {
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
        this.focus = new EventEmitter();
        this.click = new EventEmitter();
    }
}
DynamicNGBootstrapInputComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-ng-bootstrap-input",
                template: "<div [formGroup]=\"group\" [class.input-group]=\"model.prefix || model.suffix\">\r\n\r\n    <div *ngIf=\"model.prefix\" class=\"input-group-prepend\">\r\n        <span class=\"input-group-text\" [innerHTML]=\"model.prefix\"></span>\r\n    </div>\r\n\r\n    <input [attr.accept]=\"model.accept\"\r\n           [attr.max]=\"model.max\"\r\n           [attr.min]=\"model.min\"\r\n           [attr.multiple]=\"model.multiple\"\r\n           [attr.step]=\"model.step\"\r\n           [autocomplete]=\"model.autoComplete\"\r\n           [autofocus]=\"model.autoFocus\"\r\n           [class.form-control]=\"model.inputType !== 'file'\"\r\n           [class.form-control-file]=\"model.inputType === 'file'\"\r\n           [class.is-invalid]=\"showErrorMessages\"\r\n           [dynamicId]=\"bindId && model.id\"\r\n           [dynamicList]=\"model.listId\"\r\n           [formControlName]=\"model.id\"\r\n           [maxlength]=\"model.maxLength\"\r\n           [minlength]=\"model.minLength\"\r\n           [name]=\"model.name\"\r\n           [ngClass]=\"getClass('element', 'control')\"\r\n           [pattern]=\"model.pattern\"\r\n           [placeholder]=\"model.placeholder\"\r\n           [readonly]=\"model.readOnly\"\r\n           [required]=\"model.required\"\r\n           [spellcheck]=\"model.spellCheck\"\r\n           [tabindex]=\"model.tabIndex\"\r\n           [textMask]=\"{mask: (model.mask || false), showMask: model.mask && !(model.placeholder)}\"\r\n           [type]=\"model.inputType\"\r\n           (blur)=\"onBlur($event)\"\r\n           (change)=\"onChange($event)\"\r\n           (focus)=\"onFocus($event)\"\r\n           (click)=\"onClick($event)\"/>\r\n\r\n    <div *ngIf=\"model.suffix\" class=\"input-group-append\">\r\n        <span class=\"input-group-text\" [innerHTML]=\"model.suffix\"></span>\r\n    </div>\r\n\r\n    <datalist *ngIf=\"model.hasList\" [id]=\"model.listId\">\r\n\r\n        <option *ngFor=\"let option of model.list$ | async\" [value]=\"option\">\r\n\r\n    </datalist>\r\n\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicNGBootstrapInputComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicNGBootstrapInputComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    click: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DynamicNGBootstrapRadioGroupComponent extends DynamicFormControlComponent {
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
        this.focus = new EventEmitter();
    }
}
DynamicNGBootstrapRadioGroupComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-ng-bootstrap-radio-group",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <div ngbRadioGroup class=\"btn-group btn-group-toggle\" role=\"radiogroup\"\r\n         [dynamicId]=\"bindId && model.id\"\r\n         [formControlName]=\"model.id\"\r\n         [ngClass]=\"getClass('element', 'control')\"\r\n         [tabindex]=\"model.tabIndex\"\r\n         (change)=\"onChange($event)\">\r\n\r\n        <legend *ngIf=\"model.legend\" [innerHTML]=\"model.legend\"></legend>\r\n\r\n        <label *ngFor=\"let option of model.options$ | async\" ngbButtonLabel\r\n               [ngClass]=\"[getClass('element', 'option'), getClass('grid', 'option')]\">\r\n\r\n            <input type=\"radio\" ngbButton\r\n                   [disabled]=\"option.disabled\"\r\n                   [name]=\"model.name\"\r\n                   [value]=\"option.value\"\r\n                   (blur)=\"onBlur($event)\"\r\n                   (focus)=\"onFocus($event)\"/><span [innerHTML]=\"option.label\"></span>\r\n        </label>\r\n\r\n    </div>\r\n\r\n</ng-container>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicNGBootstrapRadioGroupComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicNGBootstrapRadioGroupComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DynamicNGBootstrapRatingComponent extends DynamicFormControlComponent {
    /**
     * @param {?} layoutService
     * @param {?} validationService
     * @param {?} config
     */
    constructor(layoutService, validationService, config) {
        super(layoutService, validationService);
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.config = config;
        this.bindId = true;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.focus = new EventEmitter();
    }
}
DynamicNGBootstrapRatingComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-ng-bootstrap-rating",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <ngb-rating [dynamicId]=\"bindId && model.id\"\r\n                [formControlName]=\"model.id\"\r\n                [max]=\"model.max\"\r\n                [ngClass]=\"getClass('element', 'control')\"\r\n                [resettable]=\"model.getAdditional('resettable', config['resettable'])\"\r\n                (rateChange)=\"onChange($event)\"></ngb-rating>\r\n\r\n</ng-container>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicNGBootstrapRatingComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService },
    { type: NgbRatingConfig }
];
DynamicNGBootstrapRatingComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    ngbRating: [{ type: ViewChild, args: [NgbRating,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DynamicNGBootstrapSelectComponent extends DynamicFormControlComponent {
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
        this.focus = new EventEmitter();
    }
}
DynamicNGBootstrapSelectComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-ng-bootstrap-select",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <select class=\"form-control\"\r\n            [class.is-invalid]=\"showErrorMessages\"\r\n            [compareWith]=\"model.compareWithFn\"\r\n            [dynamicId]=\"bindId && model.id\"\r\n            [formControlName]=\"model.id\"\r\n            [name]=\"model.name\"\r\n            [ngClass]=\"getClass('element', 'control')\"\r\n            [required]=\"model.required\"\r\n            [tabindex]=\"model.tabIndex\"\r\n            (blur)=\"onBlur($event)\"\r\n            (change)=\"onChange($event)\"\r\n            (focus)=\"onFocus($event)\">\r\n\r\n        <option *ngFor=\"let option of model.options$ | async\"\r\n                [disabled]=\"option.disabled\"\r\n                [ngValue]=\"option.value\">{{ option.label }}</option>\r\n\r\n    </select>\r\n\r\n</ng-container>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicNGBootstrapSelectComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicNGBootstrapSelectComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DynamicNGBootstrapTextAreaComponent extends DynamicFormControlComponent {
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
        this.focus = new EventEmitter();
    }
}
DynamicNGBootstrapTextAreaComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-ng-bootstrap-textarea",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <textarea class=\"form-control\"\r\n              [class.is-invalid]=\"showErrorMessages\"\r\n              [dynamicId]=\"bindId && model.id\"\r\n              [cols]=\"model.cols\"\r\n              [formControlName]=\"model.id\"\r\n              [maxlength]=\"model.maxLength\"\r\n              [minlength]=\"model.minLength\"\r\n              [name]=\"model.name\"\r\n              [ngClass]=\"getClass('element', 'control')\"\r\n              [placeholder]=\"model.placeholder\"\r\n              [readonly]=\"model.readOnly\"\r\n              [required]=\"model.required\"\r\n              [rows]=\"model.rows\"\r\n              [spellcheck]=\"model.spellCheck\"\r\n              [tabindex]=\"model.tabIndex\"\r\n              [wrap]=\"model.wrap\"\r\n              (blur)=\"onBlur($event)\"\r\n              (change)=\"onChange($event)\"\r\n              (focus)=\"onFocus($event)\"></textarea>\r\n\r\n</ng-container>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicNGBootstrapTextAreaComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicNGBootstrapTextAreaComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DynamicNGBootstrapTimePickerComponent extends DynamicFormControlComponent {
    /**
     * @param {?} layoutService
     * @param {?} validationService
     * @param {?} config
     */
    constructor(layoutService, validationService, config) {
        super(layoutService, validationService);
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.config = config;
        this.bindId = true;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.focus = new EventEmitter();
    }
}
DynamicNGBootstrapTimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-ng-bootstrap-timepicker",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <ngb-timepicker [dynamicId]=\"bindId && model.id\"\r\n                    [formControlName]=\"model.id\"\r\n                    [hourStep]=\"model.getAdditional('hourStep', config['hourStep'])\"\r\n                    [meridian]=\"model.meridian\"\r\n                    [minuteStep]=\"model.getAdditional('minuteStep', config['minuteStep'])\"\r\n                    [ngClass]=\"getClass('element', 'control')\"\r\n                    [seconds]=\"model.showSeconds\"\r\n                    [secondStep]=\"model.getAdditional('secondStep', config['secondStep'])\"\r\n                    [size]=\"model.getAdditional('size', config['size'])\"\r\n                    [spinners]=\"model.getAdditional('spinners', config['spinners'])\"></ngb-timepicker>\r\n\r\n</ng-container>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicNGBootstrapTimePickerComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService },
    { type: NgbTimepickerConfig }
];
DynamicNGBootstrapTimePickerComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    ngbTimePicker: [{ type: ViewChild, args: [NgbTimepicker,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DynamicNGBootstrapFormControlContainerComponent extends DynamicFormControlContainerComponent {
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
        this.asBootstrapFormGroup = true;
        this.bindId = true;
        this.context = null;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.focus = new EventEmitter();
        this.click = new EventEmitter();
        this.customEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get componentType() {
        return this.layoutService.getCustomComponentType(this.model) || ngBootstrapUIFormControlMapFn(this.model);
    }
}
DynamicNGBootstrapFormControlContainerComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-ng-bootstrap-form-control",
                template: "<div [class.form-group]=\"(model.type !== 'GROUP' && asBootstrapFormGroup) || getClass('element', 'container').includes('form-group')\"\r\n     [formGroup]=\"group\"\r\n     [ngClass]=\"[getClass('element', 'container'), getClass('grid', 'container')]\">\r\n\r\n    <label *ngIf=\"!isCheckbox && hasLabel\"\r\n           [for]=\"model.id\"\r\n           [innerHTML]=\"model.label\"\r\n           [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></label>\r\n\r\n    <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <div [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n        <ng-container #componentViewContainer></ng-container>\r\n\r\n        <small *ngIf=\"hasHint\" class=\"text-muted\" [innerHTML]=\"model.hint\" [ngClass]=\"getClass('element', 'hint')\"></small>\r\n\r\n        <div *ngIf=\"showErrorMessages\" [ngClass]=\"[getClass('element', 'errors'), getClass('grid', 'errors')]\">\r\n            <small *ngFor=\"let message of errorMessages\" class=\"invalid-feedback d-block\">{{ message }}</small>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <ng-content></ng-content>\r\n\r\n</div>\r\n"
            }] }
];
/** @nocollapse */
DynamicNGBootstrapFormControlContainerComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicNGBootstrapFormControlContainerComponent.propDecorators = {
    contentTemplateList: [{ type: ContentChildren, args: [DynamicTemplateDirective,] }],
    inputTemplateList: [{ type: Input, args: ["templates",] }],
    asBootstrapFormGroup: [{ type: Input }],
    bindId: [{ type: Input }],
    context: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    click: [{ type: Output }],
    customEvent: [{ type: Output, args: ["ngbEvent",] }],
    componentViewContainerRef: [{ type: ViewChild, args: ["componentViewContainer", { read: ViewContainerRef },] }]
};
/**
 * @param {?} model
 * @return {?}
 */
function ngBootstrapUIFormControlMapFn(model) {
    switch (model.type) {
        case DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
            return DynamicNGBootstrapFormArrayComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX:
            return DynamicNGBootstrapCheckboxComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
            return DynamicNGBootstrapCheckboxGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER:
            /** @type {?} */
            let datePickerModel = /** @type {?} */ (model);
            return datePickerModel.inline ? DynamicNGBootstrapCalendarComponent : DynamicNGBootstrapDatePickerComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_GROUP:
            return DynamicNGBootstrapFormGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_INPUT:
            return DynamicNGBootstrapInputComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP:
            return DynamicNGBootstrapRadioGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_RATING:
            return DynamicNGBootstrapRatingComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_SELECT:
            return DynamicNGBootstrapSelectComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA:
            return DynamicNGBootstrapTextAreaComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER:
            return DynamicNGBootstrapTimePickerComponent;
        default:
            return null;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DynamicNGBootstrapFormComponent extends DynamicFormComponent {
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
DynamicNGBootstrapFormComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-ng-bootstrap-form",
                template: "<dynamic-ng-bootstrap-form-control *ngFor=\"let model of formModel; trackBy: trackByFn\"\r\n                                   [group]=\"formGroup\"\r\n                                   [hidden]=\"model.hidden\"\r\n                                   [layout]=\"formLayout\"\r\n                                   [model]=\"model\"\r\n                                   [ngClass]=\"[getClass(model, 'element', 'host'), getClass(model, 'grid', 'host')]\"\r\n                                   [templates]=\"templates\"\r\n                                   (blur)=\"onEvent($event, 'blur')\"\r\n                                   (change)=\"onEvent($event, 'change')\"\r\n                                   (focus)=\"onEvent($event, 'focus')\"\r\n                                   (click)=\"onEvent($event, 'focus')\"\r\n                                   (ngbEvent)=\"onEvent($event, 'custom')\"></dynamic-ng-bootstrap-form-control>"
            }] }
];
/** @nocollapse */
DynamicNGBootstrapFormComponent.ctorParameters = () => [
    { type: DynamicFormService },
    { type: DynamicFormLayoutService }
];
DynamicNGBootstrapFormComponent.propDecorators = {
    formGroup: [{ type: Input, args: ["group",] }],
    formModel: [{ type: Input, args: ["model",] }],
    formLayout: [{ type: Input, args: ["layout",] }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    customEvent: [{ type: Output, args: ["ngbEvent",] }],
    templates: [{ type: ContentChildren, args: [DynamicTemplateDirective,] }],
    components: [{ type: ViewChildren, args: [DynamicNGBootstrapFormControlContainerComponent,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DynamicFormsNGBootstrapUIModule {
}
DynamicFormsNGBootstrapUIModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    NgbButtonsModule,
                    NgbDatepickerModule,
                    NgbRatingModule,
                    NgbTimepickerModule,
                    TextMaskModule,
                    DynamicFormsCoreModule
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
                    DynamicFormsCoreModule,
                    DynamicNGBootstrapFormControlContainerComponent,
                    DynamicNGBootstrapFormComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { DynamicNGBootstrapCalendarComponent, DynamicNGBootstrapCheckboxComponent, DynamicNGBootstrapCheckboxGroupComponent, DynamicNGBootstrapDatePickerComponent, DynamicNGBootstrapFormArrayComponent, DynamicNGBootstrapFormGroupComponent, DynamicNGBootstrapInputComponent, DynamicNGBootstrapRadioGroupComponent, DynamicNGBootstrapRatingComponent, DynamicNGBootstrapSelectComponent, DynamicNGBootstrapTextAreaComponent, DynamicNGBootstrapTimePickerComponent, DynamicNGBootstrapFormComponent, ngBootstrapUIFormControlMapFn, DynamicNGBootstrapFormControlContainerComponent, DynamicFormsNGBootstrapUIModule };
//# sourceMappingURL=ui-ng-bootstrap.js.map
