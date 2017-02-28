// Type definitions for ag-grid-rx v8.1.1-4
// Project: https://github.com/mrsheepuk/ag-grid-rx
// Definitions by: Niall Crosby <https://github.com/ceolter/>
import { Column } from "../entities/column";
import { RowNode } from "../entities/rowNode";
import { RenderedCell } from "./renderedCell";
import { LoggerFactory } from "../logger";
import { GridCell } from "../entities/gridCell";
import { ColDef } from "../entities/colDef";
export declare class RowRenderer {
    private columnController;
    private gridOptionsWrapper;
    private gridCore;
    private gridPanel;
    private $compile;
    private $scope;
    private expressionService;
    private templateService;
    private valueService;
    private eventService;
    private floatingRowModel;
    private context;
    private loggerFactory;
    private rowModel;
    private focusedCellController;
    private rangeController;
    private cellNavigationService;
    private firstRenderedRow;
    private lastRenderedRow;
    private renderedRows;
    private renderedTopFloatingRows;
    private renderedBottomFloatingRows;
    private rowContainers;
    private refreshInProgress;
    private logger;
    private destroyFunctions;
    agWire(loggerFactory: LoggerFactory): void;
    init(): void;
    getAllCellsForColumn(column: Column): HTMLElement[];
    refreshAllFloatingRows(): void;
    private refreshFloatingRows(renderedRows, rowNodes, pinnedLeftContainerComp, pinnedRightContainerComp, bodyContainerComp, fullWidthContainerComp);
    private onFloatingRowDataChanged();
    private onModelUpdated(refreshEvent);
    private getRenderedIndexesForRowNodes(rowNodes);
    refreshRows(rowNodes: RowNode[]): void;
    refreshView(params?: RefreshViewParams): void;
    private getLockOnRefresh();
    private releaseLockOnRefresh();
    private restoreFocusedCell(gridCell);
    softRefreshView(): void;
    stopEditing(cancel?: boolean): void;
    forEachRenderedCell(callback: (renderedCell: RenderedCell) => void): void;
    private forEachRenderedRow(callback);
    addRenderedRowListener(eventName: string, rowIndex: number, callback: Function): void;
    refreshCells(rowNodes: RowNode[], cols: (string | ColDef | Column)[], animate?: boolean): void;
    private destroy();
    private refreshAllVirtualRows(keepRenderedRows, animate);
    refreshGroupRows(): void;
    private removeVirtualRows(rowsToRemove);
    drawVirtualRowsWithLock(): void;
    private drawVirtualRows(oldRowsByNodeId?, animate?);
    private workOutFirstAndLastRowsToRender();
    getFirstVirtualRenderedRow(): number;
    getLastVirtualRenderedRow(): number;
    private ensureRowsRendered(oldRenderedRowsByNodeId?, animate?);
    private getOrCreateRenderedRow(rowNode, oldRowsByNodeId, animate);
    getRenderedNodes(): any[];
    navigateToNextCell(event: KeyboardEvent, key: number, rowIndex: number, column: Column, floating: string): void;
    startEditingCell(gridCell: GridCell, keyPress: number, charPress: string): void;
    private getComponentForCell(gridCell);
    onTabKeyDown(previousRenderedCell: RenderedCell, keyboardEvent: KeyboardEvent): void;
    tabToNextCell(backwards: boolean): boolean;
    private moveToCellAfter(previousRenderedCell, backwards);
    private moveEditToNextCell(previousRenderedCell, nextRenderedCell);
    private moveEditToNextRow(previousRenderedCell, nextRenderedCell);
    private findNextCellToFocusOn(gridCell, backwards, startEditing);
}
export interface RefreshViewParams {
    keepRenderedRows?: boolean;
    animate?: boolean;
    suppressKeepFocus?: boolean;
    onlyBody?: boolean;
}
