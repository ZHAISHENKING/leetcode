/*
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum

*/
let twoSum = function(nums, target) {
var map = new Map();
for(let i=0; i< nums.length;i++){
    let key = target - nums[i]
    if(map.has(key)) return [map.get(key), i]
    map.set(nums[i],i)
}
};
console.log(twoSum([2,7,11,15],9))