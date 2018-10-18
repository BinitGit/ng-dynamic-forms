import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Calendar } from "primeng/primeng";
import { DynamicDatePickerModel, DynamicFormControlCustomEvent, DynamicDateControlValue, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicTimePickerModel } from "@ng-dynamic-forms/core";
export declare class DynamicPrimeNGCalendarComponent extends DynamicFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicDatePickerModel | DynamicTimePickerModel;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    customEvent: EventEmitter<DynamicFormControlCustomEvent>;
    focus: EventEmitter<any>;
    pCalendar: Calendar;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
    readonly focusedDate: DynamicDateControlValue | null;
    readonly inline: boolean;
    readonly showSeconds: boolean;
}
