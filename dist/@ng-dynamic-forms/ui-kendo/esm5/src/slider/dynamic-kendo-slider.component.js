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
import { SliderComponent } from "@progress/kendo-angular-inputs";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicSliderModel } from "@ng-dynamic-forms/core";
var DynamicKendoSliderComponent = /** @class */ (function (_super) {
    __extends(DynamicKendoSliderComponent, _super);
    function DynamicKendoSliderComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicKendoSliderComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-kendo-slider",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <kendo-slider #kendoSlider\r\n                  [dynamicId]=\"bindId && model.id\"\r\n                  [formControlName]=\"model.id\"\r\n                  [min]=\"model.min\"\r\n                  [max]=\"model.max\"\r\n                  [ngClass]=\"[getClass('element','control'), getClass('grid','control')]\"\r\n                  [showButtons]=\"model.getAdditional('showButtons', true)\"\r\n                  [smallStep]=\"model.step\"\r\n                  [tabIndex]=\"model.tabIndex\"\r\n                  [tickPlacement]=\"model.getAdditional('tickPlacement', 'both')\"\r\n                  [vertical]=\"model.vertical\"\r\n                  (valueChange)=\"onChange($event)\"></kendo-slider>\r\n\r\n</ng-container>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicKendoSliderComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicKendoSliderComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        kendoSlider: [{ type: ViewChild, args: ["kendoSlider",] }]
    };
    return DynamicKendoSliderComponent;
}(DynamicFormControlComponent));
export { DynamicKendoSliderComponent };
if (false) {
    /** @type {?} */
    DynamicKendoSliderComponent.prototype.bindId;
    /** @type {?} */
    DynamicKendoSliderComponent.prototype.group;
    /** @type {?} */
    DynamicKendoSliderComponent.prototype.layout;
    /** @type {?} */
    DynamicKendoSliderComponent.prototype.model;
    /** @type {?} */
    DynamicKendoSliderComponent.prototype.blur;
    /** @type {?} */
    DynamicKendoSliderComponent.prototype.change;
    /** @type {?} */
    DynamicKendoSliderComponent.prototype.focus;
    /** @type {?} */
    DynamicKendoSliderComponent.prototype.kendoSlider;
    /** @type {?} */
    DynamicKendoSliderComponent.prototype.layoutService;
    /** @type {?} */
    DynamicKendoSliderComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-kendo-slider.component.js.map