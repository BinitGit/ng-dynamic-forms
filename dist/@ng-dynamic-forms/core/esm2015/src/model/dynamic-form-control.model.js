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
import { Subject } from "rxjs";
import { serializable, serialize } from "../decorator/serializable.decorator";
import { isBoolean, isObject, isString } from "../utils/core.utils";
/**
 * @record
 */
export function DynamicFormControlModelConfig() { }
/** @type {?|undefined} */
DynamicFormControlModelConfig.prototype.asyncValidators;
/** @type {?|undefined} */
DynamicFormControlModelConfig.prototype.disabled;
/** @type {?|undefined} */
DynamicFormControlModelConfig.prototype.errorMessages;
/** @type {?|undefined} */
DynamicFormControlModelConfig.prototype.hidden;
/** @type {?} */
DynamicFormControlModelConfig.prototype.id;
/** @type {?|undefined} */
DynamicFormControlModelConfig.prototype.label;
/** @type {?|undefined} */
DynamicFormControlModelConfig.prototype.labelTooltip;
/** @type {?|undefined} */
DynamicFormControlModelConfig.prototype.controlTooltip;
/** @type {?|undefined} */
DynamicFormControlModelConfig.prototype.name;
/** @type {?|undefined} */
DynamicFormControlModelConfig.prototype.relation;
/** @type {?|undefined} */
DynamicFormControlModelConfig.prototype.updateOn;
/** @type {?|undefined} */
DynamicFormControlModelConfig.prototype.validators;
/**
 * @abstract
 */
export class DynamicFormControlModel {
    /**
     * @param {?} config
     * @param {?=} layout
     */
    constructor(config, layout = null) {
        this.parent = null;
        this.asyncValidators = config.asyncValidators || null;
        this.errorMessages = config.errorMessages || null;
        this.hidden = isBoolean(config.hidden) ? config.hidden : false;
        this.id = config.id;
        this.label = config.label || null;
        this.labelTooltip = config.labelTooltip || null;
        this.controlTooltip = config.controlTooltip || null;
        this.layout = layout;
        this.name = config.name || config.id;
        this.relation = Array.isArray(config.relation) ? config.relation : [];
        this.updateOn = isString(config.updateOn) ? config.updateOn : null;
        this.validators = config.validators || null;
        this.disabled = isBoolean(config.disabled) ? config.disabled : false;
        this.disabledUpdates = new Subject();
        this.disabledUpdates.subscribe(disabled => this.disabled = disabled);
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = value;
    }
    /**
     * @return {?}
     */
    get hasErrorMessages() {
        return isObject(this.errorMessages);
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
    __metadata("design:type", Object)
], DynamicFormControlModel.prototype, "asyncValidators", void 0);
__decorate([
    serializable("disabled"),
    __metadata("design:type", Boolean)
], DynamicFormControlModel.prototype, "_disabled", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicFormControlModel.prototype, "errorMessages", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicFormControlModel.prototype, "hidden", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicFormControlModel.prototype, "id", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicFormControlModel.prototype, "label", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicFormControlModel.prototype, "labelTooltip", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicFormControlModel.prototype, "controlTooltip", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicFormControlModel.prototype, "layout", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicFormControlModel.prototype, "name", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Array)
], DynamicFormControlModel.prototype, "relation", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicFormControlModel.prototype, "updateOn", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicFormControlModel.prototype, "validators", void 0);
if (false) {
    /** @type {?} */
    DynamicFormControlModel.prototype.asyncValidators;
    /** @type {?} */
    DynamicFormControlModel.prototype._disabled;
    /** @type {?} */
    DynamicFormControlModel.prototype.disabledUpdates;
    /** @type {?} */
    DynamicFormControlModel.prototype.errorMessages;
    /** @type {?} */
    DynamicFormControlModel.prototype.hidden;
    /** @type {?} */
    DynamicFormControlModel.prototype.id;
    /** @type {?} */
    DynamicFormControlModel.prototype.label;
    /** @type {?} */
    DynamicFormControlModel.prototype.labelTooltip;
    /** @type {?} */
    DynamicFormControlModel.prototype.controlTooltip;
    /** @type {?} */
    DynamicFormControlModel.prototype.layout;
    /** @type {?} */
    DynamicFormControlModel.prototype.name;
    /** @type {?} */
    DynamicFormControlModel.prototype.parent;
    /** @type {?} */
    DynamicFormControlModel.prototype.relation;
    /** @type {?} */
    DynamicFormControlModel.prototype.updateOn;
    /** @type {?} */
    DynamicFormControlModel.prototype.validators;
    /** @type {?} */
    DynamicFormControlModel.prototype.type;
}
//# sourceMappingURL=dynamic-form-control.model.js.map