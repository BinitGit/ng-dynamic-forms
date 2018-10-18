import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { TimePickerComponent } from "@progress/kendo-angular-dateinputs";
import { DynamicFormControlCustomEvent, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicTimePickerModel } from "@ng-dynamic-forms/core";
export declare class DynamicKendoTimePickerComponent extends DynamicFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicTimePickerModel;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    customEvent: EventEmitter<DynamicFormControlCustomEvent>;
    focus: EventEmitter<any>;
    kendoTimePicker: TimePickerComponent;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
}
