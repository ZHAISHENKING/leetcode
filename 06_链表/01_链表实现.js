/**
 * 链表 使用对象类实现
 * 特点：插入操作方便
 */
class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LList {
  constructor() {
    this.head = new Node("head");
  }

  // 查找节点
  find(item) {
    let curr = this.head
    while (curr.element !== item) {
      curr = curr.next
    }
    return curr
  }

  insert(newItem, item) {
    let node = new Node(newItem)
    let curr = this.find(item)
    node.next = curr.next
    curr.next = node
  }

  display() {
    let currNode = this.head;
    while (!(currNode.next == null)) {
      console.log(currNode.next.element)
      currNode = currNode.next;
    }
  }

  prev(item) {
    let currNode = this.head;
    while (!(currNode.next == null) && (currNode.next.element !== item)) {
      currNode = currNode.next;
    }
    return currNode
  }

  remove(item){
    let prevNode = this.prev(item)
    if(!(prevNode.next == null)){
      prevNode.next = prevNode.next.next
    }
  }
}

// 测试
let cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Alma", "Russellville");
cities.display()
cities.remove('Russellville')
cities.display()