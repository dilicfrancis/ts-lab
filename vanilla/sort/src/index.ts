// class Sorter {
//     constructor(public collection: number[] | String) {}
//     sort(): void {
//       const { length } = this.collection;
//       for (let i = 0; i < length; i++) {
//         for (let j = 0; j < length - i - 1; j++) {
//           if (this.collection instanceof Array) {
//             //using a Type Guard, this.collection === number[]

//             if (this.collection[j] > this.collection[j + 1]) {
//               const leftHand = this.collection[j];
//               this.collection[j] = this.collection[j + 1];
//               this.collection[j + 1] = leftHand;
//             }
//           }
//           if (typeof this.collection === "string") {
//           }
//         }
//       }
//     }
//   }

import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const collectionNum = new NumbersCollection([3, 4, 5, 6, 3]);
collectionNum.sort();
console.log(collectionNum.input);

const collectionChar = new CharactersCollection("Hello");
collectionChar.sort();
console.log(collectionChar.input);

const linkedList = new LinkedList();
linkedList.add(2);
linkedList.add(56);
linkedList.add(23);
linkedList.add(82);
linkedList.add(11);
linkedList.sort();
linkedList.print();

// const collectionNum = new NumbersCollection([3, 4, 5, 6, 3]);
// const sorterNum = new Sorter(collectionNum);
// sorterNum.sort();
// console.log(sorterNum.collection);
// console.log(collectionNum.input);

// const collectionChar = new CharactersCollection("Hello");
// const sorterStr = new Sorter(collectionChar);
// sorterStr.sort();
// console.log(collectionChar.input);

// const linkedList = new LinkedList();
// linkedList.add(2);
// linkedList.add(56);
// linkedList.add(23);
// linkedList.add(82);
// linkedList.add(11);
// const sortList = new Sorter(linkedList);
// sortList.sort();
// linkedList.print();
