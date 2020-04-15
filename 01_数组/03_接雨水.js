/*
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/trapping-rain-water
*/

var trap = function(height) {
    let sum = 0
    for(let index=1; index<height.length-1; index++){

        let leftMax = 0 //找左边最大高度
        for(let i=index-1; i>=0; i--){
            leftMax = height[i] >= leftMax ? height[i] : leftMax
        }

        let rightMax = 0 //找右边最大高度
        for(let i=index+1; i<height.length; i++){
            rightMax = height[i] >= rightMax ? height[i] : rightMax
        }
        
        let min = Math.min(leftMax, rightMax) //得到左右两边最大高度中较矮的那个高度
        if(min > height[index]){
            sum = sum + min - height[index] //接水量 = 左右两边最大高度中较矮的那个高度 - 当前项的高度
        }
        //console.log(leftMax, rightMax, sum)
    }
    return sum
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
// 作者：rana-8
// 链接：https://leetcode-cn.com/problems/trapping-rain-water/solution/42-jie-yu-shui-mu-tong-xiao-ying-jian-dan-yi-dong-/
