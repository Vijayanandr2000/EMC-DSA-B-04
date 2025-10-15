class Stack {
  constructor(size = 5) {
    this.stack = [];
    this.size = size;
  }

  push(value) {
    if (this.stack.length < this.size) {
      this.stack.push(value);
      return;
    }
    throw new Error("stack overflow");
  }

  pop() {
    if (this.stack.length > 0) {
      this.stack.pop();
      return;
    }
    throw new Error("stack underflow");
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  getSize() {
    return this.stack.length;
  }
}

let ns = new Stack();

ns.push(5);
ns.push(4);
ns.push(3);
ns.push(2);
ns.push(1);

console.log(ns.stack);
console.log(ns.peek());
console.log(ns.getSize());
