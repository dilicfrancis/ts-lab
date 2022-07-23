"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Report = void 0;
const Wins_1 = require("./analyses/Wins");
const Html_1 = require("./reports/Html");
class Report {
    constructor(review, target) {
        this.review = review;
        this.target = target;
    }
    static reportWinsHtml(team, filename) {
        return new Report(new Wins_1.Wins(team), new Html_1.Html(filename));
    }
    build(matches) {
        const report = this.review.run(matches);
        this.target.print(report);
    }
}
exports.Report = Report;
