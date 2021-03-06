export declare const DYNAMIC_FORM_CONTROL_ACTION_DISABLE = "DISABLE";
export declare const DYNAMIC_FORM_CONTROL_ACTION_ENABLE = "ENABLE";
export declare const DYNAMIC_FORM_CONTROL_ACTION_VISIBLE = "VISIBLE";
export declare const DYNAMIC_FORM_CONTROL_ACTION_HIDDEN = "HIDDEN";
export declare const DYNAMIC_FORM_CONTROL_CONNECTIVE_AND = "AND";
export declare const DYNAMIC_FORM_CONTROL_CONNECTIVE_OR = "OR";
export interface DynamicFormControlRelation {
    id: string;
    status?: string;
    value?: any;
}
export interface DynamicFormControlRelationGroup {
    action: string;
    connective?: string;
    when: DynamicFormControlRelation[];
}
