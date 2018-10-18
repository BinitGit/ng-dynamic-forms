import { EventEmitter, QueryList } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormComponent, DynamicFormControlEvent, DynamicFormControlModel, DynamicFormLayout, DynamicFormLayoutService, DynamicFormService, DynamicTemplateDirective } from "@ng-dynamic-forms/core";
import { DynamicBootstrapFormControlContainerComponent } from "./dynamic-bootstrap-form-control-container.component";
export declare class DynamicBootstrapFormComponent extends DynamicFormComponent {
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
    components: QueryList<DynamicBootstrapFormControlContainerComponent>;
    constructor(formService: DynamicFormService, layoutService: DynamicFormLayoutService);
}
