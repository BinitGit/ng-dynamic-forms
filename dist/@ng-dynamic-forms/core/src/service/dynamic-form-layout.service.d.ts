import { InjectionToken, QueryList, Type } from "@angular/core";
import { DynamicFormControlLayout, DynamicFormControlLayoutContext, DynamicFormControlLayoutPlace } from "../model/misc/dynamic-form-control-layout.model";
import { DynamicFormControlModel } from "../model/dynamic-form-control.model";
import { DynamicFormControl } from "../component/dynamic-form-control.interface";
import { DynamicTemplateDirective, DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT } from "../directive/dynamic-template.directive";
export declare type DynamicFormLayout = {
    [id: string]: DynamicFormControlLayout;
};
export declare type DynamicFormControlMapFn = (model: DynamicFormControlModel) => Type<DynamicFormControl> | null;
export declare type DynamicFormControlTemplates = QueryList<DynamicTemplateDirective> | DynamicTemplateDirective[] | undefined;
export declare const DYNAMIC_FORM_CONTROL_MAP_FN: InjectionToken<DynamicFormControlMapFn>;
export declare class DynamicFormLayoutService {
    private readonly DYNAMIC_FORM_CONTROL_MAP_FN;
    constructor(DYNAMIC_FORM_CONTROL_MAP_FN: any);
    findById(id: string, formLayout: DynamicFormLayout | null): DynamicFormControlLayout | null;
    filterTemplatesByModel(model: DynamicFormControlModel, templates: DynamicFormControlTemplates): DynamicTemplateDirective[];
    getAlignedTemplate(model: DynamicFormControlModel, templates: DynamicFormControlTemplates, alignment: DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT): DynamicTemplateDirective | undefined;
    getStartTemplate(model: DynamicFormControlModel, templates: DynamicFormControlTemplates): DynamicTemplateDirective | undefined;
    getEndTemplate(model: DynamicFormControlModel, templates: DynamicFormControlTemplates): DynamicTemplateDirective | undefined;
    getClass(layout: DynamicFormControlLayout | null, context: DynamicFormControlLayoutContext, place: DynamicFormControlLayoutPlace): string;
    getCustomComponentType(model: DynamicFormControlModel): Type<DynamicFormControl> | null;
}
