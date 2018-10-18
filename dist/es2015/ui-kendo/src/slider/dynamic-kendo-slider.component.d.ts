import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { SliderComponent } from "@progress/kendo-angular-inputs";
import { DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicSliderModel } from "@ng-dynamic-forms/core";
export declare class DynamicKendoSliderComponent extends DynamicFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicSliderModel;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    focus: EventEmitter<any>;
    kendoSlider: SliderComponent;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
}
