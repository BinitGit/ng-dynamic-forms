/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { isObject } from "../utils/core.utils";
/** @enum {string} */
var DynamicFormControlEventType = {
    Blur: "blur", Change: "change", Custom: "custom", Focus: "focus",
};
export { DynamicFormControlEventType };
/**
 * @record
 */
export function DynamicFormControlEvent() { }
/** @type {?} */
DynamicFormControlEvent.prototype.$event;
/** @type {?} */
DynamicFormControlEvent.prototype.context;
/** @type {?} */
DynamicFormControlEvent.prototype.control;
/** @type {?} */
DynamicFormControlEvent.prototype.group;
/** @type {?} */
DynamicFormControlEvent.prototype.model;
/** @type {?} */
DynamicFormControlEvent.prototype.type;
/**
 * @record
 */
export function DynamicFormControlCustomEvent() { }
/** @type {?} */
DynamicFormControlCustomEvent.prototype.customEvent;
/** @type {?} */
DynamicFormControlCustomEvent.prototype.customEventType;
/**
 * @param {?} $event
 * @return {?}
 */
export function isDynamicFormControlEvent($event) {
    return isObject($event) && $event.hasOwnProperty("$event");
}
//# sourceMappingURL=dynamic-form-control.event.js.map