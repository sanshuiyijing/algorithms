const LinkedList = require('../LinkedList');

test('push', () => {
    const linkedList = new LinkedList();

    linkedList.push(1);
    expect(linkedList.toString()).toBe('1');

    linkedList.push(2);
    linkedList.push(3);

    expect(linkedList.toString()).toBe('1,2,3');
});

test('pop', () => {
    const linkedList = new LinkedList();
    linkedList.push(1).push(2).push(3);

    const deleteNode1 = linkedList.pop();
    expect(deleteNode1.value).toBe(3);

    linkedList.pop();

    const deleteNode2 = linkedList.pop();
    expect(deleteNode2.value).toBe(1);
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
})
