import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ErrorStateMatcher, LabelOptions, MatSelect, RippleGlobalOptions } from "@angular/material";
import { DynamicFormControlComponent, DynamicFormControlCustomEvent, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicSelectModel } from "@ng-dynamic-forms/core";
export declare class DynamicMaterialSelectComponent extends DynamicFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    errorStateMatcher: ErrorStateMatcher;
    LABEL_OPTIONS: LabelOptions;
    RIPPLE_OPTIONS: RippleGlobalOptions;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicSelectModel<string>;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    customEvent: EventEmitter<DynamicFormControlCustomEvent>;
    focus: EventEmitter<any>;
    matSelect: MatSelect;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService, errorStateMatcher: ErrorStateMatcher, LABEL_OPTIONS: LabelOptions, RIPPLE_OPTIONS: RippleGlobalOptions);
}
