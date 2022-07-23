import { MatchData } from "../MarchData";
import { Analysis } from "../Summary";
import { MatchResult } from "../MatchResult";

export class Wins implements Analysis {
  constructor(private team: string) {}
  run(matches: MatchData[]): string {
    let teamWins = 0;
    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin)
        teamWins++;
      else if (match[2] === this.team && match[5] === MatchResult.AwayWin)
        teamWins++;
    }
    return `${this.team} won ${teamWins} games.`;
  }
}
