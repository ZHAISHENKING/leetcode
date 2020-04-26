function binary_find(arr, target){
  let low = 0
  let high = arr.length - 1
  while(low <= high){
    const mid = Math.floor((low+high) / 2)
    if(target === arr[mid]){
      return mid
    }else if(target < arr[mid]){
      high = mid - 1
    }else{
      low = mid + 1
    }
  }
  return -1
}

console.log(binary_find([1,2,3,3,4,4,5,6], 4))