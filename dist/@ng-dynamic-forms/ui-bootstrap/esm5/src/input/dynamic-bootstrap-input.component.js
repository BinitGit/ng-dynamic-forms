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
import { DynamicFormControlComponent, DynamicFormLayoutService, DynamicFormValidationService, DynamicInputModel } from "@ng-dynamic-forms/core";
var DynamicBootstrapInputComponent = /** @class */ (function (_super) {
    __extends(DynamicBootstrapInputComponent, _super);
    function DynamicBootstrapInputComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicBootstrapInputComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-bootstrap-input",
                    template: "<div [formGroup]=\"group\" [class.input-group]=\"model.prefix || model.suffix\">\r\n\r\n    <div *ngIf=\"model.prefix\" class=\"input-group-addon\" [innerHTML]=\"model.prefix\"></div>\r\n\r\n    <input class=\"form-control\"\r\n           [attr.accept]=\"model.accept\"\r\n           [attr.max]=\"model.max\"\r\n           [attr.min]=\"model.min\"\r\n           [attr.multiple]=\"model.multiple\"\r\n           [attr.step]=\"model.step\"\r\n           [autocomplete]=\"model.autoComplete\"\r\n           [autofocus]=\"model.autoFocus\"\r\n           [dynamicId]=\"bindId && model.id\"\r\n           [dynamicList]=\"model.listId\"\r\n           [formControlName]=\"model.id\"\r\n           [maxlength]=\"model.maxLength\"\r\n           [minlength]=\"model.minLength\"\r\n           [name]=\"model.name\"\r\n           [ngClass]=\"getClass('element', 'control')\"\r\n           [pattern]=\"model.pattern\"\r\n           [placeholder]=\"model.placeholder\"\r\n           [readonly]=\"model.readOnly\"\r\n           [required]=\"model.required\"\r\n           [spellcheck]=\"model.spellCheck\"\r\n           [tabindex]=\"model.tabIndex\"\r\n           [textMask]=\"{mask: (model.mask || false), showMask: model.mask && !(model.placeholder)}\"\r\n           [type]=\"model.inputType\"\r\n           (blur)=\"onBlur($event)\"\r\n           (change)=\"onChange($event)\"\r\n           (focus)=\"onFocus($event)\"/>\r\n\r\n    <div *ngIf=\"model.suffix\" class=\"input-group-addon\" [innerHTML]=\"model.suffix\"></div>\r\n\r\n    <datalist *ngIf=\"model.hasList\" [id]=\"model.listId\">\r\n\r\n        <option *ngFor=\"let option of model.list$ | async\" [value]=\"option\">\r\n\r\n    </datalist>\r\n\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DynamicBootstrapInputComponent.ctorParameters = function () { return [
        { type: DynamicFormLayoutService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicBootstrapInputComponent.propDecorators = {
        bindId: [{ type: Input }],
        group: [{ type: Input }],
        layout: [{ type: Input }],
        model: [{ type: Input }],
        blur: [{ type: Output }],
        change: [{ type: Output }],
        focus: [{ type: Output }]
    };
    return DynamicBootstrapInputComponent;
}(DynamicFormControlComponent));
export { DynamicBootstrapInputComponent };
if (false) {
    /** @type {?} */
    DynamicBootstrapInputComponent.prototype.bindId;
    /** @type {?} */
    DynamicBootstrapInputComponent.prototype.group;
    /** @type {?} */
    DynamicBootstrapInputComponent.prototype.layout;
    /** @type {?} */
    DynamicBootstrapInputComponent.prototype.model;
    /** @type {?} */
    DynamicBootstrapInputComponent.prototype.blur;
    /** @type {?} */
    DynamicBootstrapInputComponent.prototype.change;
    /** @type {?} */
    DynamicBootstrapInputComponent.prototype.focus;
    /** @type {?} */
    DynamicBootstrapInputComponent.prototype.layoutService;
    /** @type {?} */
    DynamicBootstrapInputComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-bootstrap-input.component.js.map