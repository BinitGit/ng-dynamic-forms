import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatSlider } from "@angular/material";
import { DynamicFormControlComponent, DynamicFormControlCustomEvent, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicSliderModel } from "@ng-dynamic-forms/core";
export declare class DynamicMaterialSliderComponent extends DynamicFormControlComponent {
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
    matSlider: MatSlider;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
}
