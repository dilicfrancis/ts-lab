import { MatchData } from "./MarchData";

export interface Analysis {
  run(matches: MatchData[]): string;
}

export interface Output {
  print(result: string): void;
}

export class Report {
  constructor(public review: Analysis, public target: Output) {}
  build(matches: MatchData[]): void {
    const report = this.review.run(matches);
    this.target.print(report);
  }
}
