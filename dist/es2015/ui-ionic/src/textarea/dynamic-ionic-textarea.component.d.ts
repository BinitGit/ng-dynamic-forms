import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Textarea } from "@ionic/angular";
import { DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicTextAreaModel } from "@ng-dynamic-forms/core";
export declare class DynamicIonicTextAreaComponent extends DynamicFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicTextAreaModel;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    focus: EventEmitter<any>;
    ionTextArea: Textarea;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
}
