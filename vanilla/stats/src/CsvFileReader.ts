import fs from "fs";

export class CsvFileReader {
  data: string[][] = []; //array of arrays
  constructor(private filename: string) {}
  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => row.split(","));
  }
}
