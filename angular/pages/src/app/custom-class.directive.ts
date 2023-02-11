import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomClass]',
})
export class CustomClassDirective {
  @Input('appCustomClass') set classAttrs(attrs: any) {
    for (let key in attrs) {
      if (attrs[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }

  // @Input() set appCustomClass(value: string) {
  //   this.element.nativeElement.style.backgroundColor = value;
  // }

  constructor(private element: ElementRef) {}
}
