import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { LabelOptions, MatDatepicker, MatInput } from "@angular/material";
import { DynamicDatePickerModel, DynamicFormControlComponent, DynamicFormControlCustomEvent, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService } from "@ng-dynamic-forms/core";
export declare class DynamicMaterialDatePickerComponent extends DynamicFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    LABEL_OPTIONS: LabelOptions;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicDatePickerModel;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    customEvent: EventEmitter<DynamicFormControlCustomEvent>;
    focus: EventEmitter<any>;
    matDatePicker: MatDatepicker<any>;
    matInput: MatInput;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService, LABEL_OPTIONS: LabelOptions);
}
