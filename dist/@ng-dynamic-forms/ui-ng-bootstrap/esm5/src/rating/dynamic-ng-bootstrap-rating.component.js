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
import { NgbRating, NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicFormControlComponent, DynamicRatingModel } from "@ng-dynamic-forms/core";
var DynamicNGBootstrapRatingComponent = /** @class */ (function (_super) {
    __extends(DynamicNGBootstrapRatingComponent, _super);
    function DynamicNGBootstrapRatingComponent(layoutService, validationService, config) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.config = config;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicNGBootstrapRatingComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-ng-bootstrap-rating",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <ngb-rating [dynamicId]=\"bindId && model.id\"\r\n                [formControlName]=\"model.id\"\r\n                [max]=\"model.max\"\r\n                [ngClass]=\"getClass('element', 'control')\"\r\n                [resettable]=\"model.getAdditional('resettable', config['resettable'])\"\r\n                (rateChange)=\"onChange($event)\"></ngb-rating>\r\n\r\n</ng-container>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicNGBootstrapRatingComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService },
        { type: NgbRatingConfig }
    ]; };
    DynamicNGBootstrapRatingComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        ngbRating: [{ type: ViewChild, args: [NgbRating,] }]
    };
    return DynamicNGBootstrapRatingComponent;
}(DynamicFormControlComponent));
export { DynamicNGBootstrapRatingComponent };
if (false) {
    /** @type {?} */
    DynamicNGBootstrapRatingComponent.prototype.bindId;
    /** @type {?} */
    DynamicNGBootstrapRatingComponent.prototype.group;
    /** @type {?} */
    DynamicNGBootstrapRatingComponent.prototype.layout;
    /** @type {?} */
    DynamicNGBootstrapRatingComponent.prototype.model;
    /** @type {?} */
    DynamicNGBootstrapRatingComponent.prototype.blur;
    /** @type {?} */
    DynamicNGBootstrapRatingComponent.prototype.change;
    /** @type {?} */
    DynamicNGBootstrapRatingComponent.prototype.focus;
    /** @type {?} */
    DynamicNGBootstrapRatingComponent.prototype.ngbRating;
    /** @type {?} */
    DynamicNGBootstrapRatingComponent.prototype.layoutService;
    /** @type {?} */
    DynamicNGBootstrapRatingComponent.prototype.validationService;
    /** @type {?} */
    DynamicNGBootstrapRatingComponent.prototype.config;
}
//# sourceMappingURL=dynamic-ng-bootstrap-rating.component.js.map