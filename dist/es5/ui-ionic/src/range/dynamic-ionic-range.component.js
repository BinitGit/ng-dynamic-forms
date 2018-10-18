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
import { Range } from "@ionic/angular";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicSliderModel } from "@ng-dynamic-forms/core";
var DynamicIonicRangeComponent = /** @class */ (function (_super) {
    __extends(DynamicIonicRangeComponent, _super);
    function DynamicIonicRangeComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicIonicRangeComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-ionic-range",
                    template: "<ion-item [formGroup]=\"group\">\r\n\r\n    <ion-label *ngIf=\"model.label !== null\"\r\n               [innerHTML]=\"model.label\"\r\n               [ngClass]=\"[getClass('element', 'label'), getClass('grid', 'label')]\"></ion-label>\r\n\r\n    <ion-range #ionRange\r\n               [debounce]=\"model.getAdditional('debounce', 0)\"\r\n               [dualKnobs]=\"model.getAdditional('dualKnobs', false)\"\r\n               [dynamicId]=\"bindId && model.id\"\r\n               [formControlName]=\"model.id\"\r\n               [max]=\"model.max\"\r\n               [min]=\"model.min\"\r\n               [ngClass]=\"getClass('element', 'control')\"\r\n               [pin]=\"model.getAdditional('pin', true)\"\r\n               [snaps]=\"model.getAdditional('snaps', true)\"\r\n               [step]=\"model.step\"\r\n               (ionBlur)=\"onBlur($event)\"\r\n               (ionChange)=\"onChange($event)\"\r\n               (ionFocus)=\"onFocus($event)\"></ion-range>\r\n\r\n</ion-item>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicIonicRangeComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicIonicRangeComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        ionRange: [{ type: ViewChild, args: ["ionRange",] }]
    };
    return DynamicIonicRangeComponent;
}(DynamicFormControlComponent));
export { DynamicIonicRangeComponent };
if (false) {
    /** @type {?} */
    DynamicIonicRangeComponent.prototype.bindId;
    /** @type {?} */
    DynamicIonicRangeComponent.prototype.group;
    /** @type {?} */
    DynamicIonicRangeComponent.prototype.layout;
    /** @type {?} */
    DynamicIonicRangeComponent.prototype.model;
    /** @type {?} */
    DynamicIonicRangeComponent.prototype.blur;
    /** @type {?} */
    DynamicIonicRangeComponent.prototype.change;
    /** @type {?} */
    DynamicIonicRangeComponent.prototype.focus;
    /** @type {?} */
    DynamicIonicRangeComponent.prototype.ionRange;
    /** @type {?} */
    DynamicIonicRangeComponent.prototype.layoutService;
    /** @type {?} */
    DynamicIonicRangeComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-ionic-range.component.js.map