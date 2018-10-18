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
import { Textarea } from "@ionic/angular";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicTextAreaModel } from "@ng-dynamic-forms/core";
var DynamicIonicTextAreaComponent = /** @class */ (function (_super) {
    __extends(DynamicIonicTextAreaComponent, _super);
    function DynamicIonicTextAreaComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicIonicTextAreaComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-ionic-textarea",
                    template: "<ion-item [formGroup]=\"group\">\r\n\r\n    <ion-label *ngIf=\"model.label !== null\"\r\n               [innerHTML]=\"model.label\"\r\n               [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></ion-label>\r\n\r\n    <ion-textarea #ionTextArea clearInput=\"true\"\r\n                  [dynamicId]=\"bindId && model.id\"\r\n                  [formControlName]=\"model.id\"\r\n                  [ngClass]=\"getClass('element', 'control')\"\r\n                  [placeholder]=\"model.placeholder\"\r\n                  [readonly]=\"model.readOnly\"\r\n                  (ionBlur)=\"onBlur($event)\"\r\n                  (ionChange)=\"onChange($event)\"\r\n                  (ionFocus)=\"onFocus($event)\"></ion-textarea>\r\n\r\n</ion-item>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicIonicTextAreaComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicIonicTextAreaComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        ionTextArea: [{ type: ViewChild, args: ["ionTextArea",] }]
    };
    return DynamicIonicTextAreaComponent;
}(DynamicFormControlComponent));
export { DynamicIonicTextAreaComponent };
if (false) {
    /** @type {?} */
    DynamicIonicTextAreaComponent.prototype.bindId;
    /** @type {?} */
    DynamicIonicTextAreaComponent.prototype.group;
    /** @type {?} */
    DynamicIonicTextAreaComponent.prototype.layout;
    /** @type {?} */
    DynamicIonicTextAreaComponent.prototype.model;
    /** @type {?} */
    DynamicIonicTextAreaComponent.prototype.blur;
    /** @type {?} */
    DynamicIonicTextAreaComponent.prototype.change;
    /** @type {?} */
    DynamicIonicTextAreaComponent.prototype.focus;
    /** @type {?} */
    DynamicIonicTextAreaComponent.prototype.ionTextArea;
    /** @type {?} */
    DynamicIonicTextAreaComponent.prototype.layoutService;
    /** @type {?} */
    DynamicIonicTextAreaComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-ionic-textarea.component.js.map