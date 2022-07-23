import { CsvFileReader } from "./CsvFileReader";
import { MatchData } from "./MarchData";
import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";

interface DataFeed {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static parseMatches(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }
  data: MatchData[] = [];
  constructor(public source: DataFeed) {}

  load(): void {
    this.source.read();
    this.data = this.source.data.map(
      (row: string[]): MatchData => [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult, //type assertion
        row[6],
      ]
    );
  }
}
