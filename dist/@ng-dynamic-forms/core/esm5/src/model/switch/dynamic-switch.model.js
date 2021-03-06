var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { DynamicCheckControlModel } from "../dynamic-check-control.model";
import { serializable } from "../../decorator/serializable.decorator";
/** @type {?} */
export var DYNAMIC_FORM_CONTROL_TYPE_SWITCH = "SWITCH";
/**
 * @record
 */
export function DynamicSwitchModelConfig() { }
/** @type {?|undefined} */
DynamicSwitchModelConfig.prototype.offLabel;
/** @type {?|undefined} */
DynamicSwitchModelConfig.prototype.onLabel;
var DynamicSwitchModel = /** @class */ (function (_super) {
    __extends(DynamicSwitchModel, _super);
    function DynamicSwitchModel(config, layout) {
        var _this = _super.call(this, config, layout) || this;
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_SWITCH;
        _this.offLabel = config.offLabel || null;
        _this.onLabel = config.onLabel || null;
        return _this;
    }
    __decorate([
        serializable(),
        __metadata("design:type", Object)
    ], DynamicSwitchModel.prototype, "offLabel", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Object)
    ], DynamicSwitchModel.prototype, "onLabel", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicSwitchModel.prototype, "type", void 0);
    return DynamicSwitchModel;
}(DynamicCheckControlModel));
export { DynamicSwitchModel };
if (false) {
    /** @type {?} */
    DynamicSwitchModel.prototype.offLabel;
    /** @type {?} */
    DynamicSwitchModel.prototype.onLabel;
    /** @type {?} */
    DynamicSwitchModel.prototype.type;
}
//# sourceMappingURL=dynamic-switch.model.js.map