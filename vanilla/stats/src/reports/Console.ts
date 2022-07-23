import { Output } from "../Summary";

export class Console implements Output {
  print(result: string): void {
    console.log(result);
  }
}
