/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    // toString可以把数字转为指定的进制，radix为进制数，2，8，16
	var r = n.toString(2).match(/1/g);
	return r ? r.length : 0;
};
