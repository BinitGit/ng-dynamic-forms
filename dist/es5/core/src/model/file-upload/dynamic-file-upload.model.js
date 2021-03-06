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
import { DynamicFileControlModel } from "../dynamic-file-control.model";
import { serializable } from "../../decorator/serializable.decorator";
import { isBoolean, isNumber } from "../../utils/core.utils";
/** @type {?} */
export var DYNAMIC_FORM_CONTROL_TYPE_FILE_UPLOAD = "FILE_UPLOAD";
/**
 * @record
 */
export function DynamicFileUploadModelConfig() { }
/** @type {?|undefined} */
DynamicFileUploadModelConfig.prototype.accept;
/** @type {?|undefined} */
DynamicFileUploadModelConfig.prototype.autoUpload;
/** @type {?|undefined} */
DynamicFileUploadModelConfig.prototype.maxSize;
/** @type {?|undefined} */
DynamicFileUploadModelConfig.prototype.minSize;
/** @type {?|undefined} */
DynamicFileUploadModelConfig.prototype.removeUrl;
/** @type {?|undefined} */
DynamicFileUploadModelConfig.prototype.showFileList;
/** @type {?|undefined} */
DynamicFileUploadModelConfig.prototype.url;
var DynamicFileUploadModel = /** @class */ (function (_super) {
    __extends(DynamicFileUploadModel, _super);
    function DynamicFileUploadModel(config, layout) {
        var _this = _super.call(this, config, layout) || this;
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_FILE_UPLOAD;
        _this.accept = Array.isArray(config.accept) ? config.accept : null;
        _this.autoUpload = isBoolean(config.autoUpload) ? config.autoUpload : true;
        _this.maxSize = isNumber(config.maxSize) ? config.maxSize : null;
        _this.minSize = isNumber(config.minSize) ? config.minSize : null;
        _this.removeUrl = config.removeUrl || null;
        _this.showFileList = isBoolean(config.showFileList) ? config.showFileList : true;
        _this.url = config.url || null;
        return _this;
    }
    __decorate([
        serializable(),
        __metadata("design:type", Object)
    ], DynamicFileUploadModel.prototype, "accept", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Boolean)
    ], DynamicFileUploadModel.prototype, "autoUpload", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Object)
    ], DynamicFileUploadModel.prototype, "maxSize", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Object)
    ], DynamicFileUploadModel.prototype, "minSize", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Object)
    ], DynamicFileUploadModel.prototype, "removeUrl", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Boolean)
    ], DynamicFileUploadModel.prototype, "showFileList", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Object)
    ], DynamicFileUploadModel.prototype, "url", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicFileUploadModel.prototype, "type", void 0);
    return DynamicFileUploadModel;
}(DynamicFileControlModel));
export { DynamicFileUploadModel };
if (false) {
    /** @type {?} */
    DynamicFileUploadModel.prototype.accept;
    /** @type {?} */
    DynamicFileUploadModel.prototype.autoUpload;
    /** @type {?} */
    DynamicFileUploadModel.prototype.maxSize;
    /** @type {?} */
    DynamicFileUploadModel.prototype.minSize;
    /** @type {?} */
    DynamicFileUploadModel.prototype.removeUrl;
    /** @type {?} */
    DynamicFileUploadModel.prototype.showFileList;
    /** @type {?} */
    DynamicFileUploadModel.prototype.url;
    /** @type {?} */
    DynamicFileUploadModel.prototype.type;
}
//# sourceMappingURL=dynamic-file-upload.model.js.map