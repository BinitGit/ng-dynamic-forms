import { FormArray, FormGroup } from "@angular/forms";
import { AbstractControlOptions } from "@angular/forms/src/model";
import { DynamicFormControlModel } from "../model/dynamic-form-control.model";
import { DynamicFormArrayModel } from "../model/form-array/dynamic-form-array.model";
import { DynamicFormGroupModel } from "../model/form-group/dynamic-form-group.model";
import { DynamicFormValidationService } from "./dynamic-form-validation.service";
import { DynamicPathable } from "../model/misc/dynamic-form-control-path.model";
export declare type DynamicFormModel = DynamicFormControlModel[] | DynamicFormGroupModel;
export declare class DynamicFormService {
    private validationService;
    constructor(validationService: DynamicFormValidationService);
    private createAbstractControlOptions;
    createFormArray(formArrayModel: DynamicFormArrayModel): FormArray;
    createFormGroup(formModel: DynamicFormControlModel[], options?: AbstractControlOptions | null, parent?: DynamicPathable | null): FormGroup;
    getPathSegment(model: DynamicPathable): string;
    getPath(model: DynamicPathable): string[];
    addFormGroupControl(formGroup: FormGroup, formModel: DynamicFormModel, ...models: DynamicFormControlModel[]): void;
    moveFormGroupControl(index: number, step: number, formModel: DynamicFormModel): void;
    insertFormGroupControl(index: number, formGroup: FormGroup, formModel: DynamicFormModel, ...models: DynamicFormControlModel[]): void;
    removeFormGroupControl(index: number, formGroup: FormGroup, formModel: DynamicFormModel): void;
    addFormArrayGroup(formArray: FormArray, formArrayModel: DynamicFormArrayModel): void;
    insertFormArrayGroup(index: number, formArray: FormArray, formArrayModel: DynamicFormArrayModel): void;
    moveFormArrayGroup(index: number, step: number, formArray: FormArray, formArrayModel: DynamicFormArrayModel): void;
    removeFormArrayGroup(index: number, formArray: FormArray, formArrayModel: DynamicFormArrayModel): void;
    clearFormArray(formArray: FormArray, formArrayModel: DynamicFormArrayModel): void;
    findById(id: string, formModel: DynamicFormControlModel[]): DynamicFormControlModel | null;
    fromJSON(json: string | object[]): DynamicFormControlModel[] | never;
}
