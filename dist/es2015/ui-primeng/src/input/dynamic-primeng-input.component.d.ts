import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { InputText } from "primeng/primeng";
import { DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicInputModel } from "@ng-dynamic-forms/core";
export declare class DynamicPrimeNGInputComponent extends DynamicFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicInputModel;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    focus: EventEmitter<any>;
    pInputText: InputText;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
}
