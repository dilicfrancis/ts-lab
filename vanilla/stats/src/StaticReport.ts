import { Wins } from "./analyses/Wins";
import { MatchData } from "./MarchData";
import { Html } from "./reports/Html";

export interface Analysis {
  run(matches: MatchData[]): string;
}

export interface Output {
  print(result: string): void;
}

export class Report {
  static reportWinsHtml(team: string, filename: string): Report {
    return new Report(new Wins(team), new Html(filename));
  }
  constructor(public review: Analysis, public target: Output) {}
  build(matches: MatchData[]): void {
    const report = this.review.run(matches);
    this.target.print(report);
  }
}
