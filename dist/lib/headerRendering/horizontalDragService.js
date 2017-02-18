/**
 * ag-grid-rx - Advanced Data Grid / Data Table with Observble rowData support (fork of ag-grid)
 * @version v8.0.1
 * @link https://github.com/mrsheepuk/ag-grid-rx
 * @license MIT
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var context_1 = require("../context/context");
var HorizontalDragService = (function () {
    function HorizontalDragService() {
    }
    HorizontalDragService.prototype.addDragHandling = function (params) {
        params.eDraggableElement.addEventListener('mousedown', function (startEvent) {
            new DragInstance(params, startEvent);
        });
    };
    return HorizontalDragService;
}());
HorizontalDragService = __decorate([
    context_1.Bean('horizontalDragService')
], HorizontalDragService);
exports.HorizontalDragService = HorizontalDragService;
var DragInstance = (function () {
    function DragInstance(params, startEvent) {
        this.mouseMove = this.onMouseMove.bind(this);
        this.mouseUp = this.onMouseUp.bind(this);
        this.mouseLeave = this.onMouseLeave.bind(this);
        this.lastDelta = 0;
        this.params = params;
        this.eDragParent = document.querySelector('body');
        this.dragStartX = startEvent.clientX;
        this.startEvent = startEvent;
        this.eDragParent.addEventListener('mousemove', this.mouseMove);
        this.eDragParent.addEventListener('mouseup', this.mouseUp);
        this.eDragParent.addEventListener('mouseleave', this.mouseLeave);
        this.draggingStarted = false;
        var startAfterPixelsExist = typeof params.startAfterPixels === 'number' && params.startAfterPixels > 0;
        if (!startAfterPixelsExist) {
            this.startDragging();
        }
    }
    DragInstance.prototype.startDragging = function () {
        this.draggingStarted = true;
        this.oldBodyCursor = this.params.eBody.style.cursor;
        this.oldParentCursor = this.eDragParent.style.cursor;
        this.oldMsUserSelect = this.eDragParent.style.msUserSelect;
        this.oldWebkitUserSelect = this.eDragParent.style.webkitUserSelect;
        // change the body cursor, so when drag moves out of the drag bar, the cursor is still 'resize' (or 'move'
        this.params.eBody.style.cursor = this.params.cursor;
        // same for outside the grid, we want to keep the resize (or move) cursor
        this.eDragParent.style.cursor = this.params.cursor;
        // we don't want text selection outside the grid (otherwise it looks weird as text highlights when we move)
        this.eDragParent.style.msUserSelect = 'none';
        this.eDragParent.style.webkitUserSelect = 'none';
        this.params.onDragStart(this.startEvent);
    };
    DragInstance.prototype.onMouseMove = function (moveEvent) {
        var newX = moveEvent.clientX;
        this.lastDelta = newX - this.dragStartX;
        if (!this.draggingStarted) {
            var dragExceededStartAfterPixels = Math.abs(this.lastDelta) >= this.params.startAfterPixels;
            if (dragExceededStartAfterPixels) {
                this.startDragging();
            }
        }
        if (this.draggingStarted) {
            this.params.onDragging(this.lastDelta, false);
        }
    };
    DragInstance.prototype.onMouseUp = function () {
        this.stopDragging();
    };
    DragInstance.prototype.onMouseLeave = function () {
        this.stopDragging();
    };
    DragInstance.prototype.stopDragging = function () {
        // reset cursor back to original cursor, if they were changed in the first place
        if (this.draggingStarted) {
            this.params.eBody.style.cursor = this.oldBodyCursor;
            this.eDragParent.style.cursor = this.oldParentCursor;
            this.eDragParent.style.msUserSelect = this.oldMsUserSelect;
            this.eDragParent.style.webkitUserSelect = this.oldWebkitUserSelect;
            this.params.onDragging(this.lastDelta, true);
        }
        // always remove the listeners, as these are always added
        this.eDragParent.removeEventListener('mousemove', this.mouseMove);
        this.eDragParent.removeEventListener('mouseup', this.mouseUp);
        this.eDragParent.removeEventListener('mouseleave', this.mouseLeave);
    };
    return DragInstance;
}());
