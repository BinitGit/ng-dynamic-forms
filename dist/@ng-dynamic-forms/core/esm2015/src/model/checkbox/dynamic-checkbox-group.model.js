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
import { DynamicFormGroupModel } from "../form-group/dynamic-form-group.model";
import { serializable } from "../../decorator/serializable.decorator";
/** @type {?} */
export const DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP = "CHECKBOX_GROUP";
export class DynamicCheckboxGroupModel extends DynamicFormGroupModel {
    /**
     * @param {?} config
     * @param {?=} layout
     */
    constructor(config, layout) {
        super(config, layout);
        this.type = DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP;
    }
    /**
     * @param {...?} indices
     * @return {?}
     */
    check(...indices) {
        indices.forEach(index => this.group[index].checked = true);
    }
    /**
     * @param {...?} indices
     * @return {?}
     */
    uncheck(...indices) {
        indices.forEach(index => this.group[index].checked = false);
    }
    /**
     * @return {?}
     */
    checkAll() {
        this.group.forEach(model => model.checked = true);
    }
    /**
     * @return {?}
     */
    uncheckAll() {
        this.group.forEach(model => model.checked = false);
    }
}
__decorate([
    serializable(),
    __metadata("design:type", Array)
], DynamicCheckboxGroupModel.prototype, "group", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicCheckboxGroupModel.prototype, "type", void 0);
if (false) {
    /** @type {?} */
    DynamicCheckboxGroupModel.prototype.group;
    /** @type {?} */
    DynamicCheckboxGroupModel.prototype.type;
}
//# sourceMappingURL=dynamic-checkbox-group.model.js.map