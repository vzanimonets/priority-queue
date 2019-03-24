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

  insertNode(node) {
    if (this.root === null) {
      this.root = node;
      this.parentNodes.push(node);
      this.sizeHeap++;
      return;
    }
    this.parentNodes[0].appendChild(node);
    this.parentNodes.push(node);
    if (this.parentNodes[0].left && this.parentNodes[0].right) {
      this.parentNodes.shift();
    }
    this.sizeHeap++;
  }

  shiftNodeUp(node) {}

  shiftNodeDown(node) {}
}

module.exports = MaxHeap;
