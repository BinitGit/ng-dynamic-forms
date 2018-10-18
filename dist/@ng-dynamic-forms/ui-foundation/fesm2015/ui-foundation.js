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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ComponentFactoryResolver, ContentChildren, ViewChild, ViewContainerRef, ViewChildren, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormControlComponent, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormArrayComponent, DYNAMIC_FORM_CONTROL_TYPE_ARRAY, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP, DYNAMIC_FORM_CONTROL_TYPE_GROUP, DYNAMIC_FORM_CONTROL_TYPE_INPUT, DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP, DYNAMIC_FORM_CONTROL_TYPE_SELECT, DYNAMIC_FORM_CONTROL_TYPE_SWITCH, DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA, DynamicFormControlContainerComponent, DynamicTemplateDirective, DynamicFormComponent, DynamicFormService, DynamicFormsCoreModule } from '@ng-dynamic-forms/core';
import { CommonModule } from '@angular/common';
import { TextMaskModule } from 'angular2-text-mask';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DynamicFoundationCheckboxComponent extends DynamicFormControlComponent {
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
DynamicFoundationCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-foundation-checkbox",
                template: "<label [formGroup]=\"group\">\r\n\r\n    <input type=\"checkbox\"\r\n           [checked]=\"model.checked\"\r\n           [dynamicId]=\"bindId && model.id\"\r\n           [formControlName]=\"model.id\"\r\n           [indeterminate]=\"model.indeterminate\"\r\n           [name]=\"model.name\"\r\n           [ngClass]=\"getClass('element', 'control')\"\r\n           [required]=\"model.required\"\r\n           [tabindex]=\"model.tabIndex\"\r\n           [value]=\"model.value\"\r\n           (blur)=\"onBlur($event)\"\r\n           (change)=\"onChange($event)\"\r\n           (focus)=\"onFocus($event)\"/><span [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"\r\n                                            [innerHTML]=\"model.label\"></span></label>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicFoundationCheckboxComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicFoundationCheckboxComponent.propDecorators = {
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
class DynamicFoundationFormArrayComponent extends DynamicFormArrayComponent {
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
DynamicFoundationFormArrayComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-foundation-form-array",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <div [dynamicId]=\"bindId && model.id\"\r\n         [formArrayName]=\"model.id\"\r\n         [ngClass]=\"getClass('element', 'control')\">\r\n\r\n        <div *ngFor=\"let groupModel of model.groups; let idx = index\" role=\"group\"\r\n             [formGroupName]=\"idx\" [ngClass]=\"[getClass('element', 'group'), getClass('grid', 'group')]\">\r\n\r\n            <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: groupModel\"></ng-container>\r\n\r\n            <dynamic-foundation-form-control *ngFor=\"let _model of groupModel.group\"\r\n                                             [bindId]=\"false\"\r\n                                             [context]=\"groupModel\"\r\n                                             [group]=\"control.at(idx)\"\r\n                                             [hidden]=\"_model.hidden\"\r\n                                             [layout]=\"layout\"\r\n                                             [model]=\"_model\"\r\n                                             [templates]=\"templates\"\r\n                                             [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model),\r\n                                                         getClass('element','children'), getClass('grid','children')]\"\r\n                                             (blur)=\"onBlur($event)\"\r\n                                             (change)=\"onChange($event)\"\r\n                                             (focus)=\"onFocus($event)\"\r\n                                             (bsEvent)=\"onCustomEvent($event, null, true)\"></dynamic-foundation-form-control>\r\n\r\n            <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: groupModel\"></ng-container>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</ng-container>"
            }] }
];
/** @nocollapse */
DynamicFoundationFormArrayComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicFoundationFormArrayComponent.propDecorators = {
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
class DynamicFoundationFormGroupComponent extends DynamicFormControlComponent {
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
DynamicFoundationFormGroupComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-foundation-form-group",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <fieldset [dynamicId]=\"bindId && model.id\"\r\n              [formGroupName]=\"model.id\"\r\n              [name]=\"model.name\"\r\n              [ngClass]=\"getClass('element', 'control')\">\r\n\r\n        <legend *ngIf=\"model.legend\" [innerHTML]=\"model.legend\"></legend>\r\n\r\n        <dynamic-foundation-form-control *ngFor=\"let _model of model.group\"\r\n                                         [group]=\"control\"\r\n                                         [hidden]=\"_model.hidden\"\r\n                                         [layout]=\"layout\"\r\n                                         [model]=\"_model\"\r\n                                         [templates]=\"templates\"\r\n                                         [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model),\r\n                                                     getClass('element','children'), getClass('grid','children')]\"\r\n                                         (blur)=\"onBlur($event)\"\r\n                                         (change)=\"onChange($event)\"\r\n                                         (focus)=\"onFocus($event)\"\r\n                                         (bsEvent)=\"onCustomEvent($event, null, true)\"></dynamic-foundation-form-control>\r\n    </fieldset>\r\n\r\n</ng-container>"
            }] }
];
/** @nocollapse */
DynamicFoundationFormGroupComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicFoundationFormGroupComponent.propDecorators = {
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
class DynamicFoundationInputComponent extends DynamicFormControlComponent {
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
DynamicFoundationInputComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-foundation-input",
                template: "<div [formGroup]=\"group\" class=\"input-group\">\r\n\r\n    <span *ngIf=\"model.prefix\" class=\"input-group-label\" [innerHTML]=\"model.prefix\"></span>\r\n\r\n    <input class=\"input-group-field\"\r\n           [attr.accept]=\"model.accept\"\r\n           [attr.max]=\"model.max\"\r\n           [attr.min]=\"model.min\"\r\n           [attr.multiple]=\"model.multiple\"\r\n           [attr.step]=\"model.step\"\r\n           [autocomplete]=\"model.autoComplete\"\r\n           [autofocus]=\"model.autoFocus\"\r\n           [class.is-invalid-input]=\"showErrorMessages\"\r\n           [dynamicId]=\"bindId && model.id\"\r\n           [dynamicList]=\"model.listId\"\r\n           [formControlName]=\"model.id\"\r\n           [maxlength]=\"model.maxLength\"\r\n           [minlength]=\"model.minLength\"\r\n           [name]=\"model.name\"\r\n           [ngClass]=\"getClass('element', 'control')\"\r\n           [pattern]=\"model.pattern\"\r\n           [placeholder]=\"model.placeholder\"\r\n           [readonly]=\"model.readOnly\"\r\n           [required]=\"model.required\"\r\n           [spellcheck]=\"model.spellCheck\"\r\n           [tabindex]=\"model.tabIndex\"\r\n           [textMask]=\"{mask: (model.mask || false), showMask: model.mask && !(model.placeholder)}\"\r\n           [type]=\"model.inputType\"\r\n           (blur)=\"onBlur($event)\"\r\n           (change)=\"onChange($event)\"\r\n           (focus)=\"onFocus($event)\"/>\r\n\r\n    <span *ngIf=\"model.suffix\" class=\"input-group-label\" [innerHTML]=\"model.suffix\"></span>\r\n\r\n    <datalist *ngIf=\"model.hasList\" [id]=\"model.listId\">\r\n\r\n        <option *ngFor=\"let option of model.list$ | async\" [value]=\"option\">\r\n\r\n    </datalist>\r\n\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicFoundationInputComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicFoundationInputComponent.propDecorators = {
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
class DynamicFoundationRadioGroupComponent extends DynamicFormControlComponent {
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
DynamicFoundationRadioGroupComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-foundation-radio-group",
                template: "<fieldset role=\"radiogroup\"\r\n          [dynamicId]=\"bindId && model.id\"\r\n          [formGroup]=\"group\"\r\n          [name]=\"model.name\"\r\n          [ngClass]=\"getClass('element', 'control')\"\r\n          [tabindex]=\"model.tabIndex\"\r\n          (change)=\"onChange($event)\">\r\n\r\n    <legend *ngIf=\"model.legend\" [innerHTML]=\"model.legend\"></legend>\r\n\r\n    <label *ngFor=\"let option of model.options$ | async\" [ngClass]=\"getClass('element', 'option')\">\r\n\r\n        <input type=\"radio\"\r\n               [formControlName]=\"model.id\"\r\n               [name]=\"model.name\"\r\n               [value]=\"option.value\"\r\n               (blur)=\"onBlur($event)\"\r\n               (focus)=\"onFocus($event)\"/><span [innerHTML]=\"option.label\"></span></label>\r\n\r\n</fieldset>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicFoundationRadioGroupComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicFoundationRadioGroupComponent.propDecorators = {
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
class DynamicFoundationSelectComponent extends DynamicFormControlComponent {
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
DynamicFoundationSelectComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-foundation-select",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <select [compareWith]=\"model.compareWithFn\"\r\n            [dynamicId]=\"bindId && model.id\"\r\n            [formControlName]=\"model.id\"\r\n            [name]=\"model.name\"\r\n            [ngClass]=\"getClass('element', 'control')\"\r\n            [required]=\"model.required\"\r\n            [tabindex]=\"model.tabIndex\"\r\n            (blur)=\"onBlur($event)\"\r\n            (change)=\"onChange($event)\"\r\n            (focus)=\"onFocus($event)\">\r\n\r\n        <option *ngFor=\"let option of model.options$ | async\"\r\n                [disabled]=\"option.disabled\"\r\n                [ngValue]=\"option.value\">{{ option.label }}\r\n        </option>\r\n\r\n    </select>\r\n\r\n</ng-container>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicFoundationSelectComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicFoundationSelectComponent.propDecorators = {
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
class DynamicFoundationSwitchComponent extends DynamicFormControlComponent {
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
DynamicFoundationSwitchComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-foundation-switch",
                template: "<div [formGroup]=\"group\" class=\"switch\" [ngClass]=\"getClass('element', 'control')\">\r\n\r\n    <input type=\"checkbox\" class=\"switch-input\"\r\n           [checked]=\"model.checked\"\r\n           [dynamicId]=\"bindId && model.id\"\r\n           [formControlName]=\"model.id\"\r\n           [name]=\"model.name\"\r\n           [required]=\"model.required\"\r\n           [tabindex]=\"model.tabIndex\"\r\n           [value]=\"model.value\"\r\n           (blur)=\"onBlur($event)\"\r\n           (change)=\"onChange($event)\"\r\n           (focus)=\"onFocus($event)\"/>\r\n\r\n    <label class=\"switch-paddle\" [for]=\"model.id\">\r\n\r\n        <span class=\"switch-active\" aria-hidden=\"true\">{{ model.onLabel }}</span>\r\n        <span class=\"switch-inactive\" aria-hidden=\"true\">{{ model.offLabel }}</span>\r\n\r\n    </label>\r\n\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicFoundationSwitchComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicFoundationSwitchComponent.propDecorators = {
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
class DynamicFoundationTextAreaComponent extends DynamicFormControlComponent {
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
DynamicFoundationTextAreaComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-foundation-textarea",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <textarea [class.is-invalid-input]=\"showErrorMessages\"\r\n              [cols]=\"model.cols\"\r\n              [dynamicId]=\"bindId && model.id\"\r\n              [formControlName]=\"model.id\"\r\n              [maxlength]=\"model.maxLength\"\r\n              [minlength]=\"model.minLength\"\r\n              [name]=\"model.name\"\r\n              [ngClass]=\"getClass('element', 'control')\"\r\n              [placeholder]=\"model.placeholder\"\r\n              [readonly]=\"model.readOnly\"\r\n              [required]=\"model.required\"\r\n              [rows]=\"model.rows\"\r\n              [spellcheck]=\"model.spellCheck\"\r\n              [tabindex]=\"model.tabIndex\"\r\n              [wrap]=\"model.wrap\"\r\n              (blur)=\"onBlur($event)\"\r\n              (change)=\"onChange($event)\"\r\n              (focus)=\"onFocus($event)\"></textarea>\r\n\r\n</ng-container>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicFoundationTextAreaComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicFoundationTextAreaComponent.propDecorators = {
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
class DynamicFoundationFormControlContainerComponent extends DynamicFormControlContainerComponent {
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
    }
    /**
     * @return {?}
     */
    get componentType() {
        return this.layoutService.getCustomComponentType(this.model) || foundationUIFormControlMapFn(this.model);
    }
}
DynamicFoundationFormControlContainerComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-foundation-form-control",
                template: "<div [formGroup]=\"group\" [ngClass]=\"[getClass('element', 'container'), getClass('grid', 'container')]\">\r\n\r\n    <div *ngIf=\"!isCheckbox && hasLabel\" [ngClass]=\"getClass('grid', 'label')\">\r\n\r\n        <label [class.is-invalid-label]=\"showErrorMessages\"\r\n               [for]=\"model.id\"\r\n               [innerHTML]=\"model.label\"\r\n               [ngClass]=\"getClass('element', 'label')\"></label>\r\n    </div>\r\n\r\n    <ng-container *ngTemplateOutlet=\"startTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <div [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n        <ng-container #componentViewContainer></ng-container>\r\n\r\n    </div>\r\n\r\n    <ul *ngIf=\"showErrorMessages\" [ngClass]=\"[getClass('element', 'errors'), getClass('grid', 'errors')]\">\r\n        <li *ngFor=\"let message of errorMessages\" class=\"form-error is-visible\">{{ message }}</li>\r\n    </ul>\r\n\r\n    <ng-container *ngTemplateOutlet=\"endTemplate?.templateRef; context: model\"></ng-container>\r\n\r\n    <ng-content></ng-content>\r\n\r\n</div>"
            }] }
];
/** @nocollapse */
DynamicFoundationFormControlContainerComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicFoundationFormControlContainerComponent.propDecorators = {
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
    componentViewContainerRef: [{ type: ViewChild, args: ["componentViewContainer", { read: ViewContainerRef },] }]
};
/**
 * @param {?} model
 * @return {?}
 */
function foundationUIFormControlMapFn(model) {
    switch (model.type) {
        case DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
            return DynamicFoundationFormArrayComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX:
            return DynamicFoundationCheckboxComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
            return DynamicFoundationFormGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_GROUP:
            return DynamicFoundationFormGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_INPUT:
            return DynamicFoundationInputComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP:
            return DynamicFoundationRadioGroupComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_SELECT:
            return DynamicFoundationSelectComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_SWITCH:
            return DynamicFoundationSwitchComponent;
        case DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA:
            return DynamicFoundationTextAreaComponent;
        default:
            return null;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DynamicFoundationFormComponent extends DynamicFormComponent {
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
    }
}
DynamicFoundationFormComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-foundation-form",
                template: "<dynamic-foundation-form-control *ngFor=\"let model of formModel; trackBy: trackByFn\"\r\n                                 [group]=\"formGroup\"\r\n                                 [hidden]=\"model.hidden\"\r\n                                 [layout]=\"formLayout\"\r\n                                 [model]=\"model\"\r\n                                 [ngClass]=\"[getClass(model,'element','host'), getClass(model,'grid','host')]\"\r\n                                 [templates]=\"templates\"\r\n                                 (blur)=\"onEvent($event, 'blur')\"\r\n                                 (change)=\"onEvent($event, 'change')\"\r\n                                 (focus)=\"onEvent($event, 'focus')\"></dynamic-foundation-form-control>"
            }] }
];
/** @nocollapse */
DynamicFoundationFormComponent.ctorParameters = () => [
    { type: DynamicFormService },
    { type: DynamicFormLayoutService }
];
DynamicFoundationFormComponent.propDecorators = {
    formGroup: [{ type: Input, args: ["group",] }],
    formModel: [{ type: Input, args: ["model",] }],
    formLayout: [{ type: Input, args: ["layout",] }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    templates: [{ type: ContentChildren, args: [DynamicTemplateDirective,] }],
    components: [{ type: ViewChildren, args: [DynamicFoundationFormControlContainerComponent,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DynamicFormsFoundationUIModule {
}
DynamicFormsFoundationUIModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    TextMaskModule,
                    DynamicFormsCoreModule
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
                    DynamicFormsCoreModule,
                    DynamicFoundationFormControlContainerComponent,
                    DynamicFoundationFormComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { DynamicFoundationCheckboxComponent, DynamicFoundationFormArrayComponent, DynamicFoundationFormGroupComponent, DynamicFoundationInputComponent, DynamicFoundationRadioGroupComponent, DynamicFoundationSelectComponent, DynamicFoundationSwitchComponent, DynamicFoundationTextAreaComponent, DynamicFoundationFormComponent, foundationUIFormControlMapFn, DynamicFoundationFormControlContainerComponent, DynamicFormsFoundationUIModule };
//# sourceMappingURL=ui-foundation.js.map
