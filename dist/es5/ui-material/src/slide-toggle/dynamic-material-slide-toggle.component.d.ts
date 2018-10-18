import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatSlideToggle, RippleGlobalOptions } from "@angular/material";
import { DynamicFormControlComponent, DynamicFormControlCustomEvent, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicSwitchModel } from "@ng-dynamic-forms/core";
export declare class DynamicMaterialSlideToggleComponent extends DynamicFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    RIPPLE_OPTIONS: RippleGlobalOptions;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicSwitchModel;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    customEvent: EventEmitter<DynamicFormControlCustomEvent>;
    focus: EventEmitter<any>;
    matSlideToggle: MatSlideToggle;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService, RIPPLE_OPTIONS: RippleGlobalOptions);
}
