import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { Report } from "./Report";
import { Wins } from "./analyses/Wins";
// import { Console } from "./reports/Console";
import { Html } from "./reports/Html";

const feed = new CsvFileReader("football.csv");
const matches = new MatchReader(feed);
matches.load();
const report = new Report(new Wins("Man United"), new Html("report.html"));
report.build(matches.data);
