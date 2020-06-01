/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
	if (n < 4) return n - 1;
	var integerPartation = Math.floor(n / 3);
	switch (n - integerPartation * 3) {
		case 0:
			return Math.pow(3, integerPartation);
		case 1:
			return Math.pow(3, integerPartation - 1) * 4;
		case 2:
			return Math.pow(3, integerPartation) * 2;
		default:
			break;
	}
};
