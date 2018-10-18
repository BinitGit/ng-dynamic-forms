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
import { Select } from "@ionic/angular";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicSelectModel } from "@ng-dynamic-forms/core";
var DynamicIonicSelectComponent = /** @class */ (function (_super) {
    __extends(DynamicIonicSelectComponent, _super);
    function DynamicIonicSelectComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicIonicSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-ionic-select",
                    template: "<ion-item [formGroup]=\"group\">\r\n\r\n    <ion-label *ngIf=\"model.label !== null\"\r\n               [innerHTML]=\"model.label\"\r\n               [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></ion-label>\r\n\r\n    <ion-select [cancelText]=\"model.getAdditional('cancelText', 'Cancel')\"\r\n                [compareWith]=\"model.compareWithFn\"\r\n                [dynamicId]=\"bindId && model.id\"\r\n                [formControlName]=\"model.id\"\r\n                [interface]=\"model.getAdditional('interface', 'alert')\"\r\n                [multiple]=\"model.multiple\"\r\n                [ngClass]=\"getClass('element', 'control')\"\r\n                [okText]=\"model.getAdditional('okText', 'OK')\"\r\n                [placeholder]=\"model.placeholder\"\r\n                (ionBlur)=\"onBlur($event)\"\r\n                (ionChange)=\"onChange($event)\"\r\n                (ionFocus)=\"onFocus($event)\">\r\n\r\n        <ion-option *ngFor=\"let option of model.options$ | async\" [value]=\"option.value\">{{ option.label }}</ion-option>\r\n\r\n    </ion-select>\r\n\r\n</ion-item>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicIonicSelectComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicIonicSelectComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        ionSelect: [{ type: ViewChild, args: ["ionSelect",] }]
    };
    return DynamicIonicSelectComponent;
}(DynamicFormControlComponent));
export { DynamicIonicSelectComponent };
if (false) {
    /** @type {?} */
    DynamicIonicSelectComponent.prototype.bindId;
    /** @type {?} */
    DynamicIonicSelectComponent.prototype.group;
    /** @type {?} */
    DynamicIonicSelectComponent.prototype.layout;
    /** @type {?} */
    DynamicIonicSelectComponent.prototype.model;
    /** @type {?} */
    DynamicIonicSelectComponent.prototype.blur;
    /** @type {?} */
    DynamicIonicSelectComponent.prototype.change;
    /** @type {?} */
    DynamicIonicSelectComponent.prototype.focus;
    /** @type {?} */
    DynamicIonicSelectComponent.prototype.ionSelect;
    /** @type {?} */
    DynamicIonicSelectComponent.prototype.layoutService;
    /** @type {?} */
    DynamicIonicSelectComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-ionic-select.component.js.map