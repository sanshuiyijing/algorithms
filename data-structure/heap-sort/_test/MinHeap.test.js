const MinHeap = require('../MinHeap');

test('insert', () => {
    const heap = new MinHeap();
    heap.insert(2);
    expect(heap.toString()).toBe('2');
    heap.insert(3);
    heap.insert(4);
    heap.insert(5);
    heap.insert(1);
    expect(heap.toString()).toBe('1,2,4,5,3');
})


test('heapSort', () => {
    const heap = new MinHeap();
    // expect(heap.sort([5,4,6]).toString()).toBe('4,5,6');

    expect(heap.sort([3,4,5,6,7]).toString()).toBe('7,6,5,4,3');
})
