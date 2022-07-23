"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharactersCollection extends Sorter_1.Sorter {
    constructor(input) {
        super();
        this.input = input;
    }
    get length() {
        return this.input.length;
    }
    compare(index) {
        return (this.input[index].toLocaleLowerCase() <
            this.input[index + 1].toLocaleLowerCase());
    }
    swap() {
        const characters = this.input.toLocaleLowerCase().split("");
        characters.sort();
        this.input = characters.join("");
    }
}
exports.CharactersCollection = CharactersCollection;
