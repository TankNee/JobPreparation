
// 未完成
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
    if (s.length === 1) return [s];
	var arr = Array.from(s);
	var _return = [];
	arr.sort((a, b) => a.localeCompare(b));
    for (var i = 0; i < arr.length - 1; i++) {
        mergeString(arr[i], permutation(arr.slice(i + 1).join(""))).forEach(e => _return.push(e));
	}
	return _return;
};
/**
 *
 * @param {string} s
 * @param {string[]} arr
 */
var mergeString = function (s, arr) {
	var _return = [];
	arr.forEach((e) => {
		_return.push(s.concat(e));
	});
	return _return;
};
console.log(permutation("acd"));
