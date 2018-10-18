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
import { serializable, serialize } from "../../decorator/serializable.decorator";
import { isFunction, isNumber } from "../../utils/core.utils";
export class DynamicFormArrayGroupModel {
    /**
     * @param {?} context
     * @param {?=} group
     * @param {?=} index
     */
    constructor(context, group = [], index = -1) {
        this.$implicit = this;
        this.context = context;
        this.group = group;
        this.index = index;
    }
    /**
     * @return {?}
     */
    get parent() {
        return this.context;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    get(index) {
        return this.group[index];
    }
    /**
     * @return {?}
     */
    toJSON() {
        return serialize(this);
    }
}
__decorate([
    serializable(),
    __metadata("design:type", Array)
], DynamicFormArrayGroupModel.prototype, "group", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Number)
], DynamicFormArrayGroupModel.prototype, "index", void 0);
if (false) {
    /** @type {?} */
    DynamicFormArrayGroupModel.prototype.$implicit;
    /** @type {?} */
    DynamicFormArrayGroupModel.prototype.context;
    /** @type {?} */
    DynamicFormArrayGroupModel.prototype.group;
    /** @type {?} */
    DynamicFormArrayGroupModel.prototype.index;
}
/** @type {?} */
export const DYNAMIC_FORM_CONTROL_TYPE_ARRAY = "ARRAY";
/**
 * @record
 */
export function DynamicFormArrayModelConfig() { }
/** @type {?|undefined} */
DynamicFormArrayModelConfig.prototype.groupAsyncValidators;
/** @type {?|undefined} */
DynamicFormArrayModelConfig.prototype.groupFactory;
/** @type {?|undefined} */
DynamicFormArrayModelConfig.prototype.groupValidators;
/** @type {?|undefined} */
DynamicFormArrayModelConfig.prototype.groups;
/** @type {?|undefined} */
DynamicFormArrayModelConfig.prototype.initialCount;
export class DynamicFormArrayModel extends DynamicFormControlModel {
    /**
     * @param {?} config
     * @param {?=} layout
     */
    constructor(config, layout) {
        super(config, layout);
        this.groups = [];
        this.type = DYNAMIC_FORM_CONTROL_TYPE_ARRAY;
        if (isFunction(config.groupFactory)) {
            this.groupFactory = config.groupFactory;
        }
        else {
            throw new Error("group factory function must be specified for DynamicFormArrayModel");
        }
        this.groupAsyncValidators = config.groupAsyncValidators || null;
        this.groupPrototype = this.groupFactory();
        this.groupValidators = config.groupValidators || null;
        this.initialCount = isNumber(config.initialCount) ? config.initialCount : 1;
        if (Array.isArray(config.groups)) {
            config.groups.forEach((arrayGroup, index) => {
                this.groups.push(new DynamicFormArrayGroupModel(this, arrayGroup.group, arrayGroup.index || index));
            });
        }
        else {
            for (let index = 0; index < this.initialCount; index++) {
                this.addGroup();
            }
        }
    }
    /**
     * @return {?}
     */
    updateGroupIndex() {
        this.groups.forEach((group, index) => group.index = index);
    }
    /**
     * @return {?}
     */
    get size() {
        return this.groups.length;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    get(index) {
        return this.groups[index];
    }
    /**
     * @return {?}
     */
    addGroup() {
        return this.insertGroup(this.groups.length);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    insertGroup(index) {
        /** @type {?} */
        let group = new DynamicFormArrayGroupModel(this, this.groupFactory());
        this.groups.splice(index, 0, group);
        this.updateGroupIndex();
        return group;
    }
    /**
     * @param {?} index
     * @param {?} step
     * @return {?}
     */
    moveGroup(index, step) {
        this.groups.splice(index + step, 0, ...this.groups.splice(index, 1));
        this.updateGroupIndex();
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeGroup(index) {
        this.groups.splice(index, 1);
        this.updateGroupIndex();
    }
}
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicFormArrayModel.prototype, "groupAsyncValidators", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicFormArrayModel.prototype, "groupValidators", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Array)
], DynamicFormArrayModel.prototype, "groups", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Number)
], DynamicFormArrayModel.prototype, "initialCount", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Array)
], DynamicFormArrayModel.prototype, "groupPrototype", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicFormArrayModel.prototype, "type", void 0);
if (false) {
    /** @type {?} */
    DynamicFormArrayModel.prototype.groupAsyncValidators;
    /** @type {?} */
    DynamicFormArrayModel.prototype.groupFactory;
    /** @type {?} */
    DynamicFormArrayModel.prototype.groupValidators;
    /** @type {?} */
    DynamicFormArrayModel.prototype.groups;
    /** @type {?} */
    DynamicFormArrayModel.prototype.initialCount;
    /** @type {?} */
    DynamicFormArrayModel.prototype.groupPrototype;
    /** @type {?} */
    DynamicFormArrayModel.prototype.type;
}
//# sourceMappingURL=dynamic-form-array.model.js.map