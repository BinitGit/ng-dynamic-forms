import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ColorPicker } from "primeng/primeng";
import { DynamicColorPickerModel, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent } from "@ng-dynamic-forms/core";
export declare class DynamicPrimeNGColorPickerComponent extends DynamicFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicColorPickerModel;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    focus: EventEmitter<any>;
    pColorPicker: ColorPicker;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
}
