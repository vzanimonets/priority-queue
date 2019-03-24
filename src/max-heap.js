const Node = require("./node");

class MaxHeap {
  constructor() {
    this.root = null;
    this.parentNodes = [];
    this.sizeHeap = 0;
  }

  push(data, priority) {
    const node = new Node(data, priority);
    this.insertNode(node);
    this.shiftNodeUp(node);
  }

  pop() {}

  detachRoot() {}

  restoreRootFromLastInsertedNode(detached) {}

  size() {
    return this.sizeHeap;
  }

  isEmpty() {
    return this.root === null;
  }

  clear() {
    this.root = null;
    this.parentNodes = [];
    this.sizeHeap = 0;
  }

  insertNode(node) {}

  shiftNodeUp(node) {}

  shiftNodeDown(node) {}
}

module.exports = MaxHeap;
