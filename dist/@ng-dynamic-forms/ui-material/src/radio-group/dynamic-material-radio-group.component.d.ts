import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatRadioGroup } from "@angular/material";
import { DynamicFormControlComponent, DynamicFormControlCustomEvent, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicRadioGroupModel } from "@ng-dynamic-forms/core";
export declare class DynamicMaterialRadioGroupComponent extends DynamicFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicRadioGroupModel<string>;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    customEvent: EventEmitter<DynamicFormControlCustomEvent>;
    focus: EventEmitter<any>;
    matRadioGroup: MatRadioGroup;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
}
