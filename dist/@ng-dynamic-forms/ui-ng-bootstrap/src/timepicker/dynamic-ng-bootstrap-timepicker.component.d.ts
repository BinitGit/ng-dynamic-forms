import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { NgbTimepicker, NgbTimepickerConfig } from "@ng-bootstrap/ng-bootstrap";
import { DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicTimePickerModel } from "@ng-dynamic-forms/core";
export declare class DynamicNGBootstrapTimePickerComponent extends DynamicFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    config: NgbTimepickerConfig;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicTimePickerModel;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    focus: EventEmitter<any>;
    ngbTimePicker: NgbTimepicker;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService, config: NgbTimepickerConfig);
}
