/**
 * 基本散列表
 */
class HashTable {
  constructor() {
    this.table = [];
  }

  //散列函数
  loseHashCode(key) {
    let hash = 0;
    //从ASCII表中查到的ASCII值加到hash中
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    //为了得到比较小的数值，我们会用hash和任意数除余
    return hash % 37;
  }

  //向散列表增加一个新的项
  put(key, value) {
    let position = this.loseHashCode(key);
    console.log(position + '-' + key);
    this.table[position] = value;
  }

  //根据键从散列表删除值
  remove(key) {
    this.table[this.loseHashCode(key)] = undefined;
  }

  //返回根据键值检索到的特定的值
  get(key) {
    console.log(this.table[this.loseHashCode(key)])
  }

  print() {
    for (let i = 0; i < this.table.length; ++i) {
      if (this.table[i] !== undefined) {
        console.log(i + ':' + this.table[i]);
      }
    }
  }
}

let hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
hash.remove('Gandalf')
hash.get('Gandalf')
hash.get('Tyrion')
hash.print()