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
import { serializable, serialize } from "../../decorator/serializable.decorator";
import { isFunction, isNumber } from "../../utils/core.utils";
var DynamicFormArrayGroupModel = /** @class */ (function () {
    function DynamicFormArrayGroupModel(context, group, index) {
        if (group === void 0) { group = []; }
        if (index === void 0) { index = -1; }
        this.$implicit = this;
        this.context = context;
        this.group = group;
        this.index = index;
    }
    Object.defineProperty(DynamicFormArrayGroupModel.prototype, "parent", {
        get: /**
         * @return {?}
         */
        function () {
            return this.context;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} index
     * @return {?}
     */
    DynamicFormArrayGroupModel.prototype.get = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.group[index];
    };
    /**
     * @return {?}
     */
    DynamicFormArrayGroupModel.prototype.toJSON = /**
     * @return {?}
     */
    function () {
        return serialize(this);
    };
    __decorate([
        serializable(),
        __metadata("design:type", Array)
    ], DynamicFormArrayGroupModel.prototype, "group", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Number)
    ], DynamicFormArrayGroupModel.prototype, "index", void 0);
    return DynamicFormArrayGroupModel;
}());
export { DynamicFormArrayGroupModel };
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
export var DYNAMIC_FORM_CONTROL_TYPE_ARRAY = "ARRAY";
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
var DynamicFormArrayModel = /** @class */ (function (_super) {
    __extends(DynamicFormArrayModel, _super);
    function DynamicFormArrayModel(config, layout) {
        var _this = _super.call(this, config, layout) || this;
        _this.groups = [];
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_ARRAY;
        if (isFunction(config.groupFactory)) {
            _this.groupFactory = config.groupFactory;
        }
        else {
            throw new Error("group factory function must be specified for DynamicFormArrayModel");
        }
        _this.groupAsyncValidators = config.groupAsyncValidators || null;
        _this.groupPrototype = _this.groupFactory();
        _this.groupValidators = config.groupValidators || null;
        _this.initialCount = isNumber(config.initialCount) ? config.initialCount : 1;
        if (Array.isArray(config.groups)) {
            config.groups.forEach(function (arrayGroup, index) {
                _this.groups.push(new DynamicFormArrayGroupModel(_this, arrayGroup.group, arrayGroup.index || index));
            });
        }
        else {
            for (var index = 0; index < _this.initialCount; index++) {
                _this.addGroup();
            }
        }
        return _this;
    }
    /**
     * @return {?}
     */
    DynamicFormArrayModel.prototype.updateGroupIndex = /**
     * @return {?}
     */
    function () {
        this.groups.forEach(function (group, index) { return group.index = index; });
    };
    Object.defineProperty(DynamicFormArrayModel.prototype, "size", {
        get: /**
         * @return {?}
         */
        function () {
            return this.groups.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} index
     * @return {?}
     */
    DynamicFormArrayModel.prototype.get = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.groups[index];
    };
    /**
     * @return {?}
     */
    DynamicFormArrayModel.prototype.addGroup = /**
     * @return {?}
     */
    function () {
        return this.insertGroup(this.groups.length);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    DynamicFormArrayModel.prototype.insertGroup = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var group = new DynamicFormArrayGroupModel(this, this.groupFactory());
        this.groups.splice(index, 0, group);
        this.updateGroupIndex();
        return group;
    };
    /**
     * @param {?} index
     * @param {?} step
     * @return {?}
     */
    DynamicFormArrayModel.prototype.moveGroup = /**
     * @param {?} index
     * @param {?} step
     * @return {?}
     */
    function (index, step) {
        var _a;
        (_a = this.groups).splice.apply(_a, [index + step, 0].concat(this.groups.splice(index, 1)));
        this.updateGroupIndex();
    };
    /**
     * @param {?} index
     * @return {?}
     */
    DynamicFormArrayModel.prototype.removeGroup = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.groups.splice(index, 1);
        this.updateGroupIndex();
    };
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
    return DynamicFormArrayModel;
}(DynamicFormControlModel));
export { DynamicFormArrayModel };
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