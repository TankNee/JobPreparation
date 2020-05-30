/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
	var temp = 0;
	var i = 0,
		j = nums.length - 1;
	while (i < j) {
		while (nums[i] % 2 !== 0 && i < j) {
			i++;
		}
		while (nums[j] % 2 === 0 && i < j) {
			j--;
		}
		if (i < j) {
			temp = nums[i];
			nums[i] = nums[j];
			nums[j] = temp;
		}
	}
	return nums;
};
console.log(exchange([1, 2, 3, 7, 9, 13, 4]));
