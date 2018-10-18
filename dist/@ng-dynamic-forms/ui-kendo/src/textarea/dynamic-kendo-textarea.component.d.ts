import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicTextAreaModel } from "@ng-dynamic-forms/core";
export declare class DynamicKendoTextAreaComponent extends DynamicFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicTextAreaModel;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    focus: EventEmitter<any>;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
}
