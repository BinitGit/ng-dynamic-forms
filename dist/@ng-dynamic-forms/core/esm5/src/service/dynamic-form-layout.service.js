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
export var DYNAMIC_FORM_CONTROL_MAP_FN = new InjectionToken("DYNAMIC_FORM_CONTROL_MAP_FN");
var DynamicFormLayoutService = /** @class */ (function () {
    function DynamicFormLayoutService(DYNAMIC_FORM_CONTROL_MAP_FN) {
        this.DYNAMIC_FORM_CONTROL_MAP_FN = DYNAMIC_FORM_CONTROL_MAP_FN;
        this.DYNAMIC_FORM_CONTROL_MAP_FN = /** @type {?} */ (DYNAMIC_FORM_CONTROL_MAP_FN);
    }
    /**
     * @param {?} id
     * @param {?} formLayout
     * @return {?}
     */
    DynamicFormLayoutService.prototype.findById = /**
     * @param {?} id
     * @param {?} formLayout
     * @return {?}
     */
    function (id, formLayout) {
        if (isObject(formLayout)) {
            for (var _i = 0, _a = Object.keys(formLayout); _i < _a.length; _i++) {
                var key = _a[_i];
                if (key === id) {
                    return formLayout[key];
                }
            }
        }
        return null;
    };
    /**
     * @param {?} model
     * @param {?} templates
     * @return {?}
     */
    DynamicFormLayoutService.prototype.filterTemplatesByModel = /**
     * @param {?} model
     * @param {?} templates
     * @return {?}
     */
    function (model, templates) {
        /** @type {?} */
        var filterCallback = function (template) {
            return template.modelId === model.id || template.modelType === model.type;
        };
        if (templates instanceof QueryList) {
            return templates.filter(filterCallback);
        }
        else if (Array.isArray(templates)) {
            return templates.filter(filterCallback);
        }
        return [];
    };
    /**
     * @param {?} model
     * @param {?} templates
     * @param {?} alignment
     * @return {?}
     */
    DynamicFormLayoutService.prototype.getAlignedTemplate = /**
     * @param {?} model
     * @param {?} templates
     * @param {?} alignment
     * @return {?}
     */
    function (model, templates, alignment) {
        return this.filterTemplatesByModel(model, templates)
            .find(function (template) { return template.as === null && template.align === alignment; });
    };
    /**
     * @param {?} model
     * @param {?} templates
     * @return {?}
     */
    DynamicFormLayoutService.prototype.getStartTemplate = /**
     * @param {?} model
     * @param {?} templates
     * @return {?}
     */
    function (model, templates) {
        return this.getAlignedTemplate(model, templates, DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT.Start);
    };
    /**
     * @param {?} model
     * @param {?} templates
     * @return {?}
     */
    DynamicFormLayoutService.prototype.getEndTemplate = /**
     * @param {?} model
     * @param {?} templates
     * @return {?}
     */
    function (model, templates) {
        return this.getAlignedTemplate(model, templates, DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT.End);
    };
    /**
     * @param {?} layout
     * @param {?} context
     * @param {?} place
     * @return {?}
     */
    DynamicFormLayoutService.prototype.getClass = /**
     * @param {?} layout
     * @param {?} context
     * @param {?} place
     * @return {?}
     */
    function (layout, context, place) {
        if (layout !== null && layout.hasOwnProperty(context)) {
            /** @type {?} */
            var config = /** @type {?} */ (layout[context]);
            if (config.hasOwnProperty(place)) {
                return /** @type {?} */ (config[place]);
            }
        }
        return "";
    };
    /**
     * @param {?} model
     * @return {?}
     */
    DynamicFormLayoutService.prototype.getCustomComponentType = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        if (this.DYNAMIC_FORM_CONTROL_MAP_FN) {
            return this.DYNAMIC_FORM_CONTROL_MAP_FN(model);
        }
        return null;
    };
    DynamicFormLayoutService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    DynamicFormLayoutService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DYNAMIC_FORM_CONTROL_MAP_FN,] }, { type: Optional }] }
    ]; };
    /** @nocollapse */ DynamicFormLayoutService.ngInjectableDef = i0.defineInjectable({ factory: function DynamicFormLayoutService_Factory() { return new DynamicFormLayoutService(i0.inject(DYNAMIC_FORM_CONTROL_MAP_FN, 8)); }, token: DynamicFormLayoutService, providedIn: "root" });
    return DynamicFormLayoutService;
}());
export { DynamicFormLayoutService };
if (false) {
    /** @type {?} */
    DynamicFormLayoutService.prototype.DYNAMIC_FORM_CONTROL_MAP_FN;
}
//# sourceMappingURL=dynamic-form-layout.service.js.map