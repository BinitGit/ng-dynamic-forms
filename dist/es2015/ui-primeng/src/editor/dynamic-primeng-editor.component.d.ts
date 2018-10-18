import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Editor } from "primeng/primeng";
import { DynamicEditorModel, DynamicFormControlCustomEvent, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent } from "@ng-dynamic-forms/core";
export declare class DynamicPrimeNGEditorComponent extends DynamicFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicEditorModel;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    customEvent: EventEmitter<DynamicFormControlCustomEvent>;
    focus: EventEmitter<any>;
    pEditor: Editor;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
}
