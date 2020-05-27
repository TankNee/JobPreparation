/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
	if (n < 0) {
		n = -n;
		x = 1 / x;
	}
	var t = n.toString(2);
	var a = Array.from(t).map((s) => parseInt(s));
	var r = new Array();
	a.forEach((num, i) => {
		if (num) r.push(a.length - 1 - i);
	});
	var _return = 1;
	var twoRadix = new Array();
	if (r.indexOf(0) !== -1) _return *= x;
	for (let i = 1; i < a.length; i++) {
		x = x * x;
		if (r.indexOf(i) !== -1) _return *= x;
	}
	return _return;
};
console.log(myPow(0.00001, 2147483647));
