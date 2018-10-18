import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Range } from "@ionic/angular";
import { DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicSliderModel } from "@ng-dynamic-forms/core";
export declare class DynamicIonicRangeComponent extends DynamicFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicSliderModel;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    focus: EventEmitter<any>;
    ionRange: Range;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
}
