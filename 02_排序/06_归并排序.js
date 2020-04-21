/**
 * 快速排序：
 * 分治思想，将任务分解，最终合并
 * 一种是自顶向下递归，这里使用的是自下而上
 */

function mergeSort(arr) {
  if (arr.length < 2) {
    return;
  }

  let left, right;
  for(let step = 1; step < arr.length; step *=2){
    left = 0;
    right = step;
    while (right + step <= arr.length) {
      mergeArrays(arr, left, left + step, right, right + step);
      left = right + step;
      right = left + step;
    }
    if (right < arr.length) {
      mergeArrays(arr, left, left + step, right, arr.length);
    }
  }
}

/**
 * 数组合并：把左右两个数组合并并排序，因为两个数组都是已排好序的，所以直接用两个指针m,n从头开始比，小的放入arr,指针向后移一位
 * @param arr 原数组
 * @param startLeft 左边开始位置
 * @param stopLeft  左边停止位置
 * @param startRight  右边开始位置
 * @param stopRight   右边停止位置
 */
function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
  let rightArr = new Array(stopRight - startRight + 1);
  let leftArr = new Array(stopLeft - startLeft + 1);

  // 拷贝左边数组
  let k = startRight;
  for (let i = 0; i < (rightArr.length - 1); ++i) {
    rightArr[i] = arr[k];
    ++k;
  }

  // 拷贝右边数组
  k = startLeft;
  for (let i = 0; i < (leftArr.length - 1); ++i) {
    leftArr[i] = arr[k];
    ++k;
  }

  rightArr[rightArr.length - 1] = Infinity; // 哨兵值
  leftArr[leftArr.length-1] = Infinity; // 哨兵值
  let m = 0;
  let n = 0;
  // 默认两个数组都是已排好序的，比较两个数组，两个数组都从头开始，把最小的值放入合并数组，并且指针后移一位
  for (let k = startLeft; k < stopRight; ++k) {
    if (leftArr[m] <= rightArr[n]) {
      arr[k] = leftArr[m];
      m++;
    } else {
      arr[k] = rightArr[n];
      n++;
    }
  }
  console.log("left array - ", leftArr);
  console.log("right array - ", rightArr);
}

let nums = [6, 10, 1, 9, 4, 8, 2, 7, 3, 5];
console.log(nums);
console.log();
mergeSort(nums);
console.log();
console.log(nums);