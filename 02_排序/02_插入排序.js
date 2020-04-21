/**
 * 插入排序：
 *
 * 内外两层循环对应两个区域——已排序、未排序，已排序区域初始只有 arr[0]
 * 外层循环每次取一个值item，和已排序区域自后向前进行比较，
 * 比item大的向后移动，比item小的跳出内层循环，移动结束。记录此时j的位置，把item插入后边
 *
 * @param arr
 * @returns {*}
 */
function sort(arr) {
  const l = arr.length
  for (let i = 1; i < l; ++i) {
    let item = arr[i]
    let j = i - 1
    for (; j >= 0; --j) {
      if (arr[j] > item) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    arr[j + 1] = item
  }
  return arr
}

console.log(sort([1, 2, 3, 6, 5]))