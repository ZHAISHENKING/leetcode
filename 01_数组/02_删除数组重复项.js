/*
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array
*/

var removeDuplicates = function(nums) {
    var count = 0;
    var n = nums.length;
    for(let i = 1;i<n;i++){
        if(nums[i] != nums[i-1]){
            nums[i-count] = nums[i]
        }else{
            count++;
        }
    }
    nums.splice(n-count)
};
let a = [1,1,2,2,3,3,4]
removeDuplicates(a)
console.log(a)
// 作者：Alexer-660
// 链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/solution/26-shan-chu-pai-xu-shu-zu-zhong-de-zhong-fu-xian-6/
