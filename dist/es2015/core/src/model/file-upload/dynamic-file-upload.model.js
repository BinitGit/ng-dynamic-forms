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
export const DYNAMIC_FORM_CONTROL_TYPE_FILE_UPLOAD = "FILE_UPLOAD";
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
export class DynamicFileUploadModel extends DynamicFileControlModel {
    /**
     * @param {?} config
     * @param {?=} layout
     */
    constructor(config, layout) {
        super(config, layout);
        this.type = DYNAMIC_FORM_CONTROL_TYPE_FILE_UPLOAD;
        this.accept = Array.isArray(config.accept) ? config.accept : null;
        this.autoUpload = isBoolean(config.autoUpload) ? config.autoUpload : true;
        this.maxSize = isNumber(config.maxSize) ? config.maxSize : null;
        this.minSize = isNumber(config.minSize) ? config.minSize : null;
        this.removeUrl = config.removeUrl || null;
        this.showFileList = isBoolean(config.showFileList) ? config.showFileList : true;
        this.url = config.url || null;
    }
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