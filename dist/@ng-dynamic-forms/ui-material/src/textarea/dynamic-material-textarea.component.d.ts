import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { LabelOptions, MatInput } from "@angular/material";
import { DynamicFormControlCustomEvent, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicTextAreaModel } from "@ng-dynamic-forms/core";
import { DynamicMaterialFormInputControlComponent } from "../dynamic-material-form-input-control.component";
export declare class DynamicMaterialTextAreaComponent extends DynamicMaterialFormInputControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    LABEL_OPTIONS: LabelOptions;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicTextAreaModel;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    customEvent: EventEmitter<DynamicFormControlCustomEvent>;
    focus: EventEmitter<any>;
    matInput: MatInput;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService, LABEL_OPTIONS: LabelOptions);
}
