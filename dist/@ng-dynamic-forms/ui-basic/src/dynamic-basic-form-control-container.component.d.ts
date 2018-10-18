import { ComponentFactoryResolver, EventEmitter, QueryList, Type, ViewContainerRef } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormArrayGroupModel, DynamicFormControlContainerComponent, DynamicFormControlEvent, DynamicFormControlModel, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicTemplateDirective, DynamicFormControl } from "@ng-dynamic-forms/core";
export declare class DynamicBasicFormControlContainerComponent extends DynamicFormControlContainerComponent {
    protected componentFactoryResolver: ComponentFactoryResolver;
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    contentTemplateList: QueryList<DynamicTemplateDirective>;
    inputTemplateList: QueryList<DynamicTemplateDirective>;
    bindId: boolean;
    context: DynamicFormArrayGroupModel | null;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicFormControlModel;
    blur: EventEmitter<DynamicFormControlEvent>;
    change: EventEmitter<DynamicFormControlEvent>;
    focus: EventEmitter<DynamicFormControlEvent>;
    componentViewContainerRef: ViewContainerRef;
    constructor(componentFactoryResolver: ComponentFactoryResolver, layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
    readonly componentType: Type<DynamicFormControl> | null;
}
export declare function basicUIFormControlMapFn(model: DynamicFormControlModel): Type<DynamicFormControl> | null;
