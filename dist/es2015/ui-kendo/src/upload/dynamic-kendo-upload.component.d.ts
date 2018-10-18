import { EventEmitter, QueryList } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { UploadComponent } from "@progress/kendo-angular-upload";
import { DynamicFileUploadModel, DynamicFormControlCustomEvent, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicTemplateDirective } from "@ng-dynamic-forms/core";
import { DynamicKendoTemplateableFormControlComponent } from "../dynamic-kendo-templateable-form-control.component";
export declare class DynamicKendoUploadComponent extends DynamicKendoTemplateableFormControlComponent {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    readonly templateDirectives: Map<string, string>;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicFileUploadModel;
    templates: QueryList<DynamicTemplateDirective> | DynamicTemplateDirective[] | undefined;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    customEvent: EventEmitter<DynamicFormControlCustomEvent>;
    focus: EventEmitter<any>;
    kendoUpload: UploadComponent;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
    readonly viewChild: UploadComponent;
}
