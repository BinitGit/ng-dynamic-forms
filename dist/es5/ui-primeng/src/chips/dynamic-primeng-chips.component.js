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
import { Chips } from "primeng/primeng";
import { DynamicFormLayoutService, DynamicFormValidationService, DynamicInputModel } from "@ng-dynamic-forms/core";
import { PRIME_NG_TEMPLATE_DIRECTIVES } from "../dynamic-primeng-form.const";
import { DynamicPrimeNGTemplateableFormControlComponent } from "../dynamic-primeng-templateable-form-control.component";
var DynamicPrimeNGChipsComponent = /** @class */ (function (_super) {
    __extends(DynamicPrimeNGChipsComponent, _super);
    function DynamicPrimeNGChipsComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.templateDirectives = PRIME_NG_TEMPLATE_DIRECTIVES;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.customEvent = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    Object.defineProperty(DynamicPrimeNGChipsComponent.prototype, "viewChild", {
        get: /**
         * @return {?}
         */
        function () {
            return this.pChips;
        },
        enumerable: true,
        configurable: true
    });
    DynamicPrimeNGChipsComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-primeng-chips",
                    template: "<div [formGroup]=\"group\" [ngClass]=\"getClass('grid', 'control')\">\r\n\r\n    <p-chips #pChips\r\n             [allowDuplicate]=\"model.getAdditional('allowDuplicate', true)\"\r\n             [dynamicId]=\"bindId && model.id\"\r\n             [formControlName]=\"model.id\"\r\n             [ngClass]=\"getClass('element', 'control')\"\r\n             [tabindex]=\"model.tabIndex\"\r\n             (change)=\"onChange($event)\"\r\n             (onAdd)=\"onCustomEvent($event, 'onAdd')\"\r\n             (onRemove)=\"onCustomEvent($event, 'onRemove')\"></p-chips>\r\n\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicPrimeNGChipsComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicPrimeNGChipsComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        templates: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        customEvent: [{ type: Output }],
        focus: [{ type: Output }],
        pChips: [{ type: ViewChild, args: ["pChips",] }]
    };
    return DynamicPrimeNGChipsComponent;
}(DynamicPrimeNGTemplateableFormControlComponent));
export { DynamicPrimeNGChipsComponent };
if (false) {
    /** @type {?} */
    DynamicPrimeNGChipsComponent.prototype.templateDirectives;
    /** @type {?} */
    DynamicPrimeNGChipsComponent.prototype.bindId;
    /** @type {?} */
    DynamicPrimeNGChipsComponent.prototype.group;
    /** @type {?} */
    DynamicPrimeNGChipsComponent.prototype.layout;
    /** @type {?} */
    DynamicPrimeNGChipsComponent.prototype.model;
    /** @type {?} */
    DynamicPrimeNGChipsComponent.prototype.templates;
    /** @type {?} */
    DynamicPrimeNGChipsComponent.prototype.blur;
    /** @type {?} */
    DynamicPrimeNGChipsComponent.prototype.change;
    /** @type {?} */
    DynamicPrimeNGChipsComponent.prototype.customEvent;
    /** @type {?} */
    DynamicPrimeNGChipsComponent.prototype.focus;
    /** @type {?} */
    DynamicPrimeNGChipsComponent.prototype.pChips;
    /** @type {?} */
    DynamicPrimeNGChipsComponent.prototype.layoutService;
    /** @type {?} */
    DynamicPrimeNGChipsComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-primeng-chips.component.js.map