import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tonnes',
})
export class TonnesPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return 123;
  }
}
