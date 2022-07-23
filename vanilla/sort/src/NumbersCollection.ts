import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
  constructor(public input: number[]) {
    super();
  }

  get length(): number {
    return this.input.length;
  }

  compare(index: number): boolean {
    return this.input[index] > this.input[index + 1];
  }

  swap(): void {
    this.input = this.input.sort((a: number, b: number) => a - b);
  }
}
