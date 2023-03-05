import { Directive, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { filter, map } from 'rxjs';

@Directive({
  selector: '[appCueHighlight]',
})
export class CueHighlightDirective {
  constructor(private element: ElementRef, private nameCtl: NgControl) {}

  ngOnInit(): void {
    this.nameCtl.control?.parent?.valueChanges
      .pipe(map(({ x, y, response }) => Math.abs((x + y - response) / (x + y))))
      .subscribe((value) => {
        if (value < 0.15) {
          this.element.nativeElement.classList.add('almost');
        } else {
          this.element.nativeElement.classList.remove('almost');
        }
      });
  }
}
