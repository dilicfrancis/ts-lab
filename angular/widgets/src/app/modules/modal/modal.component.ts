import { Component, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Output() closeEvent = new EventEmitter();

  constructor(private element: ElementRef) {}
  ngOnInit(): void {
    document.body.appendChild(this.element.nativeElement);
  }
  ngOnDestroy(): void {
    this.element.nativeElement.remove();
  }

  closeModalHandler() {
    this.closeEvent.emit();
  }
}
