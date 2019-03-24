class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    this.parent = null;
    this.left = null;
    this.right = null;
  }

  appendChild(node) {
    if (this.left && this.right) {
      return;
    }
    if (this.left) {
      this.right = node;
      this.right.parent = this;
    } else {
      this.left = node;
      this.left.parent = this;
    }
  }

  removeChild(node) {
    if (node === this.left) {
      this.left = null;
      node.parent = null;
    } else if (node === this.right) {
      this.right = null;
      node.parent = null;
    } else {
      throw "Error, passed node is not a child of this node";
    }
  }

  remove() {
    if (this.parent != null) {
      this.parent.removeChild(this);
    }
  }

  swapWithParent() {
    if ((this.parent = !null)) {
      
    }
  }
}

module.exports = Node;
