import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ErrorStateMatcher, LabelOptions, MatAutocomplete, MatAutocompleteDefaultOptions, MatInput, RippleGlobalOptions } from "@angular/material";
import { DynamicFormControlCustomEvent, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicInputModel } from "@ng-dynamic-forms/core";
import { DynamicMaterialFormInputControlComponent } from "../dynamic-material-form-input-control.component";
export declare class DynamicMaterialInputComponent extends DynamicMaterialFormInputControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    errorStateMatcher: ErrorStateMatcher;
    AUTOCOMPLETE_OPTIONS: MatAutocompleteDefaultOptions;
    LABEL_OPTIONS: LabelOptions;
    RIPPLE_OPTIONS: RippleGlobalOptions;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicInputModel;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    customEvent: EventEmitter<DynamicFormControlCustomEvent>;
    focus: EventEmitter<any>;
    matAutocomplete: MatAutocomplete;
    matInput: MatInput;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService, errorStateMatcher: ErrorStateMatcher, AUTOCOMPLETE_OPTIONS: MatAutocompleteDefaultOptions, LABEL_OPTIONS: LabelOptions, RIPPLE_OPTIONS: RippleGlobalOptions);
}
