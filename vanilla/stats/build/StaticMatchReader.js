"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const CsvFileReader_1 = require("./CsvFileReader");
const utils_1 = require("./utils");
class MatchReader {
    constructor(source) {
        this.source = source;
        this.data = [];
    }
    static parseMatches(filename) {
        return new MatchReader(new CsvFileReader_1.CsvFileReader(filename));
    }
    load() {
        this.source.read();
        this.data = this.source.data.map((row) => [
            (0, utils_1.dateStringToDate)(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6],
        ]);
    }
}
exports.MatchReader = MatchReader;
