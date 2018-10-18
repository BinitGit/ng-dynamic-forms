import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { InputTextarea } from "primeng/primeng";
import { DynamicFormControlCustomEvent, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicTextAreaModel } from "@ng-dynamic-forms/core";
export declare class DynamicPrimeNGTextAreaComponent extends DynamicFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicTextAreaModel;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    customEvent: EventEmitter<DynamicFormControlCustomEvent>;
    focus: EventEmitter<any>;
    pInputTextArea: InputTextarea;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
}
