import { EventEmitter, QueryList } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormComponent, DynamicFormControlEvent, DynamicFormControlModel, DynamicFormLayout, DynamicFormLayoutService, DynamicFormService, DynamicTemplateDirective } from "@ng-dynamic-forms/core";
import { DynamicMaterialFormControlContainerComponent } from "./dynamic-material-form-control-container.component";
export declare class DynamicMaterialFormComponent extends DynamicFormComponent {
    protected formService: DynamicFormService;
    protected layoutService: DynamicFormLayoutService;
    formGroup: FormGroup;
    formModel: DynamicFormControlModel[];
    formLayout: DynamicFormLayout;
    blur: EventEmitter<DynamicFormControlEvent>;
    change: EventEmitter<DynamicFormControlEvent>;
    focus: EventEmitter<DynamicFormControlEvent>;
    customEvent: EventEmitter<DynamicFormControlEvent>;
    templates: QueryList<DynamicTemplateDirective>;
    components: QueryList<DynamicMaterialFormControlContainerComponent>;
    constructor(formService: DynamicFormService, layoutService: DynamicFormLayoutService);
}
