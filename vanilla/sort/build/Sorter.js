"use strict";
// interface Sort {
//   compare(index: number): boolean;
//   swap(index?: number): void;
//   length: number;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j)) {
                    this.swap(j);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
