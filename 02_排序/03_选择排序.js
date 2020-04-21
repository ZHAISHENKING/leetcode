/**
 * 选择排序: 遍历，每次找最小的放在前面
 */
function sort(arr) {
  const l = arr.length;
  let min;
  let slag = false;
  for (let i = 0; i < l - 2; i++) {
    min = i

    for (let j = i + 1; j < l - 1; j++) {
      if (arr[j] < arr[min]) {
        min = j
        slag = true
      }
    }

    if(!slag) break;

    [arr[i], arr[min]] = [arr[min], arr[i]]
    console.log(`第${i + 1}次排序:[${arr.toString()}]`)
  }
  return arr
}

console.log(sort([5, 4, 2, 3, 6, 1, 7]))
console.log(sort([1, 2, 3, 4, 5, 6, 7]))
// 第1次排序:[1,4,2,3,6,5,7]
// 第2次排序:[1,2,4,3,6,5,7]
// 第3次排序:[1,2,3,4,6,5,7]
// 第4次排序:[1,2,3,4,6,5,7]
// 第5次排序:[1,2,3,4,5,6,7]