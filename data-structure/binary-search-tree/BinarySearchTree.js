// import {  } from './BinarySearchTreeNode';
const BinarySearchTreeNode = require('./BinarySearchTreeNode');

class BinarySearchTree{
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (this.root === null) {
            this.root = new BinarySearchTreeNode(value);
        } else {
            this._insertNode(this.root, value);
        }
        return this;
    }

    _insertNode(node, value) {
        if (value <= node.value) {
            if (node.left) {
                this._insertNode(node.left, value);
            } else {
                node.left = new BinarySearchTreeNode(value);
            }
        } else {
            if (node.right) {
                this._insertNode(node.right, value);
            } else {
                node.right = new BinarySearchTreeNode(value);
            }
        }
    }

    remove(value) {
        this._removeNode(this.root, value);
    }

    _removeNode(node, value) {
        if (node === null) {
            return null;
        }

        if (value < node.value) {
            // 要删除的节点在左子树
            node.left = this._removeNode(node.left, value);
            return node;
        } else if (value > node.value) {
            // 要删除的节点在右子树
            node.right = this._removeNode(node.right, value);
            return node;
        } else {
            // 叶子节点
            if (!node.left && !node.right) {
                node = null;
                return node;
            }
            // 无左孩子或者无有孩子
            if (!node.left) {
                node = node.right;
                return node;
            }else if (!node.right) {
                node = node.left;
                return node;
            }

            const minNode = this._minNode(node.right);
            node.value = minNode.value;
            node.right = this._removeNode(node.right, minNode.value);
            return node;
        }
    }

    _minNode(root) {
        let cur = root;
        while(cur && cur.left) {
            cur = cur.left;
        }
        return cur;
    }

    // 中序遍历
    inOrderTraverse(node) {
        if (node) {
            this.inOrderTraverse(node.left);
            console.log(node.value);
            this.inOrderTraverse(node.right);
        }
    }

    // 先序遍历
    preOrderTraverse(node) {
        if (node) {
            console.log(node.value);
            this.preOrderTraverse(node.left);
            this.preOrderTraverse(node.right);
        }
    }

    // 后序遍历
    postOrderTraverse() {
        if (node) {
            this.preOrderTraverse(node.left);
            this.preOrderTraverse(node.right);
            console.log(node.value);
        }
    }
}

module.exports = BinarySearchTree;
