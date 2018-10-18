/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { DYNAMIC_FORM_CONTROL_ACTION_DISABLE, DYNAMIC_FORM_CONTROL_ACTION_ENABLE, DYNAMIC_FORM_CONTROL_CONNECTIVE_AND, DYNAMIC_FORM_CONTROL_CONNECTIVE_OR } from "../model/misc/dynamic-form-control-relation.model";
var RelationUtils = /** @class */ (function () {
    function RelationUtils() {
    }
    /**
     * @param {?} relGroups
     * @return {?}
     */
    RelationUtils.findActivationRelation = /**
     * @param {?} relGroups
     * @return {?}
     */
    function (relGroups) {
        /** @type {?} */
        var rel = relGroups.find(function (rel) {
            return rel.action === DYNAMIC_FORM_CONTROL_ACTION_DISABLE || rel.action === DYNAMIC_FORM_CONTROL_ACTION_ENABLE;
        });
        return rel !== undefined ? rel : null;
    };
    /**
     * @param {?} model
     * @param {?} controlGroup
     * @return {?}
     */
    RelationUtils.getRelatedFormControls = /**
     * @param {?} model
     * @param {?} controlGroup
     * @return {?}
     */
    function (model, controlGroup) {
        /** @type {?} */
        var controls = [];
        model.relation.forEach(function (relGroup) { return relGroup.when.forEach(function (rel) {
            if (model.id === rel.id) {
                throw new Error("FormControl " + model.id + " cannot depend on itself");
            }
            /** @type {?} */
            var control = /** @type {?} */ (controlGroup.get(rel.id));
            if (control && !controls.some(function (controlElement) { return controlElement === control; })) {
                controls.push(control);
            }
        }); });
        return controls;
    };
    /**
     * @param {?} relGroup
     * @param {?} _formGroup
     * @return {?}
     */
    RelationUtils.isFormControlToBeDisabled = /**
     * @param {?} relGroup
     * @param {?} _formGroup
     * @return {?}
     */
    function (relGroup, _formGroup) {
        /** @type {?} */
        var formGroup = _formGroup;
        return relGroup.when.reduce(function (toBeDisabled, rel, index) {
            /** @type {?} */
            var control = formGroup.get(rel.id);
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
    };
    return RelationUtils;
}());
export { RelationUtils };
//# sourceMappingURL=relation.utils.js.map