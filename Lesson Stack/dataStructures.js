// class Queue {
//     constructor() {
//         this.elements = []
//     }

//     enqueue(data) {
//         this.elements.push(data)
//     }

//     dequeue() {
//         this.elements.shift()
//     }

//     peek() {
//         return this.elements[0]
//     }

//     isEmpty(){
//         return this.elements.length === 0
//     }
// }

export class Stack {
    constructor() {
      this.stack = [];
    }
    push(data) {
      this.stack.push(data);
    }
    pop() {
      this.stack.pop();
    }
    top() {
      return this.stack[this.stack.length - 1];
    }
    size() {
      return this.stack.length;
    }
    isEmpty() {
      return this.stack.length === 0;
    }
    unRegister() {
      this.stack = [];
    }
  }