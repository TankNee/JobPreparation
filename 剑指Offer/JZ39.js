/**
 * @param {number[]} nums
 * @return {number}
 */
// 使用摩尔投票法，因为有一个数字的个数必定大于其他的数字的个数和，所以遇到该数字就增加，其他数字就减少
var majorityElement = function (nums) {
	var count = 0;
	var card = 0;
	nums.forEach((n) => {
		if (!count) card = n;
		count += card === n ? 1 : -1;
	});
	return card;
};

// var majorityElement = function (nums) {
// 	nums.sort((a, b) => a - b);
// 	return nums[Math.floor(nums.length / 2)];
// };
console.log(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2]));
