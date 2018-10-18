/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
export const METADATA_KEY_SERIALIZABLE = "SERIALIZABLE";
/**
 * @record
 */
export function SerializableProperty() { }
/** @type {?} */
SerializableProperty.prototype.key;
/** @type {?} */
SerializableProperty.prototype.name;
/**
 * @param {?=} name
 * @return {?}
 */
export function serializable(name) {
    return function (target, key) {
        Reflect.defineMetadata(METADATA_KEY_SERIALIZABLE, { key: key, name: name || key }, target, key);
    };
}
/**
 * @param {?} target
 * @return {?}
 */
export function getSerializables(target) {
    /** @type {?} */
    let serializables = [];
    for (let key in target) {
        /** @type {?} */
        let metadata = Reflect.getMetadata(METADATA_KEY_SERIALIZABLE, target, key);
        if (metadata) {
            serializables.push(metadata);
        }
    }
    return serializables;
}
/**
 * @param {?} target
 * @param {?=} prototype
 * @return {?}
 */
export function serialize(target, prototype) {
    return getSerializables(prototype || target).reduce((prev, prop) => {
        prev[prop.name] = target[prop.key];
        return prev;
    }, {});
}
//# sourceMappingURL=serializable.decorator.js.map