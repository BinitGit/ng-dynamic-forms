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
import { Rating } from "primeng/primeng";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicRatingModel } from "@ng-dynamic-forms/core";
var DynamicPrimeNGRatingComponent = /** @class */ (function (_super) {
    __extends(DynamicPrimeNGRatingComponent, _super);
    function DynamicPrimeNGRatingComponent(layoutService, validationService) {
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
    DynamicPrimeNGRatingComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-primeng-rating",
                    template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <p-rating #pRating\r\n              [cancel]=\"model.getAdditional('cancel', true)\"\r\n              [dynamicId]=\"bindId && model.id\"\r\n              [formControlName]=\"model.id\"\r\n              [iconCancelClass]=\"model.getAdditional('iconCancelClass', 'pi pi-ban')\"\r\n              [iconOffClass]=\"model.getAdditional('iconOffClass', 'pi pi-star-o')\"\r\n              [iconOnClass]=\"model.getAdditional('iconOnClass', 'pi pi-star')\"\r\n              [ngClass]=\"getClass('element', 'control')\"\r\n              [stars]=\"model.max\"\r\n              (onCancel)=\"onCustomEvent($event, 'onCancel')\"\r\n              (onRate)=\"onChange($event)\"></p-rating>\r\n\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicPrimeNGRatingComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicPrimeNGRatingComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        customEvent: [{ type: Output }],
        focus: [{ type: Output }],
        pRating: [{ type: ViewChild, args: ["pRating",] }]
    };
    return DynamicPrimeNGRatingComponent;
}(DynamicFormControlComponent));
export { DynamicPrimeNGRatingComponent };
if (false) {
    /** @type {?} */
    DynamicPrimeNGRatingComponent.prototype.bindId;
    /** @type {?} */
    DynamicPrimeNGRatingComponent.prototype.group;
    /** @type {?} */
    DynamicPrimeNGRatingComponent.prototype.layout;
    /** @type {?} */
    DynamicPrimeNGRatingComponent.prototype.model;
    /** @type {?} */
    DynamicPrimeNGRatingComponent.prototype.blur;
    /** @type {?} */
    DynamicPrimeNGRatingComponent.prototype.change;
    /** @type {?} */
    DynamicPrimeNGRatingComponent.prototype.customEvent;
    /** @type {?} */
    DynamicPrimeNGRatingComponent.prototype.focus;
    /** @type {?} */
    DynamicPrimeNGRatingComponent.prototype.pRating;
    /** @type {?} */
    DynamicPrimeNGRatingComponent.prototype.layoutService;
    /** @type {?} */
    DynamicPrimeNGRatingComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-primeng-rating.component.js.map