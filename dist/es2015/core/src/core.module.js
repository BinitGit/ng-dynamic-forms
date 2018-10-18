/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { DynamicIdDirective } from "./directive/dynamic-id.directive";
import { DynamicListDirective } from "./directive/dynamic-list.directive";
import { DynamicTemplateDirective } from "./directive/dynamic-template.directive";
export class DynamicFormsCoreModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: DynamicFormsCoreModule };
    }
}
DynamicFormsCoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule
                ],
                declarations: [
                    DynamicIdDirective,
                    DynamicListDirective,
                    DynamicTemplateDirective
                ],
                exports: [
                    DynamicIdDirective,
                    DynamicListDirective,
                    DynamicTemplateDirective
                ]
            },] },
];
//# sourceMappingURL=core.module.js.map