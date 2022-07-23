"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
let manUnitedWins = 0;
const matches = new MatchReader_1.MatchReader("football.csv");
matches.read();
for (let match of matches.data) {
    if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin)
        manUnitedWins++;
    else if (match[2] === "Man United" && match[5] === MatchResult_1.MatchResult.AwayWin)
        manUnitedWins++;
}
console.log(`Man United won ${manUnitedWins} games.`);
