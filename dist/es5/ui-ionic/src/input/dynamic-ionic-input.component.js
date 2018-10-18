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
import { Input as IonInput } from "@ionic/angular";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicInputModel } from "@ng-dynamic-forms/core";
var DynamicIonicInputComponent = /** @class */ (function (_super) {
    __extends(DynamicIonicInputComponent, _super);
    function DynamicIonicInputComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicIonicInputComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-ionic-input",
                    template: "<ion-item [formGroup]=\"group\">\r\n\r\n    <ion-label *ngIf=\"model.label !== null\"\r\n               [innerHTML]=\"model.label\"\r\n               [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></ion-label>\r\n\r\n    <ion-input #ionInput\r\n               [autocomplete]=\"model.autocomplete\"\r\n               [autocorrect]=\"model.getAdditional('autocorrect', 'off')\"\r\n               [clearInput]=\"model.getAdditional('clearInput', true)\"\r\n               [dynamicId]=\"bindId && model.id\"\r\n               [formControlName]=\"model.id\"\r\n               [max]=\"model.max\"\r\n               [min]=\"model.min\"\r\n               [ngClass]=\"getClass('element', 'control')\"\r\n               [pattern]=\"model.pattern\"\r\n               [placeholder]=\"model.placeholder\"\r\n               [readonly]=\"model.readOnly\"\r\n               [step]=\"model.step\"\r\n               [textMask]=\"{mask: (model.mask || false), showMask: model.mask && !(model.placeholder)}\"\r\n               [type]=\"model.inputType\"\r\n               (ionBlur)=\"onBlur($event)\"\r\n               (ionChange)=\"onChange($event)\"\r\n               (ionFocus)=\"onFocus($event)\"></ion-input>\r\n\r\n</ion-item>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicIonicInputComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicIonicInputComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        ionInput: [{ type: ViewChild, args: ["ionInput",] }]
    };
    return DynamicIonicInputComponent;
}(DynamicFormControlComponent));
export { DynamicIonicInputComponent };
if (false) {
    /** @type {?} */
    DynamicIonicInputComponent.prototype.bindId;
    /** @type {?} */
    DynamicIonicInputComponent.prototype.group;
    /** @type {?} */
    DynamicIonicInputComponent.prototype.layout;
    /** @type {?} */
    DynamicIonicInputComponent.prototype.model;
    /** @type {?} */
    DynamicIonicInputComponent.prototype.blur;
    /** @type {?} */
    DynamicIonicInputComponent.prototype.change;
    /** @type {?} */
    DynamicIonicInputComponent.prototype.focus;
    /** @type {?} */
    DynamicIonicInputComponent.prototype.ionInput;
    /** @type {?} */
    DynamicIonicInputComponent.prototype.layoutService;
    /** @type {?} */
    DynamicIonicInputComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-ionic-input.component.js.map