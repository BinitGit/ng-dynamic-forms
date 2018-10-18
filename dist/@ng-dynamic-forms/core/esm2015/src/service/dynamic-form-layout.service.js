/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Inject, Injectable, InjectionToken, Optional, QueryList } from "@angular/core";
import { DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT } from "../directive/dynamic-template.directive";
import { isObject } from "../utils/core.utils";
import * as i0 from "@angular/core";
/** @typedef {?} */
var DynamicFormLayout;
export { DynamicFormLayout };
/** @typedef {?} */
var DynamicFormControlMapFn;
export { DynamicFormControlMapFn };
/** @typedef {?} */
var DynamicFormControlTemplates;
export { DynamicFormControlTemplates };
/** @type {?} */
export const DYNAMIC_FORM_CONTROL_MAP_FN = new InjectionToken("DYNAMIC_FORM_CONTROL_MAP_FN");
export class DynamicFormLayoutService {
    /**
     * @param {?} DYNAMIC_FORM_CONTROL_MAP_FN
     */
    constructor(DYNAMIC_FORM_CONTROL_MAP_FN) {
        this.DYNAMIC_FORM_CONTROL_MAP_FN = DYNAMIC_FORM_CONTROL_MAP_FN;
        this.DYNAMIC_FORM_CONTROL_MAP_FN = /** @type {?} */ (DYNAMIC_FORM_CONTROL_MAP_FN);
    }
    /**
     * @param {?} id
     * @param {?} formLayout
     * @return {?}
     */
    findById(id, formLayout) {
        if (isObject(formLayout)) {
            for (let key of Object.keys(formLayout)) {
                if (key === id) {
                    return formLayout[key];
                }
            }
        }
        return null;
    }
    /**
     * @param {?} model
     * @param {?} templates
     * @return {?}
     */
    filterTemplatesByModel(model, templates) {
        /** @type {?} */
        const filterCallback = (template) => {
            return template.modelId === model.id || template.modelType === model.type;
        };
        if (templates instanceof QueryList) {
            return templates.filter(filterCallback);
        }
        else if (Array.isArray(templates)) {
            return templates.filter(filterCallback);
        }
        return [];
    }
    /**
     * @param {?} model
     * @param {?} templates
     * @param {?} alignment
     * @return {?}
     */
    getAlignedTemplate(model, templates, alignment) {
        return this.filterTemplatesByModel(model, templates)
            .find(template => template.as === null && template.align === alignment);
    }
    /**
     * @param {?} model
     * @param {?} templates
     * @return {?}
     */
    getStartTemplate(model, templates) {
        return this.getAlignedTemplate(model, templates, DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT.Start);
    }
    /**
     * @param {?} model
     * @param {?} templates
     * @return {?}
     */
    getEndTemplate(model, templates) {
        return this.getAlignedTemplate(model, templates, DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT.End);
    }
    /**
     * @param {?} layout
     * @param {?} context
     * @param {?} place
     * @return {?}
     */
    getClass(layout, context, place) {
        if (layout !== null && layout.hasOwnProperty(context)) {
            /** @type {?} */
            let config = /** @type {?} */ (layout[context]);
            if (config.hasOwnProperty(place)) {
                return /** @type {?} */ (config[place]);
            }
        }
        return "";
    }
    /**
     * @param {?} model
     * @return {?}
     */
    getCustomComponentType(model) {
        if (this.DYNAMIC_FORM_CONTROL_MAP_FN) {
            return this.DYNAMIC_FORM_CONTROL_MAP_FN(model);
        }
        return null;
    }
}
DynamicFormLayoutService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
DynamicFormLayoutService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DYNAMIC_FORM_CONTROL_MAP_FN,] }, { type: Optional }] }
];
/** @nocollapse */ DynamicFormLayoutService.ngInjectableDef = i0.defineInjectable({ factory: function DynamicFormLayoutService_Factory() { return new DynamicFormLayoutService(i0.inject(DYNAMIC_FORM_CONTROL_MAP_FN, 8)); }, token: DynamicFormLayoutService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DynamicFormLayoutService.prototype.DYNAMIC_FORM_CONTROL_MAP_FN;
}
//# sourceMappingURL=dynamic-form-layout.service.js.map