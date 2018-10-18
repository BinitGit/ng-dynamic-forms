import { EventEmitter } from "@angular/core";
import { Checkbox } from "@ionic/angular";
import { FormGroup } from "@angular/forms";
import { DynamicCheckboxModel, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent } from "@ng-dynamic-forms/core";
export declare class DynamicIonicCheckboxComponent extends DynamicFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicCheckboxModel;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    focus: EventEmitter<any>;
    ionCheckbox: Checkbox;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
}
