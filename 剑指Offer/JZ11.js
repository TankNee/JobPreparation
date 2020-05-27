/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
	if (numbers.length === 1) return numbers[0];
	var i = Math.floor(numbers.length / 2);
	while (i < numbers.length && i > 0) {
		if (numbers[i] >= numbers[0]) {
			if (i === numbers.length - 1 && numbers[0] <= numbers[1]) return numbers[0];
			if (i === numbers.length - 1) i = Math.floor(i / 2);
			else i = Math.floor((i + numbers.length) / 2);

			continue;
		} else if (numbers[i - 1] >= numbers[0]) {
			return numbers[i];
		} else {
			i = Math.floor(i / 2);
		}
	}
	return numbers[i];
};
console.log(minArray([10,1,10,10,10]));
