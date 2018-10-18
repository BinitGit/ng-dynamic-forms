import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Toggle } from "@ionic/angular";
import { DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicSwitchModel } from "@ng-dynamic-forms/core";
export declare class DynamicIonicToggleComponent extends DynamicFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicSwitchModel;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    focus: EventEmitter<any>;
    ionToggle: Toggle;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
}
