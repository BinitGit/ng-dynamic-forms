import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { NgbRating, NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";
import { DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicRatingModel } from "@ng-dynamic-forms/core";
export declare class DynamicNGBootstrapRatingComponent extends DynamicFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    config: NgbRatingConfig;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicRatingModel;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    focus: EventEmitter<any>;
    ngbRating: NgbRating;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService, config: NgbRatingConfig);
}
