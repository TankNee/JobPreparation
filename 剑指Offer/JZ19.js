/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
	var reg = new RegExp(p);
	var arr = s.match(reg);
	return arr ? arr.includes(s) : false;
};
// 应该用DP重新写一遍
console.log(isMatch("ab", ".*c"));
