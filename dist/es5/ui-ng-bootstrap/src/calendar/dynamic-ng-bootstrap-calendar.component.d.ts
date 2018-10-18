import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { NgbDatepicker, NgbDatepickerConfig } from "@ng-bootstrap/ng-bootstrap";
import { DynamicDatePickerModel, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent } from "@ng-dynamic-forms/core";
export declare class DynamicNGBootstrapCalendarComponent extends DynamicFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    config: NgbDatepickerConfig;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicDatePickerModel;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    focus: EventEmitter<any>;
    ngbCalendar: NgbDatepicker;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService, config: NgbDatepickerConfig);
}
