/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Editor } from "primeng/primeng";
import { DynamicEditorModel, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent } from "@ng-dynamic-forms/core";
export class DynamicPrimeNGEditorComponent extends DynamicFormControlComponent {
    /**
     * @param {?} layoutService
     * @param {?} validationService
     */
    constructor(layoutService, validationService) {
        super(layoutService, validationService);
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.bindId = true;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.customEvent = new EventEmitter();
        this.focus = new EventEmitter();
    }
}
DynamicPrimeNGEditorComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-primeng-editor",
                template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <p-editor #pEditor\r\n              [dynamicId]=\"bindId && model.id\"\r\n              [formats]=\"model.getAdditional('formats', null)\"\r\n              [formControlName]=\"model.id\"\r\n              [ngClass]=\"getClass('element','control')\"\r\n              (onSelectionChange)=\"onCustomEvent($event, 'onSelectionChange')\"\r\n              (onTextChange)=\"onChange($event)\"></p-editor>\r\n\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicPrimeNGEditorComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicPrimeNGEditorComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    customEvent: [{ type: Output }],
    focus: [{ type: Output }],
    pEditor: [{ type: ViewChild, args: ["pEditor",] }]
};
if (false) {
    /** @type {?} */
    DynamicPrimeNGEditorComponent.prototype.bindId;
    /** @type {?} */
    DynamicPrimeNGEditorComponent.prototype.group;
    /** @type {?} */
    DynamicPrimeNGEditorComponent.prototype.layout;
    /** @type {?} */
    DynamicPrimeNGEditorComponent.prototype.model;
    /** @type {?} */
    DynamicPrimeNGEditorComponent.prototype.blur;
    /** @type {?} */
    DynamicPrimeNGEditorComponent.prototype.change;
    /** @type {?} */
    DynamicPrimeNGEditorComponent.prototype.customEvent;
    /** @type {?} */
    DynamicPrimeNGEditorComponent.prototype.focus;
    /** @type {?} */
    DynamicPrimeNGEditorComponent.prototype.pEditor;
    /** @type {?} */
    DynamicPrimeNGEditorComponent.prototype.layoutService;
    /** @type {?} */
    DynamicPrimeNGEditorComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-primeng-editor.component.js.map