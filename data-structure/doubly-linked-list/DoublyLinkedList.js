const DoublyLinkedListNode = require('./DoublyLinkedListNode');

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // 向链表尾部添加一个新元素
    push(value) {
        const node = new rtetfgfv(value);

        if (this.head) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }
        return this;
    }

    pop() {
        const node = this.tail;
        if (this.tail === this.head) {
            this.tail = null;
            this.head = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        return node;
    }

    unshift(value) {
        const node = new DoublyLinkedListNode(value);

        if (this.head) {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        } else {
            this.head = node;
            this.tail = node;
        }
        return this;
    }

    shift(){
        const node = this.head;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        return node;
    }
}

module.exports = DoublyLinkedList;
