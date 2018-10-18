import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Datetime } from "@ionic/angular";
import { DynamicDatePickerModel, DynamicFormControlCustomEvent, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent } from "@ng-dynamic-forms/core";
export declare class DynamicIonicDateTimeComponent extends DynamicFormControlComponent {
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
    ionDatetime: Datetime;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
}
