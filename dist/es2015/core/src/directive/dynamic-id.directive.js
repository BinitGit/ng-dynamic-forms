/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";
export class DynamicIdDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.dynamicId) {
            this.renderer.setAttribute(this.elementRef.nativeElement, "id", /** @type {?} */ (this.dynamicId));
        }
    }
}
DynamicIdDirective.decorators = [
    { type: Directive, args: [{
                selector: "[dynamicId]"
            },] },
];
/** @nocollapse */
DynamicIdDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
DynamicIdDirective.propDecorators = {
    dynamicId: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DynamicIdDirective.prototype.dynamicId;
    /** @type {?} */
    DynamicIdDirective.prototype.elementRef;
    /** @type {?} */
    DynamicIdDirective.prototype.renderer;
}
//# sourceMappingURL=dynamic-id.directive.js.map