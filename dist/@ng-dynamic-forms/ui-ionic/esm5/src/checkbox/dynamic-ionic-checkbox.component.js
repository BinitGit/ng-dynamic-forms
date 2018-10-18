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
import { Checkbox } from "@ionic/angular";
import { FormGroup } from "@angular/forms";
import { DynamicCheckboxModel, DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, } from "@ng-dynamic-forms/core";
var DynamicIonicCheckboxComponent = /** @class */ (function (_super) {
    __extends(DynamicIonicCheckboxComponent, _super);
    function DynamicIonicCheckboxComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicIonicCheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-ionic-checkbox",
                    template: "<ion-item [formGroup]=\"group\">\r\n\r\n    <ion-label *ngIf=\"model.label !== null\"\r\n               [innerHTML]=\"model.label\"\r\n               [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></ion-label>\r\n\r\n    <ion-checkbox [checked]=\"model.checked\"\r\n                  [dynamicId]=\"bindId && model.id\"\r\n                  [formControlName]=\"model.id\"\r\n                  [ngClass]=\"getClass('element', 'control')\"\r\n                  (ionBlur)=\"onBlur($event)\"\r\n                  (ionChange)=\"onChange($event)\"\r\n                  (ionFocus)=\"onFocus($event)\"></ion-checkbox>\r\n\r\n</ion-item>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicIonicCheckboxComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicIonicCheckboxComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        ionCheckbox: [{ type: ViewChild, args: ["ionCheckbox",] }]
    };
    return DynamicIonicCheckboxComponent;
}(DynamicFormControlComponent));
export { DynamicIonicCheckboxComponent };
if (false) {
    /** @type {?} */
    DynamicIonicCheckboxComponent.prototype.bindId;
    /** @type {?} */
    DynamicIonicCheckboxComponent.prototype.group;
    /** @type {?} */
    DynamicIonicCheckboxComponent.prototype.layout;
    /** @type {?} */
    DynamicIonicCheckboxComponent.prototype.model;
    /** @type {?} */
    DynamicIonicCheckboxComponent.prototype.blur;
    /** @type {?} */
    DynamicIonicCheckboxComponent.prototype.change;
    /** @type {?} */
    DynamicIonicCheckboxComponent.prototype.focus;
    /** @type {?} */
    DynamicIonicCheckboxComponent.prototype.ionCheckbox;
    /** @type {?} */
    DynamicIonicCheckboxComponent.prototype.layoutService;
    /** @type {?} */
    DynamicIonicCheckboxComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-ionic-checkbox.component.js.map