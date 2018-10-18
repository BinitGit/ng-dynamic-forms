import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { BsDatepickerDirective } from "ngx-bootstrap/datepicker";
import { DynamicDatePickerModel, DynamicFormControlComponent, DynamicFormControlCustomEvent, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService } from "@ng-dynamic-forms/core";
export declare class DynamicBootstrapDatePickerComponent extends DynamicFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicDatePickerModel;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    customEvent: EventEmitter<DynamicFormControlCustomEvent>;
    focus: EventEmitter<any>;
    bsDatePicker: BsDatepickerDirective;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
}
