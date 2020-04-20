/**
 * 栈：先进后出，所以返回的栈顶应该是最后一个元素
 */
class Stack {
  constructor() {
    this.dataStore = []   // 用数组实现
    this.len = 0;         // 记录长度
  }

  // 入栈/压栈
  push(element) {
    this.dataStore[this.len++] = element
  }

  // 出栈
  pop() {
    return this.dataStore[--this.len];
  }

  // 取栈顶
  peek() {
    return this.dataStore[this.len - 1];
  }

  length() {
    return this.len;
  }

  clear() {
    this.len = 0;
  }
}

// 测试
let s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length: " + s.length());               // 3
console.log(s.peek());                              // Bryan
let popped = s.pop();
console.log("The popped element is: " + popped);    // Bryan
console.log(s.peek());                              // Raymond
s.push("Cynthia");
console.log(s.peek());                              // Cynthia
s.clear();
console.log("length: " + s.length());               // 0
console.log(s.peek());                              // undefined
s.push("Clayton");
console.log(s.peek());                              // Clayton