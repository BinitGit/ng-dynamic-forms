import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Checkbox } from "primeng/primeng";
import { DynamicCheckboxModel, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent } from "@ng-dynamic-forms/core";
export declare class DynamicPrimeNGCheckboxComponent extends DynamicFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicCheckboxModel;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    focus: EventEmitter<any>;
    pCheckbox: Checkbox;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
}
