import { ComponentFactoryResolver, EventEmitter, QueryList, Type, ViewContainerRef } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormArrayGroupModel, DynamicFormControl, DynamicFormControlContainerComponent, DynamicFormControlEvent, DynamicFormControlModel, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicTemplateDirective } from "@ng-dynamic-forms/core";
export declare class DynamicBootstrapFormControlContainerComponent extends DynamicFormControlContainerComponent {
    protected componentFactoryResolver: ComponentFactoryResolver;
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    contentTemplateList: QueryList<DynamicTemplateDirective> | undefined;
    inputTemplateList: QueryList<DynamicTemplateDirective> | undefined;
    asBootstrapFormGroup: boolean;
    bindId: boolean;
    context: DynamicFormArrayGroupModel | null;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicFormControlModel;
    blur: EventEmitter<DynamicFormControlEvent>;
    change: EventEmitter<DynamicFormControlEvent>;
    focus: EventEmitter<DynamicFormControlEvent>;
    customEvent: EventEmitter<DynamicFormControlEvent>;
    componentViewContainerRef: ViewContainerRef;
    readonly componentType: Type<DynamicFormControl> | null;
    constructor(componentFactoryResolver: ComponentFactoryResolver, layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
}
export declare function bootstrapUIFormControlMapFn(model: DynamicFormControlModel): Type<DynamicFormControl> | null;
