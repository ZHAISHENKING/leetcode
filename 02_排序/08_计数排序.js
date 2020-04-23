/**
 * 计数排序
 * 思想：同桶排序类似，但会有n+1个桶
 * 原数组A
 * 计数数组C,记录的是<=每个元素出现次数的和
 * 桶R,自后向前遍历A,每遇到一个元素，从C中拿到元素对应的下标 放入R中
 * 最终排序结束
 */

function countSort(arr) {
  let min = arr[0],
    max = arr[0];
  const {length} = arr

  for (let i = 0; i < length - 1; i++) {
    if (arr[i] < min) min = arr[i]
    if (arr[i] > max) max = arr[i]
  }

  let C = new Array(max + 1)

  // for (let i = 0; i <= max; i++) {
  //   C[i] = 0
  //   for (let j = 0; j < length; j++) {
  //     if (arr[j] <= i) {
  //       C[i] += 1
  //     }
  //   }
  // }
  arr.forEach(i => {
    if (!C[i]) C[i] = 0
    C[i]++
  })

  // let R = new Array(length)
  // for (let i = length - 1; i >= 0; i--) {
  //   let item = arr[i]
  //   R[C[item] - 1] = item
  //   C[item] -= 1
  // }

  // 出于性能考虑，把新数组赋值改为替换
  let startIndex = 0;
  C.forEach((c,i)=>{
    while(c>0){
      arr[startIndex] = i
      startIndex++
      c--
    }
  })

  return arr
}

console.log(countSort([2, 3, 3, 4, 1, 5, 5, 4, 7, 2, 6, 1]))