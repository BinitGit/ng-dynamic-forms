import { EventEmitter, QueryList } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { AutoCompleteComponent } from "@progress/kendo-angular-dropdowns";
import { DynamicFormControlCustomEvent, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicInputModel, DynamicTemplateDirective } from "@ng-dynamic-forms/core";
import { DynamicKendoTemplateableFormControlComponent } from "../dynamic-kendo-templateable-form-control.component";
export declare class DynamicKendoAutoCompleteComponent extends DynamicKendoTemplateableFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    readonly templateDirectives: Map<string, string>;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicInputModel;
    templates: QueryList<DynamicTemplateDirective> | DynamicTemplateDirective[] | undefined;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    customEvent: EventEmitter<DynamicFormControlCustomEvent>;
    focus: EventEmitter<any>;
    kendoAutoComplete: AutoCompleteComponent;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
    readonly viewChild: AutoCompleteComponent;
}
