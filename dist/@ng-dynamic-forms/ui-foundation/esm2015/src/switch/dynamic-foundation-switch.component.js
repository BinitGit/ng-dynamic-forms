/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormControlComponent, DynamicFormLayoutService, DynamicFormValidationService, DynamicSwitchModel } from "@ng-dynamic-forms/core";
export class DynamicFoundationSwitchComponent extends DynamicFormControlComponent {
    /**
     * @param {?} layoutService
     * @param {?} validationService
     */
    constructor(layoutService, validationService) {
        super(layoutService, validationService);
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.bindId = true;
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.focus = new EventEmitter();
    }
}
DynamicFoundationSwitchComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-foundation-switch",
                template: "<div [formGroup]=\"group\" class=\"switch\" [ngClass]=\"getClass('element', 'control')\">\r\n\r\n    <input type=\"checkbox\" class=\"switch-input\"\r\n           [checked]=\"model.checked\"\r\n           [dynamicId]=\"bindId && model.id\"\r\n           [formControlName]=\"model.id\"\r\n           [name]=\"model.name\"\r\n           [required]=\"model.required\"\r\n           [tabindex]=\"model.tabIndex\"\r\n           [value]=\"model.value\"\r\n           (blur)=\"onBlur($event)\"\r\n           (change)=\"onChange($event)\"\r\n           (focus)=\"onFocus($event)\"/>\r\n\r\n    <label class=\"switch-paddle\" [for]=\"model.id\">\r\n\r\n        <span class=\"switch-active\" aria-hidden=\"true\">{{ model.onLabel }}</span>\r\n        <span class=\"switch-inactive\" aria-hidden=\"true\">{{ model.offLabel }}</span>\r\n\r\n    </label>\r\n\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DynamicFoundationSwitchComponent.ctorParameters = () => [
    { type: DynamicFormLayoutService },
    { type: DynamicFormValidationService }
];
DynamicFoundationSwitchComponent.propDecorators = {
    bindId: [{ type: Input }],
    group: [{ type: Input }],
    layout: [{ type: Input }],
    model: [{ type: Input }],
    blur: [{ type: Output }],
    change: [{ type: Output }],
    focus: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DynamicFoundationSwitchComponent.prototype.bindId;
    /** @type {?} */
    DynamicFoundationSwitchComponent.prototype.group;
    /** @type {?} */
    DynamicFoundationSwitchComponent.prototype.layout;
    /** @type {?} */
    DynamicFoundationSwitchComponent.prototype.model;
    /** @type {?} */
    DynamicFoundationSwitchComponent.prototype.blur;
    /** @type {?} */
    DynamicFoundationSwitchComponent.prototype.change;
    /** @type {?} */
    DynamicFoundationSwitchComponent.prototype.focus;
    /** @type {?} */
    DynamicFoundationSwitchComponent.prototype.layoutService;
    /** @type {?} */
    DynamicFoundationSwitchComponent.prototype.validationService;
}
//# sourceMappingURL=dynamic-foundation-switch.component.js.map