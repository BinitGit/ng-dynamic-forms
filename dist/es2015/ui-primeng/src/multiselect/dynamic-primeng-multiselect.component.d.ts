import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MultiSelect } from "primeng/primeng";
import { DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicSelectModel } from "@ng-dynamic-forms/core";
export declare class DynamicPrimeNGMultiSelectComponent extends DynamicFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicSelectModel<string>;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    focus: EventEmitter<any>;
    pMultiSelect: MultiSelect;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
}
