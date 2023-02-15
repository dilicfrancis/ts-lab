import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeat]',
})
export class RepeatDirective {
  @Input('appRepeat') set repeats(value: number) {
    this.viewContainer.clear();

    for (let i = 0; i < value; i++) {
      this.viewContainer.createEmbeddedView(this.template, {});
    }
  }

  constructor(
    private viewContainer: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}
}
