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
export var DYNAMIC_VALIDATORS = new InjectionToken("DYNAMIC_VALIDATORS");
var DynamicFormValidationService = /** @class */ (function () {
    function DynamicFormValidationService(NG_VALIDATORS, NG_ASYNC_VALIDATORS, DYNAMIC_VALIDATORS) {
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
    DynamicFormValidationService.prototype.getValidatorFn = /**
     * @param {?} validatorName
     * @param {?=} validatorArgs
     * @param {?=} validatorsToken
     * @return {?}
     */
    function (validatorName, validatorArgs, validatorsToken) {
        if (validatorArgs === void 0) { validatorArgs = null; }
        if (validatorsToken === void 0) { validatorsToken = this.NG_VALIDATORS; }
        /** @type {?} */
        var validatorFn;
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
                validatorFn = validatorsToken.find(function (validatorFn) { return validatorFn.name === validatorName; });
            }
        }
        if (validatorFn === undefined) { // throw when no validator could be resolved
            // throw when no validator could be resolved
            throw new Error("validator \"" + validatorName + "\" is not provided via NG_VALIDATORS, NG_ASYNC_VALIDATORS or DYNAMIC_FORM_VALIDATORS");
        }
        if (validatorArgs !== null) {
            return (/** @type {?} */ (validatorFn))(validatorArgs);
        }
        return /** @type {?} */ (validatorFn);
    };
    /**
     * @param {?} validatorsConfig
     * @param {?=} validatorsToken
     * @return {?}
     */
    DynamicFormValidationService.prototype.getValidatorFns = /**
     * @param {?} validatorsConfig
     * @param {?=} validatorsToken
     * @return {?}
     */
    function (validatorsConfig, validatorsToken) {
        var _this = this;
        if (validatorsToken === void 0) { validatorsToken = this.NG_VALIDATORS; }
        /** @type {?} */
        var validatorFns = [];
        if (isObject(validatorsConfig)) {
            validatorFns = Object.keys(validatorsConfig).map(function (validatorConfigKey) {
                /** @type {?} */
                var validatorConfigValue = (/** @type {?} */ (validatorsConfig))[validatorConfigKey];
                if (_this.isValidatorDescriptor(validatorConfigValue)) {
                    /** @type {?} */
                    var descriptor = /** @type {?} */ (validatorConfigValue);
                    return _this.getValidatorFn(descriptor.name, descriptor.args, validatorsToken);
                }
                return _this.getValidatorFn(validatorConfigKey, validatorConfigValue, validatorsToken);
            });
        }
        return validatorFns;
    };
    /**
     * @param {?} template
     * @param {?} model
     * @param {?=} error
     * @return {?}
     */
    DynamicFormValidationService.prototype.parseErrorMessageConfig = /**
     * @param {?} template
     * @param {?} model
     * @param {?=} error
     * @return {?}
     */
    function (template, model, error) {
        if (error === void 0) { error = null; }
        return template.replace(/{{\s*(.+?)\s*}}/mg, function (_match, expression) {
            /** @type {?} */
            var propertySource = model;
            /** @type {?} */
            var propertyName = expression;
            if (expression.indexOf("validator.") >= 0 && error) {
                propertySource = error;
                propertyName = expression.replace("validator.", "");
            }
            return propertySource[propertyName] ? propertySource[propertyName] : null;
        });
    };
    /**
     * @param {?} validatorName
     * @param {?=} validatorArgs
     * @return {?}
     */
    DynamicFormValidationService.prototype.getValidator = /**
     * @param {?} validatorName
     * @param {?=} validatorArgs
     * @return {?}
     */
    function (validatorName, validatorArgs) {
        if (validatorArgs === void 0) { validatorArgs = null; }
        return /** @type {?} */ (this.getValidatorFn(validatorName, validatorArgs));
    };
    /**
     * @param {?} validatorName
     * @param {?=} validatorArgs
     * @return {?}
     */
    DynamicFormValidationService.prototype.getAsyncValidator = /**
     * @param {?} validatorName
     * @param {?=} validatorArgs
     * @return {?}
     */
    function (validatorName, validatorArgs) {
        if (validatorArgs === void 0) { validatorArgs = null; }
        return /** @type {?} */ (this.getValidatorFn(validatorName, validatorArgs, this.NG_ASYNC_VALIDATORS));
    };
    /**
     * @param {?} validatorsConfig
     * @return {?}
     */
    DynamicFormValidationService.prototype.getValidators = /**
     * @param {?} validatorsConfig
     * @return {?}
     */
    function (validatorsConfig) {
        return /** @type {?} */ (this.getValidatorFns(validatorsConfig));
    };
    /**
     * @param {?} asyncValidatorsConfig
     * @return {?}
     */
    DynamicFormValidationService.prototype.getAsyncValidators = /**
     * @param {?} asyncValidatorsConfig
     * @return {?}
     */
    function (asyncValidatorsConfig) {
        return /** @type {?} */ (this.getValidatorFns(asyncValidatorsConfig, this.NG_ASYNC_VALIDATORS));
    };
    /**
     * @param {?} validatorsConfig
     * @param {?} control
     * @param {?} model
     * @return {?}
     */
    DynamicFormValidationService.prototype.updateValidators = /**
     * @param {?} validatorsConfig
     * @param {?} control
     * @param {?} model
     * @return {?}
     */
    function (validatorsConfig, control, model) {
        model.validators = validatorsConfig;
        if (validatorsConfig === null) {
            control.clearValidators();
        }
        else {
            control.setValidators(this.getValidators(validatorsConfig));
        }
    };
    /**
     * @param {?} asyncValidatorsConfig
     * @param {?} control
     * @param {?} model
     * @return {?}
     */
    DynamicFormValidationService.prototype.updateAsyncValidators = /**
     * @param {?} asyncValidatorsConfig
     * @param {?} control
     * @param {?} model
     * @return {?}
     */
    function (asyncValidatorsConfig, control, model) {
        model.asyncValidators = asyncValidatorsConfig;
        if (asyncValidatorsConfig === null) {
            control.clearAsyncValidators();
        }
        else {
            control.setAsyncValidators(this.getAsyncValidators(asyncValidatorsConfig));
        }
    };
    /**
     * @param {?} control
     * @param {?} model
     * @return {?}
     */
    DynamicFormValidationService.prototype.createErrorMessages = /**
     * @param {?} control
     * @param {?} model
     * @return {?}
     */
    function (control, model) {
        var _this = this;
        /** @type {?} */
        var messages = [];
        if (model.hasErrorMessages) {
            /** @type {?} */
            var messagesConfig_1 = /** @type {?} */ (model.errorMessages);
            Object.keys(control.errors || {}).forEach(function (validationErrorKey) {
                /** @type {?} */
                var messageKey = validationErrorKey;
                if (validationErrorKey === "minlength" || validationErrorKey === "maxlength") {
                    messageKey = messageKey.replace("length", "Length");
                }
                if (messagesConfig_1.hasOwnProperty(messageKey)) {
                    /** @type {?} */
                    var validationError = control.getError(validationErrorKey);
                    /** @type {?} */
                    var messageTemplate = /** @type {?} */ (messagesConfig_1[messageKey]);
                    messages.push(_this.parseErrorMessageConfig(messageTemplate, model, validationError));
                }
            });
        }
        return messages;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DynamicFormValidationService.prototype.isFormHook = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return isString(value) && ["blur", "change", "submit"].indexOf(value) !== -1;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DynamicFormValidationService.prototype.isValidatorDescriptor = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (isObject(value)) {
            return value.hasOwnProperty("name") && value.hasOwnProperty("args");
        }
        return false;
    };
    DynamicFormValidationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    DynamicFormValidationService.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NG_VALIDATORS,] }] },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NG_ASYNC_VALIDATORS,] }] },
        { type: Map, decorators: [{ type: Optional }, { type: Inject, args: [DYNAMIC_VALIDATORS,] }] }
    ]; };
    /** @nocollapse */ DynamicFormValidationService.ngInjectableDef = i0.defineInjectable({ factory: function DynamicFormValidationService_Factory() { return new DynamicFormValidationService(i0.inject(i1.NG_VALIDATORS, 8), i0.inject(i1.NG_ASYNC_VALIDATORS, 8), i0.inject(DYNAMIC_VALIDATORS, 8)); }, token: DynamicFormValidationService, providedIn: "root" });
    return DynamicFormValidationService;
}());
export { DynamicFormValidationService };
if (false) {
    /** @type {?} */
    DynamicFormValidationService.prototype.NG_VALIDATORS;
    /** @type {?} */
    DynamicFormValidationService.prototype.NG_ASYNC_VALIDATORS;
    /** @type {?} */
    DynamicFormValidationService.prototype.DYNAMIC_VALIDATORS;
}
//# sourceMappingURL=dynamic-form-validation.service.js.map