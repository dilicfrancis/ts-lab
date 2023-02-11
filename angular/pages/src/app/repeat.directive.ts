import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appRepeat]',
})
export class RepeatDirective {
  @Input('appRepeat') set repeats(value: number) {
    this.viewContainer.clear();

    for (let i = 0; i < value; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        iteration: i,
      });
    }
  }

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}
}
