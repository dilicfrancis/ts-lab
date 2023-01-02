namespace Application {
  export interface Drag {
    dragBegin(e: DragEvent): void;
    dragEnd(e: DragEvent): void;
  }

  export interface Drop {
    hover(e: DragEvent): void;
    drop(e: DragEvent): void;
    leave(e: DragEvent): void;
  }
}
