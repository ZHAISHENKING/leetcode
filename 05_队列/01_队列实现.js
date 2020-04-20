/**
 * 队列 特点：先进先出
 */
class Queue {
  constructor() {
    this.dataStore = []
  }

  // 入队
  enqueue(element) {
    this.dataStore.push(element);
  }

  // 出队
  dequeue() {
    return this.dataStore.shift();
  }

  // 取队首
  front() {
    return this.dataStore[0];
  }

  // 队尾
  back() {
    return this.dataStore[this.dataStore.length - 1];
  }

  // 列举队列
  toString() {
    let retStr = "";
    for (let i = 0; i < this.dataStore.length; ++i) {
      retStr += this.dataStore[i] + "\n";
    }
    return retStr;
  }

  // 判断空
  empty() {
    if (this.dataStore.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}

// 测试
let q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());