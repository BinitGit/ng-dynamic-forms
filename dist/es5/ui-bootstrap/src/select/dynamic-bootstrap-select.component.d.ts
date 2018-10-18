import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormControlComponent, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicSelectModel } from "@ng-dynamic-forms/core";
export declare class DynamicBootstrapSelectComponent extends DynamicFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicSelectModel<string>;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    focus: EventEmitter<any>;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
}
