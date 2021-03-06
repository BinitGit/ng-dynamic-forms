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
import { Toggle } from "@ionic/angular";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicSwitchModel } from "@ng-dynamic-forms/core";
var DynamicIonicToggleComponent = /** @class */ (function (_super) {
    __extends(DynamicIonicToggleComponent, _super);
    function DynamicIonicToggleComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicIonicToggleComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-ionic-toggle",
                    template: "<ion-item [formGroup]=\"group\">\r\n\r\n    <ion-label *ngIf=\"model.label !== null\"\r\n               [innerHTML]=\"model.label\"\r\n               [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></ion-label>\r\n\r\n    <ion-toggle [checked]=\"model.checked\"\r\n                [dynamicId]=\"bindId && model.id\"\r\n                [formControlName]=\"model.id\"\r\n                [ngClass]=\"getClass('element', 'control')\"\r\n                (ionBlur)=\"onBlur($event)\"\r\n                (ionChange)=\"onChange($event)\"\r\n                (ionFocus)=\"onFocus($event)\"></ion-toggle>\r\n\r\n</ion-item>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicIonicToggleComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicIonicToggleComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        ionToggle: [{ type: ViewChild, args: ["ionToggle",] }]
    };
    return DynamicIonicToggleComponent;
}(DynamicFormControlComponent));
export { DynamicIonicToggleComponent };
if (false) {
    /** @type {?} */
    DynamicIonicToggleComponent.prototype.bindId;
    /** @type {?} */
    DynamicIonicToggleComponent.prototype.group;
    /** @type {?} */
    DynamicIonicToggleComponent.prototype.layout;
    /** @type {?} */
    DynamicIonicToggleComponent.prototype.model;
    /** @type {?} */
    DynamicIonicToggleComponent.prototype.blur;
    /** @type {?} */
    DynamicIonicToggleComponent.prototype.change;
    /** @type {?} */
    DynamicIonicToggleComponent.prototype.focus;
    /** @type {?} */
    DynamicIonicToggleComponent.prototype.ionToggle;
    /** @type {?} */
    DynamicIonicToggleComponent.prototype.layoutService;
    /** @type {?} */
    DynamicIonicToggleComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-ionic-toggle.component.js.map