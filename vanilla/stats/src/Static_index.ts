import { MatchReader } from "./StaticMatchReader";
import { Report } from "./StaticReport";

const matches = MatchReader.parseMatches("football.csv");
matches.load();
const report = Report.reportWinsHtml("Man United", "index.html");
report.build(matches.data);
