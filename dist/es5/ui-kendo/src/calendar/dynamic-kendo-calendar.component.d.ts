import { EventEmitter, QueryList } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { CalendarComponent } from "@progress/kendo-angular-dateinputs";
import { DynamicDatePickerModel, DynamicFormControlCustomEvent, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicTemplateDirective } from "@ng-dynamic-forms/core";
import { DynamicKendoTemplateableFormControlComponent } from "../dynamic-kendo-templateable-form-control.component";
export declare class DynamicKendoCalendarComponent extends DynamicKendoTemplateableFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    readonly templateDirectives: Map<string, string>;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicDatePickerModel;
    templates: QueryList<DynamicTemplateDirective> | DynamicTemplateDirective[] | undefined;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    customEvent: EventEmitter<DynamicFormControlCustomEvent>;
    focus: EventEmitter<any>;
    kendoCalendar: CalendarComponent;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
    readonly viewChild: CalendarComponent;
}
