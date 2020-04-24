/**
 * Array.sort 主要采用 TimSort 算法
 * 思路：
 1 元素个数 < 32, 采用二分查找插入排序(Binary Sort)
 2 元素个数 >= 32, 采用归并排序，归并的核心是分区(Run)
 3 找连续升或降的序列作为分区，分区最终被调整为升序后压入栈
 4 如果分区长度太小，通过二分插入排序扩充分区长度到分区最小阙值
 5 每次压入栈，都要检查栈内已存在的分区是否满足合并条件，满足则进行合并
 6 最终栈内的分区被全部合并，得到一个排序好的数组
 */

let a = []
a.sort()
function insertSort(arr) {
  let n = arr.length
  if (n < 2) return n

  for (let i = 1; i < n; i++) {
    let item = arr[i]
    let j = i - 1
    for (; j >= 0; j--) {
      if (item <= arr[j]) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    arr[j + 1] = item
  }
  return arr
}

function mergeSort(arr) {
  let n = arr.length
  if (n < 2) return arr

  let middle = Math.floor(n / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  while (left.length) result.push(left.shift())
  while (right.length) result.push(right.shift())
  return result
}

function quickSort(arr, left, right) {
  const {length} = arr
  if (left < right) {
    let index = partition(arr, right, left, right)
    quickSort(arr, left, index - 1 > left ? index - 1 : left)
    quickSort(arr, index + 1 > right ? right : index + 1, right)
  }
}

function partition(arr, pivot, left, right){
  let val = arr[pivot]
  let startIndex = left
  for(let i=left; i<right; i++){
    if(arr[i] < val){
      swap(arr, i, startIndex)
      startIndex++
    }
  }
  swap(arr, startIndex, pivot)
  return startIndex
}

function swap(arr, a, b){
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}


// console.log(mergeSort([1, 4, 3, 7, 6]))