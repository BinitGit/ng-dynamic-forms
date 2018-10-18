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
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Editor } from "primeng/primeng";
import { DynamicEditorModel, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent } from "@ng-dynamic-forms/core";
var DynamicPrimeNGEditorComponent = /** @class */ (function (_super) {
    __extends(DynamicPrimeNGEditorComponent, _super);
    function DynamicPrimeNGEditorComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.customEvent = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicPrimeNGEditorComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-primeng-editor",
                    template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <p-editor #pEditor\r\n              [dynamicId]=\"bindId && model.id\"\r\n              [formats]=\"model.getAdditional('formats', null)\"\r\n              [formControlName]=\"model.id\"\r\n              [ngClass]=\"getClass('element','control')\"\r\n              (onSelectionChange)=\"onCustomEvent($event, 'onSelectionChange')\"\r\n              (onTextChange)=\"onChange($event)\"></p-editor>\r\n\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicPrimeNGEditorComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
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
    return DynamicPrimeNGEditorComponent;
}(DynamicFormControlComponent));
export { DynamicPrimeNGEditorComponent };
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