import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Input as IonInput } from "@ionic/angular";
import { DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicInputModel } from "@ng-dynamic-forms/core";
export declare class DynamicIonicInputComponent extends DynamicFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicInputModel;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    focus: EventEmitter<any>;
    ionInput: IonInput;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
}
