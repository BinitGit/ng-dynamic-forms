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
import { DynamicFormControlModel } from "../dynamic-form-control.model";
import { serializable } from "../../decorator/serializable.decorator";
/** @type {?} */
export const DYNAMIC_FORM_CONTROL_TYPE_GROUP = "GROUP";
/**
 * @record
 */
export function DynamicFormGroupModelConfig() { }
/** @type {?|undefined} */
DynamicFormGroupModelConfig.prototype.group;
/** @type {?|undefined} */
DynamicFormGroupModelConfig.prototype.legend;
export class DynamicFormGroupModel extends DynamicFormControlModel {
    /**
     * @param {?} config
     * @param {?=} layout
     */
    constructor(config, layout) {
        super(config, layout);
        this.group = [];
        this.type = DYNAMIC_FORM_CONTROL_TYPE_GROUP;
        this.group = Array.isArray(config.group) ? config.group : [];
        this.legend = config.legend || null;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    get(index) {
        return this.group[index];
    }
    /**
     * @param {?} index
     * @param {?} controlModel
     * @return {?}
     */
    set(index, controlModel) {
        this.group[index] = controlModel;
    }
    /**
     * @param {?} controlModel
     * @return {?}
     */
    add(controlModel) {
        this.group.push(controlModel);
    }
    /**
     * @param {?} index
     * @param {?} controlModel
     * @return {?}
     */
    insert(index, controlModel) {
        this.group.splice(index, 0, controlModel);
    }
    /**
     * @param {?} index
     * @param {?} step
     * @return {?}
     */
    move(index, step) {
        this.group.splice(index + step, 0, ...this.group.splice(index, 1));
    }
    /**
     * @param {?} index
     * @return {?}
     */
    remove(index) {
        this.group.splice(index, 1);
    }
    /**
     * @return {?}
     */
    size() {
        return this.group.length;
    }
}
__decorate([
    serializable(),
    __metadata("design:type", Array)
], DynamicFormGroupModel.prototype, "group", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicFormGroupModel.prototype, "legend", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicFormGroupModel.prototype, "type", void 0);
if (false) {
    /** @type {?} */
    DynamicFormGroupModel.prototype.group;
    /** @type {?} */
    DynamicFormGroupModel.prototype.legend;
    /** @type {?} */
    DynamicFormGroupModel.prototype.type;
}
//# sourceMappingURL=dynamic-form-group.model.js.map