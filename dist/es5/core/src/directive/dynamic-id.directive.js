/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";
var DynamicIdDirective = /** @class */ (function () {
    function DynamicIdDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    DynamicIdDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.dynamicId) {
            this.renderer.setAttribute(this.elementRef.nativeElement, "id", /** @type {?} */ (this.dynamicId));
        }
    };
    DynamicIdDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[dynamicId]"
                },] },
    ];
    /** @nocollapse */
    DynamicIdDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    DynamicIdDirective.propDecorators = {
        dynamicId: [{ type: Input }]
    };
    return DynamicIdDirective;
}());
export { DynamicIdDirective };
if (false) {
    /** @type {?} */
    DynamicIdDirective.prototype.dynamicId;
    /** @type {?} */
    DynamicIdDirective.prototype.elementRef;
    /** @type {?} */
    DynamicIdDirective.prototype.renderer;
}
//# sourceMappingURL=dynamic-id.directive.js.map