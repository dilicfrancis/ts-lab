"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Report = void 0;
class Report {
    constructor(review, target) {
        this.review = review;
        this.target = target;
    }
    build(matches) {
        const report = this.review.run(matches);
        this.target.print(report);
    }
}
exports.Report = Report;
