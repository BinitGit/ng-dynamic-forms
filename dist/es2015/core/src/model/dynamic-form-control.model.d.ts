import { FormHooks } from "@angular/forms/src/model";
import { Subject } from "rxjs";
import { DynamicFormControlLayout } from "./misc/dynamic-form-control-layout.model";
import { DynamicPathable } from "./misc/dynamic-form-control-path.model";
import { DynamicFormControlRelationGroup } from "./misc/dynamic-form-control-relation.model";
import { DynamicValidatorsConfig } from "./misc/dynamic-form-control-validation.model";
export interface DynamicFormControlModelConfig {
    asyncValidators?: DynamicValidatorsConfig;
    disabled?: boolean;
    errorMessages?: DynamicValidatorsConfig;
    hidden?: boolean;
    id: string;
    label?: string;
    labelTooltip?: string;
    controlTooltip?: string;
    name?: string;
    relation?: DynamicFormControlRelationGroup[];
    updateOn?: FormHooks;
    validators?: DynamicValidatorsConfig;
}
export declare abstract class DynamicFormControlModel implements DynamicPathable {
    asyncValidators: DynamicValidatorsConfig | null;
    _disabled: boolean;
    disabledUpdates: Subject<boolean>;
    errorMessages: DynamicValidatorsConfig | null;
    hidden: boolean;
    id: string;
    label: string | null;
    labelTooltip: string | null;
    controlTooltip: string | null;
    layout: DynamicFormControlLayout | null;
    name: string;
    parent: DynamicPathable | null;
    relation: DynamicFormControlRelationGroup[];
    updateOn: FormHooks | null;
    validators: DynamicValidatorsConfig | null;
    abstract readonly type: string;
    protected constructor(config: DynamicFormControlModelConfig, layout?: DynamicFormControlLayout | null);
    disabled: boolean;
    readonly hasErrorMessages: boolean;
    toJSON(): Object;
}
