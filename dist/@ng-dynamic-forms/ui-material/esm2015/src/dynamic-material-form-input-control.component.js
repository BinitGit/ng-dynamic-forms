/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { DynamicFormControlComponent } from "@ng-dynamic-forms/core";
/**
 * @abstract
 */
export class DynamicMaterialFormInputControlComponent extends DynamicFormControlComponent {
    /**
     * @param {?} layoutService
     * @param {?} validationService
     */
    constructor(layoutService, validationService) {
        super(layoutService, validationService);
        this.layoutService = layoutService;
        this.validationService = validationService;
    }
    /**
     * @return {?}
     */
    get characterCount() {
        return this.matInput ? this.matInput.value.length : null;
    }
    /**
     * @return {?}
     */
    get characterHint() {
        return `${this.characterCount} / ${((/** @type {?} */ (this.model))).maxLength}`;
    }
    /**
     * @return {?}
     */
    get showCharacterHint() {
        return !!((/** @type {?} */ (this.model)).maxLength && this.characterCount);
    }
}
if (false) {
    /** @type {?} */
    DynamicMaterialFormInputControlComponent.prototype.matInput;
    /** @type {?} */
    DynamicMaterialFormInputControlComponent.prototype.layoutService;
    /** @type {?} */
    DynamicMaterialFormInputControlComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-material-form-input-control.component.js.map