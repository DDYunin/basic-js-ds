const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  head = null;

  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    return this.head
    // remove line with error and write your code here
  }

  enqueue(value) {
    if (this.head === null) {
      this.head = new ListNode(value);
      return
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    let addedNode = new ListNode(value);
    currentNode.next = addedNode;
  }

  dequeue() {
    if (this.head === null) {
      return
    }
    let currentNode = this.head;
    this.head = this.head.next;
    return currentNode.value;
  }
}

module.exports = {
  Queue
};
