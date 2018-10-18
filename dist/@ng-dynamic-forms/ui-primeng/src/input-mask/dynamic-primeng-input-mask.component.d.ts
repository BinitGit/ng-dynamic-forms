import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { InputMask } from "primeng/primeng";
import { DynamicFormControlCustomEvent, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicInputModel } from "@ng-dynamic-forms/core";
export declare class DynamicPrimeNGInputMaskComponent extends DynamicFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicInputModel;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    customEvent: EventEmitter<DynamicFormControlCustomEvent>;
    focus: EventEmitter<any>;
    pInputMask: InputMask;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
}
