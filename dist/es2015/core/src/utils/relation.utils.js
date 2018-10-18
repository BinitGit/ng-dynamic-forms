/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { DYNAMIC_FORM_CONTROL_ACTION_DISABLE, DYNAMIC_FORM_CONTROL_ACTION_ENABLE, DYNAMIC_FORM_CONTROL_CONNECTIVE_AND, DYNAMIC_FORM_CONTROL_CONNECTIVE_OR } from "../model/misc/dynamic-form-control-relation.model";
export class RelationUtils {
    /**
     * @param {?} relGroups
     * @return {?}
     */
    static findActivationRelation(relGroups) {
        /** @type {?} */
        let rel = relGroups.find(rel => {
            return rel.action === DYNAMIC_FORM_CONTROL_ACTION_DISABLE || rel.action === DYNAMIC_FORM_CONTROL_ACTION_ENABLE;
        });
        return rel !== undefined ? rel : null;
    }
    /**
     * @param {?} model
     * @param {?} controlGroup
     * @return {?}
     */
    static getRelatedFormControls(model, controlGroup) {
        /** @type {?} */
        let controls = [];
        model.relation.forEach(relGroup => relGroup.when.forEach(rel => {
            if (model.id === rel.id) {
                throw new Error(`FormControl ${model.id} cannot depend on itself`);
            }
            /** @type {?} */
            let control = /** @type {?} */ (controlGroup.get(rel.id));
            if (control && !controls.some(controlElement => controlElement === control)) {
                controls.push(control);
            }
        }));
        return controls;
    }
    /**
     * @param {?} relGroup
     * @param {?} _formGroup
     * @return {?}
     */
    static isFormControlToBeDisabled(relGroup, _formGroup) {
        /** @type {?} */
        let formGroup = _formGroup;
        return relGroup.when.reduce((toBeDisabled, rel, index) => {
            /** @type {?} */
            let control = formGroup.get(rel.id);
            if (control && relGroup.action === DYNAMIC_FORM_CONTROL_ACTION_DISABLE) {
                if (index > 0 && relGroup.connective === DYNAMIC_FORM_CONTROL_CONNECTIVE_AND && !toBeDisabled) {
                    return false;
                }
                if (index > 0 && relGroup.connective === DYNAMIC_FORM_CONTROL_CONNECTIVE_OR && toBeDisabled) {
                    return true;
                }
                return rel.value === control.value || rel.status === control.status;
            }
            if (control && relGroup.action === DYNAMIC_FORM_CONTROL_ACTION_ENABLE) {
                if (index > 0 && relGroup.connective === DYNAMIC_FORM_CONTROL_CONNECTIVE_AND && toBeDisabled) {
                    return true;
                }
                if (index > 0 && relGroup.connective === DYNAMIC_FORM_CONTROL_CONNECTIVE_OR && !toBeDisabled) {
                    return false;
                }
                return !(rel.value === control.value || rel.status === control.status);
            }
            return false;
        }, false);
    }
}
//# sourceMappingURL=relation.utils.js.map