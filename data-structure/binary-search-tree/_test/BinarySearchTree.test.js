const BinarySearchTree = require('../BinarySearchTree');

test('insert', () => {
    const tree = new BinarySearchTree();
    tree.insert(11);
    tree.insert(2);
    tree.insert(15);
})


// test('inOrderTraverse', () => {
//     const tree = new BinarySearchTree();
//     tree.insert(11);
//     tree.insert(2);
//     tree.insert(15);
//     tree.inOrderTraverse(tree.root);
// })

// test('preOrderTraverse', () => {
//     const tree = new BinarySearchTree();
//     tree.insert(11);
//     tree.insert(2);
//     tree.insert(15);
//     tree.preOrderTraverse(tree.root);
// })


test('removeLeafNode', () => {
    const tree = new BinarySearchTree();
    tree.insert(11).insert(7).insert(15).insert(5).insert(3).insert(9).insert(13).insert(12).insert(20);

    // tree.remove(3);
    // tree.remove(5);
    tree.remove(15);
    tree.preOrderTraverse(tree.root);
})
