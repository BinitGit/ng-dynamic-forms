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
import { DynamicOptionControlModel } from "../dynamic-option-control.model";
import { serializable } from "../../decorator/serializable.decorator";
/** @type {?} */
export const DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP = "RADIO_GROUP";
/**
 * @record
 * @template T
 */
export function DynamicRadioGroupModelConfig() { }
/** @type {?|undefined} */
DynamicRadioGroupModelConfig.prototype.legend;
/**
 * @template T
 */
export class DynamicRadioGroupModel extends DynamicOptionControlModel {
    /**
     * @param {?} config
     * @param {?=} layout
     */
    constructor(config, layout) {
        super(config, layout);
        this.type = DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP;
        this.legend = config.legend || null;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    select(index) {
        this.valueUpdates.next(this.get(index).value);
    }
}
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicRadioGroupModel.prototype, "legend", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicRadioGroupModel.prototype, "type", void 0);
if (false) {
    /** @type {?} */
    DynamicRadioGroupModel.prototype.legend;
    /** @type {?} */
    DynamicRadioGroupModel.prototype.type;
}
//# sourceMappingURL=dynamic-radio-group.model.js.map