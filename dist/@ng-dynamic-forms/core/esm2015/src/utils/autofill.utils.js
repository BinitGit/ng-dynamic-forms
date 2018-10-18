/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
export const AUTOCOMPLETE_OFF = "off";
/** @type {?} */
export const AUTOCOMPLETE_ON = "on";
/** @type {?} */
export const AUTOFILL_TOKEN_BILLING = "billing";
/** @type {?} */
export const AUTOFILL_TOKEN_SHIPPING = "shipping";
/** @type {?} */
export const AUTOFILL_TOKENS_ADDRESS = [AUTOFILL_TOKEN_BILLING, AUTOFILL_TOKEN_SHIPPING];
/** @type {?} */
export const AUTOFILL_TOKEN_HOME = "home";
/** @type {?} */
export const AUTOFILL_TOKEN_WORK = "work";
/** @type {?} */
export const AUTOFILL_TOKEN_MOBILE = "mobile";
/** @type {?} */
export const AUTOFILL_TOKEN_FAX = "fax";
/** @type {?} */
export const AUTOFILL_TOKEN_PAGER = "pager";
/** @type {?} */
export const AUTOFILL_TOKENS_CONTACT = [
    AUTOFILL_TOKEN_FAX, AUTOFILL_TOKEN_HOME, AUTOFILL_TOKEN_MOBILE, AUTOFILL_TOKEN_PAGER, AUTOFILL_TOKEN_WORK
];
/** @type {?} */
export const AUTOFILL_FIELD_STREET_ADDRESS = "street-address";
/** @type {?} */
export const AUTOFILL_FIELD_ADDRESS_LINE_1 = "address-line1";
/** @type {?} */
export const AUTOFILL_FIELD_ADDRESS_LINE_2 = "address-line2";
/** @type {?} */
export const AUTOFILL_FIELD_ADDRESS_LINE_3 = "address-line3";
/** @type {?} */
export const AUTOFILL_FIELD_ADDRESS_LEVEL_4 = "address-level4";
/** @type {?} */
export const AUTOFILL_FIELD_ADDRESS_LEVEL_3 = "address-level3";
/** @type {?} */
export const AUTOFILL_FIELD_ADDRESS_LEVEL_2 = "address-level2";
/** @type {?} */
export const AUTOFILL_FIELD_ADDRESS_LEVEL_1 = "address-level1";
/** @type {?} */
export const AUTOFILL_FIELD_NAME = "name";
/** @type {?} */
export const AUTOFILL_FIELD_HONORIFIC_PREFIX = "honorific-prefix";
/** @type {?} */
export const AUTOFILL_FIELD_GIVEN_NAME = "given-name";
/** @type {?} */
export const AUTOFILL_FIELD_ADDITIONAL_NAME = "additional-name";
/** @type {?} */
export const AUTOFILL_FIELD_FAMILY_NAME = "family-name";
/** @type {?} */
export const AUTOFILL_FIELD_HONORIFIC_SUFFIX = "honorific-suffix";
/** @type {?} */
export const AUTOFILL_FIELD_NICKNAME = "nickname";
/** @type {?} */
export const AUTOFILL_FIELD_USERNAME = "username";
/** @type {?} */
export const AUTOFILL_FIELD_NEW_PASSWORD = "new-password";
/** @type {?} */
export const AUTOFILL_FIELD_CURRENT_PASSWORD = "current-password";
/** @type {?} */
export const AUTOFILL_FIELD_ORGANIZATION_TITLE = "organization-title";
/** @type {?} */
export const AUTOFILL_FIELD_ORGANIZATION = "organization";
/** @type {?} */
export const AUTOFILL_FIELD_COUNTRY = "country";
/** @type {?} */
export const AUTOFILL_FIELD_COUNTRY_NAME = "country-name";
/** @type {?} */
export const AUTOFILL_FIELD_POSTAL_CODE = "postal-code";
/** @type {?} */
export const AUTOFILL_FIELD_CC_NAME = "cc-name";
/** @type {?} */
export const AUTOFILL_FIELD_CC_GIVEN_NAME = "cc-given-name";
/** @type {?} */
export const AUTOFILL_FIELD_CC_ADDITIONAL_NAME = "cc-additional-name";
/** @type {?} */
export const AUTOFILL_FIELD_CC_FAMILY_NAME = "cc-family-name";
/** @type {?} */
export const AUTOFILL_FIELD_CC_NUMBER = "cc-number";
/** @type {?} */
export const AUTOFILL_FIELD_CC_EXP = "cc-exp";
/** @type {?} */
export const AUTOFILL_FIELD_CC_EXP_MONTH = "cc-exp-month";
/** @type {?} */
export const AUTOFILL_FIELD_CC_EXP_YEAR = "cc-exp-year";
/** @type {?} */
export const AUTOFILL_FIELD_CC_CSC = "cc-csc";
/** @type {?} */
export const AUTOFILL_FIELD_CC_TYPE = "cc-type";
/** @type {?} */
export const AUTOFILL_FIELD_TRANSACTION_CURRENCY = "transaction-currency";
/** @type {?} */
export const AUTOFILL_FIELD_TRANSACTION_AMOUNT = "transaction-amount";
/** @type {?} */
export const AUTOFILL_FIELD_LANGUAGE = "language";
/** @type {?} */
export const AUTOFILL_FIELD_BDAY = "bday";
/** @type {?} */
export const AUTOFILL_FIELD_BDAY_DAY = "bday-day";
/** @type {?} */
export const AUTOFILL_FIELD_BDAY_MONTH = "bday-month";
/** @type {?} */
export const AUTOFILL_FIELD_BDAY_YEAR = "bday-year";
/** @type {?} */
export const AUTOFILL_FIELD_SEX = "sex";
/** @type {?} */
export const AUTOFILL_FIELD_URL = "url";
/** @type {?} */
export const AUTOFILL_FIELD_PHOTO = "photo";
/** @type {?} */
export const AUTOFILL_FIELDS = [
    AUTOFILL_FIELD_STREET_ADDRESS, AUTOFILL_FIELD_ADDRESS_LINE_1, AUTOFILL_FIELD_ADDRESS_LINE_2,
    AUTOFILL_FIELD_ADDRESS_LINE_3, AUTOFILL_FIELD_ADDRESS_LEVEL_4, AUTOFILL_FIELD_ADDRESS_LEVEL_3,
    AUTOFILL_FIELD_ADDRESS_LEVEL_2, AUTOFILL_FIELD_ADDRESS_LEVEL_1, AUTOFILL_FIELD_NAME,
    AUTOFILL_FIELD_HONORIFIC_PREFIX, AUTOFILL_FIELD_GIVEN_NAME, AUTOFILL_FIELD_ADDITIONAL_NAME,
    AUTOFILL_FIELD_FAMILY_NAME, AUTOFILL_FIELD_HONORIFIC_SUFFIX, AUTOFILL_FIELD_NICKNAME, AUTOFILL_FIELD_USERNAME,
    AUTOFILL_FIELD_NEW_PASSWORD, AUTOFILL_FIELD_CURRENT_PASSWORD, AUTOFILL_FIELD_ORGANIZATION_TITLE,
    AUTOFILL_FIELD_ORGANIZATION, AUTOFILL_FIELD_COUNTRY, AUTOFILL_FIELD_COUNTRY_NAME, AUTOFILL_FIELD_POSTAL_CODE,
    AUTOFILL_FIELD_CC_NAME, AUTOFILL_FIELD_CC_GIVEN_NAME, AUTOFILL_FIELD_CC_ADDITIONAL_NAME,
    AUTOFILL_FIELD_CC_FAMILY_NAME, AUTOFILL_FIELD_CC_NUMBER, AUTOFILL_FIELD_CC_EXP, AUTOFILL_FIELD_CC_EXP_MONTH,
    AUTOFILL_FIELD_CC_EXP_YEAR, AUTOFILL_FIELD_CC_CSC, AUTOFILL_FIELD_CC_TYPE, AUTOFILL_FIELD_TRANSACTION_CURRENCY,
    AUTOFILL_FIELD_TRANSACTION_AMOUNT, AUTOFILL_FIELD_LANGUAGE, AUTOFILL_FIELD_BDAY, AUTOFILL_FIELD_BDAY_DAY,
    AUTOFILL_FIELD_BDAY_MONTH, AUTOFILL_FIELD_BDAY_YEAR, AUTOFILL_FIELD_SEX, AUTOFILL_FIELD_URL, AUTOFILL_FIELD_PHOTO
];
/** @type {?} */
export const AUTOFILL_FIELD_TEL = "tel";
/** @type {?} */
export const AUTOFILL_FIELD_TEL_COUNTRY_CODE = "tel-country-code";
/** @type {?} */
export const AUTOFILL_FIELD_TEL_NATIONAL = "tel-national";
/** @type {?} */
export const AUTOFILL_FIELD_TEL_AREA_CODE = "tel-area-code";
/** @type {?} */
export const AUTOFILL_FIELD_TEL_LOCAL = "tel-local";
/** @type {?} */
export const AUTOFILL_FIELD_TEL_LOCAL_PREFIX = "tel-local-prefix";
/** @type {?} */
export const AUTOFILL_FIELD_TEL_LOCAL_SUFFIX = "tel-local-suffix";
/** @type {?} */
export const AUTOFILL_FIELD_TEL_LOCAL_EXTENSION = "tel-extension";
/** @type {?} */
export const AUTOFILL_FIELD_EMAIL = "email";
/** @type {?} */
export const AUTOFILL_FIELD_IMPP = "impp";
/** @type {?} */
export const AUTOFILL_FIELDS_CONTACT = [
    AUTOFILL_FIELD_TEL, AUTOFILL_FIELD_TEL_COUNTRY_CODE, AUTOFILL_FIELD_TEL_NATIONAL, AUTOFILL_FIELD_TEL_AREA_CODE,
    AUTOFILL_FIELD_TEL_LOCAL, AUTOFILL_FIELD_TEL_LOCAL_PREFIX, AUTOFILL_FIELD_TEL_LOCAL_SUFFIX,
    AUTOFILL_FIELD_TEL_LOCAL_EXTENSION, AUTOFILL_FIELD_EMAIL, AUTOFILL_FIELD_IMPP
];
export class AutoFillUtils {
    /**
     * @param {?} token
     * @return {?}
     */
    static isAddressToken(token) {
        return AUTOFILL_TOKENS_ADDRESS.indexOf(token) > -1;
    }
    /**
     * @param {?} token
     * @return {?}
     */
    static isContactField(token) {
        return AUTOFILL_FIELDS_CONTACT.indexOf(token) > -1;
    }
    /**
     * @param {?} token
     * @return {?}
     */
    static isContactToken(token) {
        return AUTOFILL_TOKENS_CONTACT.indexOf(token) > -1;
    }
    /**
     * @param {?} token
     * @return {?}
     */
    static isField(token) {
        return AUTOFILL_FIELDS.indexOf(token) > -1;
    }
    /**
     * @param {?} token
     * @return {?}
     */
    static isSectionToken(token) {
        return token.startsWith("section-");
    }
    /**
     * @param {?} tokens
     * @return {?}
     */
    static validate(tokens) {
        /** @type {?} */
        let toExpression = (total, currentValue) => `${total}|${currentValue}`;
        /** @type {?} */
        let tokensAddress = AUTOFILL_TOKENS_ADDRESS.reduce(toExpression);
        /** @type {?} */
        let tokensContact = AUTOFILL_TOKENS_CONTACT.reduce(toExpression);
        /** @type {?} */
        let fields = AUTOFILL_FIELDS.reduce(toExpression);
        /** @type {?} */
        let fieldsContact = AUTOFILL_FIELDS_CONTACT.reduce(toExpression);
        /** @type {?} */
        let regex = new RegExp(`^(section-\\w+\\s{1})?((${tokensAddress}){1}\\s)?((${fields}){1}|((${tokensContact}){1}\\s{1}(${fieldsContact})))$`);
        return regex.test(tokens);
    }
}
//# sourceMappingURL=autofill.utils.js.map