class MinHeap{
    constructor() {
        this.heap = [];
    }

    getLeftIndex(index) {
        return 2 * index + 1;
    }

    getRightIndex(index) {
        return 2 * index + 2;
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    insert(value) {
        if (value !== null && value !== undefined) {
            this.heap.push(value);
            this.siftUp(this.heap.length - 1);
            return true;
        }
        return false;
    }

    siftUp(index){
        let parent = this.getParentIndex(index);

        while(index && this.heap[parent] > this.heap[index]) {
            this.swap(parent, index);
            index = parent;
            parent = this.getParentIndex(index);
        }
    }

    siftDown(index) {
        let element = index;
        const left = this.getLeftIndex(index);
        const right = this.getRightIndex(index);
        const size = this.heap.length;
        if (left < size && this.heap[element] > this.heap[left]) {
          element = left;
        }
        if (right < size && this.heap[element] > this.heap[right]) {
          element = right;
        }
        if (index !== element) {
          this.swap(index, element);
          this.siftDown(element);
        }
    }

    heapify() {
        const maxIndex = Math.floor(this.heap.length / 2) - 1;
        for (let i = 0; i <= maxIndex; i++) {
          this.siftDown(i);
        }
        return this.heap;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    sort(arr) {
        this.heap = arr.slice(0);
        for(let i=Math.floor(this.heap.length / 2); i>=0; i--) {
            this.heapify();
        }
    }

    toString(){
        return this.heap.toString();
    }
}

module.exports = MinHeap;
