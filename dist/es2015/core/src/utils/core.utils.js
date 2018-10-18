/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
export function isBoolean(value) {
    return typeof value === "boolean";
}
/**
 * @param {?} value
 * @return {?}
 */
export function isFunction(value) {
    return typeof value === "function";
}
/**
 * @param {?} value
 * @return {?}
 */
export function isNumber(value) {
    return typeof value === "number";
}
/**
 * @param {?} value
 * @return {?}
 */
export function isObject(value) {
    return typeof value === "object" && value !== null;
}
/**
 * @param {?} value
 * @return {?}
 */
export function isObservable(value) {
    return !!value && isFunction(value.lift) && isFunction(value.subscribe);
}
/**
 * @param {?} value
 * @return {?}
 */
export function isString(value) {
    return typeof value === "string";
}
//# sourceMappingURL=core.utils.js.map