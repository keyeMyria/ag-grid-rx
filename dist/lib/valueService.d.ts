// Type definitions for ag-grid-rx v8.1.1-4
// Project: https://github.com/mrsheepuk/ag-grid-rx
// Definitions by: Niall Crosby <https://github.com/ceolter/>
import { ColDef } from "./entities/colDef";
import { RowNode } from "./entities/rowNode";
import { Column } from "./entities/column";
export declare class ValueService {
    private gridOptionsWrapper;
    private expressionService;
    private columnController;
    private eventService;
    private cellExpressions;
    private userProvidedTheGroups;
    private suppressUseColIdForGroups;
    private initialised;
    init(): void;
    getValue(column: Column, node: RowNode): any;
    getValueUsingSpecificData(column: Column, data: any, node: RowNode): any;
    setValue(rowNode: RowNode, colKey: string | ColDef | Column, newValue: any): void;
    private setValueUsingField(data, field, newValue, isFieldContainsDots);
    private executeValueGetter(valueGetter, data, column, node);
    private getValueCallback(data, node, field);
}
