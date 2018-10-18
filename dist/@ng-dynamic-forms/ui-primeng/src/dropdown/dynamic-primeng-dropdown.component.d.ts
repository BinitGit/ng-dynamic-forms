import { EventEmitter, QueryList } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Dropdown } from "primeng/primeng";
import { DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicSelectModel, DynamicTemplateDirective } from "@ng-dynamic-forms/core";
import { DynamicPrimeNGTemplateableFormControlComponent } from "../dynamic-primeng-templateable-form-control.component";
export declare class DynamicPrimeNGDropdownComponent extends DynamicPrimeNGTemplateableFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    readonly templateDirectives: Map<string, string>;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicSelectModel<string>;
    templates: QueryList<DynamicTemplateDirective> | DynamicTemplateDirective[] | undefined;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    focus: EventEmitter<any>;
    pDropdown: Dropdown;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
    readonly viewChild: Dropdown;
}
