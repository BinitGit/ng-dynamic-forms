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
export class DynamicFormService {
    /**
     * @param {?} validationService
     */
    constructor(validationService) {
        this.validationService = validationService;
    }
    /**
     * @param {?=} validatorsConfig
     * @param {?=} asyncValidatorsConfig
     * @param {?=} updateOn
     * @return {?}
     */
    createAbstractControlOptions(validatorsConfig = null, asyncValidatorsConfig = null, updateOn = null) {
        return {
            asyncValidators: asyncValidatorsConfig !== null ? this.validationService.getAsyncValidators(asyncValidatorsConfig) : null,
            validators: validatorsConfig !== null ? this.validationService.getValidators(validatorsConfig) : null,
            updateOn: updateOn !== null && this.validationService.isFormHook(updateOn) ? updateOn : "change"
        };
    }
    /**
     * @param {?} formArrayModel
     * @return {?}
     */
    createFormArray(formArrayModel) {
        /** @type {?} */
        let controls = [];
        /** @type {?} */
        let options = this.createAbstractControlOptions(formArrayModel.validators, formArrayModel.asyncValidators, formArrayModel.updateOn);
        for (let index = 0; index < formArrayModel.size; index++) {
            /** @type {?} */
            let groupModel = formArrayModel.get(index);
            /** @type {?} */
            let groupOptions = this.createAbstractControlOptions(formArrayModel.groupValidators, formArrayModel.groupAsyncValidators, formArrayModel.updateOn);
            controls.push(this.createFormGroup(groupModel.group, groupOptions, groupModel));
        }
        return new FormArray(controls, options);
    }
    /**
     * @param {?} formModel
     * @param {?=} options
     * @param {?=} parent
     * @return {?}
     */
    createFormGroup(formModel, options = null, parent = null) {
        /** @type {?} */
        let controls = {};
        formModel.forEach(model => {
            model.parent = parent;
            switch (model.type) {
                case DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
                    controls[model.id] = this.createFormArray(/** @type {?} */ (model));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_GROUP:
                case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
                    /** @type {?} */
                    let groupModel = /** @type {?} */ (model);
                    /** @type {?} */
                    let groupOptions = this.createAbstractControlOptions(groupModel.validators, groupModel.asyncValidators, groupModel.updateOn);
                    controls[model.id] = this.createFormGroup(groupModel.group, groupOptions, groupModel);
                    break;
                default:
                    /** @type {?} */
                    let controlModel = /** @type {?} */ (model);
                    /** @type {?} */
                    let controlState = { value: controlModel.value, disabled: controlModel.disabled };
                    /** @type {?} */
                    let controlOptions = this.createAbstractControlOptions(controlModel.validators, controlModel.asyncValidators, controlModel.updateOn);
                    controls[model.id] = new FormControl(controlState, controlOptions);
            }
        });
        return new FormGroup(controls, options);
    }
    /**
     * @param {?} model
     * @return {?}
     */
    getPathSegment(model) {
        return model instanceof DynamicFormArrayGroupModel ? model.index.toString() : (/** @type {?} */ (model)).id;
    }
    /**
     * @param {?} model
     * @return {?}
     */
    getPath(model) {
        /** @type {?} */
        let path = [this.getPathSegment(model)];
        /** @type {?} */
        let parent = model.parent;
        while (parent) {
            path.unshift(this.getPathSegment(parent));
            parent = parent.parent;
        }
        return path;
    }
    /**
     * @param {?} formGroup
     * @param {?} formModel
     * @param {...?} models
     * @return {?}
     */
    addFormGroupControl(formGroup, formModel, ...models) {
        if (formModel instanceof DynamicFormGroupModel) {
            this.insertFormGroupControl(formModel.size(), formGroup, formModel, ...models);
        }
        else {
            /** @type {?} */
            let _formModel = /** @type {?} */ (formModel);
            this.insertFormGroupControl(_formModel.length, formGroup, _formModel, ...models);
        }
    }
    /**
     * @param {?} index
     * @param {?} step
     * @param {?} formModel
     * @return {?}
     */
    moveFormGroupControl(index, step, formModel) {
        if (formModel instanceof DynamicFormGroupModel) {
            formModel.move(index, step);
        }
        else {
            /** @type {?} */
            let _formModel = /** @type {?} */ (formModel);
            _formModel.splice(index + step, 0, ..._formModel.splice(index, 1));
        }
    }
    /**
     * @param {?} index
     * @param {?} formGroup
     * @param {?} formModel
     * @param {...?} models
     * @return {?}
     */
    insertFormGroupControl(index, formGroup, formModel, ...models) {
        /** @type {?} */
        let parent = formModel instanceof DynamicFormGroupModel ? formModel : null;
        /** @type {?} */
        let controls = this.createFormGroup(models, null, parent).controls;
        Object.keys(controls).forEach((controlName, idx) => {
            /** @type {?} */
            let controlModel = models[idx];
            if (formModel instanceof DynamicFormGroupModel) {
                formModel.insert(index, controlModel);
            }
            else {
                (/** @type {?} */ (formModel)).splice(index, 0, controlModel);
            }
            formGroup.addControl(controlName, controls[controlName]);
        });
    }
    /**
     * @param {?} index
     * @param {?} formGroup
     * @param {?} formModel
     * @return {?}
     */
    removeFormGroupControl(index, formGroup, formModel) {
        if (formModel instanceof DynamicFormGroupModel) {
            formGroup.removeControl(formModel.get(index).id);
            formModel.remove(index);
        }
        else {
            formGroup.removeControl(formModel[index].id);
            (/** @type {?} */ (formModel)).splice(index, 1);
        }
    }
    /**
     * @param {?} formArray
     * @param {?} formArrayModel
     * @return {?}
     */
    addFormArrayGroup(formArray, formArrayModel) {
        /** @type {?} */
        let groupModel = formArrayModel.addGroup();
        formArray.push(this.createFormGroup(groupModel.group, null, groupModel));
    }
    /**
     * @param {?} index
     * @param {?} formArray
     * @param {?} formArrayModel
     * @return {?}
     */
    insertFormArrayGroup(index, formArray, formArrayModel) {
        /** @type {?} */
        let groupModel = formArrayModel.insertGroup(index);
        formArray.insert(index, this.createFormGroup(groupModel.group, null, groupModel));
    }
    /**
     * @param {?} index
     * @param {?} step
     * @param {?} formArray
     * @param {?} formArrayModel
     * @return {?}
     */
    moveFormArrayGroup(index, step, formArray, formArrayModel) {
        /** @type {?} */
        let newIndex = index + step;
        /** @type {?} */
        let moveUp = step >= 0;
        if ((index >= 0 && index < formArrayModel.size) && (newIndex >= 0 && newIndex < formArrayModel.size)) {
            /** @type {?} */
            let movingGroups = [];
            for (let i = moveUp ? index : newIndex; i <= (moveUp ? newIndex : index); i++) {
                movingGroups.push(formArray.at(i));
            }
            movingGroups.forEach((formControl, idx) => {
                /** @type {?} */
                let position;
                if (moveUp) {
                    position = idx === 0 ? newIndex : index + idx - 1;
                }
                else {
                    position = idx === movingGroups.length - 1 ? newIndex : newIndex + idx + 1;
                }
                formArray.setControl(position, formControl);
            });
            formArrayModel.moveGroup(index, step);
        }
        else {
            throw new Error(`form array group cannot be moved due to index or new index being out of bounds`);
        }
    }
    /**
     * @param {?} index
     * @param {?} formArray
     * @param {?} formArrayModel
     * @return {?}
     */
    removeFormArrayGroup(index, formArray, formArrayModel) {
        formArray.removeAt(index);
        formArrayModel.removeGroup(index);
    }
    /**
     * @param {?} formArray
     * @param {?} formArrayModel
     * @return {?}
     */
    clearFormArray(formArray, formArrayModel) {
        while (formArray.length > 0) {
            this.removeFormArrayGroup(0, formArray, formArrayModel);
        }
    }
    /**
     * @param {?} id
     * @param {?} formModel
     * @return {?}
     */
    findById(id, formModel) {
        /** @type {?} */
        let result = null;
        /** @type {?} */
        let findByIdFn = (id, groupModel) => {
            for (let controlModel of groupModel) {
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
    }
    /**
     * @param {?} json
     * @return {?}
     */
    fromJSON(json) {
        /** @type {?} */
        let formModelJSON = isString(json) ? JSON.parse(json, JSONUtils.parseReviver) : json;
        /** @type {?} */
        let formModel = [];
        formModelJSON.forEach((model) => {
            /** @type {?} */
            let layout = model.layout || model.cls || null; // remove model.cls in next major release
            switch (model.type) {
                case DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
                    /** @type {?} */
                    let formArrayModel = /** @type {?} */ (model);
                    if (Array.isArray(formArrayModel.groups)) {
                        formArrayModel.groups.forEach((groupModel) => {
                            groupModel.group = /** @type {?} */ (this.fromJSON(groupModel.group));
                        });
                    }
                    formArrayModel.groupFactory = () => {
                        return this.fromJSON(formArrayModel.groupPrototype);
                    };
                    formModel.push(new DynamicFormArrayModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX:
                    formModel.push(new DynamicCheckboxModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
                    model.group = /** @type {?} */ (this.fromJSON(model.group));
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
                    model.group = this.fromJSON(model.group);
                    formModel.push(new DynamicFormGroupModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_INPUT:
                    /** @type {?} */
                    let inputModel = /** @type {?} */ (model);
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
                    throw new Error(`unknown form control model type defined on JSON object with id "${model.id}"`);
            }
        });
        return formModel;
    }
}
DynamicFormService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
DynamicFormService.ctorParameters = () => [
    { type: DynamicFormValidationService }
];
/** @nocollapse */ DynamicFormService.ngInjectableDef = i0.defineInjectable({ factory: function DynamicFormService_Factory() { return new DynamicFormService(i0.inject(i1.DynamicFormValidationService)); }, token: DynamicFormService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DynamicFormService.prototype.validationService;
}
//# sourceMappingURL=dynamic-form.service.js.map