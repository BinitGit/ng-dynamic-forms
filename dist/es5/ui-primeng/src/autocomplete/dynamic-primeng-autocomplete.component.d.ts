import { EventEmitter, QueryList } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { AutoComplete } from "primeng/primeng";
import { DynamicFormControlCustomEvent, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicInputModel, DynamicTemplateDirective } from "@ng-dynamic-forms/core";
import { DynamicPrimeNGTemplateableFormControlComponent } from "../dynamic-primeng-templateable-form-control.component";
export declare class DynamicPrimeNGAutoCompleteComponent extends DynamicPrimeNGTemplateableFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    private _suggestions;
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
    pAutoComplete: AutoComplete;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
    readonly suggestions: string[];
    readonly viewChild: AutoComplete;
    onAutoComplete(_$event: any): void;
}
