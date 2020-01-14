const LinkedListNode = require('./LinkedListNode');

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // 向链表尾部添加一个新元素
    push(value) {
        const cur = new LinkedListNode(value);
        if (this.head) {
            this.tail.next = cur;
            this.tail = cur;
        } else {
            this.tail = cur;
            this.head = cur;
        }
        return this;
    }

    // 从链表尾部移除一个元素
    pop() {
        const node = this.tail;
        // 为空或者只有一个元素
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            let cur = this.head;
            while(cur.next.next) {
                cur = cur.next;
            }
            this.tail = cur;
            this.tail.next = null;
        }
        return node;
    }

    // 向链表头部添加一个元素
    unshift(value) {
        const insertNode = new LinkedListNode(value);
        if (this.head) {
            insertNode.next = this.head;
            this.head = insertNode;
        } else {
            this.head = insertNode;
            this.tail = insertNode;
        }
        return this;
    }

    // 从链表头部删除一个元素
    shift() {
        const node = this.head;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        return node;
    }

    // 从链表特定位置删除一个新元素
    removeAt(index) {
    }

    // 向链表特定位置插入一个新元素
    insertAt(value, index) {
    }

    toString() {
        if (!this.head) {
            return '';
        }
        let result = `${this.head.value}`;
        let cur = this.head.next;
        while(cur) {
            result = `${result},${cur.value}`;
            cur = cur.next;
        }
        return result;
    }

    isEmpty() {
        return !this.head;
    }
}

module.exports = LinkedList;
