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
import { InputTextarea } from "primeng/primeng";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicTextAreaModel } from "@ng-dynamic-forms/core";
var DynamicPrimeNGTextAreaComponent = /** @class */ (function (_super) {
    __extends(DynamicPrimeNGTextAreaComponent, _super);
    function DynamicPrimeNGTextAreaComponent(layoutService, validationService) {
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
    DynamicPrimeNGTextAreaComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-primeng-textarea",
                    template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <textarea pInputTextarea #pInputTextarea\r\n              [cols]=\"model.cols\"\r\n              [dynamicId]=\"bindId && model.id\"\r\n              [formControlName]=\"model.id\"\r\n              [maxlength]=\"model.maxLength\"\r\n              [minlength]=\"model.minLength\"\r\n              [name]=\"model.name\"\r\n              [ngClass]=\"getClass('element', 'control')\"\r\n              [placeholder]=\"model.placeholder\"\r\n              [readonly]=\"model.readOnly\"\r\n              [required]=\"model.required\"\r\n              [rows]=\"model.rows\"\r\n              [spellcheck]=\"model.spellCheck\"\r\n              [tabindex]=\"model.tabIndex\"\r\n              [wrap]=\"model.wrap\"\r\n              (blur)=\"onBlur($event)\"\r\n              (change)=\"onChange($event)\"\r\n              (focus)=\"onFocus($event)\"\r\n              (onResize)=\"onCustomEvent($event, 'onResize')\"></textarea>\r\n\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicPrimeNGTextAreaComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicPrimeNGTextAreaComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        customEvent: [{ type: Output }],
        focus: [{ type: Output }],
        pInputTextArea: [{ type: ViewChild, args: ["pInputTextarea",] }]
    };
    return DynamicPrimeNGTextAreaComponent;
}(DynamicFormControlComponent));
export { DynamicPrimeNGTextAreaComponent };
if (false) {
    /** @type {?} */
    DynamicPrimeNGTextAreaComponent.prototype.bindId;
    /** @type {?} */
    DynamicPrimeNGTextAreaComponent.prototype.group;
    /** @type {?} */
    DynamicPrimeNGTextAreaComponent.prototype.layout;
    /** @type {?} */
    DynamicPrimeNGTextAreaComponent.prototype.model;
    /** @type {?} */
    DynamicPrimeNGTextAreaComponent.prototype.blur;
    /** @type {?} */
    DynamicPrimeNGTextAreaComponent.prototype.change;
    /** @type {?} */
    DynamicPrimeNGTextAreaComponent.prototype.customEvent;
    /** @type {?} */
    DynamicPrimeNGTextAreaComponent.prototype.focus;
    /** @type {?} */
    DynamicPrimeNGTextAreaComponent.prototype.pInputTextArea;
    /** @type {?} */
    DynamicPrimeNGTextAreaComponent.prototype.layoutService;
    /** @type {?} */
    DynamicPrimeNGTextAreaComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-primeng-textarea.component.js.map