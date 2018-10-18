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
import { Component, EventEmitter, Inject, Input, Optional, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MAT_RIPPLE_GLOBAL_OPTIONS, MatSlideToggle } from "@angular/material";
import { DynamicFormControlComponent, DynamicFormLayoutService, DynamicFormValidationService, DynamicSwitchModel } from "@ng-dynamic-forms/core";
var DynamicMaterialSlideToggleComponent = /** @class */ (function (_super) {
    __extends(DynamicMaterialSlideToggleComponent, _super);
    function DynamicMaterialSlideToggleComponent(layoutService, validationService, RIPPLE_OPTIONS) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.RIPPLE_OPTIONS = RIPPLE_OPTIONS;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.customEvent = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicMaterialSlideToggleComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-material-slide-toggle",
                    template: "<ng-container [formGroup]=\"group\">\r\n\r\n    <mat-slide-toggle #matSlideToggle\r\n                      [checked]=\"model.checked\"\r\n                      [color]=\"model.getAdditional('color', 'accent')\"\r\n                      [disableRipple]=\"model.getAdditional('disableRipple', RIPPLE_OPTIONS && RIPPLE_OPTIONS['disabled'] || false)\"\r\n                      [formControlName]=\"model.id\"\r\n                      [id]=\"bindId ? model.id : null\"\r\n                      [labelPosition]=\"model.labelPosition || 'after'\"\r\n                      [name]=\"model.name\"\r\n                      [ngClass]=\"[getClass('element','control'), getClass('grid','control')]\"\r\n                      (change)=\"onChange($event)\">\r\n\r\n        <span *ngIf=\"!model.checked\" [innerHTML]=\"model.offLabel\"></span>\r\n        <span *ngIf=\"model.checked\" [innerHTML]=\"model.onLabel\"></span>\r\n\r\n    </mat-slide-toggle>\r\n\r\n</ng-container>"
                }] }
    ];
    /** @nocollapse */
    DynamicMaterialSlideToggleComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_RIPPLE_GLOBAL_OPTIONS,] }, { type: Optional }] }
    ]; };
    DynamicMaterialSlideToggleComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        customEvent: [{ type: Output }],
        focus: [{ type: Output }],
        matSlideToggle: [{ type: ViewChild, args: ["matSlideToggle",] }]
    };
    return DynamicMaterialSlideToggleComponent;
}(DynamicFormControlComponent));
export { DynamicMaterialSlideToggleComponent };
if (false) {
    /** @type {?} */
    DynamicMaterialSlideToggleComponent.prototype.bindId;
    /** @type {?} */
    DynamicMaterialSlideToggleComponent.prototype.group;
    /** @type {?} */
    DynamicMaterialSlideToggleComponent.prototype.layout;
    /** @type {?} */
    DynamicMaterialSlideToggleComponent.prototype.model;
    /** @type {?} */
    DynamicMaterialSlideToggleComponent.prototype.blur;
    /** @type {?} */
    DynamicMaterialSlideToggleComponent.prototype.change;
    /** @type {?} */
    DynamicMaterialSlideToggleComponent.prototype.customEvent;
    /** @type {?} */
    DynamicMaterialSlideToggleComponent.prototype.focus;
    /** @type {?} */
    DynamicMaterialSlideToggleComponent.prototype.matSlideToggle;
    /** @type {?} */
    DynamicMaterialSlideToggleComponent.prototype.layoutService;
    /** @type {?} */
    DynamicMaterialSlideToggleComponent.prototype.validationService;
    /** @type {?} */
    DynamicMaterialSlideToggleComponent.prototype.RIPPLE_OPTIONS;
}
//# sourceMappingURL=dynamic-material-slide-toggle.component.js.map