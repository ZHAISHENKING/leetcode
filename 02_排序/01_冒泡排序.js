function sort(nums) {
  let l = nums.length;
  for (let i = 0; i < l; i++) {
    for (let j = 1; j < l - i; j++) {
      if (nums[j] < nums[j - 1]) {
        [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]]
      }
    }
    console.log(`第${i + 1}次冒泡:[${nums.toString()}]`)
  }
  return nums
}

console.log(sort([5, 4, 2, 3, 6, 1, 7]))
// 第1次冒泡:[4,2,3,5,1,6,7]
// 第2次冒泡:[2,3,4,1,5,6,7]
// 第3次冒泡:[2,3,1,4,5,6,7]
// 第4次冒泡:[2,1,3,4,5,6,7]
// 第5次冒泡:[1,2,3,4,5,6,7]
// 第6次冒泡:[1,2,3,4,5,6,7]
// 第7次冒泡:[1,2,3,4,5,6,7]
// 可以看到，第6次冒泡时已排序结束，但还是会执行一次循环,当数据集非常大时，会造成性能浪费
// 优化策略：使用中间变量记录是否有交换，如果没有，则终止排序

function sort2(nums) {
  const l = nums.length;

  for (let i = 0; i < l; i++) {
    let slag = false;
    for (let j = 1; j < l - i; j++) {
      if (nums[j] < nums[j - 1]) {
        [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]]
        slag = true
      }
    }
    console.log(`第${i + 1}次冒泡:[${nums.toString()}]`)
    if (!slag) {
      break
    }
  }
  return nums
}

console.log('-------------sort2--------------')
console.log(sort2([5, 4, 2, 3, 6, 1, 7]))
console.log(sort2([1, 2, 3, 4, 5, 6, 7]))