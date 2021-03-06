import { InjectionToken } from "@angular/core";
import { AbstractControl, AsyncValidatorFn, ValidatorFn } from "@angular/forms";
import { DynamicFormControlModel } from "../model/dynamic-form-control.model";
import { DynamicValidatorsConfig } from "../model/misc/dynamic-form-control-validation.model";
export declare type Validator = ValidatorFn | AsyncValidatorFn;
export declare type ValidatorFactory = (args: any) => Validator;
export declare type ValidatorsToken = Validator[];
export declare type ValidatorsMap = Map<string, Validator | ValidatorFactory>;
export declare const DYNAMIC_VALIDATORS: InjectionToken<Map<string, ValidatorFn | AsyncValidatorFn | ValidatorFactory>>;
export declare class DynamicFormValidationService {
    private NG_VALIDATORS;
    private NG_ASYNC_VALIDATORS;
    private DYNAMIC_VALIDATORS;
    constructor(NG_VALIDATORS: ValidatorFn[], NG_ASYNC_VALIDATORS: AsyncValidatorFn[], DYNAMIC_VALIDATORS: Map<string, Validator | ValidatorFactory>);
    private getValidatorFn;
    private getValidatorFns;
    private parseErrorMessageConfig;
    getValidator(validatorName: string, validatorArgs?: any): ValidatorFn;
    getAsyncValidator(validatorName: string, validatorArgs?: any): AsyncValidatorFn;
    getValidators(validatorsConfig: DynamicValidatorsConfig): ValidatorFn[];
    getAsyncValidators(asyncValidatorsConfig: DynamicValidatorsConfig): AsyncValidatorFn[];
    updateValidators(validatorsConfig: DynamicValidatorsConfig | null, control: AbstractControl, model: DynamicFormControlModel): void;
    updateAsyncValidators(asyncValidatorsConfig: DynamicValidatorsConfig | null, control: AbstractControl, model: DynamicFormControlModel): void;
    createErrorMessages(control: AbstractControl, model: DynamicFormControlModel): string[];
    isFormHook(value: any): boolean;
    isValidatorDescriptor(value: any): boolean;
}
