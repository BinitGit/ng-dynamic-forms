var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { DynamicFormValueControlModel } from "./dynamic-form-value-control.model";
import { serializable } from "../decorator/serializable.decorator";
import { isBoolean } from "../utils/core.utils";
/**
 * @record
 */
export function DynamicCheckControlModelConfig() { }
/** @type {?|undefined} */
DynamicCheckControlModelConfig.prototype.labelPosition;
/**
 * @abstract
 */
export class DynamicCheckControlModel extends DynamicFormValueControlModel {
    /**
     * @param {?} config
     * @param {?=} layout
     */
    constructor(config, layout) {
        super(config, layout);
        this.labelPosition = config.labelPosition || null;
        this.value = isBoolean(this.value) ? this.value : false;
    }
    /**
     * @return {?}
     */
    get checked() {
        return !!this.value;
    }
    /**
     * @param {?} checked
     * @return {?}
     */
    set checked(checked) {
        this.valueUpdates.next(checked);
    }
    /**
     * @return {?}
     */
    toggle() {
        this.checked = !this.checked;
    }
}
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicCheckControlModel.prototype, "labelPosition", void 0);
if (false) {
    /** @type {?} */
    DynamicCheckControlModel.prototype.labelPosition;
}
//# sourceMappingURL=dynamic-check-control.model.js.map