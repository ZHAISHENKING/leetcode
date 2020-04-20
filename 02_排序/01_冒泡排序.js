function sort(nums){
	let l = nums.length;
	for (var i = 0; i < l; i++) {
		for(let j=1; j<l-i; j++){
			if(nums[j]<nums[j-1]){
				[nums[j],nums[j-1]] = [nums[j-1], nums[j]]
			}
		}
	}
	return nums
}

console.log(sort([1,2,3,6,5]))