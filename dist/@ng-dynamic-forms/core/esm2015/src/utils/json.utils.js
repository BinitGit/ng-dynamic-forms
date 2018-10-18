/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { isString } from "./core.utils";
export class JSONUtils {
    /**
     * @param {?} mask
     * @return {?}
     */
    static maskToString(mask) {
        if (isString(mask)) {
            return /** @type {?} */ (mask);
        }
        else if (mask instanceof RegExp) {
            return mask.toString();
        }
        else if (Array.isArray(mask)) {
            return /** @type {?} */ (mask.map(value => JSONUtils.maskToString(value)));
        }
        return null;
    }
    /**
     * @param {?} mask
     * @return {?}
     */
    static maskFromString(mask) {
        if (isString(mask)) {
            /** @type {?} */
            let isRegExp = (/** @type {?} */ (mask)).startsWith("/") && (/** @type {?} */ (mask)).endsWith("/");
            return isRegExp ? new RegExp((/** @type {?} */ (mask)).slice(1, mask.length - 1)) : mask;
        }
        else if (Array.isArray(mask)) {
            return /** @type {?} */ ((/** @type {?} */ (mask)).map(value => JSONUtils.maskFromString(value)));
        }
        return null;
    }
    /**
     * @param {?} _key
     * @param {?} value
     * @return {?}
     */
    static parseReviver(_key, value) {
        /** @type {?} */
        let regexDateISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;
        return isString(value) && regexDateISO.test(value) ? new Date(value) : value;
    }
}
//# sourceMappingURL=json.utils.js.map