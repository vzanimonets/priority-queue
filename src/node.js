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
    if (this.parent != null) {
      const leftParent = this.parent.left;
      const rightParent = this.parent.right;
      const parentParent = this.parent.parent;
      const nodeChild = this.parent;

      nodeChild.left = this.left;
      if (nodeChild.left) {
        nodeChild.left.parent = nodeChild;
      }
      nodeChild.right = this.right;
      if (nodeChild.right) {
        nodeChild.right.parent = nodeChild;
      }
      nodeChild.parent = this;
      if (leftParent === this) {
        this.left = nodeChild;
      } else {
        this.left = leftParent;
      }

      if (this.left) this.left.parent = this;
      if (rightParent === this) {
        this.right = nodeChild;
      } else {
        this.right = rightParent;
      }
      if (this.right) this.right.parent = this;
      this.parent = parentParent;
      if (this.parent && this.parent.left === nodeChild) {
        this.parent.left = this;
      }
      if (this.parent && this.parent.right === nodeChild) {
        this.parent.right = this;
      }
    }
  }
}
module.exports = Node;
