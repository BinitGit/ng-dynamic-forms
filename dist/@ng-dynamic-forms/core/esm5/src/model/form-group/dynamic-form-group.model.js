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
import { DynamicFormControlModel } from "../dynamic-form-control.model";
import { serializable } from "../../decorator/serializable.decorator";
/** @type {?} */
export var DYNAMIC_FORM_CONTROL_TYPE_GROUP = "GROUP";
/**
 * @record
 */
export function DynamicFormGroupModelConfig() { }
/** @type {?|undefined} */
DynamicFormGroupModelConfig.prototype.group;
/** @type {?|undefined} */
DynamicFormGroupModelConfig.prototype.legend;
var DynamicFormGroupModel = /** @class */ (function (_super) {
    __extends(DynamicFormGroupModel, _super);
    function DynamicFormGroupModel(config, layout) {
        var _this = _super.call(this, config, layout) || this;
        _this.group = [];
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_GROUP;
        _this.group = Array.isArray(config.group) ? config.group : [];
        _this.legend = config.legend || null;
        return _this;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    DynamicFormGroupModel.prototype.get = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.group[index];
    };
    /**
     * @param {?} index
     * @param {?} controlModel
     * @return {?}
     */
    DynamicFormGroupModel.prototype.set = /**
     * @param {?} index
     * @param {?} controlModel
     * @return {?}
     */
    function (index, controlModel) {
        this.group[index] = controlModel;
    };
    /**
     * @param {?} controlModel
     * @return {?}
     */
    DynamicFormGroupModel.prototype.add = /**
     * @param {?} controlModel
     * @return {?}
     */
    function (controlModel) {
        this.group.push(controlModel);
    };
    /**
     * @param {?} index
     * @param {?} controlModel
     * @return {?}
     */
    DynamicFormGroupModel.prototype.insert = /**
     * @param {?} index
     * @param {?} controlModel
     * @return {?}
     */
    function (index, controlModel) {
        this.group.splice(index, 0, controlModel);
    };
    /**
     * @param {?} index
     * @param {?} step
     * @return {?}
     */
    DynamicFormGroupModel.prototype.move = /**
     * @param {?} index
     * @param {?} step
     * @return {?}
     */
    function (index, step) {
        var _a;
        (_a = this.group).splice.apply(_a, [index + step, 0].concat(this.group.splice(index, 1)));
    };
    /**
     * @param {?} index
     * @return {?}
     */
    DynamicFormGroupModel.prototype.remove = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.group.splice(index, 1);
    };
    /**
     * @return {?}
     */
    DynamicFormGroupModel.prototype.size = /**
     * @return {?}
     */
    function () {
        return this.group.length;
    };
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
    return DynamicFormGroupModel;
}(DynamicFormControlModel));
export { DynamicFormGroupModel };
if (false) {
    /** @type {?} */
    DynamicFormGroupModel.prototype.group;
    /** @type {?} */
    DynamicFormGroupModel.prototype.legend;
    /** @type {?} */
    DynamicFormGroupModel.prototype.type;
}
//# sourceMappingURL=dynamic-form-group.model.js.map