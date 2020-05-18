/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
	if (nums.length < 2) return 0;
	if (nums.length === 2) return nums[0] < nums[1] ? 0 : 1;
	var temp = [];
	return dividePairs(nums, 0, nums.length - 1, temp);
};
/**
 *  分划算法
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @param {number[]} newArr
 */
var dividePairs = function (nums, left, right, newArr) {
	if (left === right) return 0;
	var mid = Math.floor(left + (right - left) / 2);
	var leftPairs = dividePairs(nums, left, mid, newArr);
	var rightPairs = dividePairs(nums, mid + 1, right, newArr);
	if (nums[mid] < nums[mid + 1]) return leftPairs + rightPairs;
	var crossPairs = mergePairs(nums, left, right, newArr);

	return leftPairs + rightPairs + crossPairs;
};
/**
 *  合并算法
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @param {number[]} newArr
 */
var mergePairs = function (nums, left, right, newArr) {
	for (var i = left; i <= right; i++) {
		newArr[i] = nums[i];
	}
	var count = 0;
	var mid = Math.floor(left + (right - left) / 2);
	// i是左半边的指针，j是右半边的指针，k是newArr的指针
	for (var i = left, j = mid + 1, k = left; k <= right; k++) {
		if (i === mid + 1) {
			nums[k] = newArr[j++];
		} else if (j === right + 1) {
			nums[k] = newArr[i++];
		} else if (newArr[i] <= newArr[j]) {
			// 这里的条件必须是<=否则当两者相等时，逆序对的数量也会增加，这是错误的！
			nums[k] = newArr[i++];
		} else {
			nums[k] = newArr[j++];
			count += mid - i + 1;
		}
	}
	return count;
};
console.log(reversePairs([-5 ,- 5]));
