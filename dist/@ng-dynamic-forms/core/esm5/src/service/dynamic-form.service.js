/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { DynamicFormArrayModel, DYNAMIC_FORM_CONTROL_TYPE_ARRAY, DynamicFormArrayGroupModel } from "../model/form-array/dynamic-form-array.model";
import { DYNAMIC_FORM_CONTROL_TYPE_GROUP, DynamicFormGroupModel } from "../model/form-group/dynamic-form-group.model";
import { DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP, DynamicCheckboxGroupModel } from "../model/checkbox/dynamic-checkbox-group.model";
import { DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX, DynamicCheckboxModel } from "../model/checkbox/dynamic-checkbox.model";
import { DYNAMIC_FORM_CONTROL_TYPE_COLORPICKER, DynamicColorPickerModel } from "../model/colorpicker/dynamic-colorpicker.model";
import { DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER, DynamicDatePickerModel } from "../model/datepicker/dynamic-datepicker.model";
import { DYNAMIC_FORM_CONTROL_TYPE_EDITOR, DynamicEditorModel } from "../model/editor/dynamic-editor.model";
import { DYNAMIC_FORM_CONTROL_TYPE_FILE_UPLOAD, DynamicFileUploadModel } from "../model/file-upload/dynamic-file-upload.model";
import { DYNAMIC_FORM_CONTROL_TYPE_INPUT, DynamicInputModel } from "../model/input/dynamic-input.model";
import { DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP, DynamicRadioGroupModel } from "../model/radio/dynamic-radio-group.model";
import { DYNAMIC_FORM_CONTROL_TYPE_RATING, DynamicRatingModel } from "../model/rating/dynamic-rating.model";
import { DYNAMIC_FORM_CONTROL_TYPE_SELECT, DynamicSelectModel } from "../model/select/dynamic-select.model";
import { DYNAMIC_FORM_CONTROL_TYPE_SLIDER, DynamicSliderModel } from "../model/slider/dynamic-slider.model";
import { DYNAMIC_FORM_CONTROL_TYPE_SWITCH, DynamicSwitchModel } from "../model/switch/dynamic-switch.model";
import { DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA, DynamicTextAreaModel } from "../model/textarea/dynamic-textarea.model";
import { DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER, DynamicTimePickerModel } from "../model/timepicker/dynamic-timepicker.model";
import { DynamicFormValidationService } from "./dynamic-form-validation.service";
import { JSONUtils } from "../utils/json.utils";
import { isString } from "../utils/core.utils";
import * as i0 from "@angular/core";
import * as i1 from "./dynamic-form-validation.service";
/** @typedef {?} */
var DynamicFormModel;
export { DynamicFormModel };
var DynamicFormService = /** @class */ (function () {
    function DynamicFormService(validationService) {
        this.validationService = validationService;
    }
    /**
     * @param {?=} validatorsConfig
     * @param {?=} asyncValidatorsConfig
     * @param {?=} updateOn
     * @return {?}
     */
    DynamicFormService.prototype.createAbstractControlOptions = /**
     * @param {?=} validatorsConfig
     * @param {?=} asyncValidatorsConfig
     * @param {?=} updateOn
     * @return {?}
     */
    function (validatorsConfig, asyncValidatorsConfig, updateOn) {
        if (validatorsConfig === void 0) { validatorsConfig = null; }
        if (asyncValidatorsConfig === void 0) { asyncValidatorsConfig = null; }
        if (updateOn === void 0) { updateOn = null; }
        return {
            asyncValidators: asyncValidatorsConfig !== null ? this.validationService.getAsyncValidators(asyncValidatorsConfig) : null,
            validators: validatorsConfig !== null ? this.validationService.getValidators(validatorsConfig) : null,
            updateOn: updateOn !== null && this.validationService.isFormHook(updateOn) ? updateOn : "change"
        };
    };
    /**
     * @param {?} formArrayModel
     * @return {?}
     */
    DynamicFormService.prototype.createFormArray = /**
     * @param {?} formArrayModel
     * @return {?}
     */
    function (formArrayModel) {
        /** @type {?} */
        var controls = [];
        /** @type {?} */
        var options = this.createAbstractControlOptions(formArrayModel.validators, formArrayModel.asyncValidators, formArrayModel.updateOn);
        for (var index = 0; index < formArrayModel.size; index++) {
            /** @type {?} */
            var groupModel = formArrayModel.get(index);
            /** @type {?} */
            var groupOptions = this.createAbstractControlOptions(formArrayModel.groupValidators, formArrayModel.groupAsyncValidators, formArrayModel.updateOn);
            controls.push(this.createFormGroup(groupModel.group, groupOptions, groupModel));
        }
        return new FormArray(controls, options);
    };
    /**
     * @param {?} formModel
     * @param {?=} options
     * @param {?=} parent
     * @return {?}
     */
    DynamicFormService.prototype.createFormGroup = /**
     * @param {?} formModel
     * @param {?=} options
     * @param {?=} parent
     * @return {?}
     */
    function (formModel, options, parent) {
        var _this = this;
        if (options === void 0) { options = null; }
        if (parent === void 0) { parent = null; }
        /** @type {?} */
        var controls = {};
        formModel.forEach(function (model) {
            model.parent = parent;
            switch (model.type) {
                case DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
                    controls[model.id] = _this.createFormArray(/** @type {?} */ (model));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_GROUP:
                case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
                    /** @type {?} */
                    var groupModel = /** @type {?} */ (model);
                    /** @type {?} */
                    var groupOptions = _this.createAbstractControlOptions(groupModel.validators, groupModel.asyncValidators, groupModel.updateOn);
                    controls[model.id] = _this.createFormGroup(groupModel.group, groupOptions, groupModel);
                    break;
                default:
                    /** @type {?} */
                    var controlModel = /** @type {?} */ (model);
                    /** @type {?} */
                    var controlState = { value: controlModel.value, disabled: controlModel.disabled };
                    /** @type {?} */
                    var controlOptions = _this.createAbstractControlOptions(controlModel.validators, controlModel.asyncValidators, controlModel.updateOn);
                    controls[model.id] = new FormControl(controlState, controlOptions);
            }
        });
        return new FormGroup(controls, options);
    };
    /**
     * @param {?} model
     * @return {?}
     */
    DynamicFormService.prototype.getPathSegment = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        return model instanceof DynamicFormArrayGroupModel ? model.index.toString() : (/** @type {?} */ (model)).id;
    };
    /**
     * @param {?} model
     * @return {?}
     */
    DynamicFormService.prototype.getPath = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        /** @type {?} */
        var path = [this.getPathSegment(model)];
        /** @type {?} */
        var parent = model.parent;
        while (parent) {
            path.unshift(this.getPathSegment(parent));
            parent = parent.parent;
        }
        return path;
    };
    /**
     * @param {?} formGroup
     * @param {?} formModel
     * @param {...?} models
     * @return {?}
     */
    DynamicFormService.prototype.addFormGroupControl = /**
     * @param {?} formGroup
     * @param {?} formModel
     * @param {...?} models
     * @return {?}
     */
    function (formGroup, formModel) {
        var models = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            models[_i - 2] = arguments[_i];
        }
        if (formModel instanceof DynamicFormGroupModel) {
            this.insertFormGroupControl.apply(this, [formModel.size(), formGroup, formModel].concat(models));
        }
        else {
            /** @type {?} */
            var _formModel = /** @type {?} */ (formModel);
            this.insertFormGroupControl.apply(this, [_formModel.length, formGroup, _formModel].concat(models));
        }
    };
    /**
     * @param {?} index
     * @param {?} step
     * @param {?} formModel
     * @return {?}
     */
    DynamicFormService.prototype.moveFormGroupControl = /**
     * @param {?} index
     * @param {?} step
     * @param {?} formModel
     * @return {?}
     */
    function (index, step, formModel) {
        if (formModel instanceof DynamicFormGroupModel) {
            formModel.move(index, step);
        }
        else {
            /** @type {?} */
            var _formModel = /** @type {?} */ (formModel);
            _formModel.splice.apply(_formModel, [index + step, 0].concat(_formModel.splice(index, 1)));
        }
    };
    /**
     * @param {?} index
     * @param {?} formGroup
     * @param {?} formModel
     * @param {...?} models
     * @return {?}
     */
    DynamicFormService.prototype.insertFormGroupControl = /**
     * @param {?} index
     * @param {?} formGroup
     * @param {?} formModel
     * @param {...?} models
     * @return {?}
     */
    function (index, formGroup, formModel) {
        var models = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            models[_i - 3] = arguments[_i];
        }
        /** @type {?} */
        var parent = formModel instanceof DynamicFormGroupModel ? formModel : null;
        /** @type {?} */
        var controls = this.createFormGroup(models, null, parent).controls;
        Object.keys(controls).forEach(function (controlName, idx) {
            /** @type {?} */
            var controlModel = models[idx];
            if (formModel instanceof DynamicFormGroupModel) {
                formModel.insert(index, controlModel);
            }
            else {
                (/** @type {?} */ (formModel)).splice(index, 0, controlModel);
            }
            formGroup.addControl(controlName, controls[controlName]);
        });
    };
    /**
     * @param {?} index
     * @param {?} formGroup
     * @param {?} formModel
     * @return {?}
     */
    DynamicFormService.prototype.removeFormGroupControl = /**
     * @param {?} index
     * @param {?} formGroup
     * @param {?} formModel
     * @return {?}
     */
    function (index, formGroup, formModel) {
        if (formModel instanceof DynamicFormGroupModel) {
            formGroup.removeControl(formModel.get(index).id);
            formModel.remove(index);
        }
        else {
            formGroup.removeControl(formModel[index].id);
            (/** @type {?} */ (formModel)).splice(index, 1);
        }
    };
    /**
     * @param {?} formArray
     * @param {?} formArrayModel
     * @return {?}
     */
    DynamicFormService.prototype.addFormArrayGroup = /**
     * @param {?} formArray
     * @param {?} formArrayModel
     * @return {?}
     */
    function (formArray, formArrayModel) {
        /** @type {?} */
        var groupModel = formArrayModel.addGroup();
        formArray.push(this.createFormGroup(groupModel.group, null, groupModel));
    };
    /**
     * @param {?} index
     * @param {?} formArray
     * @param {?} formArrayModel
     * @return {?}
     */
    DynamicFormService.prototype.insertFormArrayGroup = /**
     * @param {?} index
     * @param {?} formArray
     * @param {?} formArrayModel
     * @return {?}
     */
    function (index, formArray, formArrayModel) {
        /** @type {?} */
        var groupModel = formArrayModel.insertGroup(index);
        formArray.insert(index, this.createFormGroup(groupModel.group, null, groupModel));
    };
    /**
     * @param {?} index
     * @param {?} step
     * @param {?} formArray
     * @param {?} formArrayModel
     * @return {?}
     */
    DynamicFormService.prototype.moveFormArrayGroup = /**
     * @param {?} index
     * @param {?} step
     * @param {?} formArray
     * @param {?} formArrayModel
     * @return {?}
     */
    function (index, step, formArray, formArrayModel) {
        /** @type {?} */
        var newIndex = index + step;
        /** @type {?} */
        var moveUp = step >= 0;
        if ((index >= 0 && index < formArrayModel.size) && (newIndex >= 0 && newIndex < formArrayModel.size)) {
            /** @type {?} */
            var movingGroups_1 = [];
            for (var i = moveUp ? index : newIndex; i <= (moveUp ? newIndex : index); i++) {
                movingGroups_1.push(formArray.at(i));
            }
            movingGroups_1.forEach(function (formControl, idx) {
                /** @type {?} */
                var position;
                if (moveUp) {
                    position = idx === 0 ? newIndex : index + idx - 1;
                }
                else {
                    position = idx === movingGroups_1.length - 1 ? newIndex : newIndex + idx + 1;
                }
                formArray.setControl(position, formControl);
            });
            formArrayModel.moveGroup(index, step);
        }
        else {
            throw new Error("form array group cannot be moved due to index or new index being out of bounds");
        }
    };
    /**
     * @param {?} index
     * @param {?} formArray
     * @param {?} formArrayModel
     * @return {?}
     */
    DynamicFormService.prototype.removeFormArrayGroup = /**
     * @param {?} index
     * @param {?} formArray
     * @param {?} formArrayModel
     * @return {?}
     */
    function (index, formArray, formArrayModel) {
        formArray.removeAt(index);
        formArrayModel.removeGroup(index);
    };
    /**
     * @param {?} formArray
     * @param {?} formArrayModel
     * @return {?}
     */
    DynamicFormService.prototype.clearFormArray = /**
     * @param {?} formArray
     * @param {?} formArrayModel
     * @return {?}
     */
    function (formArray, formArrayModel) {
        while (formArray.length > 0) {
            this.removeFormArrayGroup(0, formArray, formArrayModel);
        }
    };
    /**
     * @param {?} id
     * @param {?} formModel
     * @return {?}
     */
    DynamicFormService.prototype.findById = /**
     * @param {?} id
     * @param {?} formModel
     * @return {?}
     */
    function (id, formModel) {
        /** @type {?} */
        var result = null;
        /** @type {?} */
        var findByIdFn = function (id, groupModel) {
            for (var _i = 0, groupModel_1 = groupModel; _i < groupModel_1.length; _i++) {
                var controlModel = groupModel_1[_i];
                if (controlModel.id === id) {
                    result = controlModel;
                    break;
                }
                if (controlModel instanceof DynamicFormGroupModel) {
                    findByIdFn(id, (/** @type {?} */ (controlModel)).group);
                }
            }
        };
        findByIdFn(id, formModel);
        return result;
    };
    /**
     * @param {?} json
     * @return {?}
     */
    DynamicFormService.prototype.fromJSON = /**
     * @param {?} json
     * @return {?}
     */
    function (json) {
        var _this = this;
        /** @type {?} */
        var formModelJSON = isString(json) ? JSON.parse(json, JSONUtils.parseReviver) : json;
        /** @type {?} */
        var formModel = [];
        formModelJSON.forEach(function (model) {
            /** @type {?} */
            var layout = model.layout || model.cls || null; // remove model.cls in next major release
            switch (model.type) {
                case DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
                    /** @type {?} */
                    var formArrayModel_1 = /** @type {?} */ (model);
                    if (Array.isArray(formArrayModel_1.groups)) {
                        formArrayModel_1.groups.forEach(function (groupModel) {
                            groupModel.group = /** @type {?} */ (_this.fromJSON(groupModel.group));
                        });
                    }
                    formArrayModel_1.groupFactory = function () {
                        return _this.fromJSON(formArrayModel_1.groupPrototype);
                    };
                    formModel.push(new DynamicFormArrayModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX:
                    formModel.push(new DynamicCheckboxModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
                    model.group = /** @type {?} */ (_this.fromJSON(model.group));
                    formModel.push(new DynamicCheckboxGroupModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_COLORPICKER:
                    formModel.push(new DynamicColorPickerModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER:
                    formModel.push(new DynamicDatePickerModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_EDITOR:
                    formModel.push(new DynamicEditorModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_FILE_UPLOAD:
                    model.value = null;
                    formModel.push(new DynamicFileUploadModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_GROUP:
                    model.group = _this.fromJSON(model.group);
                    formModel.push(new DynamicFormGroupModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_INPUT:
                    /** @type {?} */
                    var inputModel = /** @type {?} */ (model);
                    if (inputModel.mask !== null) {
                        inputModel.mask = JSONUtils.maskFromString(/** @type {?} */ (inputModel.mask));
                    }
                    formModel.push(new DynamicInputModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP:
                    formModel.push(new DynamicRadioGroupModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_RATING:
                    formModel.push(new DynamicRatingModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_SELECT:
                    formModel.push(new DynamicSelectModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_SLIDER:
                    formModel.push(new DynamicSliderModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_SWITCH:
                    formModel.push(new DynamicSwitchModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA:
                    formModel.push(new DynamicTextAreaModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER:
                    formModel.push(new DynamicTimePickerModel(model, layout));
                    break;
                default:
                    throw new Error("unknown form control model type defined on JSON object with id \"" + model.id + "\"");
            }
        });
        return formModel;
    };
    DynamicFormService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    DynamicFormService.ctorParameters = function () { return [
        { type: DynamicFormValidationService }
    ]; };
    /** @nocollapse */ DynamicFormService.ngInjectableDef = i0.defineInjectable({ factory: function DynamicFormService_Factory() { return new DynamicFormService(i0.inject(i1.DynamicFormValidationService)); }, token: DynamicFormService, providedIn: "root" });
    return DynamicFormService;
}());
export { DynamicFormService };
if (false) {
    /** @type {?} */
    DynamicFormService.prototype.validationService;
}
//# sourceMappingURL=dynamic-form.service.js.map