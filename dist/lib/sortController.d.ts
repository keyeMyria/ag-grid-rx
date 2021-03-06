// Type definitions for ag-grid-rx v8.1.1-4
// Project: https://github.com/mrsheepuk/ag-grid-rx
// Definitions by: Niall Crosby <https://github.com/ceolter/>
import { Column } from "./entities/column";
export declare class SortController {
    private static DEFAULT_SORTING_ORDER;
    private gridOptionsWrapper;
    private columnController;
    private eventService;
    progressSort(column: Column, multiSort: boolean): void;
    setSortForColumn(column: Column, sort: string, multiSort: boolean): void;
    onSortChanged(): void;
    private dispatchSortChangedEvents();
    private clearSortBarThisColumn(columnToSkip);
    private getNextSortDirection(column);
    getSortModel(): {
        colId: string;
        sort: string;
    }[];
    setSortModel(sortModel: any): void;
    getColumnsWithSortingOrdered(): Column[];
    getSortForRowController(): any[];
}
