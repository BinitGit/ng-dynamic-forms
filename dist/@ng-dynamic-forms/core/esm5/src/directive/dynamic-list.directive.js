/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";
import { isString } from "../utils/core.utils";
var DynamicListDirective = /** @class */ (function () {
    function DynamicListDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    DynamicListDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (isString(this.listId)) {
            this.renderer.setAttribute(this.elementRef.nativeElement, "list", /** @type {?} */ (this.listId));
        }
    };
    DynamicListDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[dynamicList]"
                },] },
    ];
    /** @nocollapse */
    DynamicListDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    DynamicListDirective.propDecorators = {
        listId: [{ type: Input, args: ["dynamicList",] }]
    };
    return DynamicListDirective;
}());
export { DynamicListDirective };
if (false) {
    /** @type {?} */
    DynamicListDirective.prototype.listId;
    /** @type {?} */
    DynamicListDirective.prototype.elementRef;
    /** @type {?} */
    DynamicListDirective.prototype.renderer;
}
//# sourceMappingURL=dynamic-list.directive.js.map