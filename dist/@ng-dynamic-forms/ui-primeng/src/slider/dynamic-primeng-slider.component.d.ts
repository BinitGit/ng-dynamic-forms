import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Slider } from "primeng/primeng";
import { DynamicFormControlCustomEvent, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicSliderModel } from "@ng-dynamic-forms/core";
export declare class DynamicPrimeNGSliderComponent extends DynamicFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicSliderModel;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    customEvent: EventEmitter<DynamicFormControlCustomEvent>;
    focus: EventEmitter<any>;
    pSlider: Slider;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
}
