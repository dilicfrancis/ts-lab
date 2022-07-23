"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
    }
    add(input) {
        const node = new Node(input);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    }
    get length() {
        if (!this.head) {
            return 0;
        }
        let length = 1;
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }
        return length;
    }
    at(index) {
        if (!this.head)
            throw new Error("Index out of bounds");
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error("Index out of bounds");
    }
    compare(index) {
        if (!this.head)
            throw new Error("List is empty");
        return this.at(index).value > this.at(index + 1).value;
    }
    swap(index) {
        const leftNode = this.at(index);
        const rightNode = this.at(index + 1);
        const leftHand = leftNode.value;
        leftNode.value = rightNode.value;
        rightNode.value = leftHand;
    }
    print() {
        if (!this.head)
            return;
        let node = this.head;
        while (node) {
            console.log(node.value);
            node = node.next;
        }
    }
}
exports.LinkedList = LinkedList;
