import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  constructor(public input: string) {
    super();
  }

  get length(): number {
    return this.input.length;
  }

  compare(index: number): boolean {
    return (
      this.input[index].toLocaleLowerCase() <
      this.input[index + 1].toLocaleLowerCase()
    );
  }

  swap(): void {
    const characters = this.input.toLocaleLowerCase().split("");
    characters.sort();
    this.input = characters.join("");
  }
}
