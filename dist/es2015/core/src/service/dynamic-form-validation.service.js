/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { InjectionToken, Injectable, Inject, Optional } from "@angular/core";
import { Validators, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from "@angular/forms";
import { isObject, isString } from "../utils/core.utils";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
/** @typedef {?} */
var Validator;
export { Validator };
/** @typedef {?} */
var ValidatorFactory;
export { ValidatorFactory };
/** @typedef {?} */
var ValidatorsToken;
export { ValidatorsToken };
/** @typedef {?} */
var ValidatorsMap;
export { ValidatorsMap };
/** @type {?} */
export const DYNAMIC_VALIDATORS = new InjectionToken("DYNAMIC_VALIDATORS");
export class DynamicFormValidationService {
    /**
     * @param {?} NG_VALIDATORS
     * @param {?} NG_ASYNC_VALIDATORS
     * @param {?} DYNAMIC_VALIDATORS
     */
    constructor(NG_VALIDATORS, NG_ASYNC_VALIDATORS, DYNAMIC_VALIDATORS) {
        this.NG_VALIDATORS = NG_VALIDATORS;
        this.NG_ASYNC_VALIDATORS = NG_ASYNC_VALIDATORS;
        this.DYNAMIC_VALIDATORS = DYNAMIC_VALIDATORS;
    }
    /**
     * @param {?} validatorName
     * @param {?=} validatorArgs
     * @param {?=} validatorsToken
     * @return {?}
     */
    getValidatorFn(validatorName, validatorArgs = null, validatorsToken = this.NG_VALIDATORS) {
        /** @type {?} */
        let validatorFn;
        if (Validators.hasOwnProperty(validatorName)) { // Built-in Angular Validators
            // Built-in Angular Validators
            validatorFn = (/** @type {?} */ (Validators))[validatorName];
        }
        else { // Custom Validators
            // Custom Validators
            if (this.DYNAMIC_VALIDATORS && this.DYNAMIC_VALIDATORS.has(validatorName)) {
                validatorFn = this.DYNAMIC_VALIDATORS.get(validatorName);
            }
            else if (validatorsToken) {
                validatorFn = validatorsToken.find(validatorFn => validatorFn.name === validatorName);
            }
        }
        if (validatorFn === undefined) { // throw when no validator could be resolved
            // throw when no validator could be resolved
            throw new Error(`validator "${validatorName}" is not provided via NG_VALIDATORS, NG_ASYNC_VALIDATORS or DYNAMIC_FORM_VALIDATORS`);
        }
        if (validatorArgs !== null) {
            return (/** @type {?} */ (validatorFn))(validatorArgs);
        }
        return /** @type {?} */ (validatorFn);
    }
    /**
     * @param {?} validatorsConfig
     * @param {?=} validatorsToken
     * @return {?}
     */
    getValidatorFns(validatorsConfig, validatorsToken = this.NG_VALIDATORS) {
        /** @type {?} */
        let validatorFns = [];
        if (isObject(validatorsConfig)) {
            validatorFns = Object.keys(validatorsConfig).map(validatorConfigKey => {
                /** @type {?} */
                let validatorConfigValue = (/** @type {?} */ (validatorsConfig))[validatorConfigKey];
                if (this.isValidatorDescriptor(validatorConfigValue)) {
                    /** @type {?} */
                    let descriptor = /** @type {?} */ (validatorConfigValue);
                    return this.getValidatorFn(descriptor.name, descriptor.args, validatorsToken);
                }
                return this.getValidatorFn(validatorConfigKey, validatorConfigValue, validatorsToken);
            });
        }
        return validatorFns;
    }
    /**
     * @param {?} template
     * @param {?} model
     * @param {?=} error
     * @return {?}
     */
    parseErrorMessageConfig(template, model, error = null) {
        return template.replace(/{{\s*(.+?)\s*}}/mg, (_match, expression) => {
            /** @type {?} */
            let propertySource = model;
            /** @type {?} */
            let propertyName = expression;
            if (expression.indexOf("validator.") >= 0 && error) {
                propertySource = error;
                propertyName = expression.replace("validator.", "");
            }
            return propertySource[propertyName] ? propertySource[propertyName] : null;
        });
    }
    /**
     * @param {?} validatorName
     * @param {?=} validatorArgs
     * @return {?}
     */
    getValidator(validatorName, validatorArgs = null) {
        return /** @type {?} */ (this.getValidatorFn(validatorName, validatorArgs));
    }
    /**
     * @param {?} validatorName
     * @param {?=} validatorArgs
     * @return {?}
     */
    getAsyncValidator(validatorName, validatorArgs = null) {
        return /** @type {?} */ (this.getValidatorFn(validatorName, validatorArgs, this.NG_ASYNC_VALIDATORS));
    }
    /**
     * @param {?} validatorsConfig
     * @return {?}
     */
    getValidators(validatorsConfig) {
        return /** @type {?} */ (this.getValidatorFns(validatorsConfig));
    }
    /**
     * @param {?} asyncValidatorsConfig
     * @return {?}
     */
    getAsyncValidators(asyncValidatorsConfig) {
        return /** @type {?} */ (this.getValidatorFns(asyncValidatorsConfig, this.NG_ASYNC_VALIDATORS));
    }
    /**
     * @param {?} validatorsConfig
     * @param {?} control
     * @param {?} model
     * @return {?}
     */
    updateValidators(validatorsConfig, control, model) {
        model.validators = validatorsConfig;
        if (validatorsConfig === null) {
            control.clearValidators();
        }
        else {
            control.setValidators(this.getValidators(validatorsConfig));
        }
    }
    /**
     * @param {?} asyncValidatorsConfig
     * @param {?} control
     * @param {?} model
     * @return {?}
     */
    updateAsyncValidators(asyncValidatorsConfig, control, model) {
        model.asyncValidators = asyncValidatorsConfig;
        if (asyncValidatorsConfig === null) {
            control.clearAsyncValidators();
        }
        else {
            control.setAsyncValidators(this.getAsyncValidators(asyncValidatorsConfig));
        }
    }
    /**
     * @param {?} control
     * @param {?} model
     * @return {?}
     */
    createErrorMessages(control, model) {
        /** @type {?} */
        let messages = [];
        if (model.hasErrorMessages) {
            /** @type {?} */
            let messagesConfig = /** @type {?} */ (model.errorMessages);
            Object.keys(control.errors || {}).forEach(validationErrorKey => {
                /** @type {?} */
                let messageKey = validationErrorKey;
                if (validationErrorKey === "minlength" || validationErrorKey === "maxlength") {
                    messageKey = messageKey.replace("length", "Length");
                }
                if (messagesConfig.hasOwnProperty(messageKey)) {
                    /** @type {?} */
                    let validationError = control.getError(validationErrorKey);
                    /** @type {?} */
                    let messageTemplate = /** @type {?} */ (messagesConfig[messageKey]);
                    messages.push(this.parseErrorMessageConfig(messageTemplate, model, validationError));
                }
            });
        }
        return messages;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isFormHook(value) {
        return isString(value) && ["blur", "change", "submit"].indexOf(value) !== -1;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isValidatorDescriptor(value) {
        if (isObject(value)) {
            return value.hasOwnProperty("name") && value.hasOwnProperty("args");
        }
        return false;
    }
}
DynamicFormValidationService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
DynamicFormValidationService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NG_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NG_ASYNC_VALIDATORS,] }] },
    { type: Map, decorators: [{ type: Optional }, { type: Inject, args: [DYNAMIC_VALIDATORS,] }] }
];
/** @nocollapse */ DynamicFormValidationService.ngInjectableDef = i0.defineInjectable({ factory: function DynamicFormValidationService_Factory() { return new DynamicFormValidationService(i0.inject(i1.NG_VALIDATORS, 8), i0.inject(i1.NG_ASYNC_VALIDATORS, 8), i0.inject(DYNAMIC_VALIDATORS, 8)); }, token: DynamicFormValidationService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DynamicFormValidationService.prototype.NG_VALIDATORS;
    /** @type {?} */
    DynamicFormValidationService.prototype.NG_ASYNC_VALIDATORS;
    /** @type {?} */
    DynamicFormValidationService.prototype.DYNAMIC_VALIDATORS;
}
//# sourceMappingURL=dynamic-form-validation.service.js.map