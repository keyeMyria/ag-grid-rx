/**
 * ag-grid-rx - Advanced Data Grid / Data Table with Observble rowData support (fork of ag-grid)
 * @version v8.1.1-4
 * @link https://github.com/mrsheepuk/ag-grid-rx
 * @license MIT
 */
"use strict";
var utils_1 = require("../utils");
var gridRow_1 = require("./gridRow");
var GridCell = (function () {
    function GridCell(gridCellDef) {
        this.rowIndex = gridCellDef.rowIndex;
        this.column = gridCellDef.column;
        this.floating = utils_1.Utils.makeNull(gridCellDef.floating);
    }
    GridCell.prototype.getGridCellDef = function () {
        return {
            rowIndex: this.rowIndex,
            column: this.column,
            floating: this.floating
        };
    };
    GridCell.prototype.getGridRow = function () {
        return new gridRow_1.GridRow(this.rowIndex, this.floating);
    };
    GridCell.prototype.toString = function () {
        return "rowIndex = " + this.rowIndex + ", floating = " + this.floating + ", column = " + (this.column ? this.column.getId() : null);
    };
    GridCell.prototype.createId = function () {
        return this.rowIndex + "." + this.floating + "." + this.column.getId();
    };
    return GridCell;
}());
exports.GridCell = GridCell;
