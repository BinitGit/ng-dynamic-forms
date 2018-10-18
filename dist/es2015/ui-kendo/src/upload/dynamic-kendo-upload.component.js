/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { UploadComponent } from "@progress/kendo-angular-upload";
import { DynamicFileUploadModel, DynamicFormLayoutService, DynamicFormValidationService } from "@ng-dynamic-forms/core";
import { KENDO_TEMPLATE_DIRECTIVES } from "../dynamic-kendo-form.const";
import { DynamicKendoTemplateableFormControlComponent } from "../dynamic-kendo-templateable-form-control.component";
export class DynamicKendoUploadComponent extends DynamicKendoTemplateableFormControlComponent {
    /**
     * @param {?} layoutService
     * @param {?} validationService
     */
    constructor(layoutService, validationService) {
        super(layoutService, validationService);
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.templateDirectives = KENDO_TEMPLATE_DIRECTIVES;
        this.bindId = true;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.customEvent = new EventEmitter();
        this.focus = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get viewChild() {
        return this.kendoUpload;
    }
}
DynamicKendoUploadComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-kendo-upload",
                template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <kendo-upload #kendoUpload\r\n                  [accept]=\"model.getAdditional('accept')\"\r\n                  [autoUpload]=\"model.autoUpload\"\r\n                  [batch]=\"model.getAdditional('batch', false)\"\r\n                  [dynamicId]=\"bindId && model.id\"\r\n                  [formControlName]=\"model.id\"\r\n                  [multiple]=\"model.multiple\"\r\n                  [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n                  [removeField]=\"model.getAdditional('removeField', 'fileNames')\"\r\n                  [removeMethod]=\"model.getAdditional('removeMethod', 'POST')\"\r\n                  [removeUrl]=\"model.removeUrl\"\r\n                  [responseType]=\"model.getAdditional('responseType', 'json')\"\r\n                  [saveField]=\"model.getAdditional('saveField', 'files')\"\r\n                  [saveMethod]=\"model.getAdditional('saveMethod', 'POST')\"\r\n                  [saveUrl]=\"model.url\"\r\n                  [showFileList]=\"model.showFileList\"\r\n                  [tabIndex]=\"model.tabIndex\"\r\n                  [withCredentials]=\"model.getAdditional('withCredentials', true)\"\r\n                  (blur)=\"onBlur($event)\"\r\n                  (cancel)=\"onCustomEvent($event, 'cancel')\"\r\n                  (change)=\"onChange($event)\"\r\n                  (clear)=\"onCustomEvent($event, 'clear')\"\r\n                  (complete)=\"onCustomEvent($event, 'complete')\"\r\n                  (error)=\"onCustomEvent($event, 'error')\"\r\n                  (focus)=\"onFocus($event)\"\r\n                  (remove)=\"onCustomEvent($event, 'remove')\"\r\n                  (select)=\"onCustomEvent($event, 'select')\"\r\n                  (success)=\"onCustomEvent($event, 'succes')\"\r\n                  (upload)=\"onCustomEvent($event, 'upload')\"\r\n                  (uploadProgress)=\"onCustomEvent($event, 'uploadProgress')\"\r\n                  (valueChange)=\"onChange($event)\"></kendo-upload>\r\n\r\n</ng-container>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicKendoUploadComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicKendoUploadComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    templates: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    customEvent: [{ type: Output }],
    focus: [{ type: Output }],
    kendoUpload: [{ type: ViewChild, args: ["kendoUpload",] }]
};
if (false) {
    /** @type {?} */
    DynamicKendoUploadComponent.prototype.templateDirectives;
    /** @type {?} */
    DynamicKendoUploadComponent.prototype.bindId;
    /** @type {?} */
    DynamicKendoUploadComponent.prototype.group;
    /** @type {?} */
    DynamicKendoUploadComponent.prototype.layout;
    /** @type {?} */
    DynamicKendoUploadComponent.prototype.model;
    /** @type {?} */
    DynamicKendoUploadComponent.prototype.templates;
    /** @type {?} */
    DynamicKendoUploadComponent.prototype.blur;
    /** @type {?} */
    DynamicKendoUploadComponent.prototype.change;
    /** @type {?} */
    DynamicKendoUploadComponent.prototype.customEvent;
    /** @type {?} */
    DynamicKendoUploadComponent.prototype.focus;
    /** @type {?} */
    DynamicKendoUploadComponent.prototype.kendoUpload;
    /** @type {?} */
    DynamicKendoUploadComponent.prototype.layoutService;
    /** @type {?} */
    DynamicKendoUploadComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-kendo-upload.component.js.map