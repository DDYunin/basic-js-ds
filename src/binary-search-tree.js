const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  treeRoot = null

  root() {
    return this.treeRoot;
  }

  add(data) {
    this.treeRoot = addNode(this.treeRoot, data);

    function addNode(root, data) {
      if (root === null) {
        return new Node(data);
      }

      // Нам не нужны одинаковые значения в дереве
      if (root.data === data) {
        return root
      }

      if (data < root.data) {
        root.left = addNode(root.left, data)
      } else {
        root.right = addNode(root.right, data);
      }
      return root;
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(data) {
    return findNode(this.treeRoot, data)

    function findNode(node, data) {
      if (node === null) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return findNode(node.left, data);
      } else {
        return findNode(node.right, data);
      }
    }
  }

  find(data) {
    return findNode(this.treeRoot, data)

    function findNode(node, data) {
      if (node === null) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return findNode(node.left, data);
      } else {
        return findNode(node.right, data);
      }
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    this.treeRoot = deleteNode(this.treeRoot, data);

    function deleteNode(node, data) {
      if (node === null) {
        return null;
      }

      if (data > node.data) {
        node.right = deleteNode(node.right, data);
        return node
      } else if (data < node.data) {
        node.left = deleteNode(node.left, data);
        return node
      } else {
        // Если данная вершина - лист
        if (node.left === null && node.right === null) {
          return null;
        }

        if (node.left === null) {
          node = node.right;
          return node;
        }

        if (node.right === null) {
          node = node.left;
          return node;
        }

        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data;

        node.left = deleteNode(node.left, maxFromLeft.data);
        return node;
      }
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (this.treeRoot === null) {
      return null;
    }
    return findMinNode(this.treeRoot)

    function findMinNode(node) {
      if (node.left !== null) {
        return findMinNode(node.left);
      } else {
        return node.data;
      }
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    if (this.treeRoot === null) {
      return null;
    }
    return findMaxNode(this.treeRoot)

    function findMaxNode(node) {
      if (node.right !== null) {
        return findMaxNode(node.right);
      } else {
        return node.data;
      }
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};