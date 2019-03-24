const MaxHeap = require("./max-heap.js");

class PriorityQueue {
  constructor(maxSize = 30) {
    this.maxSize = maxSize;
    this.heap = new MaxHeap();
  }

  push(data, priority) {
    if (this.heap === this.maxSize) {
      throw "throws an error if queue has max size";
    }
    this.heap.push(data, priority);
  }

  shift() {}

  size() {}

  isEmpty() {}
}

module.exports = PriorityQueue;
