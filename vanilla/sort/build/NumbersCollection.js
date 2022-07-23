"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    constructor(input) {
        super();
        this.input = input;
    }
    get length() {
        return this.input.length;
    }
    compare(index) {
        return this.input[index] > this.input[index + 1];
    }
    swap() {
        this.input = this.input.sort((a, b) => a - b);
    }
}
exports.NumbersCollection = NumbersCollection;
