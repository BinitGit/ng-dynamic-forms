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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicRadioGroupModel } from "@ng-dynamic-forms/core";
var DynamicPrimeNGRadioGroupComponent = /** @class */ (function (_super) {
    __extends(DynamicPrimeNGRadioGroupComponent, _super);
    function DynamicPrimeNGRadioGroupComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicPrimeNGRadioGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-primeng-radio-group",
                    template: "<div role=\"radiogroup\"\r\n     [dynamicId]=\"bindId && model.id\"\r\n     [formGroup]=\"group\"\r\n     [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"\r\n     [tabindex]=\"model.tabIndex\">\r\n\r\n    <div *ngFor=\"let option of model.options$ | async\" [ngClass]=\"getClass('grid', 'option')\">\r\n\r\n        <p-radioButton [formControlName]=\"model.id\"\r\n                       [label]=\"option.label\"\r\n                       [name]=\"model.id\"\r\n                       [ngClass]=\"getClass('element', 'option')\"\r\n                       [value]=\"option.value\"\r\n                       (click)=\"onChange($event)\"></p-radioButton>\r\n    </div>\r\n\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicPrimeNGRadioGroupComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicPrimeNGRadioGroupComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }]
    };
    return DynamicPrimeNGRadioGroupComponent;
}(DynamicFormControlComponent));
export { DynamicPrimeNGRadioGroupComponent };
if (false) {
    /** @type {?} */
    DynamicPrimeNGRadioGroupComponent.prototype.bindId;
    /** @type {?} */
    DynamicPrimeNGRadioGroupComponent.prototype.group;
    /** @type {?} */
    DynamicPrimeNGRadioGroupComponent.prototype.layout;
    /** @type {?} */
    DynamicPrimeNGRadioGroupComponent.prototype.model;
    /** @type {?} */
    DynamicPrimeNGRadioGroupComponent.prototype.blur;
    /** @type {?} */
    DynamicPrimeNGRadioGroupComponent.prototype.change;
    /** @type {?} */
    DynamicPrimeNGRadioGroupComponent.prototype.focus;
    /** @type {?} */
    DynamicPrimeNGRadioGroupComponent.prototype.layoutService;
    /** @type {?} */
    DynamicPrimeNGRadioGroupComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-primeng-radio-group.component.js.map