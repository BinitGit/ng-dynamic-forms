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
import { ɵlooseIdentical as looseIdentical } from "@angular/core";
import { DynamicOptionControlModel } from "../dynamic-option-control.model";
import { serializable } from "../../decorator/serializable.decorator";
import { isBoolean, isFunction } from "../../utils/core.utils";
/** @type {?} */
export const DYNAMIC_FORM_CONTROL_TYPE_SELECT = "SELECT";
/**
 * @record
 * @template T
 */
export function DynamicSelectModelConfig() { }
/** @type {?|undefined} */
DynamicSelectModelConfig.prototype.compareWithFn;
/** @type {?|undefined} */
DynamicSelectModelConfig.prototype.filterable;
/** @type {?|undefined} */
DynamicSelectModelConfig.prototype.multiple;
/** @type {?|undefined} */
DynamicSelectModelConfig.prototype.placeholder;
/** @type {?|undefined} */
DynamicSelectModelConfig.prototype.prefix;
/** @type {?|undefined} */
DynamicSelectModelConfig.prototype.suffix;
/**
 * @template T
 */
export class DynamicSelectModel extends DynamicOptionControlModel {
    /**
     * @param {?} config
     * @param {?=} layout
     */
    constructor(config, layout) {
        super(config, layout);
        this.type = DYNAMIC_FORM_CONTROL_TYPE_SELECT;
        this.compareWithFn = isFunction(config.compareWithFn) ? config.compareWithFn : looseIdentical;
        this.filterable = isBoolean(config.filterable) ? config.filterable : false;
        this.multiple = isBoolean(config.multiple) ? config.multiple : false;
        this.placeholder = config.placeholder || "";
        this.prefix = config.prefix || null;
        this.suffix = config.suffix || null;
    }
    /**
     * @param {...?} indices
     * @return {?}
     */
    select(...indices) {
        /** @type {?} */
        let value = this.multiple ? indices.map(index => this.get(index).value) : this.get(indices[0]).value;
        this.valueUpdates.next(value);
    }
}
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicSelectModel.prototype, "filterable", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicSelectModel.prototype, "multiple", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicSelectModel.prototype, "placeholder", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicSelectModel.prototype, "prefix", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicSelectModel.prototype, "suffix", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicSelectModel.prototype, "type", void 0);
if (false) {
    /** @type {?} */
    DynamicSelectModel.prototype.compareWithFn;
    /** @type {?} */
    DynamicSelectModel.prototype.filterable;
    /** @type {?} */
    DynamicSelectModel.prototype.multiple;
    /** @type {?} */
    DynamicSelectModel.prototype.placeholder;
    /** @type {?} */
    DynamicSelectModel.prototype.prefix;
    /** @type {?} */
    DynamicSelectModel.prototype.suffix;
    /** @type {?} */
    DynamicSelectModel.prototype.type;
}
//# sourceMappingURL=dynamic-select.model.js.map