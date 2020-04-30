class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  /**
   * 插入步骤：
   * 1.创建一个Node对象，将数据传入对象
   * 2.检查BST是否有根结点 无 -> 新树
   * 3. 遍历BST，找到插入位置
   *    3.1 进入循环，设当前节点为根节点
   *    3.2 若待插入节点小于当前节点且当前节点的左子节点不存在，直接插入
   *    3.3 若带插入节点大于当前节点且当前节点的右节点不存在，直接插入
   * @param num
   */
  insert(num) {
    let node = new Node(num);
    if (this.root == null) {
      this.root = node;
    } else {
      let curr = this.root; // 当前节点
      let parent;           // 父节点
      while (true) {
        parent = curr
        if (num < curr.value) {
          curr = curr.left;
          if (curr == null) {
            parent.left = node;
            break;
          }
        } else {
          curr = curr.right;
          if (curr == null) {
            parent.right = node;
            break;
          }
        }
      }
    }
  }

  /**
   * 中序遍历
   * @param node
   */
  inOrder(node){
    if(!(node == null)){
      this.inOrder(node.left)
      console.log(node.value + " ")
      this.inOrder(node.right)
    }
  }

  getMin(){
    let curr = this.root;
    while(!(curr.left == null)){
      curr = curr.left
    }
    return curr.value
  }

  getMax(){
    let curr = this.root;
    while(!(curr.right == null)){
      curr = curr.right
    }
    return curr.value
  }

  find(num){
    let curr = this.root;
    while(curr != null){
      if(curr.value == num){
        return curr
      }else if(num < curr.value){
        curr = curr.left
      }else{
        curr = curr.right
      }
    }
  }

  getSmallest(node){
    let curr = node;
    while(!(curr.left == null)){
      curr = curr.left
    }
    return curr.value
  }

  /**
   * 删除步骤：
   * 1. 判断当前节点是否包含待删除数据， 是->删除
   * 2. 比较当前节点数据和待删除数据，小于num -> 到左边继续比较， 大于 -> 移到右边继续比较
   *    2.1 待删除节点无子节点， 父节点指向它的链接指向null
   *    2.2 待删除节点只包含一个子节点, 那么原本指向它的父节点就直接指向它的子节点
   *    2.3 待删除节点有两个子节点，找到右子树上的最小值，用最小值创建一个临时节点，复制到待删除节点，然后删除临时节点。
   * @param num
   */
  remove(num){
    this.root = this.removeNode(this.root, num)
  }

  removeNode(node, data){
    if(node == null) return null
    if(data == node.value){
      if(node.left == null && node.right == null){
        return null;
      }
      if(node.left == null){
        return node.right;
      }
      if(node.right == null){
        return node.left;
      }
      let tempNode = this.getSmallest(node.right)
      node.value = tempNode.value
      node.right = this.removeNode(node.right, tempNode.value)
      return node;

    }else if(data < node.value){
      node.left = this.removeNode(node.left, data)
      return node
    }else {
      node.right = this.removeNode(node.right, data)
      return node
    }
  }
}


let nums = new BST()
nums.insert(23)
nums.insert(45)
nums.insert(16)
nums.insert(3)
nums.insert(19)
nums.insert(22)
// console.log("InOrder result: ")
// nums.inOrder(nums.root)

nums.remove(16)
nums.remove(23)
nums.inOrder(nums.root)