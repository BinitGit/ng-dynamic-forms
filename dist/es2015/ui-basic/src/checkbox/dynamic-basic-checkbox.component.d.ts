import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicCheckboxModel, DynamicFormControlComponent, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService } from "@ng-dynamic-forms/core";
export declare class DynamicBasicCheckboxComponent extends DynamicFormControlComponent {
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
