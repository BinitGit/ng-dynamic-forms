import { EventEmitter, OnDestroy } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { LabelOptions, MatChipInputEvent, MatChipList, MatChipsDefaultOptions, MatInput } from "@angular/material";
import { DynamicFormControlComponent, DynamicFormControlCustomEvent, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService, DynamicInputModel } from "@ng-dynamic-forms/core";
export declare class DynamicMaterialChipsComponent extends DynamicFormControlComponent implements OnDestroy {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    CHIPS_OPTIONS: MatChipsDefaultOptions;
    LABEL_OPTIONS: LabelOptions;
    private _chipList;
    private _model;
    private _valueSubscription;
    bindId: boolean;
    group: FormGroup;
    layout: DynamicFormLayout;
    model: DynamicInputModel;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    customEvent: EventEmitter<DynamicFormControlCustomEvent>;
    focus: EventEmitter<any>;
    matChipList: MatChipList;
    matInput: MatInput;
    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService, CHIPS_OPTIONS: MatChipsDefaultOptions, LABEL_OPTIONS: LabelOptions);
    ngOnDestroy(): void;
    unsubscribe(): void;
    chipList: string[];
    onChipInputTokenEnd($event: MatChipInputEvent): void;
    onChipRemoved(chip: string, index: number): void;
}
