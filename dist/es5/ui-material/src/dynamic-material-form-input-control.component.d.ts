import { MatInput } from "@angular/material";
import { DynamicFormControlComponent, DynamicFormLayoutService, DynamicFormValidationService } from "@ng-dynamic-forms/core";
export declare abstract class DynamicMaterialFormInputControlComponent extends DynamicFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    matInput: MatInput | undefined;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
    readonly characterCount: number | null;
    readonly characterHint: string;
    readonly showCharacterHint: boolean;
}
