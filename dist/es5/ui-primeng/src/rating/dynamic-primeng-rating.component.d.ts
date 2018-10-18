import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Rating } from "primeng/primeng";
import { DynamicFormControlCustomEvent, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicRatingModel } from "@ng-dynamic-forms/core";
export declare class DynamicPrimeNGRatingComponent extends DynamicFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicRatingModel;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    customEvent: EventEmitter<DynamicFormControlCustomEvent>;
    focus: EventEmitter<any>;
    pRating: Rating;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
}
