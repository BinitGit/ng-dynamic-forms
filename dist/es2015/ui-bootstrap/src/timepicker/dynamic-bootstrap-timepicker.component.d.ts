import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { TimepickerComponent } from "ngx-bootstrap/timepicker";
import { DynamicFormControlComponent, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicTimePickerModel } from "@ng-dynamic-forms/core";
export declare class DynamicBootstrapTimePickerComponent extends DynamicFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicTimePickerModel;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    focus: EventEmitter<any>;
    bsTimePicker: TimepickerComponent;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
}
