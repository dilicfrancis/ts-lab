"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StaticMatchReader_1 = require("./StaticMatchReader");
const StaticReport_1 = require("./StaticReport");
const matches = StaticMatchReader_1.MatchReader.parseMatches("football.csv");
matches.load();
const report = StaticReport_1.Report.reportWinsHtml("Man United", "index.html");
report.build(matches.data);
