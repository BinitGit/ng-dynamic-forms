/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { isString } from "./core.utils";
var JSONUtils = /** @class */ (function () {
    function JSONUtils() {
    }
    /**
     * @param {?} mask
     * @return {?}
     */
    JSONUtils.maskToString = /**
     * @param {?} mask
     * @return {?}
     */
    function (mask) {
        if (isString(mask)) {
            return /** @type {?} */ (mask);
        }
        else if (mask instanceof RegExp) {
            return mask.toString();
        }
        else if (Array.isArray(mask)) {
            return /** @type {?} */ (mask.map(function (value) { return JSONUtils.maskToString(value); }));
        }
        return null;
    };
    /**
     * @param {?} mask
     * @return {?}
     */
    JSONUtils.maskFromString = /**
     * @param {?} mask
     * @return {?}
     */
    function (mask) {
        if (isString(mask)) {
            /** @type {?} */
            var isRegExp = (/** @type {?} */ (mask)).startsWith("/") && (/** @type {?} */ (mask)).endsWith("/");
            return isRegExp ? new RegExp((/** @type {?} */ (mask)).slice(1, mask.length - 1)) : mask;
        }
        else if (Array.isArray(mask)) {
            return /** @type {?} */ ((/** @type {?} */ (mask)).map(function (value) { return JSONUtils.maskFromString(value); }));
        }
        return null;
    };
    /**
     * @param {?} _key
     * @param {?} value
     * @return {?}
     */
    JSONUtils.parseReviver = /**
     * @param {?} _key
     * @param {?} value
     * @return {?}
     */
    function (_key, value) {
        /** @type {?} */
        var regexDateISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;
        return isString(value) && regexDateISO.test(value) ? new Date(value) : value;
    };
    return JSONUtils;
}());
export { JSONUtils };
//# sourceMappingURL=json.utils.js.map