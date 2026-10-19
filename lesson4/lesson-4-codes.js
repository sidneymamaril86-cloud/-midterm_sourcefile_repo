'use strict';

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "No elements in Stack";
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  toString() {
    return this.items.join(', ');
  }
}

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return "No elements in Queue";
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  toString() {
    return this.items.join(', ');
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(request, priority) {
    const queueElement = { request, priority };
    let added = false;

    for (let i = 0; i < this.items.length; i++) {
      if (queueElement.priority < this.items[i].priority) {
        this.items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }

    if (!added) {
      this.items.push(queueElement);
    }
  }

  dequeue() {
    if (this.items.length === 0) {
      return "Underflow";
    }
    return this.items.shift();
  }

  size() {
    return this.items.length;
  }

  print() {
    this.items.forEach(item => {
      console.log(`${item.request}, Priority ${item.priority}`);
    });
  }
}

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  append(element) {
    const node = new Node(element);
    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  insert(position, element) {
    if (position >= 0 && position <= this.length) {
      const node = new Node(element);
      let current = this.head;
      let previous;
      let index = 0;

      if (position === 0) {
        node.next = current;
        this.head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      this.length++;
      return true;
    }
    return false;
  }

  removeAt(position) {
    if (position > -1 && position < this.length) {
      let current = this.head;
      let previous;
      let index = 0;

      if (position === 0) {
        this.head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.length--;
      return current.element;
    }
    return null;
  }

  indexOf(element) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.element === element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  toString() {
    let current = this.head;
    let string = '';

    while (current) {
      string += current.element + (current.next ? '\n' : '');
      current = current.next;
    }
    return string;
  }
}

console.log('CAMPUS IT SUPPORT REQUEST MANAGER');

console.log('\nPART A: UNDO HISTORY');
const actionHistory = new Stack();
actionHistory.push('Opened Ticket #101');
actionHistory.push('Assigned Ticket #101');
actionHistory.push('Closed Ticket #101');
console.log('Top Action:', actionHistory.peek());
console.log('Undo Action:', actionHistory.pop());
console.log('Remaining Actions:', actionHistory.toString());
console.log('Stack Size:', actionHistory.size());

console.log('\nPART B: WAITING REQUESTS');
const waitingRequests = new Queue();
waitingRequests.enqueue('Ticket #201 - Password Reset');
waitingRequests.enqueue('Ticket #202 - No Internet');
waitingRequests.enqueue('Ticket #203 - Printer Problem');
waitingRequests.enqueue('Ticket #204 - Software Installation');
console.log('Next Request:', waitingRequests.front());
console.log('Processed:', waitingRequests.dequeue());
console.log('Processed:', waitingRequests.dequeue());
console.log('Remaining Requests:', waitingRequests.toString());
console.log('Queue Size:', waitingRequests.size());

console.log('\nPART C: URGENT REQUESTS');
const urgentRequests = new PriorityQueue();
urgentRequests.enqueue('Ticket #301 - Install Browser', 3);
urgentRequests.enqueue('Ticket #302 - Server Offline', 1);
urgentRequests.enqueue('Ticket #303 - Faculty PC Failure', 2);
urgentRequests.enqueue('Ticket #304 - Internet Laboratory Down', 1);
console.log('Initial Priority Order:');
urgentRequests.print();
const processedUrgent = urgentRequests.dequeue();
console.log('\nProcessed Priority Request:', `${processedUrgent.request}, Priority ${processedUrgent.priority}`);
console.log('\nRemaining Priority Requests:');
urgentRequests.print();

console.log('\nPART D: COMPLETED REQUESTS');
const completedRequests = new LinkedList();
completedRequests.append('Ticket #401 - Account Activated');
completedRequests.append('Ticket #402 - Printer Connected');
completedRequests.append('Ticket #403 - Antivirus Updated');
completedRequests.insert(0, 'Ticket #400 - Computer Diagnosed');
completedRequests.insert(completedRequests.size(), 'Ticket #405 - Browser Updated');
console.log('Complete List:\n' + completedRequests.toString());
console.log('\nIndex of Ticket #402:', completedRequests.indexOf('Ticket #402 - Printer Connected'));
console.log('Removed at Position 1:', completedRequests.removeAt(1));
console.log('Removed by Value:', completedRequests.remove('Ticket #403 - Antivirus Updated'));
console.log('\nFinal List:\n' + completedRequests.toString());
console.log('Final Size:', completedRequests.size());