import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { RadioGroup } from "@ionic/angular";
import { DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicRadioGroupModel } from "@ng-dynamic-forms/core";
export declare class DynamicIonicRadioGroupComponent extends DynamicFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicRadioGroupModel<string>;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    focus: EventEmitter<any>;
    ionRadioGroup: RadioGroup;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
}
