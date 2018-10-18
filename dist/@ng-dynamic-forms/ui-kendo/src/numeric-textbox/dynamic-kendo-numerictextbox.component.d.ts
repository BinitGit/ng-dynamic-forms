import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { NumericTextBoxComponent } from "@progress/kendo-angular-inputs";
import { DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicInputModel } from "@ng-dynamic-forms/core";
export declare class DynamicKendoNumericTextBoxComponent extends DynamicFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicInputModel;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    focus: EventEmitter<any>;
    kendoNumericTextBox: NumericTextBoxComponent;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
}
