import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicCheckboxModel, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent } from "@ng-dynamic-forms/core";
export declare class DynamicKendoCheckboxComponent extends DynamicFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicCheckboxModel;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    focus: EventEmitter<any>;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
}
