import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatCheckbox, RippleGlobalOptions } from "@angular/material";
import { DynamicCheckboxModel, DynamicFormControlComponent, DynamicFormControlCustomEvent, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService } from "@ng-dynamic-forms/core";
export declare class DynamicMaterialCheckboxComponent extends DynamicFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    RIPPLE_OPTIONS: RippleGlobalOptions;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicCheckboxModel;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    customEvent: EventEmitter<DynamicFormControlCustomEvent>;
    focus: EventEmitter<any>;
    matCheckbox: MatCheckbox;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService, RIPPLE_OPTIONS: RippleGlobalOptions);
}
