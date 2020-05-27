/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
	var zeroCount = 0;
	nums = nums
		.filter((n) => {
			if (n === 0) zeroCount++;
			return n !== 0;
		})
		.map((n) => {
			return n;
		});
	nums.sort((a, b) => {
		return a - b;
	});
	var interval = 0;
	for (var i = 0; i < nums.length - 1; i++) {
		for (var j = i + 1; j < nums.length; j++) {
			if (nums[i] === nums[j]) return false;
		}
		if (nums[i] - nums[i + 1] === -1) continue;
		interval += nums[i + 1] - nums[i];
	}
	if (interval > 0) {
		return interval - 1 <= zeroCount;
	}
	return true;
};
console.log(isStraight([10, 11, 0, 12, 6]));
